"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const heroImages = [
    "/images/hero-main.png",
    "/images/hero-planning.jpg"
];

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                {heroImages.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={src}
                            alt="Peintre professionnel TR Peinture"
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-secondary/60 to-secondary/30 z-10"></div>
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
                        <Link href="tel:0635238107" className="bg-primary text-white border-2 border-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all flex items-center gap-2 group">
                            <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                            06 35 23 81 07
                        </Link>
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
