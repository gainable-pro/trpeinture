import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
    return (
        <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-main.png"
                    alt="Peintre professionnel TR Peinture"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-secondary/80 to-secondary/40 z-10"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="max-w-3xl animate-in slide-in-from-bottom-5 duration-700 fade-in">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                        </span>
                        Disponibilité immédiate sur Eyguières & alentours
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white font-script">
                        La peinture, c'est mon futur.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                        Spécialiste en peinture, placo et rénovation intérieure.
                        Des finitions soignées, des chantiers propres et un résultat durable.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="tel:0600000000"
                            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-primary/25"
                        >
                            <Phone size={20} />
                            Demander un devis gratuit
                        </a>
                        <Link
                            href="/realisations"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                        >
                            Voir mes réalisations
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-sm text-slate-400 font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-secondary"></div>
                            Devis sous 24h
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-secondary"></div>
                            Garantie Décennale
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-secondary"></div>
                            TVA réduite (rénovation)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
