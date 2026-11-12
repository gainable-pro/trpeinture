"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Shield, Clock, Award } from "lucide-react";

export function Hero() {
    return (
        <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-planning.jpg"
                    alt="Artisan peintre en bâtiment Eyguières Salon-de-Provence TR Peinture"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-slate-900/80 to-slate-900/50 z-10"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="max-w-3xl animate-in slide-in-from-bottom-5 duration-700 fade-in">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-secondary text-sm font-semibold mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                        </span>
                        Artisan peintre basé à Eyguières • Rayon 30 km
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
                        Artisan Peintre en Bâtiment & Rénovation Intérieure
                    </h1>

                    <p className="text-2xl text-secondary font-script mb-6">
                        « La peinture, c'est mon futur »
                    </p>

                    <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                        Spécialiste de la peinture soignée, pose de placo, isolation et revêtements de sol à <strong>Eyguières</strong>, <strong>Salon-de-Provence</strong>, <strong>Miramas</strong>, <strong>Istres</strong> et dans les Alpilles. Devis gratuit sous 24h et garantie décennale.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="tel:0635238107"
                            className="bg-primary text-white border-2 border-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group shadow-lg hover:shadow-primary/30"
                        >
                            <Phone size={22} className="group-hover:rotate-12 transition-transform" />
                            06 35 23 81 07
                        </a>
                        <Link
                            href="/realisations"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all"
                        >
                            Voir mes réalisations
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-slate-300 font-medium pt-8 border-t border-white/10">
                        <div className="flex items-center gap-2.5">
                            <Clock size={18} className="text-secondary shrink-0" />
                            <span>Devis gratuit sous 24h</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Shield size={18} className="text-secondary shrink-0" />
                            <span>Garantie Décennale 10 ans</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <Award size={18} className="text-secondary shrink-0" />
                            <span>Finitions soignées pro</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
