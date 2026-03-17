import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const gudlak = localFont({
  src: [
    { path: "../fonts/GCGudlakDemo-Thin-BF695cd59bbba72.ttf", weight: "100" },
    { path: "../fonts/GCGudlakDemo-ExtraLight-BF695cd59ba678a.ttf", weight: "200" },
    { path: "../fonts/GCGudlakDemo-Light-BF695cd59b5a172.ttf", weight: "300" },
    { path: "../fonts/GCGudlakDemo-Regular-BF695cd59bb1a11.ttf", weight: "400" },
    { path: "../fonts/GCGudlakDemo-Medium-BF695cd59b7df0f.ttf", weight: "500" },
    { path: "../fonts/GCGudlakDemo-SemiBold-BF695cd59bc5211.ttf", weight: "600" },
    { path: "../fonts/GCGudlakDemo-Bold-BF695cd59b3f47c.ttf", weight: "700" },
    { path: "../fonts/GCGudlakDemo-ExtraBold-BF695cd59b73d76.ttf", weight: "800" },
  ],
  variable: "--font-space",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ramp.academy"),
  title: {
    default:
      "RAMP Academy — Crie Apps Lucrativos com IA | Curso de SaaS sem Código",
    template: "%s | RAMP Academy",
  },
  description:
    "Aprenda a criar apps lucrativos com inteligência artificial usando a plataforma Base44. Método validado com 500+ alunos em 12+ países. 21 templates prontos. Comece por R$37.",
  keywords: [
    "criar app com IA",
    "app lucrativo",
    "SaaS sem código",
    "curso de apps",
    "RAMP Academy",
    "Base44",
    "criar aplicativo com inteligência artificial",
    "ganhar dinheiro com apps",
    "construir SaaS",
    "app sem programar",
    "renda com aplicativos",
    "criar app do zero",
    "faturar com app",
    "curso Base44",
    "Wix Base44",
    "no-code SaaS",
    "primeiro app lucrativo",
  ],
  authors: [{ name: "Pedro", url: "https://ramp.academy" }],
  creator: "RAMP Academy",
  publisher: "RAMP Academy",
  openGraph: {
    title: "RAMP Academy — Crie Apps Lucrativos com IA",
    description:
      "O ecossistema completo para criar, lançar e faturar com seu próprio SaaS usando IA. Método validado com 500+ alunos. Comece por R$37.",
    url: "https://ramp.academy",
    siteName: "RAMP Academy",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RAMP Academy — Construa Apps Lucrativos com IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAMP Academy — Crie Apps Lucrativos com IA",
    description:
      "Crie apps lucrativos com IA. Método validado com 500+ alunos em 12+ países. Comece por R$37.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ramp.academy",
  },
  category: "education",
  verification: {
    // Add these when you have the verification codes:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <JsonLd />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body
        className={`${figtree.variable} ${fraunces.variable} ${gudlak.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
