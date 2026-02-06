import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Cities } from "@/components/home/Cities";
import { FAQ } from "@/components/home/FAQ";
import { LeadForm } from "@/components/shared/LeadForm";
import { Realisations } from "@/components/home/Realisations";
import { Partners } from "@/components/home/Partners";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TR Peinture",
    "image": "https://trpeinture.fr/images/logo.png",
    "telephone": "06 22 03 62 65",
    "email": "contact@trpeinture.fr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lançon-Provence",
      "postalCode": "13680",
      "addressCountry": "FR"
    },
    "url": "https://trpeinture.fr",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />

      <section id="services">
        <Services />
      </section>

      <section id="realisations" className="bg-slate-50">
        <Realisations />
      </section>

      <Partners />

      <section id="process">
        <Process />
      </section>

      <section id="zones">
        <Cities />
      </section>

      <section id="faq" className="bg-slate-50">
        <FAQ />
      </section>

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
