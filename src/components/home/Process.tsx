import { ClipboardCheck, Shield, PenTool, PaintBucket, Search } from "lucide-react";

const steps = [
    {
        icon: ClipboardCheck,
        title: "1. Visite & Devis",
        desc: "Déplacement gratuit pour évaluer les travaux et conseils techniques."
    },
    {
        icon: Shield,
        title: "2. Protection",
        desc: "Bâchage complet des sols et meubles. Zéro poussière hors zone."
    },
    {
        icon: PenTool,
        title: "3. Préparation",
        desc: "Ponçage, enduisage, rebouchage. La clé d'une finition parfaite."
    },
    {
        icon: PaintBucket,
        title: "4. Application",
        desc: "2 couches de peinture premium (Seigneurie, Tollens) ou pose soignée."
    },
    {
        icon: Search,
        title: "5. Contrôle & Nettoyage",
        desc: "Vérification des finitions avec vous et nettoyage complet."
    }
];

export function Process() {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Un chantier maîtrisé de A à Z</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Pas de surprise. Juste un travail de pro, propre et organisé.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex flex-col items-center text-center">
                            {/* Connector Line (Desktop) */}
                            {idx < steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-slate-200 -z-10"></div>
                            )}

                            <div className="w-16 h-16 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-primary mb-6 shadow-sm z-10">
                                <step.icon size={28} />
                            </div>

                            <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
