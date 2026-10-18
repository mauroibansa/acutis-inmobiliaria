import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer footer-compact">
      <div className="container footer-compact-inner">
        <Link className="footer-brand" href="/" aria-label="ACUTIS, inicio">ACUTIS</Link>
        <nav aria-label="Enlaces legales"><Link href="/aviso-legal">Aviso legal</Link><Link href="/privacidad">Política de privacidad</Link><Link href="/cookies">Política de cookies</Link></nav>
        <span>Campo de Gibraltar</span>
      </div>
    </footer>
  );
}
