import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home, ClipboardList, Clock, Key, Check } from "lucide-react";
import { LeadForm } from "@/components/shared/LeadForm";
import { Process } from "@/components/home/Process";

export const metadata: Metadata = {
    title: "Rénovation Intérieure Complète Maison & Appartement (13) | TR Peinture",
    description: "Rénovation complète d'appartements et maisons : peinture, sols, placo et isolation à Eyguières, Salon, Miramas. Chantier clé en main. Devis gratuit.",
    alternates: {
        canonical: "https://www.tr-peinture.com/renovation",
    },
    openGraph: {
        title: "Rénovation Intérieure Complète | TR Peinture (13)",
        description: "Un seul interlocuteur pour transformer votre habitat : peinture, sols et placo. Devis gratuit sous 24h.",
        url: "https://www.tr-peinture.com/renovation",
        siteName: "TR Peinture",
        locale: "fr_FR",
        type: "website",
    },
};

export default function RenovationPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/service-renovation.png"
                        alt="Rénovation intérieure complète maison et appartement"
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
                            <span className="text-secondary font-medium">Rénovation</span>
                        </nav>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Rénovation Intérieure Complète
                        </h1>
                        <p className="text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
                            Un seul artisan pour transformer votre habitat.
                            Du second œuvre aux finitions d&apos;exception, je gère votre chantier avec rigueur, propreté et respect des délais.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                                <Key size={16} className="text-secondary" /> Projet Clé en Main
                            </span>
                            <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                                <Clock size={16} className="text-secondary" /> Respect Strict des Délais
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
                                Un interlocuteur unique, <br /><span className="text-primary">zéro stress sur votre chantier.</span>
                            </h2>
                            <div className="prose prose-slate text-lg text-slate-600 mb-8">
                                <p>
                                    Faire intervenir plusieurs corps d&apos;état peut être source de retards et de complications. En me confiant votre rénovation, vous disposez d&apos;un seul professionnel pour synchroniser le placo, l&apos;isolation, les sols et les peintures.
                                </p>
                                <p>
                                    Idéal pour valoriser un bien avant la vente, rafraîchir un logement locatif entre deux locataires ou redécorer votre résidence principale.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                        <Home size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Rénovation après achat ou succession</h3>
                                        <p className="text-slate-600 text-sm">Remise à neuf complète : abattage de cloisons non porteuses, ragréage, nouveaux sols et peintures modernes.</p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                        <ClipboardList size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Rafraîchissement locatif rapide</h3>
                                        <p className="text-slate-600 text-sm">Remise en état rapide et soignée des murs, boiseries et sols pour relouer votre appartement sans vacance locative.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-lg sticky top-28">
                                <h3 className="text-2xl font-bold mb-3 text-slate-900">Devis Rénovation Complète</h3>
                                <p className="text-slate-600 mb-6 text-sm">
                                    Étude gratuite sur place à Eyguières, Salon-de-Provence, Miramas et dans les Alpilles.
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
