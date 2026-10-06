import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid container">
        <div><div className="footer-brand">ACUTIS</div><p>Inmobiliaria de criterio local para vender, comprar e invertir en el Campo de Gibraltar.</p></div>
        <div><span className="eyebrow">Explorar</span><Link href="/vender">Vender</Link><Link href="/propiedades">Propiedades</Link><Link href="/inversion">Inversión</Link></div>
        <div><span className="eyebrow">ACUTIS</span><Link href="/nosotros">Nosotros</Link><Link href="/contacto">Contacto</Link><Link href="/valoracion">Valoración</Link></div>
        <div><span className="eyebrow">Legal</span><Link href="/aviso-legal">Aviso legal</Link><Link href="/privacidad">Privacidad</Link><Link href="/cookies">Cookies</Link></div>
      </div>
      <div className="footer-base container"><span>© {new Date().getFullYear()} ACUTIS Inmobiliaria</span><span>Campo de Gibraltar · Cádiz</span></div>
    </footer>
  );
}
