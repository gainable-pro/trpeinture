import Image from "next/image";
import Link from "next/link";
import { Home, ClipboardList, Clock, Key } from "lucide-react";
import { LeadForm } from "@/components/shared/LeadForm";
import { Process } from "@/components/home/Process";

export const metadata = {
    title: "Rénovation Intérieure Complète | Eyguières - TR Peinture",
    description: "Rénovation d'appartements et maisons : peinture, sols, placo. Coordination de chantier pour un projet clé en main avant vente ou location.",
};

export default function RenovationPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/service-renovation.jpg"
                        alt="Rénovation complète"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent z-10"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-20">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Rénovation Complète
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Un seul interlocuteur pour transformer votre habitat.
                            De la démolition aux finitions, je gère votre chantier avec rigueur et propreté.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                                <Key size={16} className="text-secondary" /> Clé en main
                            </span>
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                                <Clock size={16} className="text-secondary" /> Respect des délais
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
                                Votre projet, <br /><span className="text-primary">sans le stress.</span>
                            </h2>
                            <div className="prose prose-slate text-lg text-slate-600 mb-8">
                                <p>
                                    Que ce soit pour une remise à neuf avant vente, un investissement locatif ou simplement pour moderniser votre résidence, la rénovation demande de l'organisation.
                                </p>
                                <p>
                                    Je coordonne l'ensemble des lots (peinture, sol, placo, petites réparations) pour vous livrer un chantier propre, dans les temps impartis.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <Home size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">Remise à neuf avant vente / location</h3>
                                        <p className="text-slate-600 text-sm">
                                            Un coup de blanc, un sol neuf : valorisez votre bien pour déclencher le coup de cœur. Intervention rapide entre deux locataires.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <ClipboardList size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">Coordination & Suivi</h3>
                                        <p className="text-slate-600 text-sm">
                                            Je suis votre unique point de contact. Pas de dilution de responsabilités. Je m'engage sur le résultat final.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl sticky top-24">
                                <h3 className="text-2xl font-bold mb-6">Projet de Rénovation ?</h3>
                                <p className="text-slate-300 mb-8">
                                    Discutons de vos besoins et de votre budget pour trouver les meilleures solutions techniques.
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
        </>
    );
}
