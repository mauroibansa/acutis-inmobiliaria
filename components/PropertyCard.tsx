import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/lib/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="property-card">
      <Link href={`/propiedades/${property.slug}`} className="property-image">
        <Image src={property.image} alt={`${property.title}, ${property.location}`} fill sizes="(max-width: 800px) 100vw, 33vw" />
        <span>{property.status ?? property.type}</span>
      </Link>
      <div className="property-info"><p>{property.location}</p><h3><Link href={`/propiedades/${property.slug}`}>{property.title}</Link></h3><div><strong>{property.price}</strong><span>{property.features}</span></div></div>
    </article>
  );
}
