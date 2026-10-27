import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de cookies",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <section className="content-section legal">
      <div className="container prose">
        <h1>Política de cookies</h1>

        <h2>1. Cookies utilizadas</h2>
        <p>
          Este sitio utiliza tecnologías técnicas necesarias para su funcionamiento y, solo si la
          persona usuaria lo acepta, Google Analytics 4 para conocer de forma agregada cómo se usa
          la web. No utilizamos cookies publicitarias ni elaboramos perfiles comerciales.
        </p>

        <h2>2. Google Analytics 4</h2>
        <p>
          El proveedor es Google Ireland Limited. Las cookies analíticas no se instalan ni se envían
          datos a Google hasta que se acepta expresamente su uso. La medición está configurada sin
          señales de Google ni personalización publicitaria.
        </p>
        <ul>
          <li><strong>_ga:</strong> distingue visitantes de forma seudónima. Duración máxima: 2 años.</li>
          <li><strong>_ga_&lt;identificador&gt;:</strong> mantiene el estado de la sesión de medición. Duración máxima: 2 años.</li>
        </ul>
        <p>
          Puedes consultar cómo trata Google los datos en su <a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noreferrer">política de privacidad</a>.
        </p>

        <h2>3. Consentimiento y retirada</h2>
        <p>
          La elección se guarda durante un máximo de 12 meses. Puedes aceptar o rechazar las cookies
          analíticas con la misma facilidad y cambiar la decisión en cualquier momento mediante el
          enlace «Configurar cookies» del pie de página. Al retirar el consentimiento se desactiva
          la medición y se eliminan, cuando es técnicamente posible, las cookies analíticas del dominio.
        </p>

        <h2>4. Tecnologías técnicas</h2>
        <p>
          La infraestructura puede utilizar tecnologías estrictamente necesarias para prestar el
          servicio, mantener la seguridad y recordar la elección de consentimiento. Estas tecnologías
          no se utilizan con fines analíticos ni publicitarios.
        </p>

        <h2>5. Configuración del navegador</h2>
        <p>
          También puedes consultar, bloquear o eliminar cookies desde la configuración de tu navegador.
          El bloqueo de tecnologías estrictamente necesarias podría afectar a algunas funciones.
        </p>

        <p><strong>Última actualización:</strong> 28 de octubre de 2026.</p>
      </div>
    </section>
  );
}
