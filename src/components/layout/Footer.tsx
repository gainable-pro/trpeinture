import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-brand-dark text-slate-300 py-12 border-t border-slate-700">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Brand & Contact */}
                    <div>
                        <div className="relative w-72 h-24 mb-6">
                            <Image
                                src="/images/logo.png"
                                alt="TR Peinture"
                                fill
                                className="object-contain mix-blend-screen"
                            />
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary w-5 h-5 mt-1" />
                                <span>Eyguières et alentours (30km)<br />13430 Eyguières</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary w-5 h-5" />
                                <a href="tel:0600000000" className="hover:text-white transition-colors">06 00 00 00 00</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary w-5 h-5" />
                                <a href="mailto:contact@trpeinture.fr" className="hover:text-white transition-colors">contact@trpeinture.fr</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="text-primary w-5 h-5 mt-1" />
                                <span>Lun - Ven : 8h - 18h<br />Samedi : Sur RDV</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Nos Prestations</h3>
                        <ul className="space-y-3">
                            <li><Link href="/peinture" className="hover:text-primary transition-colors">Peinture Intérieure</Link></li>
                            <li><Link href="/peinture" className="hover:text-primary transition-colors">Peinture Extérieure</Link></li>
                            <li><Link href="/placo-isolation" className="hover:text-primary transition-colors">Placo & Isolation</Link></li>
                            <li><Link href="/revetements" className="hover:text-primary transition-colors">Pose de Parquet</Link></li>
                            <li><Link href="/revetements" className="hover:text-primary transition-colors">Sols Souples (LVT)</Link></li>
                            <li><Link href="/renovation" className="hover:text-primary transition-colors">Rénovation complète</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Zones */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Zones d'intervention</h3>
                        <ul className="space-y-3">
                            <li><Link href="/peintre-salon-de-provence" className="hover:text-primary transition-colors">Peintre Salon-de-Provence</Link></li>
                            <li><Link href="/peintre-miramas" className="hover:text-primary transition-colors">Peintre Miramas</Link></li>
                            <li><Link href="/peintre-istres" className="hover:text-primary transition-colors">Peintre Istres</Link></li>
                            <li><Link href="/peintre-eyguieres" className="hover:text-primary transition-colors">Peintre Eyguières</Link></li>
                            <li><Link href="/peintre-saint-chamas" className="hover:text-primary transition-colors">Peintre Saint-Chamas</Link></li>
                            <li><Link href="/zone-intervention" className="text-primary hover:text-white transition-colors mt-2 inline-block">Voir toutes les villes →</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Trust */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Confiance & Garantie</h3>
                        <p className="mb-4 text-sm leading-relaxed">
                            Un travail soigné, des chantiers propres et des finitions impeccables.
                        </p>
                        <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                            <p className="font-bold text-white mb-1">Garantie Décennale</p>
                            <p className="text-xs text-slate-400">Assurance RC Pro incluse</p>
                        </div>
                        {/* Placeholder for Google Widget */}
                        <div className="mt-6 flex items-center gap-2">
                            <div className="text-gold flex">★★★★★</div>
                            <span className="text-sm font-medium">5.0/5 sur Google</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} TR Peinture. Tous droits réservés.</p>
                    <div className="flex gap-6">
                        <Link href="/mentions-legales" className="hover:text-white">Mentions Légales</Link>
                        <Link href="/confidentialite" className="hover:text-white">Confidentialité</Link>
                        <Link href="/sitemap.xml" className="hover:text-white">Plan du site</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
