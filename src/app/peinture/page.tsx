import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Paintbrush, Shield, Home } from "lucide-react";
import { LeadForm } from "@/components/shared/LeadForm";
import { Process } from "@/components/home/Process";

export const metadata: Metadata = {
    title: "Artisan Peintre en Bâtiment Intérieur & Extérieur (13) | TR Peinture",
    description: "Travaux de peinture soignés : murs, plafonds, boiseries, façades. Finitions mat, velours, satin. Préparation rigoureuse et chantier propre à Eyguières, Salon et alentours.",
    alternates: {
        canonical: "https://www.tr-peinture.com/peinture",
    },
    openGraph: {
        title: "Peinture Intérieure & Extérieure | TR Peinture (13)",
        description: "Peintre professionnel : finitions impeccables, peintures dépolluantes, préparation soignée. Devis gratuit sous 24h.",
        url: "https://www.tr-peinture.com/peinture",
        siteName: "TR Peinture",
        locale: "fr_FR",
        type: "website",
    },
};

export default function PeinturePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Peinture Intérieure et Extérieure",
        "description": "Travaux de peinture professionnelle pour murs, plafonds, boiseries et façades avec préparation soignée des supports.",
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "TR Peinture",
            "telephone": "+33635238107",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Eyguières",
                "postalCode": "13430",
                "addressCountry": "FR"
            }
        },
        "url": "https://www.tr-peinture.com/peinture"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/service-peinture.png"
                        alt="Artisan peintre en bâtiment application peinture murale pro"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-slate-900/85 to-slate-900/60 z-10"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-20">
                    <div className="max-w-3xl">
                        <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6">
                            <Link href="/" className="hover:text-white">Accueil</Link>
                            <span>/</span>
                            <span className="text-secondary font-medium">Peinture</span>
                        </nav>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Peinture Intérieure & Extérieure
                        </h1>
                        <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
                            Redonnez vie à vos espaces avec des finitions impeccables.
                            Du choix de la teinte à l&apos;application finale, je garantis un résultat durable et esthétique.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                                <Shield size={16} className="text-secondary" /> Garantie Décennale 10 ans
                            </span>
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                                <Paintbrush size={16} className="text-secondary" /> Finitions Soignées Pro
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro & Prestations */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Une peinture qui dure, <br /><span className="text-primary">des murs qui respirent.</span>
                            </h2>
                            <div className="prose prose-slate text-lg text-slate-600 mb-8">
                                <p>
                                    La peinture n&apos;est pas qu&apos;une question de couleur. C&apos;est avant tout la <strong>préparation des supports</strong> qui fait la longévité du résultat.
                                </p>
                                <p>
                                    Avant chaque coup de rouleau, je m&apos;assure que vos murs sont sains, lisses et prêts à recevoir la finition. Je travaille avec des peintures professionnelles (Seigneurie, Tollens) pour un rendu profond et résistant.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <Home className="text-primary" size={20} /> Intérieur
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Murs & Plafonds</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Boiseries & Portes</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Escaliers & Garde-corps</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Finitions Mat / Velours / Satin</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <Shield className="text-primary" size={20} /> Extérieur
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Ravalement de Façades</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Volets & Portails</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Dessous de toit</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Traitement hydrofuge</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-lg sticky top-28">
                                <h3 className="text-2xl font-bold mb-3 text-slate-900">Obtenir un devis Peinture</h3>
                                <p className="text-slate-600 mb-6 text-sm">
                                    Réponse sous 24h pour vos projets à Eyguières, Salon-de-Provence, Miramas, Istres et alentours.
                                </p>
                                <LeadForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Process />

            {/* FAQ Peinture Spécifique */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Questions fréquentes - Peinture</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-lg mb-2 text-slate-900">Quel type de finition choisir (Mat, Velours, Satin) ?</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Le <strong>Mat</strong> est idéal pour les plafonds car il masque les défauts.
                                Le <strong>Velours</strong> est le compromis parfait, soyeux et lessivable (top pour salon/chambres).
                                Le <strong>Satin</strong> est plus brillant et très résistant, recommandé pour les murs très sollicités (couloirs, cuisine).
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-lg mb-2 text-slate-900">Traitez-vous les dégâts des eaux ?</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Oui. Avant de peindre, je traite l&apos;humidité, j&apos;applique un durcisseur si nécessaire et une sous-couche bloquante pour éviter que les auréoles ne ressortent.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="font-bold text-lg mb-2 text-slate-900">Faut-il partir pendant les travaux ?</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Non, ce n&apos;est pas obligatoire. J&apos;utilise des peintures acryliques professionnelles à faible odeur (COV A+). Le chantier est nettoyé chaque soir pour limiter la gêne.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
