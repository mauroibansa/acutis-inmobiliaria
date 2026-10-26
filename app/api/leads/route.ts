type LeadType = "venta" | "compra" | "inversion";

const leadConfig: Record<LeadType, { subject: string; fields: Array<[string, string]> }> = {
  venta: {
    subject: "Nueva solicitud de estudio de mercado",
    fields: [["nombre", "Nombre"], ["telefono", "Teléfono"], ["ubicacion", "Ubicación del inmueble"], ["tipo", "Tipo de inmueble"]],
  },
  compra: {
    subject: "Nueva solicitud de compra",
    fields: [["nombre", "Nombre"], ["contacto", "Teléfono o email"], ["zona", "Zona"], ["tipo", "Tipo de inmueble"], ["presupuesto", "Presupuesto"], ["financiacion", "Financiación"]],
  },
  inversion: {
    subject: "Nueva solicitud de acceso para inversores",
    fields: [["nombre", "Nombre"], ["telefono", "Teléfono"], ["zona", "Zona de interés"], ["presupuesto", "Presupuesto"], ["activo", "Tipo de activo"], ["rentabilidad", "Objetivo de rentabilidad"]],
  },
};

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

function readValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const requestOrigin = new URL(request.url).origin;
  const origin = request.headers.get("origin");
  if (origin && origin !== requestOrigin) return Response.json({ ok: false }, { status: 403 });

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  if (readValue(formData, "empresa_web")) return Response.json({ ok: true });

  const leadType = readValue(formData, "leadType") as LeadType;
  const config = leadConfig[leadType];
  if (!config || readValue(formData, "privacidad") !== "aceptada") return Response.json({ ok: false }, { status: 400 });

  const values = config.fields.map(([key, label]) => ({ key, label, value: readValue(formData, key) }));
  if (values.some(({ value }) => !value || value.length > 250)) return Response.json({ ok: false }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.FORM_FROM_EMAIL;
  const to = process.env.FORM_TO_EMAIL;
  if (!apiKey || !from || !to) return Response.json({ ok: false }, { status: 503 });

  const referer = request.headers.get("referer");
  let sourceUrl = "";
  if (referer) {
    try {
      const parsedReferer = new URL(referer);
      if (parsedReferer.origin === requestOrigin) sourceUrl = parsedReferer.href.slice(0, 500);
    } catch {
      sourceUrl = "";
    }
  }
  const submittedAt = new Intl.DateTimeFormat("es-ES", { dateStyle: "full", timeStyle: "short", timeZone: "Europe/Madrid" }).format(new Date());
  const rows = values.map(({ label, value }) => `<tr><td style="padding:10px 14px;border-bottom:1px solid #d9d5ca;color:#66717d;font-size:12px;text-transform:uppercase;letter-spacing:.08em">${escapeHtml(label)}</td><td style="padding:10px 14px;border-bottom:1px solid #d9d5ca;color:#071a2f;font-size:15px">${escapeHtml(value)}</td></tr>`).join("");
  const text = [`${config.subject} — ACUTIS`, "", ...values.map(({ label, value }) => `${label}: ${value}`), "", `Recibida: ${submittedAt}`, sourceUrl ? `Página: ${sourceUrl}` : ""].filter(Boolean).join("\n");
  const possibleEmail = values.find(({ key }) => key === "contacto")?.value ?? "";
  const contactName = (values.find(({ key }) => key === "nombre")?.value ?? "Web ACUTIS").replace(/[\r\n]+/g, " ").slice(0, 120);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `${config.subject} — ${contactName}`,
      html: `<div style="margin:0;background:#f4f1e9;padding:36px;font-family:Arial,sans-serif"><div style="max-width:680px;margin:auto;background:#fff;padding:36px"><div style="color:#071a2f;font-family:Georgia,serif;font-size:28px;letter-spacing:.12em">ACUTIS</div><p style="margin:12px 0 28px;color:#66717d">${escapeHtml(config.subject)}</p><table style="width:100%;border-collapse:collapse">${rows}</table><p style="margin:28px 0 0;color:#66717d;font-size:12px">Recibida el ${escapeHtml(submittedAt)}${sourceUrl ? ` · ${escapeHtml(sourceUrl)}` : ""}</p></div></div>`,
      text,
      ...(isEmail(possibleEmail) ? { reply_to: possibleEmail } : {}),
    }),
  });

  if (!response.ok) return Response.json({ ok: false }, { status: 502 });
  return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
