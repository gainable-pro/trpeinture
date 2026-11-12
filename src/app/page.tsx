import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Cities } from "@/components/home/Cities";
import { FAQ } from "@/components/home/FAQ";
import { LeadForm } from "@/components/shared/LeadForm";
import { Realisations } from "@/components/home/Realisations";
import { Partners } from "@/components/home/Partners";

export const metadata: Metadata = {
  title: "Artisan Peintre en Bâtiment Eyguières & Salon-de-Provence (13) | TR Peinture",
  description: "TR Peinture : artisan peintre en bâtiment à Eyguières, Salon-de-Provence, Miramas et alentours (30km). Peinture intérieure, placo, isolation, sols. Devis 100% gratuit au 06 35 23 81 07.",
  alternates: {
    canonical: "https://www.tr-peinture.com/",
  },
  openGraph: {
    title: "TR Peinture | Artisan Peintre en Bâtiment & Rénovation (13)",
    description: "Expert peintre en bâtiment à Eyguières et Salon-de-Provence. Travail soigné, devis gratuit sous 24h.",
    url: "https://www.tr-peinture.com",
    siteName: "TR Peinture",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Home() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "Painter"],
    "@id": "https://www.tr-peinture.com/#organization",
    "name": "TR Peinture",
    "legalName": "TR Peinture",
    "url": "https://www.tr-peinture.com",
    "logo": "https://www.tr-peinture.com/images/logo.png",
    "image": "https://www.tr-peinture.com/images/hero-planning.jpg",
    "telephone": "+33635238107",
    "email": "contact@tr-peinture.com",
    "priceRange": "€€",
    "hasMap": "https://share.google/RcDbGqPUaQXWWsvLt",
    "sameAs": [
      "https://share.google/RcDbGqPUaQXWWsvLt"
    ],
    "description": "Artisan peintre en bâtiment et rénovation intérieure/extérieure à Eyguières, Salon-de-Provence et dans les Bouches-du-Rhône. Peinture, placo, isolation et pose de sols.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rue Calade",
      "addressLocality": "Eyguières",
      "postalCode": "13430",
      "addressRegion": "Bouches-du-Rhône",
      "addressCountry": "FR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "30",
      "bestRating": "5",
      "worstRating": "1"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7297,
      "longitude": 5.0306
    },
    "areaServed": [
      { "@type": "City", "name": "Eyguières", "postalCode": "13430" },
      { "@type": "City", "name": "Salon-de-Provence", "postalCode": "13300" },
      { "@type": "City", "name": "Miramas", "postalCode": "13140" },
      { "@type": "City", "name": "Istres", "postalCode": "13800" },
      { "@type": "City", "name": "Saint-Chamas", "postalCode": "13250" },
      { "@type": "City", "name": "Pélissanne", "postalCode": "13330" },
      { "@type": "City", "name": "Sénas", "postalCode": "13560" },
      { "@type": "City", "name": "Saint-Rémy-de-Provence", "postalCode": "13210" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:30",
        "closes": "12:30"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services de Peinture et Rénovation",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Peinture Intérieure et Extérieure",
            "description": "Peinture soignée murs, plafonds, boiseries et façades."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Placo et Isolation",
            "description": "Pose de cloisons sèches, faux-plafonds et isolation thermique."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Revêtements de Sol",
            "description": "Pose de parquet flottant, stratifié et lames PVC vinyle LVT."
          }
        }
      ]
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quels sont vos délais d'intervention ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En général, je peux intervenir sous 2 à 3 semaines après validation du devis. Pour les petites interventions (dégâts des eaux, retouches), le délai peut être plus court."
        }
      },
      {
        "@type": "Question",
        "name": "Proposez-vous la garantie décennale ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, tous mes travaux sont couverts par une Assurance Décennale et Responsabilité Civile Professionnelle (RC Pro). Vous êtes protégés pendant 10 ans."
        }
      },
      {
        "@type": "Question",
        "name": "Quel type de peinture utilisez-vous ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Je travaille essentiellement avec des marques professionnelles reconnues comme Seigneurie Gauthier, Tollens ou Zolpan, garantissant un pouvoir couvrant optimal et une durabilité accrue."
        }
      },
      {
        "@type": "Question",
        "name": "Dois-je vider la pièce avant votre arrivée ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'idéal est de vider les petits objets et bibelots. Pour les gros meubles, je m'occupe de les déplacer au centre de la pièce et de les protéger intégralement."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
                Devis rapide & sans engagement
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Parlons de votre projet de peinture
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Remplissez ce formulaire en 1 minute. Je vous recontacte sous 24h pour organiser une visite gratuite sur place à Eyguières, Salon-de-Provence et alentours.
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/70 space-y-4">
                <h4 className="font-bold text-slate-900">Les garanties TR Peinture :</h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</span>
                    <span><strong>Devis détaillé et transparent</strong> sous 24 à 48 heures</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</span>
                    <span><strong>Garantie Décennale 10 ans</strong> & Assurance RC Pro</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-xs">✓</span>
                    <span><strong>Chantier protégé</strong>, propre et nettoyé en fin d&apos;intervention</span>
                  </li>
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
