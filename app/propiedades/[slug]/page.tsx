import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/lib/properties";

export function generateStaticParams() {
  return properties.map(({ slug }) => ({ slug }));
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);

  if (!property) notFound();

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
