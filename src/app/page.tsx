import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Cities } from "@/components/home/Cities";
import { FAQ } from "@/components/home/FAQ";
import { LeadForm } from "@/components/shared/LeadForm";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TR Peinture",
    "image": "https://trpeinture.fr/images/logo.png",
    "telephone": "0635238107",
    "email": "contact@trpeinture.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Eyguières",
      "postalCode": "13430",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.6939,
      "longitude": 5.0303
    },
    "url": "https://trpeinture.fr",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      "Eyguières",
      "Salon-de-Provence",
      "Miramas",
      "Istres",
      "Saint-Chamas"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />

      {/* Realisations Teaser (Simple Grid for now) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Dernières Réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Placeholders for images - using CSS gradients for visual prototype */}
            <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">Salon Velours - Eyguières</div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">Rénovation SDB - Miramas</div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">Façade Villa - Istres</div>
            </div>
          </div>
        </div>
      </section>

      <Process />
      <Cities />
      <FAQ />

      {/* Final CTA / Lead Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Parlons de votre projet
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Remplissez ce formulaire en 1 minute. Je reviens vers vous sous 24h pour organiser une visite gratuite.
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Pourquoi me choisir ?</h4>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-center gap-2">✅ Devis détaillé et transparent</li>
                  <li className="flex items-center gap-2">✅ Respect des délais et du budget</li>
                  <li className="flex items-center gap-2">✅ Chantier protégé et nettoyé</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
