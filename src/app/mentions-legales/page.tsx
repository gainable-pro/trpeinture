import Link from "next/link";

export const metadata = {
    title: "Mentions Légales | TR Peinture",
    description: "Mentions légales, informations juridiques et conditions d'utilisation du site TR Peinture.",
    robots: "noindex, nofollow" // Often good practice for legal pages
};

export default function MentionsLegalesPage() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Mentions Légales</h1>

                <div className="space-y-12 text-slate-700 leading-relaxed">

                    {/* Éditeur */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">1. Éditeur du site</h2>
                        <ul className="list-none space-y-2">
                            <li><strong>Nom commercial :</strong> TR Peinture</li>
                            <li><strong>Forme juridique :</strong> Entreprise artisanale individuelle (activité réglementée)</li>
                            <li><strong>Numéro SIREN :</strong> 850 304 486</li>
                            <li><strong>Numéro SIRET :</strong> 850 304 486 00028</li>
                            <li><strong>Code NAF / APE :</strong> 43.34Z – Travaux de peinture et vitrerie</li>
                            <li><strong>Activité principale déclarée :</strong> Peinture – Plaquiste</li>
                            <li><strong>Domaine d’activité :</strong> Travaux de construction spécialisés</li>
                            <li><strong>Numéro de TVA intracommunautaire :</strong> FR01 850304486</li>
                        </ul>
                    </div>

                    {/* Responsable */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">2. Responsable de la publication</h2>
                        <p>Le responsable de la publication est le dirigeant de l’entreprise TR Peinture.</p>
                    </div>

                    {/* Hébergement */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">3. Hébergement du site</h2>
                        <p>Le site est hébergé par :</p>
                        <p className="font-semibold text-slate-900 mt-2">IONOS SE</p>
                        <p>Elgendorfer Str. 57<br />56410 Montabaur<br />Allemagne</p>
                    </div>

                    {/* Propriété intellectuelle */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">4. Propriété intellectuelle</h2>
                        <p className="mb-4">
                            L’ensemble du contenu présent sur le site (textes, images, logos, graphismes, vidéos, icônes) est la propriété exclusive de <strong>TR Peinture</strong>, sauf mentions contraires.
                        </p>
                        <p>
                            Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la Propriété Intellectuelle.
                        </p>
                    </div>

                    {/* Données personnelles */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">5. Données personnelles</h2>
                        <p className="mb-4">
                            Les informations éventuellement recueillies via les formulaires de contact sont destinées exclusivement à <strong>TR Peinture</strong> et ne sont en aucun cas transmises à des tiers à des fins commerciales.
                        </p>
                        <p>
                            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant. Vous pouvez exercer ce droit en nous contactant via le formulaire de contact ou par courrier.
                        </p>
                    </div>

                    {/* Cookies */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">6. Cookies</h2>
                        <p className="mb-4">
                            Le site peut être amené à utiliser des cookies à des fins de mesure d’audience (statistiques anonymes) ou d’amélioration de l’expérience utilisateur.
                        </p>
                        <p>
                            Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies.
                        </p>
                    </div>

                </div>

                <div className="mt-16 text-center">
                    <Link href="/" className="text-primary hover:underline font-medium">
                        ← Retour à l'accueil
                    </Link>
                </div>
            </div>
        </section>
    );
}
