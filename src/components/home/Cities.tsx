import Link from "next/link";
import { MapPin } from "lucide-react";

// Top 12 priority cities for the homepage (full list will be on dedicated page)
const cities = [
    "Salon-de-Provence", "Miramas", "Istres", "Eyguières",
    "Saint-Chamas", "Lamanon", "Sénas", "Grans",
    "Pélissanne", "La Fare-les-Oliviers", "Saint-Rémy-de-Provence", "Mouriès"
];

export function Cities() {
    return (
        <section className="py-20 bg-slate-900 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
                            <MapPin size={14} /> Zone d'intervention
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            J'interviens chez vous,<br />
                            <span className="text-slate-400">dans un rayon de 30km.</span>
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Basé à Eyguières, je me déplace gratuitement pour les devis dans tout le secteur des Alpilles et de l'Étang de Berre.
                        </p>
                        <Link
                            href="/zone-intervention"
                            className="text-white font-semibold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors"
                        >
                            Voir la carte complète →
                        </Link>
                    </div>

                    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                        <h3 className="font-semibold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Villes principales desservies
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {cities.map((city) => (
                                <Link
                                    key={city}
                                    href={`/peintre-${city.toLowerCase().replace(/ /g, '-')}`} // Basic slugify
                                    className="text-sm text-slate-400 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-lg transition-all"
                                >
                                    {city}
                                </Link>
                            ))}
                        </div>
                        <p className="mt-6 text-xs text-slate-500 text-center font-medium">
                            + Aurons, Velaux, Ventabren, Berre-l'Étang...
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
