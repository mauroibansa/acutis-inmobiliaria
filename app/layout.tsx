import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: { default: "ACUTIS Inmobiliaria | Campo de Gibraltar", template: "%s | ACUTIS Inmobiliaria" },
  description: "Estrategia inmobiliaria, venta e inversión en el Campo de Gibraltar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${serif.variable} ${sans.variable}`}><Header /><main>{children}</main><Footer /></body></html>;
}
