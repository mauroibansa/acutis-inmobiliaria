export function ContactForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className={compact ? "form form-compact" : "form"} action="mailto:alejandro@acutisinmobiliaria.com" method="post" encType="text/plain">
      <label>Nombre<input name="nombre" autoComplete="name" required /></label>
      <label>Teléfono<input name="telefono" type="tel" autoComplete="tel" required /></label>
      {!compact && <label>Email<input name="email" type="email" autoComplete="email" required /></label>}
      <label className="full">¿En qué podemos ayudarte?<textarea name="mensaje" rows={compact ? 3 : 5} /></label>
      <label className="check full"><input type="checkbox" required /> <span>He leído y acepto la <a href="/privacidad">política de privacidad</a>.</span></label>
      <button className="button button-dark" type="submit">Enviar solicitud</button>
    </form>
  );
}
