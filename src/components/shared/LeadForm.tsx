"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { sendLeadEmail } from "@/app/actions";

export function LeadForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const result = await sendLeadEmail(formData);

        if (result.success) {
            setStatus('success');
        } else {
            console.error(result.error);
            setStatus('error');
        }
    }

    if (status === 'success') {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in zoom-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Demande envoyée !</h3>
                <p className="text-green-700">
                    Merci de votre confiance. Je vous recontacte sous 24h pour discuter de votre projet.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-semibold text-green-800 underline hover:text-green-900"
                >
                    Envoyer une autre demande
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Nom complet</label>
                    <input
                        name="name" type="text" id="name" required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="M. Dupont"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Téléphone</label>
                    <input
                        name="phone" type="tel" id="phone" required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="06 12 34 56 78"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <input
                    name="email" type="email" id="email" required
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="votre@email.com"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium text-slate-700">Ville du chantier</label>
                    <input
                        name="city" type="text" id="city" required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="Ex: Eyguières"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="type" className="text-sm font-medium text-slate-700">Type de travaux</label>
                    <select
                        name="type" id="type"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white"
                    >
                        <option>Peinture intérieure</option>
                        <option>Rénovation complète</option>
                        <option>Placo / Isolation</option>
                        <option>Sol / Parquet</option>
                        <option>Autre</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Description du projet</label>
                <textarea
                    name="message" id="message" rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                    placeholder="Surface approximative, état des murs, délai souhaité..."
                ></textarea>
            </div>

            {status === 'error' && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
                    Une erreur est survenue lors de l'envoi. Veuillez réessayer ou appeler directement.
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
            >
                {status === 'loading' ? (
                    <><Loader2 className="animate-spin" /> Envoi en cours...</>
                ) : (
                    <><Send size={18} /> Recevoir mon devis gratuit</>
                )}
            </button>

            <p className="text-xs text-center text-slate-500 mt-4">
                Vos données restent confidentielles. Réponse sous 24h garantie.
            </p>
        </form>
    );
}
