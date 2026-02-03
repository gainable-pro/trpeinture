import { LeadForm } from "@/components/shared/LeadForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
    title: "Contactez TR Peinture | Devis Gratuit Eyguières & Alentours",
    description: "Besoin d'un peintre ou plaquiste ? Contactez Thomas de TR Peinture pour un devis gratuit et rapide. Intervention sur Salon-de-Provence, Miramas, Istres...",
};

export default function ContactPage() {
    return (
        <>
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-secondary/60 to-secondary/30 z-0"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-script">Contactez-moi</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Un projet de rénovation ? Une question ?
                        Je vous réponds sous 24h pour évaluer vos besoins.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Coordonnées</h2>
                            <div className="space-y-8">
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Téléphone</h3>
                                        <p className="text-slate-600 mb-2">Du Lundi au Vendredi, 8h - 18h</p>
                                        <a href="tel:0600000000" className="text-xl font-bold text-primary hover:underline">06 00 00 00 00</a>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                                        <p className="text-slate-600 mb-2">Pour vos demandes de devis écrites</p>
                                        <a href="mailto:contact@trpeinture.fr" className="text-lg font-medium text-slate-900 hover:text-primary transition-colors">contact@trpeinture.fr</a>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">Zone d'intervention</h3>
                                        <p className="text-slate-600">
                                            Basé à Eyguières (13430).<br />
                                            J'interviens sur Salon-de-Provence, Miramas, Istres, Lamanon, Sénas...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Envoyer un message</h2>
                            <LeadForm />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
