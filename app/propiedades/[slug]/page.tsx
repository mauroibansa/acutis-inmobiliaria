import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { PropertyDetailIcon } from "@/components/PropertyDetailIcon";
import { PropertyGallery } from "@/components/PropertyGallery";
import { properties } from "@/lib/properties";

export function generateStaticParams() {
  return properties.map(({ slug }) => ({ slug }));
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);

  if (!property) notFound();

  if (property.gallery && property.details) {
    return (
      <>
        <section className="property-pilot-header">
          <div className="container">
            <Link className="property-back" href="/propiedades">← Todas las propiedades</Link>
            <span className="eyebrow light">{property.location}</span>
            <div className="property-pilot-heading">
              <h1>{property.title}</h1>
              <strong>{property.price}</strong>
            </div>
            <div className="property-pilot-meta"><span>{property.type}</span><span>{property.features}</span><span>Ref. {property.reference}</span></div>
          </div>
        </section>

        <section className="property-gallery-section">
          <PropertyGallery images={property.gallery} title={property.title} />
        </section>

        <section className="section property-pilot-content">
          <div className="container property-pilot-layout">
            <div className="property-pilot-main">
              <span className="eyebrow">La propiedad</span>
              <h2>{property.summary}</h2>
              <p className="lead">{property.description}</p>
              <div className="property-details">
                <span className="eyebrow">Características</span>
                <ul>{property.details.map((detail) => <li key={detail}><PropertyDetailIcon detail={detail} /><span>{detail}</span></li>)}</ul>
              </div>
              <p className="property-disclaimer">Información y disponibilidad sujetas a confirmación. Gastos e impuestos derivados de la compraventa no incluidos.</p>
            </div>
            <aside className="property-inquiry" id="consulta">
              <span className="eyebrow">Consulta directa</span>
              <h3>¿Quieres conocer esta propiedad?</h3>
              <p>Déjanos tus datos y te contactaremos para ampliar la información o concertar una visita.</p>
              <ContactForm compact defaultMessage={`Me interesa ${property.title} (${property.reference}).`} />
              <a className="property-phone" href="tel:+34645435228">O llámanos al 645 435 228</a>
            </aside>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="property-detail-hero">
        <Image src={property.image} alt={`${property.title}, ${property.location}`} fill priority sizes="100vw" />
        <div className="property-detail-title">
          <div className="container">
            <span className="eyebrow light">{property.location}{property.status ? ` · ${property.status}` : ""}</span>
            <h1>{property.title}</h1>
            <div className="property-meta">
              <strong>{property.price}</strong>
              <span>{property.type}</span>
              <span>{property.features}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split property-description">
          <div>
            <span className="eyebrow">La propiedad</span>
            <h2>{property.summary}</h2>
          </div>
          <div>
            <p className="lead">{property.description}</p>
            <dl className="property-facts">
              <div><dt>Tipo</dt><dd>{property.type}</dd></div>
              <div><dt>Superficie</dt><dd>{property.area}</dd></div>
              <div><dt>Referencia</dt><dd>{property.reference}</dd></div>
            </dl>
            {property.notice && <div className="property-notice"><strong>Información importante</strong><p>{property.notice}</p></div>}
            <Link className="button button-dark" href="/contacto">Consultar esta propiedad</Link>
          </div>
        </div>
      </section>
    </>
  );
}
