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

        <h2>1. Uso actual de cookies</h2>
        <p>
          Este sitio no utiliza actualmente cookies de analítica, publicidad o elaboración de
          perfiles. Por ese motivo no se muestra un panel de consentimiento para cookies no
          necesarias.
        </p>

        <h2>2. Cookies técnicas</h2>
        <p>
          La infraestructura técnica podrá utilizar, cuando resulte imprescindible, cookies o
          tecnologías equivalentes necesarias para prestar el servicio, mantener la seguridad o
          recordar una acción solicitada por la persona usuaria. Estas tecnologías no se utilizan
          con fines publicitarios.
        </p>

        <h2>3. Cambios futuros</h2>
        <p>
          Antes de incorporar herramientas de medición, publicidad u otros servicios que utilicen
          cookies no necesarias, se actualizará esta política y se habilitará un mecanismo para
          aceptar, rechazar y configurar su uso.
        </p>

        <h2>4. Configuración del navegador</h2>
        <p>
          La persona usuaria puede consultar, bloquear o eliminar cookies desde la configuración de
          su navegador. El bloqueo de tecnologías estrictamente necesarias podría afectar al
          funcionamiento de algunas características.
        </p>

        <p><strong>Última actualización:</strong> 19 de octubre de 2026.</p>
      </div>
    </section>
  );
}
