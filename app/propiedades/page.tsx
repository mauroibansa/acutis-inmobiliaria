import { PageHero } from "@/components/PageHero";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/lib/properties";
export const metadata={title:"Propiedades"};
export default function PropertiesPage(){return <><PageHero eyebrow="Selección ACUTIS" title="Un catálogo corto, una mirada más exigente." intro="Viviendas elegidas por su ubicación, arquitectura o capacidad de convertirse en una compra con sentido."/><section className="content-section"><div className="container"><div className="property-grid">{properties.map(p=><PropertyCard key={p.slug} property={p}/>)}</div><p className="demo-note">Contenido de demostración. Las propiedades, precios y disponibilidades no representan ofertas comerciales reales.</p></div></section></>}
