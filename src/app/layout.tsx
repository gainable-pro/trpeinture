import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TR Peinture | Peintre en Bâtiment & Rénovation - Salon, Miramas, Eyguières",
  description: "Entreprise de peinture et rénovation intérieure/extérieure. Pose de placo, isolation, revêtements de sol. Devis gratuit et intervention rapide autour d'Eyguières.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={cn(inter.className, "min-h-screen flex flex-col bg-slate-50")}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
