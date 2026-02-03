import Image from "next/image";
import Link from "next/link";
import { Hammer, Scale, Thermometer, Volume2 } from "lucide-react";
import { LeadForm } from "@/components/shared/LeadForm";
import { Process } from "@/components/home/Process";

export const metadata = {
    title: "Plaquiste & Isolation Phonique/Thermique | Salon-de-Provence - TR Peinture",
    description: "Pose de placo, cloisons, faux-plafonds et isolation (laine de verre, roche) à Salon et alentours. Bandes à joint et ratissage pour des murs parfaits.",
};

export default function PlacoPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/service-placo.jpg"
                        alt="Pose de placo et isolation"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent z-10"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-20">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Placo & Isolation
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Modifiez vos espaces et gagnez en confort.
                            Création de pièces, doublage isolant et faux-plafonds avec des finitions prêtes à peindre.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                                <Thermometer size={16} className="text-secondary" /> Confort Thermique
                            </span>
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                                <Volume2 size={16} className="text-secondary" /> Silence (Phonique)
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
                                Des murs droits, <br /><span className="text-primary">une isolation performante.</span>
                            </h2>
                            <div className="prose prose-slate text-lg text-slate-600 mb-8">
                                <p>
                                    Le placo permet de redéfinir les volumes de votre intérieur rapidement. Mais c'est la qualité des <strong>bandes à joint</strong> et du <strong>ratissage</strong> (lissage complet) qui fera toute la différence une fois la peinture appliquée.
                                </p>
                                <p>
                                    Je réalise l'ensemble : du montage de l'ossature métallique à la finition parfaite, prête à peindre.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <Hammer size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">Cloisons & Doublage</h3>
                                        <p className="text-slate-600 text-sm">
                                            Séparation de pièces, création de placards, suites parentales. Utilisation de plaques hydrofuges (vertes) pour les salles de bains.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <Thermometer size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">Isolation Intérieure</h3>
                                        <p className="text-slate-600 text-sm">
                                            Pose de laine de verre ou laine de roche (GR32) pour optimiser votre performance énergétique et réduire vos factures de chauffage.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <Scale size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">Finitions Impeccables</h3>
                                        <p className="text-slate-600 text-sm">
                                            Bandes armées pour les angles, ratissage complet ou partiel pour effacer les spectres. Vos murs sont parfaitement lisses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl sticky top-24">
                                <h3 className="text-2xl font-bold mb-6">Devis Placo / Isolation</h3>
                                <p className="text-slate-300 mb-8">
                                    Vous avez un projet d'aménagement ? Je me déplace pour vérifier la faisabilité technique.
                                </p>
                                <div className="bg-white rounded-xl p-1">
                                    <LeadForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Process />

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes - Placo</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Quel isolant choisir pour une chambre ?</h3>
                            <p className="text-slate-600">
                                Pour une cloison séparative, je recommande une laine spécifique phonique (type PAR Phonic) qui réduit considérablement les bruits entre les pièces.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Faites-vous le "ratissage" ?</h3>
                            <p className="text-slate-600">
                                Oui, c'est ma spécialité de peintre-plaquiste. Le ratissage consiste à enduire la totalité du mur (pas juste les bandes) pour un rendu "billard", lisse et parfait.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
