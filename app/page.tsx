import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BuyerBriefForm, InvestorBriefForm, MarketStudyForm } from "@/components/LandingForms";

export const metadata: Metadata = {
  title: "Estudio de mercado inmobiliario en el Campo de Gibraltar",
  description: "Analizamos tu propiedad, la competencia y el mercado para definir el precio de salida y la estrategia comercial antes de publicar.",
};

const studyPoints = [
  { icon: "chart", title: "Mercado comparable", text: "Analizamos operaciones comparables y la competencia actualmente anunciada." },
  { icon: "search", title: "Rango de valor", text: "Definimos un rango orientativo y, tras la visita, un precio de salida recomendado." },
  { icon: "camera", title: "Presentación", text: "Proponemos mejoras para preparar la propiedad y reforzar su percepción de valor." },
  { icon: "plan", title: "Plan comercial", text: "Detallamos posicionamiento, canales y estrategia para llegar al comprador adecuado." },
];

const processSteps = [
  ["01", "Escuchamos", "Conocemos la propiedad, la situación y el objetivo de la venta."],
  ["02", "Visitamos", "Revisamos el inmueble, su estado y los factores que influyen en su valor."],
  ["03", "Analizamos", "Contrastamos comparables, demanda y competencia real."],
  ["04", "Definimos", "Acordamos precio, presentación y plan de salida al mercado."],
  ["05", "Acompañamos", "Filtramos visitas, negociamos y seguimos la operación hasta la firma."],
];

function StudyIcon({ name }: { name: string }) {
  if (name === "chart") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 27V17h5v10M14 27V11h5v16M23 27V5h4v22M3 27h26" /></svg>;
  if (name === "search") return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="14" cy="14" r="9" /><path d="m21 21 7 7" /></svg>;
  if (name === "camera") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 10h6l2-4h8l2 4h6v17H4z" /><circle cx="16" cy="18" r="6" /></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="6" y="4" width="20" height="24" /><path d="M11 10h10M11 15h10M11 20h7" /></svg>;
}

export default function Home() {
  return (
    <div className="landing-home">
      <section className="home-hero" id="inicio">
        <Image src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2400&q=88" alt="Arquitectura residencial contemporánea de inspiración mediterránea" fill priority sizes="100vw" />
        <div className="home-hero-overlay" />
        <div className="container home-hero-content">
          <h1>Vender bien empieza<br />mucho antes de publicar.</h1>
          <p>Análisis, estrategia y presentación para que tu propiedad llegue al comprador adecuado, en las mejores condiciones.</p>
          <div className="home-hero-actions">
            <Link className="button button-light" href="#estudio">Solicitar estudio de mercado</Link>
            <Link className="home-inline-link" href="#comprar">Quiero comprar <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="landing-section market-study" id="estudio">
        <div className="container">
          <div className="landing-heading"><span className="eyebrow">Qué incluye el estudio</span><h2>No te damos una cifra.<br />Te damos una estrategia.</h2><p>Recibirás una lectura razonada del mercado y una hoja de ruta para decidir cómo y cuándo vender. No es una tasación automática.</p></div>
          <div className="study-points">
            {studyPoints.map((point) => <article key={point.title}><StudyIcon name={point.icon} /><h3>{point.title}</h3><p>{point.text}</p></article>)}
          </div>
          <MarketStudyForm />
        </div>
      </section>

      <section className="landing-section process-section" id="proceso">
        <div className="container">
          <div className="process-heading"><span className="eyebrow">Cómo trabajamos</span><h2>De la primera conversación<br />hasta la firma.</h2></div>
          <div className="process-steps">
            {processSteps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="landing-section buyer-section" id="comprar">
        <div className="buyer-image"><Image src="/images/acutis-interior-comprar-v2.jpg" alt="Salón mediterráneo contemporáneo iluminado por luz natural" fill sizes="(max-width: 900px) 100vw, 50vw" quality={90} /></div>
        <div className="buyer-content"><span className="heading-rule" aria-hidden="true" /><h2>¿Quieres comprar?</h2><p>Conocer presupuesto, financiación, zona y necesidades nos permite presentarte únicamente propiedades que realmente encajen.</p><BuyerBriefForm /></div>
      </section>

      <section className="landing-section private-section topographic" id="inversores">
        <div className="topographic-layer" aria-hidden="true" />
        <div className="container private-content">
          <div className="private-label"><span className="lock-icon" aria-hidden="true">⌑</span><span className="heading-rule" aria-hidden="true" />Acceso privado</div>
          <h2>Hay oportunidades<br />que no se publican.</h2>
          <p>Protegemos la confidencialidad de propietarios e inversores. Por eso algunas operaciones se trabajan de forma privada.</p>
          <div className="private-facts">
            <article><strong>Activos</strong><span>Residencial, suelo y operaciones con potencial de rentabilidad.</span></article>
            <article><strong>Ámbito</strong><span>Campo de Gibraltar y oportunidades seleccionadas en su entorno.</span></article>
            <article><strong>Acceso</strong><span>Revisamos objetivos y perfil antes de compartir cada operación.</span></article>
          </div>
          <InvestorBriefForm />
          <small className="investment-note">Cada inversión requiere un análisis individual. La información facilitada no constituye asesoramiento financiero.</small>
        </div>
      </section>

      <section className="landing-section team-section" id="nosotros">
        <div className="container">
          <div className="team-intro">
            <div><span className="eyebrow">Nosotros</span><h2>ACUTIS nace de una forma distinta de entender la venta.</h2></div>
            <div className="team-story">
              <p>ACUTIS nace en el Campo de Gibraltar con una idea clara: vender una propiedad exige mucho más que publicar un anuncio.</p>
              <p>Antes de salir al mercado, escuchamos al propietario, analizamos el inmueble, la competencia y la demanda real, y definimos una estrategia de precio, presentación y comercialización.</p>
              <p>Alejandro dirige la valoración, la estrategia y la negociación. Antonio desarrolla el área comercial. Ambos mantienen un contacto directo con propietarios y compradores y explican qué se está haciendo, por qué y cuál es el siguiente paso.</p>
            </div>
          </div>
          <p className="team-principle">Porque vender bien no empieza al publicar.<br />Empieza tomando una buena decisión.</p>
          <div className="team-grid">
            <article>
              <div className="team-photo"><Image src="/team/acutis-equipo-retrato-01.png" alt="Retrato de Alejandro" fill sizes="(max-width: 600px) calc(100vw - 32px), 50vw" quality={90} /></div>
              <div className="team-member-meta"><span className="team-index">01</span><div className="team-copy"><h3>Alejandro</h3><p>Propietario y dirección</p><small>Valoración, estrategia y negociación</small></div></div>
            </article>
            <article>
              <div className="team-photo"><Image src="/team/acutis-equipo-retrato-02.png" alt="Retrato de Antonio" fill sizes="(max-width: 600px) calc(100vw - 32px), 50vw" quality={90} /></div>
              <div className="team-member-meta"><span className="team-index">02</span><div className="team-copy"><h3>Antonio</h3><p>Área comercial</p><small>Relación con propietarios y compradores</small></div></div>
            </article>
          </div>
        </div>
      </section>

      <section className="landing-section closing-section topographic" id="contacto">
        <div className="topographic-layer topographic-layer-closing" aria-hidden="true" />
        <div className="container closing-content"><span className="eyebrow light">Antes de publicar</span><h2>¿Estás pensando<br />en vender?</h2><p>Conoce cómo está realmente tu mercado antes de decidir el precio.</p><div><Link className="button button-light" href="#formulario-venta">Solicitar estudio de mercado</Link><a className="button button-outline" href="tel:+34645435228">Hablar con Alejandro</a></div></div>
      </section>

      <nav className="mobile-conversion-bar" aria-label="Contacto rápido"><Link href="#formulario-venta">Solicitar estudio</Link><a href="tel:+34645435228">Llamar</a></nav>
    </div>
  );
}
