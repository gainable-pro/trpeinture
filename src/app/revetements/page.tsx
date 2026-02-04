import Image from "next/image";
import Link from "next/link";
import { Layers, Box, CheckCircle, PenTool } from "lucide-react";
import { LeadForm } from "@/components/shared/LeadForm";
import { Process } from "@/components/home/Process";

export const metadata = {
    title: "Pose Parquet, Sol Vinyle & Revêtements | Eyguières - TR Peinture",
    description: "Pose de parquet flottant, sol stratifié, lames PVC clipsables et plinthes. Rénovation de sols pour un intérieur moderne et chaleureux à Salon & Miramas.",
};

export default function RevetementsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/service-revetements.png"
                        alt="Pose de parquet stratifié par un professionnel"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-secondary/60 to-secondary/30 z-10"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-20">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-script">
                            Revêtements de Sol
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            Le sol donne le ton de votre décoration.
                            Parquet chaleureux ou vinyle moderne, je pose vos revêtements avec précision et finitions soignées (plinthes, barres de seuil).
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                                <Layers size={16} className="text-secondary" /> Pose Flottante & Collée
                            </span>
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                                <CheckCircle size={16} className="text-secondary" /> Finitions Plinthes
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
                                Changez d'ambiance <br /><span className="text-primary">durablement.</span>
                            </h2>
                            <div className="prose prose-slate text-lg text-slate-600 mb-8">
                                <p>
                                    Un sol mal posé, c'est un sol qui grince, qui gondole ou qui s'écarte.
                                    Je prends le temps de préparer la surface (ragréage si besoin) et de poser la sous-couche adaptée pour un confort acoustique optimal.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <Box size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">Parquets Stratifiés & Contrecollés</h3>
                                        <p className="text-slate-600 text-sm">
                                            Le choix de l'élégance et de la résistance. Pose flottante avec sous-couche isolante. Idéal pour salons et chambres.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <Layers size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">Sols PVC & Vinyles (LVT)</h3>
                                        <p className="text-slate-600 text-sm">
                                            Des lames clipsables modernes, ultra-résistantes à l'eau et aux chocs. Parfait pour les cuisines, couloirs et pièces d'eau.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <PenTool size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">Ragréage & Préparation</h3>
                                        <p className="text-slate-600 text-sm">
                                            Si votre sol actuel n'est pas droit, je réalise un ragréage fibré pour obtenir une surface parfaitement plane avant la pose.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 sticky top-24">
                                <h3 className="text-2xl font-bold mb-6 text-slate-900">Devis Sol / Parquet</h3>
                                <p className="text-slate-600 mb-8">
                                    Envie de changer de sol ? Je vous conseille sur les matériaux adaptés à votre usage.
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

            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes - Sols</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Peut-on poser du parquet sur du carrelage ?</h3>
                            <p className="text-slate-600">
                                Oui, c'est tout à fait possible et très courant en rénovation. Il faut simplement s'assurer que le carrelage est plan et utiliser une sous-couche adaptée. Cela évite la casse de l'ancien sol.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Posez-vous les plinthes ?</h3>
                            <p className="text-slate-600">
                                Bien sûr. La pose des plinthes (assorties ou blanches à peindre) et des barres de seuil fait partie intégrante de la prestation pour une finition irréprochable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
