import Image from "next/image";
import Link from "next/link";
import { BuyerBriefForm, MarketStudyForm } from "@/components/LandingForms";

const studyPoints = [
  { icon: "chart", title: "Valoración razonada", text: "Analizamos el mercado, no solo tu propiedad." },
  { icon: "search", title: "Competencia real", text: "Estudiamos lo que realmente se está vendiendo." },
  { icon: "camera", title: "Presentación", text: "Cuidamos cada detalle para generar interés." },
  { icon: "plan", title: "Plan comercial", text: "Una estrategia a medida para el comprador adecuado." },
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
          <div className="landing-heading"><span className="eyebrow">Para propietarios</span><h2>No te damos una cifra.<br />Te damos una estrategia.</h2></div>
          <div className="study-points">
            {studyPoints.map((point) => <article key={point.title}><StudyIcon name={point.icon} /><h3>{point.title}</h3><p>{point.text}</p></article>)}
          </div>
          <MarketStudyForm />
        </div>
      </section>

      <section className="landing-section buyer-section" id="comprar">
        <div className="buyer-image"><Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=86" alt="Interior residencial luminoso de estilo mediterráneo" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className="buyer-content"><span className="heading-rule" aria-hidden="true" /><h2>¿Quieres comprar?</h2><p>Antes de mostrarte propiedades, queremos entender qué estás buscando.</p><BuyerBriefForm /></div>
      </section>

      <section className="landing-section private-section topographic" id="inversores">
        <div className="topographic-layer" aria-hidden="true" />
        <div className="container private-content">
          <div className="private-label"><span className="lock-icon" aria-hidden="true">⌑</span><span className="heading-rule" aria-hidden="true" />Acceso privado</div>
          <h2>Hay oportunidades<br />que no se publican.</h2>
          <p>Protegemos la confidencialidad de propietarios e inversores. Por eso algunas operaciones se trabajan de forma privada.</p>
          <a id="solicitud-inversores" className="button button-light" href="mailto:alejandro@acutisinmobiliaria.com?subject=Solicitud%20de%20acceso%20privado%20ACUTIS">Solicitar acceso</a>
        </div>
      </section>

      <section className="landing-section team-section" id="nosotros">
        <div className="container">
          <h2>Dirección y asesoramiento<br />comercial inmobiliario.</h2>
          <div className="team-grid">
            <article><div className="team-photo-placeholder" aria-hidden="true" /><div className="team-copy"><h3>Alejandro</h3><p>Propietario y dirección</p><span aria-hidden="true" /></div></article>
            <article><div className="team-photo-placeholder team-photo-placeholder-alt" aria-hidden="true" /><div className="team-copy"><h3>Antonio</h3><p>Área comercial</p><span aria-hidden="true" /></div></article>
          </div>
        </div>
      </section>

      <section className="landing-section closing-section topographic" id="contacto">
        <div className="topographic-layer topographic-layer-closing" aria-hidden="true" />
        <div className="container closing-content"><h2>Hablemos de tu propiedad<br />o de lo que estás buscando.</h2><div><Link className="button button-outline" href="#estudio">Quiero vender</Link><Link className="button button-light" href="#comprar">Quiero comprar</Link></div></div>
      </section>
    </div>
  );
}
