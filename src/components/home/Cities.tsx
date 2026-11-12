import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/lib/cities";

// Top 12 priority cities for the homepage with verified slugs
const prioritySlugs = [
    "peintre-eyguieres",
    "peintre-salon-de-provence",
    "peintre-miramas",
    "peintre-istres",
    "peintre-saint-chamas",
    "peintre-lamanon",
    "peintre-senas",
    "peintre-grans",
    "peintre-pelissanne",
    "peintre-saint-remy-de-provence",
    "peintre-la-fare-les-oliviers",
    "peintre-mouries"
];

export function Cities() {
    const featuredCities = prioritySlugs
        .map(slug => cities.find(c => c.slug === slug))
        .filter((c): c is typeof cities[0] => Boolean(c));

    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
                            <MapPin size={14} /> Zone d'intervention locale
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Artisan peintre chez vous,<br />
                            <span className="text-secondary">dans un rayon de 30 km.</span>
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Basé à Eyguières (13430), je me déplace gratuitement pour vos devis de peinture, placo et sols dans tout le secteur des Alpilles, du Pays Salonais et du pourtour de l'Étang de Berre.
                        </p>
                        <Link
                            href="/zone-intervention"
                            className="inline-flex items-center gap-2 text-white font-semibold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors"
                        >
                            Voir les 30 communes desservies <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
                        <h3 className="font-semibold mb-6 flex items-center gap-2 text-white">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                            Villes prioritaires d'intervention
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {featuredCities.map((city) => (
                                <Link
                                    key={city.slug}
                                    href={`/${city.slug}`}
                                    className="text-sm text-slate-300 hover:text-white hover:bg-slate-700/80 px-3 py-2.5 rounded-lg transition-all border border-transparent hover:border-slate-600 flex items-center justify-between group"
                                >
                                    <span>{city.name}</span>
                                    <span className="text-[11px] text-slate-500 group-hover:text-secondary">{city.zip}</span>
                                </Link>
                            ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                            <span>+ Aurons, Velaux, Coudoux, Alleins, Lambesc...</span>
                            <Link href="/zone-intervention" className="text-secondary hover:underline font-medium">
                                Toutes les villes →
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
