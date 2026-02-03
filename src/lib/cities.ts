export type CityData = {
    name: string;
    slug: string;
    zip: string;
    title: string;
    intro: string;
    metaDesc: string;
    faq: { q: string; a: string }[];
    nearCities: string[];
};

const baseFAQ = [
    {
        q: "Quels sont vos délais d'intervention à {city} ?",
        a: "Étant basé à proximité de {city}, je peux me déplacer sous 24h pour un devis et démarrer le chantier sous 2 à 3 semaines."
    },
    {
        q: "Faites-vous uniquement de la peinture à {city} ?",
        a: "Non, je réalise aussi la pose de placo, l'isolation intérieure et la pose de revêtements de sol (parquet, vinyle) sur {city}."
    },
    {
        q: "Le déplacement est-il payant pour {city} ?",
        a: "Non, mes devis et déplacements sur {city} et ses alentours sont 100% gratuits et sans engagement."
    }
];

export const cities: CityData[] = [
    {
        name: "Salon-de-Provence",
        slug: "peintre-salon-de-provence",
        zip: "13300",
        title: "Peintre Salon-de-Provence (13300) : Rénovation & Déco",
        metaDesc: "Artisan peintre à Salon-de-Provence. Travaux de peinture, placo et sols. Devis gratuit, travail soigné et chantier propre. Intervention rapide.",
        intro: "Vous cherchez un artisan peintre de confiance à Salon-de-Provence ? Spécialisé dans la rénovation intérieure, j'interviens dans tous les quartiers (Michelet, Lurian, Les Canourgues...) pour transformer votre habitat. Que ce soit pour rafraîchir un appartement ancien ou personnaliser une villa neuve, je vous garantis des finitions haut de gamme.",
        faq: baseFAQ,
        nearCities: ["Pélissanne", "Grans", "Lamanon", "Eyguières"]
    },
    {
        name: "Miramas",
        slug: "peintre-miramas",
        zip: "13140",
        title: "Entreprise de Peinture Miramas - Neuf & Rénovation",
        metaDesc: "Besoin d'un peintre à Miramas ? Rénovation murs et plafonds, pose de sol souple. Qualité pro et respect des délais. Devis offert.",
        intro: "Installé tout près de Miramas, j'accompagne les particuliers dans leurs projets de peinture et décoration. Miramas est une ville dynamique où le parc immobilier se rénove vite. Je vous apporte mon expertise technique pour traiter vos murs, poser du placo ou changer vos sols, avec le souci du détail qui fait la différence.",
        faq: baseFAQ,
        nearCities: ["Istres", "Saint-Chamas", "Cornillon-Confoux", "Salon-de-Provence"]
    },
    {
        name: "Eyguières",
        slug: "peintre-eyguieres",
        zip: "13430",
        title: "Peintre en Bâtiment Eyguières (13430) - Artisan Local",
        metaDesc: "Votre artisan peintre à Eyguières. Rénovation complète, placo, isolation. Intervention immédiate au pied des Alpilles. Travail garanti.",
        intro: "Basé à Eyguières même, je suis votre voisin artisan ! Je connais parfaitement les spécificités de nos maisons provençales. Pour vos travaux de peinture, de rénovation ou d'isolation, faites appel à un professionnel local, réactif et soucieux de sa réputation au village.",
        faq: baseFAQ,
        nearCities: ["Lamanon", "Sénas", "Aureille", "Salon-de-Provence"]
    },
    {
        name: "Istres",
        slug: "peintre-istres",
        zip: "13800",
        title: "Peintre Istres : Rénovation Intérieure & Façades",
        metaDesc: "Peintre professionnel intervenant à Istres. Peinture, enduits, parquets. Devis rapide et gratuit pour maison ou appartement.",
        intro: "De l'Étange de l'Olivier au Ranquet, j'interviens sur tout Istres pour vos chantiers de peinture. Une rénovation réussie, c'est d'abord une bonne préparation. Je prends le temps de protéger vos sols et de préparer vos murs pour un résultat durable et esthétique qui valorisera votre bien istres.",
        faq: baseFAQ,
        nearCities: ["Miramas", "Saint-Mitre-les-Remparts", "Fos-sur-Mer", "Saint-Chamas"]
    },
    {
        name: "Saint-Chamas",
        slug: "peintre-saint-chamas",
        zip: "13250",
        title: "Artisan Peintre Saint-Chamas - Travaux Soignés",
        metaDesc: "Rénovez votre intérieur à Saint-Chamas avec un peintre qualifié. Placo, isolation, peinture décorative. Contactez TR Peinture.",
        intro: "Le charme de Saint-Chamas mérite des intérieurs soignés. J'interviens dans le village et ses environs pour tous vos travaux de second œuvre. Peinture velours pour votre salon, pose de parquet pour les chambres ou doublage placo : je m'occupe de tout avec rigueur.",
        faq: baseFAQ,
        nearCities: ["Cornillon-Confoux", "Miramas", "La Fare-les-Oliviers", "Berre-l'Étang"]
    },
    // Adding more cities to reach 30 roughly via programmatic spread if needed, 
    // but listing key ones explicitly for quality. 
    // I will generate a helper function to populate the rest with generic templates to save file space here,
    // while keeping the main ones unique.
    {
        name: "Lamanon",
        slug: "peintre-lamanon",
        zip: "13113",
        title: "Peintre Lamanon : Rénovation maison & appartement",
        metaDesc: "Artisan peintre à Lamanon. Finitions parfaits, chantier propre. Devis gratuit pour vos travaux de peinture et sol.",
        intro: "À Lamanon, je propose mes services de peintre en bâtiment pour embellir votre cadre de vie. Une écoute attentive de votre projet, des conseils sur les teintes et les matériaux, et une exécution irréprochable.",
        faq: baseFAQ,
        nearCities: ["Eyguières", "Sénas", "Salon-de-Provence", "Alleins"]
    },
    {
        name: "Pélissanne",
        slug: "peintre-pelissanne",
        zip: "13330",
        title: "Peintre Pélissanne - Travaux de rénovation du 13",
        metaDesc: "Entreprise de peinture intervenant à Pélissanne. Peinture murale, plafonds, boiseries. Qualité artisanale.",
        intro: "Habitants de Pélissanne, confiez vos murs à un professionnel exigeant. Que vous soyez proche du centre ou dans les quartiers résidentiels, je me déplace pour chiffrer gratuitement vos travaux de rafraîchissement ou de rénovation lourde.",
        faq: baseFAQ,
        nearCities: ["Salon-de-Provence", "La Barben", "Aurons", "Lambesc"]
    },
    {
        name: "Sénas",
        slug: "peintre-senas",
        zip: "13560",
        title: "Peintre Sénas : Isolation et Peinture Intérieure",
        metaDesc: "Votre peintre à Sénas. Pose de placo, isolation et peinture. Rénovez votre maison avec un artisan de confiance.",
        intro: "Située au carrefour de la Provence, Sénas est un secteur où j'interviens régulièrement. Je vous propose une gamme complète : peinture, enduits décoratifs, mais aussi l'isolation de vos combles ou murs par l'intérieur.",
        faq: baseFAQ,
        nearCities: ["Orgon", "Cheval-Blanc", "Lamanon", "Mallemort"]
    },
    {
        name: "Grans",
        slug: "peintre-grans",
        zip: "13450",
        title: "Peintre Grans (13450) - Finitions Haut de Gamme",
        metaDesc: "Artisan peintre à Grans. Spécialiste rénovation et décoration. Devis rapide et gratuit.",
        intro: "À Grans, l'exigence est souvent au rendez-vous. Je m'engage à fournir un travail de qualité supérieure, avec des peintures écologiques et durables, pour sublimer vos intérieurs gransois.",
        faq: baseFAQ,
        nearCities: ["Salon-de-Provence", "Cornillon-Confoux", "Miramas", "Lançon-Provence"]
    },
    {
        name: "Saint-Rémy-de-Provence",
        slug: "peintre-saint-remy-de-provence",
        zip: "13210",
        title: "Peintre Saint-Rémy-de-Provence : L'Art de la Rénovation",
        metaDesc: "Peintre en bâtiment à Saint-Rémy-de-Provence. Rénovation de mas, villas et appartements. Prestations de qualité.",
        intro: "Au cœur des Alpilles, Saint-Rémy demande un savoir-faire particulier. Rénovation de mas anciens, chaux, ou modernisation d'intérieurs contemporains : je m'adapte au style de votre bien avec le plus grand respect des lieux.",
        faq: baseFAQ,
        nearCities: ["Eyguières", "Maussane-les-Alpilles", "Les Baux-de-Provence", "Mollégès"]
    },
    {
        name: "La Fare-les-Oliviers",
        slug: "peintre-la-fare-les-oliviers",
        zip: "13580",
        title: "Peintre La Fare-les-Oliviers - Rénovation maison",
        metaDesc: "Artisan peintre à La Fare-les-Oliviers. Devis gratuit pour peinture et sols.",
        intro: "À La Fare, je propose mes services pour rafraîchir vos intérieurs. Travail soigné et respect des délais.",
        faq: baseFAQ,
        nearCities: ["Coudoux", "Velaux", "Berre-l'Étang"]
    },
    {
        name: "Velaux",
        slug: "peintre-velaux",
        zip: "13880",
        title: "Peintre Velaux (13880) - Embellissement Intérieur",
        metaDesc: "Votre peintre sur Velaux. Rénovation complète, peinture et déco.",
        intro: "Besoin d'un peintre à Velaux ? Je suis à votre service pour tous vos projets de rénovation.",
        faq: baseFAQ,
        nearCities: ["Rognac", "Ventabren", "Coudoux"]
    },
    {
        name: "Ventabren",
        slug: "peintre-ventabren",
        zip: "13122",
        title: "Peintre Ventabren - Finitions Soignées",
        metaDesc: "Travaux de peinture à Ventabren. Artisan qualifié pour vos murs et plafonds.",
        intro: "Résident de Ventabren, confiez-moi la décoration de votre habitation. Finitions haut de gamme.",
        faq: baseFAQ,
        nearCities: ["Velaux", "Eguilles", "Aix-en-Provence"]
    },
    {
        name: "Coudoux",
        slug: "peintre-coudoux",
        zip: "13111",
        title: "Peintre Coudoux : Artisan de proximité",
        metaDesc: "Peintre en bâtiment Coudoux. Intervention rapide et devis gratuit.",
        intro: "Artisan peintre intervenant sur Coudoux pour tous vos travaux de peinture intérieure.",
        faq: baseFAQ,
        nearCities: ["La Fare-les-Oliviers", "Velaux", "Ventabren"]
    },
    {
        name: "Berre-l'Étang",
        slug: "peintre-berre-l-etang",
        zip: "13130",
        title: "Peintre Berre-l'Étang - Rénovation Habitat",
        metaDesc: "Peinture et rénovation à Berre-l'Étang. Devis gratuit sous 24h.",
        intro: "J'interviens sur tout le secteur de Berre pour vos travaux de peinture et de sol.",
        faq: baseFAQ,
        nearCities: ["Rognac", "Vitrolles", "Saint-Chamas"]
    },
    {
        name: "Rognac",
        slug: "peintre-rognac",
        zip: "13340",
        title: "Peintre Rognac : Votre artisan local",
        metaDesc: "Travaux de peinture à Rognac. Neuf et rénovation.",
        intro: "Pour vos chantiers sur Rognac, faites appel à un pro. Peinture, placo, sols.",
        faq: baseFAQ,
        nearCities: ["Berre-l'Étang", "Vitrolles", "Velaux"]
    },
    {
        name: "Vitrolles",
        slug: "peintre-vitrolles",
        zip: "13127",
        title: "Peintre Vitrolles - Rénovation Appartement & Villa",
        metaDesc: "Artisan peintre Vitrolles. Intervention rapide, travail propre.",
        intro: "Basé à proximité, j'interviens sur Vitrolles pour tous types de travaux de peinture.",
        faq: baseFAQ,
        nearCities: ["Rognac", "Marignane", "Les Pennes-Mirabeau"]
    },
    {
        name: "Saint-Mitre-les-Remparts",
        slug: "peintre-saint-mitre-les-remparts",
        zip: "13920",
        title: "Peintre Saint-Mitre-les-Remparts",
        metaDesc: "Rénovation peinture Saint-Mitre. Qualité et prix juste.",
        intro: "Embellissez votre maison à Saint-Mitre avec mes services de peinture pro.",
        faq: baseFAQ,
        nearCities: ["Istres", "Martigues", "Port-de-Bouc"]
    },
    {
        name: "Martigues",
        slug: "peintre-martigues",
        zip: "13500",
        title: "Peintre Martigues : La Venise Provençale",
        metaDesc: "Peintre bâtiment Martigues. Intérieur, extérieur, façade.",
        intro: "Intervention sur Martigues et ses quartiers. Rénovation soignée de votre habitat.",
        faq: baseFAQ,
        nearCities: ["Port-de-Bouc", "Saint-Mitre", "Sausset-les-Pins"]
    },
    {
        name: "Fos-sur-Mer",
        slug: "peintre-fos-sur-mer",
        zip: "13270",
        title: "Peintre Fos-sur-Mer - Travaux Rénovation",
        metaDesc: "Artisan peintre à Fos-sur-Mer. Devis gratuit.",
        intro: "Je réalise tous vos travaux de peinture à Fos-sur-Mer. Professionnalisme garanti.",
        faq: baseFAQ,
        nearCities: ["Istres", "Port-de-Bouc", "Martigues"]
    },
    {
        name: "Port-de-Bouc",
        slug: "peintre-port-de-bouc",
        zip: "13110",
        title: "Peintre Port-de-Bouc",
        metaDesc: "Votre peintre à Port-de-Bouc. Rénovation intérieure et extérieure.",
        intro: "Travaux de peinture soignés sur Port-de-Bouc et environs.",
        faq: baseFAQ,
        nearCities: ["Martigues", "Fos-sur-Mer", "Saint-Mitre"]
    },
    {
        name: "Mouriès",
        slug: "peintre-mouries",
        zip: "13890",
        title: "Peintre Mouriès - Cœur des Alpilles",
        metaDesc: "Peintre Mouriès. Rénovation de mas et maisons de village.",
        intro: "Spécialiste de la rénovation dans les Alpilles, j'interviens à Mouriès.",
        faq: baseFAQ,
        nearCities: ["Maussane", "Saint-Rémy", "Aureille"]
    },
    {
        name: "Maussane-les-Alpilles",
        slug: "peintre-maussane-les-alpilles",
        zip: "13520",
        title: "Peintre Maussane-les-Alpilles",
        metaDesc: "Travaux de peinture de qualité à Maussane.",
        intro: "Services de peinture haut de gamme à Maussane-les-Alpilles.",
        faq: baseFAQ,
        nearCities: ["Mouriès", "Les Baux", "Saint-Rémy"]
    },
    {
        name: "Aureille",
        slug: "peintre-aureille",
        zip: "13930",
        title: "Peintre Aureille - Artisan Proche",
        metaDesc: "Votre artisan peintre à Aureille.",
        intro: "Intervention rapide et soignée à Aureille pour vos travaux.",
        faq: baseFAQ,
        nearCities: ["Eyguières", "Mouriès", "Eygalières"]
    },
    {
        name: "Eygalières",
        slug: "peintre-eygalieres",
        zip: "13810",
        title: "Peintre Eygalières - Finitions Prestige",
        metaDesc: "Peintre Eygalières. Rénovation de propriétés et mas.",
        intro: "Pour vos propriétés à Eygalières, exigez la qualité d'un artisan consciencieux.",
        faq: baseFAQ,
        nearCities: ["Orgon", "Mollégès", "Saint-Rémy"]
    },
    {
        name: "Mallemort",
        slug: "peintre-mallemort",
        zip: "13370",
        title: "Peintre Mallemort - Rénovation",
        metaDesc: "Peintre bâtiment Mallemort. Devis peinture gratuit.",
        intro: "Je me déplace à Mallemort pour tous vos projets de peinture et sol.",
        faq: baseFAQ,
        nearCities: ["Sénas", "Alleins", "Charleval"]
    },
    {
        name: "Alleins",
        slug: "peintre-alleins",
        zip: "13980",
        title: "Peintre Alleins",
        metaDesc: "Travaux peinture Alleins (13980).",
        intro: "Artisan peintre local intervenant sur la commune d'Alleins.",
        faq: baseFAQ,
        nearCities: ["Mallemort", "Lamanon", "Vernègues"]
    },
    {
        name: "Vernègues",
        slug: "peintre-vernegues",
        zip: "13116",
        title: "Peintre Vernègues",
        metaDesc: "Votre peintre à Vernègues.",
        intro: "Rénovation et décoration intérieure à Vernègues.",
        faq: baseFAQ,
        nearCities: ["Alleins", "Lambesc", "Aurons"]
    },
    {
        name: "Aurons",
        slug: "peintre-aurons",
        zip: "13121",
        title: "Peintre Aurons - Village Provençal",
        metaDesc: "Peintre Aurons. Travail de qualité.",
        intro: "J'interviens dans le village d'Aurons pour embellir votre intérieur.",
        faq: baseFAQ,
        nearCities: ["Pélissanne", "Salon-de-Provence", "Vernègues"]
    },
    {
        name: "Lambesc",
        slug: "peintre-lambesc",
        zip: "13410",
        title: "Peintre Lambesc - Pays d'Aix",
        metaDesc: "Peintre Lambesc. Rénovation complète et sols.",
        intro: "À Lambesc, je réalise vos travaux de peinture avec soin et professionnalisme.",
        faq: baseFAQ,
        nearCities: ["Saint-Cannat", "Rognes", "Vernègues"]
    }
];

// Helper to expand list if needed in future
export function getCityData(slug: string) {
    return cities.find(c => c.slug === slug);
}

export function getAllCitySlugs() {
    return cities.map(c => c.slug);
}
