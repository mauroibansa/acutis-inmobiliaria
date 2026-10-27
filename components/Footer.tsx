import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer footer-compact">
      <div className="container footer-compact-inner">
        <Link className="footer-brand" href="/" aria-label="ACUTIS, inicio">ACUTIS</Link>
        <nav aria-label="Enlaces legales"><Link href="/aviso-legal">Aviso legal</Link><Link href="/privacidad">Política de privacidad</Link><Link href="/cookies">Política de cookies</Link><button className="footer-cookie-settings" type="button" data-cookie-settings>Configurar cookies</button></nav>
        <div className="footer-contact-inline"><a href="tel:+34645435228">645 435 228</a><a href="mailto:alejandro@acutisinmobiliaria.com">alejandro@acutisinmobiliaria.com</a></div>
        <nav className="footer-socials" aria-label="Redes sociales de ACUTIS">
          <a href="https://www.instagram.com/acutisinmobiliaria/" target="_blank" rel="noreferrer" aria-label="ACUTIS en Instagram">Instagram</a>
          <a href="https://www.linkedin.com/company/acutis-inmobiliaria/" target="_blank" rel="noreferrer" aria-label="ACUTIS en LinkedIn">LinkedIn</a>
          <a href="https://www.facebook.com/profile.php?id=61596006564630" target="_blank" rel="noreferrer" aria-label="ACUTIS en Facebook">Facebook</a>
          <a href="https://www.tiktok.com/@acutisinmobiliaria" target="_blank" rel="noreferrer" aria-label="ACUTIS en TikTok">TikTok</a>
        </nav>
      </div>
    </footer>
  );
}
