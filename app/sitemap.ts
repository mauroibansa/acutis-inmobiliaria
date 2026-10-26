import type { MetadataRoute } from "next";

const siteUrl = "https://acutisinmobiliaria.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/contacto", "/aviso-legal", "/privacidad", "/cookies"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "yearly",
    priority: path === "" ? 1 : path === "/contacto" ? 0.7 : 0.3,
  }));
}
