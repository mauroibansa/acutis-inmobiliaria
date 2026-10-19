import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
    qualities: [75, 90],
  },
  async redirects() {
    return [
      { source: "/vender", destination: "/#formulario-venta", permanent: false },
      { source: "/valoracion", destination: "/#formulario-venta", permanent: false },
      { source: "/nosotros", destination: "/#nosotros", permanent: false },
      { source: "/inversion", destination: "/#solicitud-inversores", permanent: false },
      { source: "/propiedades", destination: "/#formulario-compra", permanent: false },
      { source: "/propiedades/:slug", destination: "/#formulario-compra", permanent: false },
    ];
  },
};

export default nextConfig;
