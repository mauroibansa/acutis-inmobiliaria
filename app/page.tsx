import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BuyerBriefForm, InvestorBriefForm, MarketStudyForm } from "@/components/LandingForms";
import "./faq-layout-v2.css";

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

const realCases = [
  {
    category: "Reposicionamiento",
    title: "Una vivienda que llevaba meses anunciada sin resultados",
    work: "Revisamos el precio, la presentación del anuncio y el perfil del comprador. Después redefinimos la estrategia, la selección de fotografías y el orden de la información.",
    result: "Un anuncio mejor posicionado, consultas más cualificadas y una negociación planteada sobre datos reales.",
  },
  {
    category: "Valoración",
    title: "Una propietaria que no sabía qué precio pedir",
    work: "Contrastamos comparables, conservación, superficie, ubicación y competencia para establecer un rango de valor razonable.",
    result: "Pudo decidir con mayor seguridad y evitar un precio inicial que perjudicara el interés por la vivienda.",
  },
  {
    category: "Coordinación",
    title: "Una venta entre varios propietarios",
    work: "Explicamos el valor, los gastos y los pasos de la operación; ordenamos la documentación y fijamos un procedimiento común para visitas y propuestas.",
    result: "Una venta organizada, con menos incertidumbre y una comunicación clara entre todas las partes.",
  },
  {
    category: "Compradores",
    title: "Interés real, pero dudas sobre la financiación",
    work: "Comprobamos la situación económica y el margen real de compra antes de programar nuevas visitas.",
    result: "Propietarios mejor protegidos frente a visitas poco cualificadas y compradores con expectativas realistas.",
  },
  {
    category: "Presentación",
    title: "Una vivienda cuyo potencial no aparecía en el anuncio",
    work: "Identificamos los argumentos diferenciales, reorganizamos el reportaje y redactamos el anuncio para el comprador adecuado.",
    result: "Una presentación más atractiva, clara y coherente con el valor real del inmueble.",
  },
];

const faqs = [
  {
    question: "¿El estudio de mercado tiene algún coste?",
    answer: "No. El estudio inicial de la vivienda es gratuito y no implica ningún compromiso. Su finalidad es ayudarte a conocer el mercado, el rango de valor del inmueble y la estrategia más adecuada para su venta.",
  },
  {
    question: "¿Tengo que firmar una exclusiva?",
    answer: "No necesariamente. En ACUTIS podemos estudiar distintas formas de colaboración, con exclusiva o sin ella. Antes de decidir, te explicaremos claramente qué incluye cada opción y cuál puede resultar más adecuada para tu vivienda.",
  },
  {
    question: "¿Cuánto cobra ACUTIS por vender una propiedad?",
    answer: "Nuestros honorarios habituales son del 3,5 % del precio final de venta más IVA, salvo condiciones particulares acordadas. Se abonan cuando la operación se formaliza y comprenden la preparación, promoción, gestión de compradores, negociación y acompañamiento durante el proceso.",
  },
  {
    question: "¿Cómo calculáis el precio de una vivienda?",
    answer: "Analizamos la ubicación, superficie, estado, características, competencia actualmente anunciada y propiedades comparables de la zona. Con esta información establecemos un rango de valor y recomendamos un precio de salida razonado.",
  },
  {
    question: "¿La valoración es una tasación oficial?",
    answer: "No. Es un estudio comercial de mercado elaborado para orientar la venta. Si necesitas una tasación oficial para una hipoteca, procedimiento judicial o trámite administrativo, deberá realizarla una sociedad de tasación homologada.",
  },
  {
    question: "¿Cuánto se tarda en vender una vivienda?",
    answer: "Depende de la ubicación, el estado, la demanda y, especialmente, del precio de salida. Después de estudiar la propiedad podremos ofrecerte una estimación razonable, pero evitamos prometer plazos que no podamos garantizar.",
  },
  {
    question: "¿Qué documentación necesito para empezar?",
    answer: "Inicialmente basta con identificar la vivienda y realizar una visita. Antes de comercializarla revisaremos la documentación necesaria, como escritura, nota simple, referencia catastral, certificado energético, recibo del IBI y, cuando corresponda, información de la comunidad.",
  },
  {
    question: "¿Puedo vender si todavía tengo hipoteca?",
    answer: "Sí. La hipoteca pendiente puede cancelarse con parte del importe de la compraventa. Antes de aceptar una oferta conviene solicitar al banco el capital pendiente y calcular todos los gastos de cancelación.",
  },
  {
    question: "¿Cómo seleccionáis a los compradores?",
    answer: "Antes de avanzar en una negociación intentamos conocer sus necesidades, presupuesto y situación financiera. Cuando la compra depende de financiación, recomendamos comprobar previamente su capacidad económica para reducir visitas y propuestas con pocas posibilidades de completarse.",
  },
  {
    question: "¿Qué incluye el servicio de ACUTIS?",
    answer: "Incluye análisis de mercado, estrategia de precio, preparación y presentación del inmueble, publicación, gestión de consultas y visitas, selección de compradores, negociación y acompañamiento hasta la firma.",
  },
  {
    question: "¿Puedo solicitar el estudio aunque todavía no haya decidido vender?",
    answer: "Sí. El estudio también puede ayudarte a valorar tus opciones y tomar una decisión con más información. No es necesario poner la vivienda inmediatamente a la venta.",
  },
  {
    question: "¿En qué zonas trabajáis?",
    answer: "Trabajamos principalmente en el Campo de Gibraltar, incluyendo Algeciras, Los Barrios, La Línea de la Concepción, San Roque, Guadiaro, Sotogrande y localidades cercanas.",
  },
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
        <picture className="home-hero-media">
          <source media="(max-width: 600px)" srcSet="/images/acutis-hero-mobile.avif" />
          <img src="/images/acutis-hero-desktop.avif" alt="Arquitectura residencial contemporánea de inspiración mediterránea" width="1920" height="1280" fetchPriority="high" loading="eager" decoding="async" />
        </picture>
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
          <div className="study-proof">
            <div className="study-proof-copy">
              <span className="eyebrow">Muestra de entrega</span>
              <h3>Así convertimos el mercado en una decisión.</h3>
              <p>No recibirás una estimación automática. El estudio explica qué sostiene el valor, cómo compite la propiedad y qué estrategia de salida recomendamos.</p>
              <ul>
                <li>Comparables seleccionados e interpretados</li>
                <li>Rango de mercado, salida y objetivo de cierre</li>
                <li>Recomendación comercial argumentada</li>
              </ul>
              <a className="button button-dark" href="/documents/ejemplo-estudio-mercado-acutis.pdf" target="_blank" rel="noreferrer">Ver muestra anonimizada</a>
              <small>Documento demostrativo con datos ficticios. Cada estudio se prepara después de conocer y visitar la propiedad.</small>
            </div>
            <div className="study-proof-visual">
              <figure className="study-proof-page study-proof-page-back"><Image src="/images/ejemplo-estudio-comparables.webp" alt="Ejemplo anonimizado del análisis de inmuebles comparables" width={900} height={1273} sizes="(max-width: 900px) 68vw, 420px" quality={90} /></figure>
              <figure className="study-proof-page study-proof-page-front"><Image src="/images/ejemplo-estudio-valoracion.webp" alt="Ejemplo anonimizado del rango de valoración y estrategia" width={900} height={1273} sizes="(max-width: 900px) 68vw, 420px" quality={90} /></figure>
            </div>
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

      <section className="landing-section cases-section" id="casos">
        <div className="container">
          <div className="cases-heading">
            <div><span className="eyebrow">Casos reales</span><h2>Problemas concretos.<br />Decisiones mejor fundamentadas.</h2></div>
            <p>Ejemplos de trabajo realizados por ACUTIS. Omitimos nombres, direcciones y cualquier dato que pueda identificar a las personas o propiedades.</p>
          </div>
          <div className="cases-grid">
            {realCases.map((item, index) => (
              <article key={item.title}>
                <div className="case-meta"><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.category}</strong></div>
                <h3>{item.title}</h3>
                <p>{item.work}</p>
                <div className="case-result"><span>Resultado</span><p>{item.result}</p></div>
              </article>
            ))}
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
              <div className="team-member-meta"><span className="team-index">01</span><div className="team-copy"><h3>Alejandro Ibanco Saborido</h3><p>Propietario y dirección</p><small>Valoración, estrategia y negociación</small></div></div>
            </article>
            <article>
              <div className="team-photo"><Image src="/team/acutis-equipo-retrato-02.png" alt="Retrato de Antonio" fill sizes="(max-width: 600px) calc(100vw - 32px), 50vw" quality={90} /></div>
              <div className="team-member-meta"><span className="team-index">02</span><div className="team-copy"><h3>Antonio González Romero</h3><p>Área comercial</p><small>Relación con propietarios y compradores</small></div></div>
            </article>
          </div>
        </div>
      </section>

      <section className="landing-section faq-section" id="preguntas-frecuentes">
        <div className="container">
          <div className="faq-heading-v2">
            <div className="faq-title-block">
              <span className="eyebrow">Preguntas frecuentes</span>
              <h2>Lo importante,<br />antes de empezar.</h2>
            </div>
            <p>Condiciones, proceso y documentación explicados con claridad antes de tomar ninguna decisión.</p>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.question}</strong></summary>
                <p>{item.answer}</p>
              </details>
            ))}
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
