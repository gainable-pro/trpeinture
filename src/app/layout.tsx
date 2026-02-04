import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancing = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export const metadata: Metadata = {
  metadataBase: new URL('https://trpeinture.fr'),
  title: {
    default: "TR Peinture | Peintre en Bâtiment & Rénovation - Salon, Miramas, Eyguières",
    template: "%s | TR Peinture"
  },
  description: "Entreprise de peinture et rénovation intérieure/extérieure. Pose de placo, isolation, revêtements de sol. Devis gratuit et intervention rapide autour d'Eyguières.",
  openGraph: {
    title: "TR Peinture | Peintre en Bâtiment & Rénovation",
    description: "Expert en peinture, placo et sols. Devis gratuit sous 24h.",
    url: 'https://trpeinture.fr',
    siteName: 'TR Peinture',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={cn(inter.variable, dancing.variable, "font-sans min-h-screen flex flex-col bg-slate-50")}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
