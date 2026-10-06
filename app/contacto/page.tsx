import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
export const metadata={title:"Contacto"};
export default function ContactPage(){return <><PageHero eyebrow="Contacto" title="La conversación correcta puede cambiar la operación." intro="Cuéntanos si quieres vender, comprar o analizar una oportunidad. Te responderemos con claridad."/><section className="section"><div className="container split"><div><span className="eyebrow">Contacto directo</span><h2>Hablemos.</h2><ul className="contact-list"><li><a href="tel:+34645435228">645 435 228</a></li><li><a href="mailto:alejandro@acutisinmobiliaria.com">alejandro@acutisinmobiliaria.com</a></li></ul></div><ContactForm/></div></section></>}
