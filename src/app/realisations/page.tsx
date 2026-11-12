import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Réalisations & Chantiers de Peinture (13) | TR Peinture Eyguières",
    description: "Découvrez nos chantiers livrés en images : peinture intérieure, plafonds, pose de parquets et placo à Eyguières, Salon-de-Provence et Miramas.",
    alternates: {
        canonical: "https://www.tr-peinture.com/realisations",
    },
    openGraph: {
        title: "Nos Réalisations | TR Peinture (13)",
        description: "Exemples de chantiers livrés : peintures intérieures, sols et rénovation dans les Bouches-du-Rhône.",
        url: "https://www.tr-peinture.com/realisations",
        siteName: "TR Peinture",
        locale: "fr_FR",
        type: "website",
    },
};

const projects = [
    {
        title: "Rénovation Peinture Villa Salon-de-Provence",
        category: "Peinture Intérieure",
        location: "Salon-de-Provence",
        image: "/images/service-peinture.png",
        description: "Ratissage complet et mise en peinture velours haut de gamme des pièces de vie et plafonds."
    },
    {
        title: "Pose Parquet Flottant & Plinthes Miramas",
        category: "Revêtements de Sol",
        location: "Miramas",
        image: "/images/service-revetements.png",
        description: "Pose d'un parquet stratifié avec sous-couche acoustique 20dB et plinthes assorties."
    },
    {
        title: "Création Cloisons & Doublage Isolant Eyguières",
        category: "Placo & Isolation",
        location: "Eyguières",
        image: "/images/service-placo.png",
        description: "Distribution d'une suite parentale avec dressing et isolation phonique renforcée."
    },
    {
        title: "Rénovation Complète Maison de Ville Istres",
        category: "Rénovation Complète",
        location: "Istres",
        image: "/images/service-renovation.png",
        description: "Restauration des murs après sinistre, faux-plafonds avec spots et peinture lessivable."
    },
];

export default function RealisationsPage() {
    return (
        <>
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-slate-900/85 to-slate-900/60 z-0"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
                    <nav className="flex items-center justify-center gap-2 text-xs text-slate-300 mb-6">
                        <Link href="/" className="hover:text-white">Accueil</Link>
                        <span>/</span>
                        <span className="text-secondary font-medium">Réalisations</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Nos Chantiers & Réalisations</h1>
                    <p className="text-lg md:text-xl text-slate-200">
                        Aperçu de nos réalisations de peinture intérieure, pose de parquet et placo dans les Bouches-du-Rhône.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm text-secondary text-xs font-bold px-3 py-1.5 rounded-full border border-slate-700">
                                        {project.category}
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-medium px-3 py-1.5 rounded-full">
                                        {project.location}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                    <div className="text-xs text-green-600 font-semibold flex items-center gap-1.5">
                                        <span>✓ Chantier réceptionné sans réserve</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">Vous avez un projet similaire ?</h3>
                        <p className="text-slate-600 text-sm mb-6">
                            Je me déplace gratuitement pour évaluer votre chantier et vous remettre un devis sous 24h.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="tel:0635238107"
                                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:bg-primary/90 transition-all shadow-md"
                            >
                                <Phone size={18} /> 06 35 23 81 07
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-white text-slate-800 border border-slate-300 px-8 py-3.5 rounded-full font-bold hover:bg-slate-100 transition-all"
                            >
                                Demander un devis en ligne <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
