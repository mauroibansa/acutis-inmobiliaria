import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPage() {
  return (
    <section className="content-section legal">
      <div className="container prose">
        <h1>Política de privacidad</h1>

        <h2>1. Responsable del tratamiento</h2>
        <ul>
          <li><strong>Responsable:</strong> Alejandro Ibanco Saborido.</li>
          <li><strong>NIF:</strong> 75882178A.</li>
          <li><strong>Domicilio:</strong> C/ Regino Martínez, 3, 2.º A, 11201 Algeciras (Cádiz).</li>
          <li><strong>Correo de privacidad:</strong> <a href="mailto:privacidad@acutisinmobiliaria.com">privacidad@acutisinmobiliaria.com</a>.</li>
        </ul>

        <h2>2. Datos tratados y finalidad</h2>
        <p>
          Se tratan los datos que la persona interesada facilite voluntariamente al realizar una
          consulta, solicitar un estudio de mercado, indicar qué inmueble busca o pedir acceso a
          información para inversores. Estos datos pueden incluir nombre, teléfono, correo
          electrónico e información sobre el inmueble, la búsqueda o la operación planteada.
        </p>
        <p>
          La finalidad es atender la solicitud, contactar con la persona interesada, valorar sus
          necesidades y, cuando corresponda, preparar o gestionar una relación profesional o
          contractual. No se adoptan decisiones automatizadas ni se elaboran perfiles con efectos
          jurídicos sobre las personas usuarias.
        </p>
        <p>
          Cuando se aceptan las cookies analíticas, también se tratan identificadores seudónimos,
          datos técnicos del navegador y del dispositivo e información sobre la navegación y las
          interacciones con el sitio. Su única finalidad es elaborar estadísticas de uso, comprobar
          el funcionamiento de la web y mejorar sus contenidos y vías de contacto.
        </p>

        <h2>3. Base jurídica</h2>
        <p>
          El tratamiento se basa en la aplicación de medidas precontractuales solicitadas por la
          persona interesada y, cuando corresponda, en la ejecución de la relación contractual y
          el cumplimiento de obligaciones legales. No se utilizarán estos datos para enviar
          comunicaciones comerciales ajenas a la solicitud sin una base jurídica específica.
        </p>
        <p>
          La medición con Google Analytics se basa exclusivamente en el consentimiento, que puede
          rechazarse o retirarse en cualquier momento desde «Configurar cookies» sin que ello afecte
          al acceso a la web ni a la licitud del tratamiento anterior a su retirada.
        </p>

        <h2>4. Conservación</h2>
        <p>
          Las solicitudes que no den lugar a una relación contractual se conservarán durante 12
          meses desde la última comunicación relevante. Si se inicia una relación contractual, los
          datos se conservarán mientras esta permanezca vigente y, posteriormente, bloqueados
          durante los plazos legales aplicables para atender posibles responsabilidades.
        </p>
        <p>
          Los datos de usuario y de eventos de Google Analytics se conservarán durante un máximo de
          14 meses. La preferencia de consentimiento se recuerda durante un máximo de 12 meses. Las
          duraciones concretas de las cookies se detallan en la <a href="/cookies">política de cookies</a>.
        </p>

        <h2>5. Destinatarios</h2>
        <p>
          Los datos no se cederán a terceros salvo obligación legal o cuando resulte necesario para
          prestar un servicio solicitado. Los proveedores que den soporte técnico, alojamiento o
          comunicaciones podrán acceder a los datos únicamente como encargados del tratamiento y
          bajo las garantías contractuales aplicables.
        </p>
        <p>
          Si alguno de estos proveedores tratase datos fuera del Espacio Económico Europeo, se
          utilizará un mecanismo reconocido por la normativa de protección de datos y se aplicarán
          las garantías correspondientes.
        </p>

        <h2>6. Envío de formularios</h2>
        <p>
          Los formularios transmiten la información directamente a ACUTIS Inmobiliaria mediante
          un servicio técnico de entrega de correo. El sitio web no crea por este motivo una base
          de datos comercial ni utiliza la información para finalidades distintas de atender la
          solicitud. El proveedor de envío puede tratar los datos necesarios como encargado del
          tratamiento. Actualmente se utiliza Resend, Inc. como proveedor técnico de entrega, bajo
          las garantías contractuales y de seguridad aplicables.
        </p>

        <h2>7. Medición con Google Analytics</h2>
        <p>
          Si la persona usuaria lo acepta, se utiliza Google Analytics 4, prestado por Google Ireland
          Limited, como encargado del tratamiento. La configuración de ACUTIS no habilita Google
          Signals, personalización publicitaria ni cookies de publicidad, y los formularios no envían
          a Analytics nombres, teléfonos, correos electrónicos ni el contenido de las solicitudes.
        </p>
        <p>
          Google puede tratar información técnica desde infraestructuras situadas fuera del Espacio
          Económico Europeo aplicando los mecanismos y garantías previstos en sus condiciones de
          tratamiento. Google indica que Analytics no registra ni almacena las direcciones IP y que
          estas se descartan después de obtener datos geográficos aproximados y proteger el servicio.
          Puede consultarse más información en la <a href="https://support.google.com/analytics/answer/6004245?hl=es" rel="noreferrer" target="_blank">información de privacidad de Google Analytics</a>.
        </p>

        <h2>8. Derechos</h2>
        <p>
          La persona interesada puede solicitar el acceso, rectificación, supresión, oposición,
          limitación o portabilidad de sus datos escribiendo a
          {" "}<a href="mailto:privacidad@acutisinmobiliaria.com">privacidad@acutisinmobiliaria.com</a>.
          Si fuera necesario para proteger sus datos, podrá solicitarse información adicional para
          comprobar su identidad.
        </p>
        <p>
          También puede presentar una reclamación ante la
          {" "}<a href="https://www.aepd.es" rel="noreferrer" target="_blank">Agencia Española de Protección de Datos</a>.
        </p>

        <h2>9. Seguridad y actualización</h2>
        <p>
          Se aplicarán medidas técnicas y organizativas adecuadas al riesgo para proteger la
          información. Esta política se revisará cuando cambien los formularios, los proveedores o
          las finalidades del tratamiento.
        </p>

        <p><strong>Última actualización:</strong> 28 de octubre de 2026.</p>
      </div>
    </section>
  );
}
