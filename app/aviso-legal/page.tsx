import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso legal",
  alternates: { canonical: "/aviso-legal" },
};

export default function LegalNoticePage() {
  return (
    <section className="content-section legal">
      <div className="container prose">
        <h1>Aviso legal</h1>

        <h2>1. Titular del sitio web</h2>
        <p>
          En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la
          información y de comercio electrónico, se informa de los siguientes datos:
        </p>
        <ul>
          <li><strong>Titular:</strong> Alejandro Ibanco Saborido.</li>
          <li><strong>NIF:</strong> 75882178A.</li>
          <li><strong>Actividad:</strong> profesional autónomo dedicado a servicios inmobiliarios.</li>
          <li><strong>Domicilio:</strong> C/ Regino Martínez, 3, 2.º A, 11201 Algeciras (Cádiz).</li>
          <li><strong>Nombre comercial:</strong> ACUTIS Inmobiliaria.</li>
          <li><strong>Correo electrónico:</strong> <a href="mailto:alejandro@acutisinmobiliaria.com">alejandro@acutisinmobiliaria.com</a>.</li>
          <li><strong>Teléfono:</strong> <a href="tel:+34645435228">645 435 228</a>.</li>
        </ul>

        <h2>2. Finalidad y condiciones de uso</h2>
        <p>
          Este sitio informa sobre los servicios inmobiliarios de ACUTIS Inmobiliaria y facilita
          el contacto de propietarios, compradores e inversores. El acceso implica la aceptación
          de este aviso legal y el compromiso de utilizar el sitio de forma lícita y diligente.
        </p>
        <p>
          La información publicada tiene carácter general y orientativo. No constituye una oferta
          contractual, una tasación oficial, asesoramiento jurídico, fiscal o financiero, ni
          sustituye el análisis individual de cada inmueble u operación.
        </p>

        <h2>3. Propiedad intelectual e industrial</h2>
        <p>
          Los textos, elementos gráficos, identidad visual, logotipos, diseño y demás contenidos
          propios del sitio pertenecen a su titular o se utilizan con la autorización
          correspondiente. No se permite su reproducción, distribución o transformación sin
          autorización, salvo en los casos legalmente permitidos.
        </p>

        <h2>4. Responsabilidad</h2>
        <p>
          Se procura que la información sea correcta y esté actualizada, pero no se garantiza la
          ausencia absoluta de errores ni la disponibilidad ininterrumpida del sitio. El titular no
          responde del uso que se haga de la información ni del contenido o funcionamiento de
          páginas externas enlazadas desde este sitio.
        </p>

        <h2>5. Legislación aplicable</h2>
        <p>
          Este aviso se rige por la legislación española. Cualquier controversia se someterá a los
          juzgados y tribunales que correspondan conforme a la normativa aplicable, respetando en
          todo caso los derechos de consumidores y usuarios.
        </p>

        <p><strong>Última actualización:</strong> 19 de octubre de 2026.</p>
      </div>
    </section>
  );
}
