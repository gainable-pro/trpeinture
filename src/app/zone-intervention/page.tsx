import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import { cities } from "@/lib/cities";

export const metadata: Metadata = {
    title: "Zone d'Intervention Artisan Peintre | Eyguières, Salon, Alpilles (13)",
    description: "Découvrez les 30 communes couvertes par TR Peinture autour d'Eyguières, Salon-de-Provence, Miramas et Istres. Déplacement et devis gratuit au 06 35 23 81 07.",
    alternates: {
        canonical: "https://www.tr-peinture.com/zone-intervention",
    },
    openGraph: {
        title: "Zone d'Intervention Artisan Peintre (13) | TR Peinture",
        description: "Artisan peintre dans un rayon de 30 km autour d'Eyguières et Salon-de-Provence. Devis gratuit.",
        url: "https://www.tr-peinture.com/zone-intervention",
        siteName: "TR Peinture",
        locale: "fr_FR",
        type: "website",
    },
};

export default function ZonePage() {
    return (
        <>
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-slate-900/85 to-slate-900/60 z-0"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-sm font-semibold mb-6">
                        <MapPin size={16} /> Rayon de 30 km autour d&apos;Eyguières
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Zone d&apos;Intervention Peinture & Rénovation
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                        Basé à Eyguières (13430), j&apos;interviens sans frais de déplacement pour tous vos projets de peinture intérieure, pose de placo, isolation et sols dans les 30 communes ci-dessous.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            30 Villes et Villages Desservis
                        </h2>
                        <p className="text-slate-600">
                            Cliquez sur votre commune pour découvrir nos prestations et demander votre devis gratuit.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cities.map((city) => (
                            <Link
                                key={city.slug}
                                href={`/${city.slug}`}
                                className="group flex items-center justify-between p-6 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white group-hover:bg-primary group-hover:text-white rounded-xl flex items-center justify-center text-primary shrink-0 shadow-sm border border-slate-200/60 transition-colors">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors text-base">
                                            Peintre {city.name}
                                        </h3>
                                        <span className="text-xs text-slate-500 font-medium">Code postal : {city.zip}</span>
                                    </div>
                                </div>
                                <ArrowRight size={18} className="text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Votre commune n&apos;est pas listée ?</h3>
                        <p className="text-slate-600 text-sm mb-6">
                            J&apos;étudie toutes les demandes situées dans les Bouches-du-Rhône et les départements limitrophes.
                        </p>
                        <a
                            href="tel:0635238107"
                            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-primary/90 transition-all shadow-md"
                        >
                            <Phone size={16} /> Contactez-moi au 06 35 23 81 07
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
