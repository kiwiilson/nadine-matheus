import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nadine & Matheus — Save the Date",
  description: "27 de maio de 2027 · Espaço Italia · Apolinário",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}