import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import { AnalyticsConsent } from "@/components/AnalyticsConsent";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600"] });
const siteUrl = "https://acutisinmobiliaria.com";
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${siteUrl}/#organization`,
  name: "ACUTIS Inmobiliaria",
  legalName: "Alejandro Ibanco Saborido",
  url: siteUrl,
  logo: `${siteUrl}/brand/ACUTIS-logo-02.svg`,
  image: `${siteUrl}/opengraph-image.png`,
  telephone: "+34645435228",
  email: "alejandro@acutisinmobiliaria.com",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61596006564630",
    "https://www.linkedin.com/company/acutis-inmobiliaria/",
    "https://www.tiktok.com/@acutisinmobiliaria",
    "https://www.instagram.com/acutisinmobiliaria/",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "C/ Regino Martínez, 3, 2.º A",
    postalCode: "11201",
    addressLocality: "Algeciras",
    addressRegion: "Cádiz",
    addressCountry: "ES",
  },
  areaServed: ["Algeciras", "Los Barrios", "La Línea de la Concepción", "San Roque", "Guadiaro", "Sotogrande", "Campo de Gibraltar"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "ACUTIS Inmobiliaria | Campo de Gibraltar", template: "%s | ACUTIS Inmobiliaria" },
  description: "Estrategia inmobiliaria, venta e inversión en el Campo de Gibraltar.",
  icons: {
    icon: "/brand/ACUTIS-logo-02.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" id="top"><body className={`${serif.variable} ${sans.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} /><Header /><main>{children}</main><Footer /><FloatingWhatsapp /><AnalyticsConsent measurementId="G-K2GPJG4JLF" /></body></html>;
}
