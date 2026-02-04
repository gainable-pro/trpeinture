import Image from "next/image";
import Link from "next/link";
import { Check, Paintbrush, Shield, Home } from "lucide-react";
import { LeadForm } from "@/components/shared/LeadForm";
import { Process } from "@/components/home/Process";

export const metadata = {
    title: "Peintre Bâtiment Intérieur & Extérieur | Eyguières - TR Peinture",
    description: "Travaux de peinture soignés : murs, plafonds, boiseries, façades. Finitions mat, velours, satin. Préparation rigoureuse et chantier propre à Eyguières et alentours.",
};

export default function PeinturePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/service-peinture.png"
                        alt="Peintre en bâtiment application peinture murale"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-secondary/60 to-secondary/30 z-10"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-20">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-script">
                            Peinture Intérieure & Extérieure
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Redonnez vie à vos espaces avec des finitions impeccables.
                            Du choix de la teinte à l'application finale, je garantis un résultat durable et esthétique.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                                <Shield size={16} className="text-secondary" /> Garantie Décennale
                            </span>
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                                <Paintbrush size={16} className="text-secondary" /> Finitions Soignées
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
                                    La peinture n'est pas qu'une question de couleur. C'est avant tout la <strong>préparation des supports</strong> qui fait la longévité du résultat.
                                </p>
                                <p>
                                    Avant chaque coup de rouleau, je m'assure que vos murs sont sains, lisses et prêts à recevoir la finition. Je travaille avec des peintures professionnelles (Seigneurie, Tollens) pour un rendu profond et résistant.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
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

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
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
                            {/* Form Container */}
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 sticky top-24">
                                <h3 className="text-2xl font-bold mb-6 text-slate-900">Obtenir un devis Peinture</h3>
                                <p className="text-slate-600 mb-8">
                                    Réponse rapide pour vos projets sur Salon-de-Provence, Miramas, Istres et alentours.
                                </p>
                                <div className="">
                                    <LeadForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Process />

            {/* FAQ Peinture Spécifique */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes - Peinture</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Quel type de finition choisir (Mat, Velours, Satin) ?</h3>
                            <p className="text-slate-600">
                                Le <strong>Mat</strong> est idéal pour les plafonds car il masque les défauts.
                                Le <strong>Velours</strong> est le compromis parfait, soyeux et lessivable (top pour salon/chambres).
                                Le <strong>Satin</strong> est plus brillant et très résistant, recommandé pour les murs très sollicités (couloirs, cuisine).
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Traitez-vous les dégâts des eaux ?</h3>
                            <p className="text-slate-600">
                                Oui. Avant de peindre, je traite l'humidité, j'applique un durcisseur si nécessaire et une sous-couche bloquante pour éviter que les auréoles ne ressortent.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Faut-il partir pendant les travaux ?</h3>
                            <p className="text-slate-600">
                                Non, ce n'est pas obligatoire. J'utilise des peintures acryliques professionnelles à faible odeur (COV A+). Le chantier est nettoyé chaque soir pour limiter la gêne.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
