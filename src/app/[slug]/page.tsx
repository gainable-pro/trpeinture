import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCityData, getAllCitySlugs, cities } from "@/lib/cities"; // Direct import for params
import { LeadForm } from "@/components/shared/LeadForm";
import { Process } from "@/components/home/Process";
import { Check, MapPin, Star, ArrowRight } from "lucide-react";

// Generate Static Params for SSG
export async function generateStaticParams() {
    return cities.map((city) => ({
        slug: city.slug,
    }));
}

// Dynamic Metadata
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const city = getCityData(params.slug);
    if (!city) return {};

    return {
        title: city.title,
        description: city.metaDesc,
    };
}

export default function CityPage({ params }: { params: { slug: string } }) {
    const city = getCityData(params.slug);

    if (!city) {
        notFound();
    }

    return (
        <>
            {/* City Hero */}
            <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Reusing the Main Hero Image but maybe we can vary it later */}
                    <Image
                        src="/images/hero-main.png"
                        alt={`Peintre à ${city.name} `}
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-20">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-6">
                            <MapPin size={14} /> Intervention sur {city.name} ({city.zip})
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {city.title}
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            {city.intro}
                        </p>
                        <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
                            <div className="flex text-yellow-400">
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                            </div>
                            <span>Excellent service local</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Services Presentation */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Vos travaux de peinture à {city.name}
                            </h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Habitant ou travaillant sur le secteur de {city.name}, je connais bien les contraintes locales et les types de logements (villas, appartements centre-ville, mas...).
                            </p>
                            <p className="text-slate-600 mb-8">
                                Je vous propose une prestation complète sans intermédiaire :
                            </p>

                            <div className="space-y-4">
                                <div className="flex gap-4 items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                        <span className="font-bold">1</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Peinture Intérieure</h4>
                                        <p className="text-sm text-slate-600">Murs, plafonds, finitions soignées pour vos pièces de vie.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                                        <span className="font-bold">2</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Placo & Isolation</h4>
                                        <p className="text-sm text-slate-600">Redistribution des pièces et confort thermique.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                        <span className="font-bold">3</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Sols & Parquets</h4>
                                        <p className="text-sm text-slate-600">Pose de parquet flottant ou sol souple.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Devis Gratuit à {city.name}</h3>
                            <p className="text-slate-600 mb-6">
                                Je me déplace gratuitement rue {city.name} pour évaluer votre chantier.
                            </p>
                            <LeadForm />
                        </div>
                    </div>
                </div>
            </section>

            <Process />

            {/* City Specific FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes à {city.name}</h2>
                    <div className="space-y-6">
                        {city.faq.map((item, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-2">{item.q}</h4>
                                <p className="text-slate-600 text-sm">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cross Linking / Near Cities */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h3 className="text-2xl font-bold mb-8">J'interviens aussi autour de {city.name}</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {city.nearCities.map((nearCity) => (
                            <Link
                                key={nearCity}
                                href={`/ peintre - ${nearCity.toLowerCase().replace(/ /g, '-')} `}
                                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-sm font-medium flex items-center gap-2"
                            >
                                <ArrowRight size={14} className="text-secondary" />
                                Peintre {nearCity}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-12">
                        <Link href="/zone-intervention" className="text-slate-400 hover:text-white underline underline-offset-4">
                            Voir toute la zone d'intervention
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
