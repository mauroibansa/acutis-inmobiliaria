"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm({ compact = false, defaultMessage = "" }: { compact?: boolean; defaultMessage?: string }) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitState("sending");

    try {
      const response = await fetch("/api/leads", { method: "POST", body: new FormData(form) });
      if (!response.ok) throw new Error("No se pudo enviar la solicitud");
      trackEvent("lead_submit", { lead_type: "contacto" });
      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <form className={compact ? "form form-compact" : "form"} onSubmit={handleSubmit}>
      <input name="leadType" type="hidden" value="contacto" />
      <label className="landing-honeypot" aria-hidden="true">No rellenar<input name="empresa_web" tabIndex={-1} autoComplete="off" /></label>
      <label>Nombre<input name="nombre" autoComplete="name" required /></label>
      <label>Teléfono<input name="telefono" type="tel" autoComplete="tel" required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      <label className="full">¿En qué podemos ayudarte?<textarea name="mensaje" rows={compact ? 3 : 5} defaultValue={defaultMessage} maxLength={250} required /></label>
      <label className="check full"><input name="privacidad" type="checkbox" value="aceptada" required /> <span>He leído la <a href="/privacidad">política de privacidad</a>. Responsable: Alejandro Ibanco Saborido. Finalidad: atender mi solicitud. Legitimación: medidas precontractuales solicitadas. Sin cesiones salvo obligación legal. Derechos: <a href="mailto:privacidad@acutisinmobiliaria.com">privacidad@acutisinmobiliaria.com</a>.</span></label>
      <button className="button button-dark" type="submit" disabled={submitState === "sending"}>{submitState === "sending" ? "Enviando…" : "Enviar solicitud"}</button>
      <p className={`form-status full is-${submitState}`} aria-live="polite">
        {submitState === "success" && "Hemos recibido tu consulta. Alejandro revisará la información y se pondrá en contacto contigo en horario comercial."}
        {submitState === "error" && "No hemos podido enviar la solicitud. Inténtalo de nuevo o contacta con Alejandro por teléfono o WhatsApp."}
      </p>
    </form>
  );
}
