import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hammer, Scale, Thermometer, Volume2, Check } from "lucide-react";
import { LeadForm } from "@/components/shared/LeadForm";
import { Process } from "@/components/home/Process";

export const metadata: Metadata = {
    title: "Plaquiste & Isolation Phonique / Thermique | Salon, Eyguières - TR Peinture",
    description: "Pose de placo, cloisons, faux-plafonds et isolation thermique à Salon-de-Provence, Eyguières et alentours. Bandes à joint et ratissage. Devis gratuit.",
    alternates: {
        canonical: "https://www.tr-peinture.com/placo-isolation",
    },
    openGraph: {
        title: "Plaquiste & Isolation | TR Peinture (13)",
        description: "Pose de plaques de plâtre BA13, doublage isolant, cloisons et faux-plafonds. Devis gratuit sous 24h.",
        url: "https://www.tr-peinture.com/placo-isolation",
        siteName: "TR Peinture",
        locale: "fr_FR",
        type: "website",
    },
};

export default function PlacoPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/service-placo.png"
                        alt="Pose de placo et isolation thermique artisan plaquiste"
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
                            <span className="text-secondary font-medium">Placo & Isolation</span>
                        </nav>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Placo & Isolation Thermique / Phonique
                        </h1>
                        <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
                            Modifiez vos espaces et gagnez en confort thermique.
                            Création de pièces, doublage isolant et faux-plafonds avec des finitions prêtes à peindre.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                                <Thermometer size={16} className="text-secondary" /> Confort Thermique
                            </span>
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                                <Volume2 size={16} className="text-secondary" /> Isolation Acoustique
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Un aménagement sur-mesure, <br /><span className="text-primary">des économies d&apos;énergie.</span>
                            </h2>
                            <div className="prose prose-slate text-lg text-slate-600 mb-8">
                                <p>
                                    Le plâtre est le matériau idéal pour redistribuer vos pièces ou améliorer l&apos;efficacité énergétique de votre logement.
                                </p>
                                <p>
                                    Je réalise la pose d&apos;ossatures métalliques, l&apos;incorporation de laines minérales (verre ou roche) et le vissage des plaques BA13. L&apos;application des bandes à joint et le ratissage sont exécutés avec une précision millimétrique pour un support lisse prêt à peindre.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <Hammer className="text-primary" size={20} /> Aménagement
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Cloisons de distribution</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Faux-plafonds suspendus</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Création de placards et niches</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Bandes à joint et ratissage</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <Scale className="text-primary" size={20} /> Isolation
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Doublage thermique de murs</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Laine de verre & laine de roche</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Isolation phonique entre pièces</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Plaques hydrofuges (salles d&apos;eau)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-lg sticky top-28">
                                <h3 className="text-2xl font-bold mb-3 text-slate-900">Devis Placo & Isolation</h3>
                                <p className="text-slate-600 mb-6 text-sm">
                                    Intervention rapide à Eyguières, Salon-de-Provence, Miramas, Istres et alentours.
                                </p>
                                <LeadForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Process />
        </>
    );
}
