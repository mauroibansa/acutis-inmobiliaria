"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";

type LeadType = "venta" | "compra" | "inversion";
type SubmitState = "idle" | "sending" | "success" | "error";

const successMessages: Record<LeadType, string> = {
  venta: "Hemos recibido la información. Alejandro revisará los datos y se pondrá en contacto contigo en horario comercial.",
  compra: "Hemos recibido tu solicitud. Revisaremos lo que buscas y te contactaremos en horario comercial.",
  inversion: "Hemos recibido tu solicitud. Revisaremos tu perfil y te contactaremos en horario comercial.",
};

function PrivacyConsent() {
  return <label className="landing-consent landing-form-full"><input name="privacidad" type="checkbox" value="aceptada" required /><span>He leído la <a href="/privacidad">política de privacidad</a>. Responsable: Alejandro Ibanco Saborido. Finalidad: atender mi solicitud. Legitimación: medidas precontractuales solicitadas. Sin cesiones salvo obligación legal. Derechos: <a href="mailto:privacidad@acutisinmobiliaria.com">privacidad@acutisinmobiliaria.com</a>.</span></label>;
}

function LeadForm({ id, className, leadType, submitLabel, note, children }: { id: string; className: string; leadType: LeadType; submitLabel: string; note?: string; children: ReactNode }) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitState("sending");

    try {
      const response = await fetch("/api/leads", { method: "POST", body: new FormData(form) });
      if (!response.ok) throw new Error("No se pudo enviar la solicitud");
      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <form id={id} className={`landing-form ${className}`} onSubmit={handleSubmit}>
      <input name="leadType" type="hidden" value={leadType} />
      <label className="landing-honeypot" aria-hidden="true">No rellenar<input name="empresa_web" tabIndex={-1} autoComplete="off" /></label>
      {children}
      <PrivacyConsent />
      <button className="landing-submit landing-form-full" type="submit" disabled={submitState === "sending"}>
        {submitState === "sending" ? "Enviando…" : submitLabel}
      </button>
      {note && submitState !== "success" && <p className="landing-form-note landing-form-full">{note}</p>}
      <p className={`landing-form-status landing-form-full is-${submitState}`} aria-live="polite">
        {submitState === "success" && successMessages[leadType]}
        {submitState === "error" && "No hemos podido enviar la solicitud. Inténtalo de nuevo o contacta con Alejandro por teléfono o WhatsApp."}
      </p>
    </form>
  );
}

export function MarketStudyForm() {
  return (
    <LeadForm id="formulario-venta" className="market-study-form" leadType="venta" submitLabel="Solicitar mi estudio de mercado" note="Te contactaremos para conocer el inmueble. Sin compromiso.">
      <label className="landing-form-span-3">Ubicación del inmueble<select name="ubicacion" defaultValue="" required><option value="" disabled>Selecciona una zona</option><option>Sotogrande</option><option>San Roque</option><option>Algeciras</option><option>La Línea de la Concepción</option><option>Tarifa</option><option>Los Barrios</option><option>Otra zona</option></select></label>
      <label className="landing-form-span-3">Tipo de inmueble<select name="tipo" defaultValue="" required><option value="" disabled>Selecciona un tipo</option><option>Vivienda</option><option>Chalet o adosado</option><option>Terreno</option><option>Local u oficina</option><option>Edificio o activo de inversión</option><option>Otro</option></select></label>
      <label className="landing-form-span-3">Nombre<input name="nombre" autoComplete="name" placeholder="Tu nombre" maxLength={120} required /></label>
      <label className="landing-form-span-3">Teléfono<input name="telefono" type="tel" autoComplete="tel" placeholder="Tu teléfono" maxLength={40} required /></label>
    </LeadForm>
  );
}

export function BuyerBriefForm() {
  return (
    <LeadForm id="formulario-compra" className="buyer-form" leadType="compra" submitLabel="Cuéntanos qué buscas">
      <label>Zona<select name="zona" defaultValue="" required><option value="" disabled>Selecciona una zona</option><option>Sotogrande</option><option>San Roque</option><option>Algeciras</option><option>La Línea de la Concepción</option><option>Tarifa</option><option>Los Barrios</option><option>Varias zonas</option></select></label>
      <label>Tipo de inmueble<select name="tipo" defaultValue="" required><option value="" disabled>Selecciona un tipo</option><option>Piso</option><option>Chalet o adosado</option><option>Terreno</option><option>Local u oficina</option><option>Activo de inversión</option></select></label>
      <label>Presupuesto<select name="presupuesto" defaultValue="" required><option value="" disabled>Selecciona un rango</option><option>Hasta 150.000 €</option><option>150.000 € – 250.000 €</option><option>250.000 € – 400.000 €</option><option>400.000 € – 700.000 €</option><option>Más de 700.000 €</option></select></label>
      <label>Financiación<select name="financiacion" defaultValue="" required><option value="" disabled>Selecciona tu situación</option><option>Compra sin financiación</option><option>Financiación aprobada</option><option>Financiación en estudio</option><option>Necesito orientación</option></select></label>
      <label>Nombre<input name="nombre" autoComplete="name" placeholder="Tu nombre" maxLength={120} required /></label>
      <label>Teléfono o email<input name="contacto" placeholder="Teléfono o email" maxLength={160} required /></label>
    </LeadForm>
  );
}

export function InvestorBriefForm() {
  return (
    <LeadForm id="solicitud-inversores" className="investor-form" leadType="inversion" submitLabel="Solicitar acceso">
      <label>Zona de interés<select name="zona" defaultValue="" required><option value="" disabled>Selecciona una zona</option><option>Sotogrande y San Roque</option><option>Algeciras y Los Barrios</option><option>La Línea de la Concepción</option><option>Tarifa</option><option>Varias zonas</option></select></label>
      <label>Presupuesto<select name="presupuesto" defaultValue="" required><option value="" disabled>Selecciona un rango</option><option>Hasta 150.000 €</option><option>150.000 € – 300.000 €</option><option>300.000 € – 600.000 €</option><option>600.000 € – 1.000.000 €</option><option>Más de 1.000.000 €</option></select></label>
      <label>Tipo de activo<select name="activo" defaultValue="" required><option value="" disabled>Selecciona un tipo</option><option>Residencial</option><option>Suelo</option><option>Local u oficina</option><option>Edificio o promoción</option><option>Varias opciones</option></select></label>
      <label>Objetivo de rentabilidad<input name="rentabilidad" placeholder="Ej. rentabilidad anual o revalorización" maxLength={180} required /></label>
      <label>Nombre<input name="nombre" autoComplete="name" placeholder="Tu nombre" maxLength={120} required /></label>
      <label>Teléfono<input name="telefono" type="tel" autoComplete="tel" placeholder="Tu teléfono" maxLength={40} required /></label>
    </LeadForm>
  );
}
