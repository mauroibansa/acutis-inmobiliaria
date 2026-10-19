const recipient = "alejandro@acutisinmobiliaria.com";

function PrivacyConsent() {
  return <label className="landing-consent landing-form-full"><input type="checkbox" required /><span>He leído la <a href="/privacidad">política de privacidad</a>. Responsable: Alejandro Ibanco Saborido. Finalidad: atender mi solicitud. Legitimación: medidas precontractuales solicitadas. Sin cesiones salvo obligación legal. Derechos: <a href="mailto:privacidad@acutisinmobiliaria.com">privacidad@acutisinmobiliaria.com</a>.</span></label>;
}

export function MarketStudyForm() {
  return (
    <form id="formulario-venta" className="landing-form market-study-form" action={`mailto:${recipient}?subject=Solicitud%20de%20estudio%20de%20mercado%20ACUTIS`} method="post" encType="text/plain">
      <label className="landing-form-span-3">Ubicación del inmueble<select name="ubicacion" defaultValue="" required><option value="" disabled>Selecciona una zona</option><option>Sotogrande</option><option>San Roque</option><option>Algeciras</option><option>La Línea de la Concepción</option><option>Tarifa</option><option>Los Barrios</option><option>Otra zona</option></select></label>
      <label className="landing-form-span-3">Tipo de inmueble<select name="tipo" defaultValue="" required><option value="" disabled>Selecciona un tipo</option><option>Vivienda</option><option>Chalet o adosado</option><option>Terreno</option><option>Local u oficina</option><option>Edificio o activo de inversión</option><option>Otro</option></select></label>
      <label>Superficie aproximada<input name="superficie" inputMode="numeric" placeholder="Ej. 120 m²" required /></label>
      <label>Estado<select name="estado" defaultValue="" required><option value="" disabled>Selecciona una opción</option><option>Para entrar a vivir</option><option>Reformado recientemente</option><option>Necesita actualización</option><option>Necesita reforma integral</option><option>Obra nueva o en construcción</option></select></label>
      <label>Plazo previsto<select name="plazo" defaultValue="" required><option value="" disabled>¿Cuándo quieres vender?</option><option>Lo antes posible</option><option>En los próximos 3 meses</option><option>Entre 3 y 6 meses</option><option>Más adelante</option><option>Solo quiero conocer el mercado</option></select></label>
      <label>Nombre<input name="nombre" autoComplete="name" placeholder="Tu nombre" required /></label>
      <label>Teléfono<input name="telefono" type="tel" autoComplete="tel" placeholder="Teléfono" required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" placeholder="Tu email" required /></label>
      <label className="landing-form-full">Cuéntanos brevemente sobre la propiedad<textarea name="mensaje" rows={4} placeholder="Escribe un mensaje (opcional)" /></label>
      <PrivacyConsent />
      <button className="landing-submit landing-form-full" type="submit">Solicitar mi estudio de mercado</button>
      <p className="landing-form-note landing-form-full">Te contactaremos para conocer el inmueble. Sin compromiso.</p>
    </form>
  );
}

export function BuyerBriefForm() {
  return (
    <form id="formulario-compra" className="landing-form buyer-form" action={`mailto:${recipient}?subject=Solicitud%20de%20compra%20ACUTIS`} method="post" encType="text/plain">
      <label>Zona<select name="zona" defaultValue="" required><option value="" disabled>Selecciona una zona</option><option>Sotogrande</option><option>San Roque</option><option>Algeciras</option><option>La Línea de la Concepción</option><option>Tarifa</option><option>Los Barrios</option><option>Varias zonas</option></select></label>
      <label>Tipo de inmueble<select name="tipo" defaultValue="" required><option value="" disabled>Selecciona un tipo</option><option>Piso</option><option>Chalet o adosado</option><option>Terreno</option><option>Local u oficina</option><option>Activo de inversión</option></select></label>
      <label>Presupuesto<select name="presupuesto" defaultValue="" required><option value="" disabled>Selecciona un rango</option><option>Hasta 150.000 €</option><option>150.000 € – 250.000 €</option><option>250.000 € – 400.000 €</option><option>400.000 € – 700.000 €</option><option>Más de 700.000 €</option></select></label>
      <label>Financiación<select name="financiacion" defaultValue="" required><option value="" disabled>Selecciona tu situación</option><option>Compra sin financiación</option><option>Financiación aprobada</option><option>Financiación en estudio</option><option>Necesito orientación</option></select></label>
      <label>Nombre<input name="nombre" autoComplete="name" placeholder="Tu nombre" required /></label>
      <label>Teléfono o email<input name="contacto" placeholder="Teléfono o email" required /></label>
      <PrivacyConsent />
      <button className="landing-submit landing-form-full" type="submit">Cuéntanos qué buscas</button>
    </form>
  );
}
