import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/shared/LeadForm";
import { Phone, MapPin, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact & Devis Gratuit Artisan Peintre | TR Peinture Eyguières (13)",
    description: "Contactez TR Peinture pour votre devis gratuit de peinture, placo et sols à Eyguières, Salon-de-Provence, Miramas, Istres. Réponse sous 24h au 06 35 23 81 07.",
    alternates: {
        canonical: "https://www.tr-peinture.com/contact",
    },
    openGraph: {
        title: "Contact & Devis Gratuit | TR Peinture (13)",
        description: "Devis gratuit et sans engagement sous 24h pour vos travaux de peinture et rénovation.",
        url: "https://www.tr-peinture.com/contact",
        siteName: "TR Peinture",
        locale: "fr_FR",
        type: "website",
    },
};

export default function ContactPage() {
    return (
        <>
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-slate-900/85 to-slate-900/60 z-0"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
                    <nav className="flex items-center justify-center gap-2 text-xs text-slate-300 mb-6">
                        <Link href="/" className="hover:text-white">Accueil</Link>
                        <span>/</span>
                        <span className="text-secondary font-medium">Contact</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contactez TR Peinture</h1>
                    <p className="text-lg md:text-xl text-slate-200">
                        Un projet de peinture ou de rénovation ? Je vous réponds sous 24h pour évaluer vos besoins et organiser une visite gratuite.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Coordonnées de l&apos;artisan</h2>
                            <div className="space-y-8">
                                <div className="flex gap-4 items-start bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Téléphone direct</h3>
                                        <p className="text-slate-600 text-sm mb-2">Lun - Ven : 8h00 - 18h00 • Samedi sur RDV</p>
                                        <a href="tel:0635238107" className="text-2xl font-bold text-primary hover:underline">06 35 23 81 07</a>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Siège & Zone d&apos;intervention</h3>
                                        <p className="text-slate-600 text-sm mb-1">13430 Eyguières (Bouches-du-Rhône)</p>
                                        <p className="text-slate-500 text-xs">Déplacement gratuit dans un rayon de 30 km (Salon-de-Provence, Miramas, Istres, Saint-Rémy-de-Provence, etc.)</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                        <Shield size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Assurances & Garanties</h3>
                                        <p className="text-slate-600 text-sm">Garantie Décennale 10 ans et Assurance Responsabilité Civile Professionnelle.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-xl">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Demande de Devis en Ligne</h3>
                            <p className="text-slate-600 text-sm mb-6">
                                Remplissez vos coordonnées ci-dessous pour être recontacté sous 24h ouvrées.
                            </p>
                            <LeadForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
