"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Vender", "/vender"],
  ["Propiedades", "/propiedades"],
  ["Inversión", "/inversion"],
  ["Nosotros", "/nosotros"],
  ["Contacto", "/contacto"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="ACUTIS, inicio">
          <Image src="/images/acutis-isotipo.png" alt="Isotipo de ACUTIS" width={58} height={58} priority />
          <span>ACUTIS<small>Inmobiliaria</small></span>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menú">
          <span /><span />
        </button>
        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Navegación principal">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="button button-small" href="/valoracion" onClick={() => setOpen(false)}>Solicitar valoración</Link>
        </nav>
      </div>
    </header>
  );
}
