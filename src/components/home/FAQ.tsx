"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        q: "Quels sont vos délais d'intervention ?",
        a: "En général, je peux intervenir sous 2 à 3 semaines après validation du devis. Pour les petites interventions (dégâts des eaux, retouches), le délai peut être plus court."
    },
    {
        q: "Proposez-vous la garantie décennale ?",
        a: "Oui, tous mes travaux sont couverts par une Assurance Décennale et Responsabilité Civile Professionnelle (RC Pro). Vous êtes protégés pendant 10 ans."
    },
    {
        q: "Quel type de peinture utilisez-vous ?",
        a: "Je travaille essentiellement avec des marques professionnelles reconnues comme Seigneurie Gauthier, Tollens ou Zolpan, garantissant un pouvoir couvrant optimal et une durabilité accrue."
    },
    {
        q: "Dois-je vider la pièce avant votre arrivée ?",
        a: "L'idéal est de vider les petits objets et bibelots. Pour les gros meubles, je m'occupe de les déplacer au centre de la pièce et de les protéger intégralement."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions Fréquentes</h2>
                    <p className="text-slate-600">Tout ce qu'il faut savoir avant de démarrer.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <div
                            key={idx}
                            className={`border border-slate-200 rounded-xl overflow-hidden transition-all ${openIndex === idx ? 'ring-2 ring-primary/5 bg-slate-50' : 'bg-white'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-slate-900">{item.q}</span>
                                {openIndex === idx ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-slate-400" />}
                            </button>

                            {openIndex === idx && (
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in slide-in-from-top-2">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
