import Link from "next/link";
import { Paintbrush, Hammer, Layers, Home, ArrowRight } from "lucide-react";

const services = [
    {
        title: "Peinture Intérieure & Déco",
        description: "Murs, plafonds, boiseries. Finitions mates, velours ou satinées. Préparation minutieuse des supports.",
        icon: Paintbrush,
        href: "/peinture",
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Placo & Isolation",
        description: "Création de cloisons, doublage, faux-plafonds. Isolation thermique et phonique. Bandes et ratissage.",
        icon: Hammer,
        href: "/placo-isolation",
        color: "bg-amber-50 text-amber-600",
    },
    {
        title: "Revêtements de Sol",
        description: "Pose de parquet flottant, stratifié, lames PVC clipsables (LVT) et plinthes. Rendu impeccable.",
        icon: Layers,
        href: "/revetements",
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        title: "Rénovation Générale",
        description: "Remise à neuf d'appartements et maisons. Coordination de chantier. Idéal avant vente ou location.",
        icon: Home,
        href: "/renovation",
        color: "bg-purple-50 text-purple-600",
    },
];

export function Services() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Mes expertises pour votre intérieur
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Un savoir-faire complet pour transformer votre habitat, du sol au plafond.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="group block p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:border-slate-200 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                                <service.icon size={28} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="flex items-center text-sm font-semibold text-primary">
                                En savoir plus
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
