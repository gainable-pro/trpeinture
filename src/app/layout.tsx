import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tr-peinture.com"),
  title: {
    default: "TR Peinture | Artisan Peintre en Bâtiment - Eyguières, Salon, Miramas",
    template: "%s | TR Peinture"
  },
  description: "Artisan peintre en bâtiment et rénovation intérieure/extérieure à Eyguières, Salon-de-Provence et alentours (13). Peinture, placo, isolation, parquets. Devis gratuit sous 24h au 06 35 23 81 07.",
  keywords: [
    "artisan peintre",
    "peintre en batiment",
    "peintre salon de provence",
    "peintre eyguieres",
    "peintre miramas",
    "peintre istres",
    "renovation peinture",
    "placo isolation",
    "revetement sol parquet",
    "devis peintre 13"
  ],
  authors: [{ name: "TR Peinture", url: "https://www.tr-peinture.com" }],
  creator: "TR Peinture",
  publisher: "TR Peinture",
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
  openGraph: {
    title: "TR Peinture | Artisan Peintre en Bâtiment & Rénovation (13)",
    description: "Expert peinture intérieure, placo et sols à Eyguières, Salon-de-Provence et alentours. Devis gratuit sous 24h.",
    url: "https://www.tr-peinture.com",
    siteName: "TR Peinture",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.tr-peinture.com/images/hero-planning.jpg",
        width: 1200,
        height: 630,
        alt: "Artisan Peintre en Bâtiment TR Peinture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TR Peinture | Artisan Peintre en Bâtiment (13)",
    description: "Peinture soignée, placo, isolation et revêtements de sol à Eyguières et alentours. Devis gratuit au 06 35 23 81 07.",
    images: ["https://www.tr-peinture.com/images/hero-planning.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={cn(inter.variable, dancing.variable, "font-sans min-h-screen flex flex-col bg-slate-50 text-slate-800")}>
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
