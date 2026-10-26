import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600"] });
const siteUrl = "https://acutisinmobiliaria.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "ACUTIS Inmobiliaria | Campo de Gibraltar", template: "%s | ACUTIS Inmobiliaria" },
  description: "Estrategia inmobiliaria, venta e inversión en el Campo de Gibraltar.",
  icons: {
    icon: "/brand/ACUTIS-logo-02.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${serif.variable} ${sans.variable}`}><Header /><main>{children}</main><Footer /><FloatingWhatsapp /></body></html>;
}
