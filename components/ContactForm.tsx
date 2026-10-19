export function ContactForm({ compact = false, defaultMessage = "" }: { compact?: boolean; defaultMessage?: string }) {
  return (
    <form className={compact ? "form form-compact" : "form"} action="mailto:alejandro@acutisinmobiliaria.com" method="post" encType="text/plain">
      <label>Nombre<input name="nombre" autoComplete="name" required /></label>
      <label>Teléfono<input name="telefono" type="tel" autoComplete="tel" required /></label>
      {!compact && <label>Email<input name="email" type="email" autoComplete="email" required /></label>}
      <label className="full">¿En qué podemos ayudarte?<textarea name="mensaje" rows={compact ? 3 : 5} defaultValue={defaultMessage} /></label>
      <label className="check full"><input type="checkbox" required /> <span>He leído la <a href="/privacidad">política de privacidad</a>. Responsable: Alejandro Ibanco Saborido. Finalidad: atender mi solicitud. Legitimación: medidas precontractuales solicitadas. Sin cesiones salvo obligación legal. Derechos: <a href="mailto:privacidad@acutisinmobiliaria.com">privacidad@acutisinmobiliaria.com</a>.</span></label>
      <button className="button button-dark" type="submit">Enviar solicitud</button>
    </form>
  );
}
