import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Layers, CheckCircle, Check, Shield } from "lucide-react";
import { LeadForm } from "@/components/shared/LeadForm";
import { Process } from "@/components/home/Process";

export const metadata: Metadata = {
    title: "Pose Parquet, Sols Vinyles LVT & Revêtements (13) | TR Peinture",
    description: "Pose professionnelle de parquet flottant, sol stratifié, lames PVC clipsables (LVT) et plinthes à Eyguières, Salon, Miramas et Istres. Devis gratuit.",
    alternates: {
        canonical: "https://www.tr-peinture.com/revetements",
    },
    openGraph: {
        title: "Pose de Parquet & Sols Souples | TR Peinture (13)",
        description: "Pose soignée de parquets et sols souples avec plinthes et barres de seuil. Devis gratuit sous 24h.",
        url: "https://www.tr-peinture.com/revetements",
        siteName: "TR Peinture",
        locale: "fr_FR",
        type: "website",
    },
};

export default function RevetementsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/service-revetements.png"
                        alt="Pose de parquet stratifié et sol vinyle par un professionnel"
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
                            <span className="text-secondary font-medium">Revêtements de sol</span>
                        </nav>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Pose de Parquet & Revêtements de Sol
                        </h1>
                        <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
                            Le sol donne le ton de votre décoration.
                            Parquet chaleureux ou vinyle moderne, je pose vos revêtements avec précision et finitions soignées (plinthes, barres de seuil).
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                                <Layers size={16} className="text-secondary" /> Pose Flottante & Clipsable
                            </span>
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                                <CheckCircle size={16} className="text-secondary" /> Finitions Plinthes Impeccables
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
                                Un sol durable, <br /><span className="text-primary">posé dans les règles de l&apos;art.</span>
                            </h2>
                            <div className="prose prose-slate text-lg text-slate-600 mb-8">
                                <p>
                                    La réussite d&apos;un revêtement de sol dépend avant tout de la planéité du support et du respect des jeux de dilatation.
                                </p>
                                <p>
                                    Avant toute pose, je vérifie le sol (ragréage si nécessaire), installe la sous-couche acoustique appropriée et découpe minutieusement chaque lame autour des huisseries et tuyauteries.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <Layers className="text-primary" size={20} /> Parquets
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Parquet flottant stratifié</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Parquet contrecollé chêne</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Sous-couches phoniques</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Plinthes bois et MDF assorties</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <Shield className="text-primary" size={20} /> Sols Souples LVT
                                    </h3>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Lames vinyles clipsables (LVT)</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> 100% étanches pour pièces d&apos;eau</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Imitation bois et béton ciré</li>
                                        <li className="flex items-start gap-2"><Check size={16} className="text-green-500 mt-1" /> Barres de seuil et finitions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-lg sticky top-28">
                                <h3 className="text-2xl font-bold mb-3 text-slate-900">Devis Revêtements de Sol</h3>
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
