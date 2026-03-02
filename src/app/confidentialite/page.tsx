import Link from "next/link";

export const metadata = {
    title: "Politique de Confidentialité | TR Peinture",
    description: "Protection de vos données personnelles et conformité RGPD chez TR Peinture.",
    robots: "noindex, nofollow"
};

export default function PolitiqueConfidentialitePage() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Politique de Confidentialité</h1>

                <div className="space-y-12 text-slate-700 leading-relaxed">
                    <p className="italic">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">1. Introduction</h2>
                        <p>
                            La présente Politique de Confidentialité a pour but d'informer les utilisateurs du site <strong>TR Peinture</strong> sur la manière dont leurs données personnelles sont collectées, utilisées et protégées dans le cadre du Règlement Général sur la Protection des Données (RGPD).
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">2. Responsable du traitement</h2>
                        <p>
                            Le responsable du traitement des données est Thomas, exploitant sous le nom commercial <strong>TR Peinture</strong>, dont le siège social est situé à Eyguières (13430).
                            Pour toute question relative à vos données, vous pouvez nous contacter via le formulaire de contact.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">3. Données collectées</h2>
                        <p className="mb-4">
                            Nous collectons uniquement les données nécessaires à la gestion de vos demandes de devis et de contact via nos formulaires :
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li><strong>Identité :</strong> Nom et prénom.</li>
                            <li><strong>Coordonnées :</strong> Adresse email, numéro de téléphone.</li>
                            <li><strong>Localisation :</strong> Ville du chantier.</li>
                            <li><strong>Projet :</strong> Type de travaux et description du besoin.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">4. Finalités du traitement</h2>
                        <p>
                            Vos données sont collectées exclusivement pour répondre à vos demandes de devis, vous recontacter par téléphone ou email, et assurer le suivi commercial de nos échanges. Vos données ne sont jamais vendues ni cédées à des tiers.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">5. Durée de conservation</h2>
                        <p>
                            Les données des clients potentiels qui ne concluraient pas de contrat sont conservées pendant une durée maximale de <strong>3 ans</strong> après le dernier contact. Les données des clients sont conservées le temps de la relation contractuelle et des obligations légales de facturation.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">6. Vos droits</h2>
                        <p className="mb-4">
                            Conformément au RGPD, vous disposez des droits suivants :
                        </p>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Droit d'accès à vos données.</li>
                            <li>Droit de rectification en cas d'erreur.</li>
                            <li>Droit à l'effacement (droit à l'oubli).</li>
                            <li>Droit à la limitation du traitement.</li>
                        </ul>
                        <p className="mt-4">
                            Pour exercer ces droits, il vous suffit de nous adresser une demande via le formulaire de contact du site.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">7. Sécurité</h2>
                        <p>
                            Nous mettons en œuvre les mesures techniques nécessaires (protocole HTTPS notamment) afin de garantir la sécurité et la confidentialité de vos informations lors de leur transmission.
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
