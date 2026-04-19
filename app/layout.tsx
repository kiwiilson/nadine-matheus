import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nadine & Matheus — Save the Date",
  description: "27 de maio de 2027 · Espaço Italia · Apolinário",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

const parisienne = localFont({
  src: "../public/fonts/Parisienne-Regular.ttf",
  variable: "--font-parisienne",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${parisienne.variable}`}>
      <body>{children}</body>
    </html>
  );
}