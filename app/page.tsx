import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PropertyCard } from "@/components/PropertyCard";
import { featuredProperties } from "@/lib/properties";

const steps = [
  ["01", "Lectura del activo", "Analizamos la vivienda, su contexto y su comprador probable."],
  ["02", "Estrategia de mercado", "Definimos precio, relato, presentación y plan de salida."],
  ["03", "Exposición selectiva", "Activamos canales y contactos sin convertir el inmueble en uno más."],
  ["04", "Negociación y cierre", "Protegemos la posición del propietario hasta la firma."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=90" alt="Arquitectura contemporánea y mediterránea" fill priority sizes="100vw" />
        <div className="hero-shade" /><div className="hero-content container"><span className="eyebrow light">Inmobiliaria · Campo de Gibraltar</span><h1>Vender bien empieza<br />mucho antes de publicar.</h1><p>Estrategia, presentación y conocimiento local para defender el valor real de tu propiedad.</p><div className="hero-actions"><Link className="button button-light" href="/valoracion">Solicitar valoración</Link><Link className="text-link light" href="/vender">Cómo vendemos <span>→</span></Link></div></div>
        <div className="hero-note">Sotogrande · San Roque · Algeciras · La Línea</div>
      </section>

      <section className="section report-section"><div className="container split"><div><span className="eyebrow">Informe de venta ACUTIS</span><h2>No te damos una cifra.<br />Te damos una estrategia.</h2></div><div><p className="lead">Un precio sin contexto es solo una opinión. Nuestro estudio combina comparables, demanda, competencia y posicionamiento para decidir cómo salir al mercado.</p><ul className="clean-list"><li>Valoración razonada, no inflada</li><li>Mapa de competencia real</li><li>Recomendaciones de presentación</li><li>Plan de comercialización</li></ul><Link className="text-link" href="/valoracion">Pedir mi estudio de mercado <span>→</span></Link></div></div></section>

      <section className="section about-section"><div className="container about-editorial"><div className="about-statement"><span className="eyebrow">Una inmobiliaria de parte del propietario</span><h2>Menos inventario.<br />Más atención.</h2><p className="lead">ACUTIS trabaja cada propiedad con criterio, claridad y una implicación difícil de sostener cuando el catálogo manda.</p><p>No competimos por acumular viviendas. Elegimos proyectos donde podemos aportar una lectura comercial, cuidar la presentación y acompañar cada decisión.</p></div><div className="about-principles"><article><span>01</span><h3>Criterio local</h3><p>Conocimiento real del mercado y de la demanda del Campo de Gibraltar.</p></article><article><span>02</span><h3>Estrategia individual</h3><p>Cada propiedad necesita una lectura, una presentación y un plan propios.</p></article><article><span>03</span><h3>Trato directo</h3><p>Interlocución clara y responsabilidad durante todo el proceso.</p></article><Link className="text-link" href="/nosotros">Conoce ACUTIS <span>→</span></Link></div></div></section>

      <section className="section method-section"><div className="container"><div className="section-heading"><span className="eyebrow light">Nuestro método</span><h2>Cuatro pasos. Un único criterio.</h2><p>Tomar mejores decisiones en cada momento de la venta.</p></div><div className="steps">{steps.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

      <section className="section properties-section"><div className="container"><div className="section-heading row"><div><span className="eyebrow">Selección ACUTIS</span><h2>Pocas propiedades.<br />Bien elegidas.</h2></div><Link className="text-link" href="/propiedades">Ver propiedades <span>→</span></Link></div><div className="property-grid">{featuredProperties.map(p => <PropertyCard key={p.slug} property={p} />)}</div></div></section>

      <section className="section investment-section"><div className="container split"><div><span className="eyebrow light">Inversión</span><h2>La oportunidad no siempre está anunciada.</h2></div><div><p className="lead">Acompañamos a inversores que buscan activos con lógica, no promesas. Detectamos, analizamos y estructuramos cada operación con una mirada local.</p><Link className="button button-outline" href="/inversion">Explorar inversión</Link></div></div></section>

      <section className="section territory-section"><div className="container territory-grid"><div><span className="eyebrow">Territorio</span><h2>Campo de Gibraltar,<br />leído desde dentro.</h2><p className="lead">Un mercado plural donde conviven residencia, segunda vivienda, inversión y conexión internacional.</p><div className="place-list"><span>Sotogrande</span><span>San Roque</span><span>Algeciras</span><span>La Línea</span><span>Tarifa</span><span>Los Barrios</span></div></div><div className="territory-image"><Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85" alt="Costa del sur de Cádiz" fill sizes="(max-width: 800px) 100vw, 50vw" /></div></div></section>

      <section className="section final-cta"><div className="container split"><div><span className="eyebrow">Hablemos de tu propiedad</span><h2>Antes de ponerla a la venta, ponla en perspectiva.</h2><p>Cuéntanos lo esencial. Te llamaremos para conocer el inmueble y decidir si podemos ayudarte.</p></div><ContactForm compact /></div></section>
    </>
  );
}
