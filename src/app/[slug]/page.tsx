import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCityData, getAllCitySlugs, getNearCitiesObjects } from "@/lib/cities";
import { LeadForm } from "@/components/shared/LeadForm";
import { ZigZagSection } from "@/components/layout/ZigZagSection";
import { Process } from "@/components/home/Process";
import { Check, MapPin, Star, ArrowRight, Phone, Shield, Award, Clock } from "lucide-react";

// Generate Static Params for SSG
export async function generateStaticParams() {
    return getAllCitySlugs().map((slug) => ({
        slug,
    }));
}

// Dynamic Metadata
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const city = getCityData(params.slug);
    if (!city) return {};

    const pageUrl = `https://www.tr-peinture.com/${city.slug}`;

    return {
        title: city.title,
        description: city.metaDesc,
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            title: city.title,
            description: city.metaDesc,
            url: pageUrl,
            siteName: "TR Peinture",
            locale: "fr_FR",
            type: "website",
            images: [
                {
                    url: "https://www.tr-peinture.com/images/hero-planning.jpg",
                    width: 1200,
                    height: 630,
                    alt: `Artisan Peintre à ${city.name} - TR Peinture`,
                },
            ],
        },
    };
}

export default async function CityPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const city = getCityData(params.slug);

    if (!city) {
        notFound();
    }

    const pageUrl = `https://www.tr-peinture.com/${city.slug}`;
    const nearCitiesData = getNearCitiesObjects(city.nearCities);

    // Schema: Service + LocalBusiness Provider
    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        "name": `Peintre en bâtiment à ${city.name}`,
        "serviceType": "Travaux de peinture et rénovation",
        "description": city.intro,
        "url": pageUrl,
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "name": "TR Peinture",
            "telephone": "+33635238107",
            "email": "contact@tr-peinture.com",
            "priceRange": "€€",
            "hasMap": "https://share.google/RcDbGqPUaQXWWsvLt",
            "sameAs": [
                "https://share.google/RcDbGqPUaQXWWsvLt"
            ],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rue Calade",
                "addressLocality": "Eyguières",
                "postalCode": "13430",
                "addressCountry": "FR"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": city.name,
            "postalCode": city.zip
        }
    };

    // Schema: Breadcrumb
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://www.tr-peinture.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Zone d'intervention",
                "item": "https://www.tr-peinture.com/zone-intervention"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `Peintre ${city.name}`,
                "item": pageUrl
            }
        ]
    };

    // Schema: FAQPage
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": city.faq.map((item) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* City Hero */}
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-main.png"
                        alt={`Artisan peintre en bâtiment intervenant à ${city.name} (${city.zip})`}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-slate-900/85 to-slate-900/60 z-10"></div>
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-20">
                    <div className="max-w-3xl">
                        {/* Fil d'Ariane visuel */}
                        <nav className="flex items-center gap-2 text-xs text-slate-300 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                            <span>/</span>
                            <Link href="/zone-intervention" className="hover:text-white transition-colors">Zone d&apos;intervention</Link>
                            <span>/</span>
                            <span className="text-secondary font-medium">{city.name}</span>
                        </nav>

                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-sm font-semibold mb-6">
                            <MapPin size={16} /> Artisan Peintre à {city.name} ({city.zip})
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                            Artisan Peintre en Bâtiment à {city.name}
                        </h1>

                        <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                            {city.intro}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a
                                href="tel:0635238107"
                                className="bg-primary text-white border-2 border-primary px-8 py-3.5 rounded-full font-bold text-base hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-lg"
                            >
                                <Phone size={20} />
                                06 35 23 81 07
                            </a>
                            <a
                                href="#devis-local"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-3.5 rounded-full font-semibold text-base transition-all"
                            >
                                Devis gratuit sous 24h
                                <ArrowRight size={18} />
                            </a>
                        </div>

                        {/* Reassurance points */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 font-medium">
                            <a
                                href="https://share.google/RcDbGqPUaQXWWsvLt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 hover:text-white transition-colors"
                            >
                                <div className="text-yellow-400 flex text-xs">★★★★★</div>
                                <span className="font-semibold text-white">5.0/5 sur Google</span>
                                <span className="text-xs text-slate-400">(30 avis)</span>
                            </a>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-secondary" />
                                <span>Déplacement gratuit</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield size={16} className="text-secondary" />
                                <span>Garantie Décennale 10 ans</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award size={16} className="text-secondary" />
                                <span>Chantier propre & soigné</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Neighborhoods Badge Section */}
            {city.neighborhoods && city.neighborhoods.length > 0 && (
                <section className="bg-slate-100 py-6 border-b border-slate-200">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm text-slate-600">
                            <span className="font-semibold text-slate-900 flex items-center gap-1">
                                <MapPin size={14} className="text-primary" /> Secteurs d&apos;intervention sur {city.name} :
                            </span>
                            {city.neighborhoods.map((n, idx) => (
                                <span key={idx} className="bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700">
                                    {n}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Local Services Presentation (ZigZag) */}
            <ZigZagSection items={[
                {
                    title: `Travaux de Peinture Intérieure à ${city.name}`,
                    description: `Pour votre logement à ${city.name}, je redonne vie à vos murs et plafonds avec des peintures professionnelles haut de gamme (Seigneurie Gauthier, Zolpan, Tollens). Que ce soit pour rafraîchir un salon, réparer les traces d'usure ou rénover une villa complète, je vous garantis une préparation minutieuse (enduisage, ponçage sous aspiration) et des lignes de coupe parfaites.`,
                    imageSrc: "/images/service-peinture.png",
                    features: ["Protection étanche des sols et meubles", "Peintures mates, velours ou satinées lavables", "Finitions sans traces de rouleau ni démarcation"]
                },
                {
                    title: `Pose de Placo & Isolation Thermique à ${city.name}`,
                    description: `Améliorez le confort thermique et l'agencement de votre bien à ${city.name}. Je réalise la création de cloisons de séparation, doublages isolants en laine minérale et faux-plafonds suspendus avec ratissage soigné des bandes à joint.`,
                    imageSrc: "/images/service-placo.png",
                    features: ["Cloisons séparatives et distribution de pièces", "Faux-plafonds avec intégration de spots", "Isolation phonique et thermique performante"]
                },
                {
                    title: `Pose de Revêtements de Sols & Parquets à ${city.name}`,
                    description: `Sublimez vos sols avec une pose artisanale rigoureuse. Je vous guide sur les matériaux les plus durables pour votre habitat à ${city.name} : parquets flottants chaleureux ou lames PVC clipsables (LVT) étanches pour les pièces humides.`,
                    imageSrc: "/images/service-revetements.png",
                    features: ["Parquets stratifiés et contrecollés", "Lames vinyles LVT étanches et acoustiques", "Découpes d'huisserie et plinthes soignées"]
                }
            ]} />

            <Process />

            {/* City Specific FAQ */}
            <section className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-3">
                            Réponses à vos questions
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">
                            Questions fréquentes sur mes chantiers à {city.name}
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {city.faq.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-slate-900 text-lg mb-2">
                                    {item.q}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {item.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cross Linking / Near Cities (100% Valid & Verified Links) */}
            {nearCitiesData.length > 0 && (
                <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h3 className="text-2xl font-bold mb-3">
                            Artisan peintre dans les communes voisines de {city.name}
                        </h3>
                        <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto">
                            Déplacement rapide et devis gratuit dans l&apos;ensemble du secteur :
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {nearCitiesData.map((nearCity) => (
                                <Link
                                    key={nearCity.slug}
                                    href={`/${nearCity.slug}`}
                                    className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-secondary rounded-lg transition-all text-sm font-medium flex items-center gap-2 text-slate-200 hover:text-white"
                                >
                                    <ArrowRight size={14} className="text-secondary" />
                                    Peintre {nearCity.name} ({nearCity.zip})
                                </Link>
                            ))}
                        </div>
                        <div className="mt-10">
                            <Link href="/zone-intervention" className="text-secondary hover:underline text-sm font-medium">
                                Consulter toute la carte de nos 30 villes desservies →
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Devis Form Section dedicated to this city */}
            <section id="devis-local" className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Demandez votre devis gratuit à {city.name}
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Je vous recontacte sous 24h pour étudier votre projet et organiser une visite sur place sans engagement.
                        </p>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-lg">
                        <LeadForm />
                    </div>
                </div>
            </section>
        </>
    );
}
