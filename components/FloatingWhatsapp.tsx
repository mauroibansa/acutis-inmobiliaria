const whatsappUrl = "https://wa.me/34645435228?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20estudio%20de%20mercado%20de%20mi%20vivienda";

export function FloatingWhatsapp() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar con Alejandro por WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 11.6a8 8 0 0 1-11.8 7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z" />
        <path d="M8.4 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.7 1.2 1.7 2.1 3 2.7.3.1.5.1.7-.1l.9-1.1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .5-.2 1.4-.6 1.8-.5.5-1.3.8-2.1.8-1 0-2.3-.5-3.7-1.3-2.2-1.3-3.7-3.2-4.1-4.1-.4-.9-.8-2.1-.4-3 .3-.5.9-1.3 1.5-.9Z" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
