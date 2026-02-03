import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/lib/cities";

export const metadata = {
    title: "Zone d'intervention Peintre | Eyguières, Salon, Miramas",
    description: "Liste des villes desservies par TR Peinture autour d'Eyguières (13). Déplacement gratuit pour devis.",
};

export default function ZonePage() {
    return (
        <>
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-secondary/60 to-secondary/30 z-0"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-script">Zone d'Intervention</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Je me déplace gratuitement dans un rayon de 30km autour d'Eyguières.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cities.map((city) => (
                            <Link
                                key={city.slug}
                                href={`/peintre-${city.slug.replace('peintre-', '')}`}
                                className="group flex items-center justify-between p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary shrink-0 shadow-sm border border-slate-100">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{city.name}</h3>
                                        <span className="text-sm text-slate-500">{city.zip}</span>
                                    </div>
                                </div>
                                <ArrowRight size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
