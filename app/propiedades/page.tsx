import { PageHero } from "@/components/PageHero";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/lib/properties";
export const metadata={title:"Propiedades"};
export default function PropertiesPage(){return <><PageHero eyebrow="Selección ACUTIS" title="Un catálogo corto, una mirada más exigente." intro="Viviendas y activos seleccionados por su ubicación, su potencial o su capacidad de convertirse en una compra con sentido."/><section className="content-section"><div className="container"><div className="property-grid">{properties.map(p=><PropertyCard key={p.slug} property={p}/>)}</div><p className="catalog-note">Precios y disponibilidad sujetos a confirmación. Gastos e impuestos no incluidos.</p></div></section></>}
