export type CityData = {
    name: string;
    slug: string;
    zip: string;
    title: string;
    intro: string;
    metaDesc: string;
    neighborhoods?: string[];
    faq: { q: string; a: string }[];
    nearCities: string[]; // List of exact slugs of other cities in this array
};

export const cities: CityData[] = [
    {
        name: "Salon-de-Provence",
        slug: "peintre-salon-de-provence",
        zip: "13300",
        title: "Artisan Peintre Salon-de-Provence (13300) : Rénovation & Déco",
        metaDesc: "Artisan peintre à Salon-de-Provence (13300). Travaux de peinture intérieure, plafonds, placo, isolation et sols. Devis gratuit sous 24h au 06 35 23 81 07.",
        intro: "Vous recherchez un artisan peintre de confiance à Salon-de-Provence ? Spécialisé en rénovation intérieure et finitions de qualité, j'interviens dans l'ensemble des quartiers salonais (centre-ville historique, Bel-Air, Michelet, Lurian, Les Canourgues, La Croix-Blanche). Que vous souhaitiez rafraîchir un appartement de charme, rénover une maison de ville ou embellir une villa contemporaine, je vous garantis une préparation soignée des supports et un chantier impeccable.",
        neighborhoods: ["Centre historique", "Bel-Air", "Lurian", "Michelet", "Les Canourgues", "La Croix-Blanche"],
        faq: [
            {
                q: "Quels sont vos délais d'intervention pour un chantier à Salon-de-Provence ?",
                a: "Étant situé à proximité immédiate d'Eyguières, je me déplace à Salon-de-Provence sous 24h à 48h pour évaluer votre chantier et vous remettre un devis gratuit et détaillé. Le démarrage des travaux peut s'effectuer sous 2 à 3 semaines."
            },
            {
                q: "Prenez-vous en charge la préparation des murs anciens et fissurés à Salon-de-Provence ?",
                a: "Oui, la préparation est l'étape cruciale pour un rendu parfait : rebouchage des fissures, ratissage des enduits, ponçage mécanique avec aspiration et application de sous-couche d'accroche avant mise en peinture."
            },
            {
                q: "Vos déplacements et devis sont-ils payants sur Salon-de-Provence ?",
                a: "Non, tous mes déplacements et devis à Salon-de-Provence et dans tout le pays salonais sont 100% gratuits et sans engagement."
            }
        ],
        nearCities: ["peintre-eyguieres", "peintre-pelissanne", "peintre-grans", "peintre-lamanon"]
    },
    {
        name: "Miramas",
        slug: "peintre-miramas",
        zip: "13140",
        title: "Entreprise de Peinture Miramas (13140) : Neuf & Rénovation",
        metaDesc: "Artisan peintre à Miramas. Travaux soignés de peinture murale, plafonds, pose de placo et revêtements de sol. Devis gratuit et intervention rapide.",
        intro: "Installé tout près de Miramas, j'accompagne particuliers et professionnels dans leurs projets de rénovation intérieure et décoration. Qu'il s'agisse de Miramas-le-Vieux, du centre-ville, du quartier des Mollières ou des résidences récentes proches du Village de Marques, je réalise la peinture de vos murs, la rénovation des plafonds, la pose de plaques de plâtre et le remplacement de revêtements de sol avec rigueur et propreté.",
        neighborhoods: ["Miramas-le-Vieux", "Centre-ville", "Les Mollières", "La Carraire", "Chantegrive"],
        faq: [
            {
                q: "Intervenez-vous pour des rénovations après dégât des eaux à Miramas ?",
                a: "Oui, j'interviens régulièrement pour traiter les sinistres dégâts des eaux : assèchement, traitement anti-humidité, réfection des plâtres et remise en peinture aux normes pour votre assurance."
            },
            {
                q: "Quels types de peinture appliquez-vous pour un logement à Miramas ?",
                a: "J'utilise exclusivement des peintures professionnelles de haute qualité (Seigneurie Gauthier, Zolpan, Tollens), dépolluantes, sans odeur et à très faible émission de COV pour votre santé."
            },
            {
                q: "Le devis est-il gratuit pour une maison ou un appartement à Miramas ?",
                a: "Absolument. Je me déplace sur place à Miramas pour mesurer vos surfaces et vous transmettre un devis transparent sans frais."
            }
        ],
        nearCities: ["peintre-istres", "peintre-saint-chamas", "peintre-grans", "peintre-salon-de-provence"]
    },
    {
        name: "Eyguières",
        slug: "peintre-eyguieres",
        zip: "13430",
        title: "Artisan Peintre Eyguières (13430) : Peintre en Bâtiment Local",
        metaDesc: "Votre artisan peintre basé à Eyguières (13430). Rénovation intérieure, placo, isolation, peinture velours et sols. Devis gratuit sous 24h au 06 35 23 81 07.",
        intro: "Artisan peintre basé à Eyguières même, je suis votre interlocuteur local de proximité au pied des Alpilles. Connaissant parfaitement les caractéristiques de nos bâtisses provençales comme des constructions récentes, je prends en charge tous vos travaux de peinture intérieure, boiseries, volets, pose de cloisons en placo et doublage isolant. Choisir TR Peinture à Eyguières, c'est l'assurance d'un artisan disponible, réactif et soucieux de sa réputation locale.",
        neighborhoods: ["Village historique", "Les Aréniers", "Roquerousse", "Chemin des Alpilles"],
        faq: [
            {
                q: "Étant basé à Eyguières, quel est votre délai de visite ?",
                a: "Habitant sur place à Eyguières, je peux généralement venir chez vous le jour même ou sous 24 heures pour estimer vos travaux et vous conseiller."
            },
            {
                q: "Réalisez-vous aussi l'isolation et les bandes à joint à Eyguières ?",
                a: "Oui, je suis qualifié en pose de plaques de plâtre (Placo BA13), faux-plafonds, cloisons acoustiques et bandes à joint prêtes à peindre avec ratissage fin."
            },
            {
                q: "Disposez-vous de la garantie décennale à Eyguières ?",
                a: "Oui, tous mes travaux sont couverts par une assurance Responsabilité Civile Professionnelle et une Garantie Décennale 10 ans."
            }
        ],
        nearCities: ["peintre-lamanon", "peintre-senas", "peintre-aureille", "peintre-salon-de-provence"]
    },
    {
        name: "Istres",
        slug: "peintre-istres",
        zip: "13800",
        title: "Artisan Peintre Istres (13800) : Rénovation Intérieure & Sols",
        metaDesc: "Peintre professionnel intervenant à Istres (13800). Peinture murs, plafonds, pose de parquets et placo. Devis rapide et gratuit pour villa ou appartement.",
        intro: "De l'Étang de l'Olivier aux rives du Ranquet, en passant par Rassuen et Trigance, j'interviens sur tout le territoire d'Istres pour donner vie à vos projets de peinture et rénovation. Une belle peinture commence toujours par une préparation minutieuse des supports et une protection totale de vos sols et mobiliers. Je vous accompagne du choix des teintes jusqu'à la livraison d'un chantier nettoyé et soigné.",
        neighborhoods: ["Centre ancien", "Le Ranquet", "Trigance", "Rassuen", "Les Heures Claires", "Entressen"],
        faq: [
            {
                q: "Combien coûte un artisan peintre à Istres ?",
                a: "Le tarif dépend de l'état des murs et des finitions souhaitées. Un devis personnalisé et gratuit sur place permet de chiffrer précisément les fournitures et la main-d'œuvre au juste prix."
            },
            {
                q: "Pouvez-vous peindre des boiseries et ferronneries extérieures à Istres ?",
                a: "Oui, j'applique des peintures microporeuses spéciales pour volets en bois, portes, dessous de toit ainsi que des laques antirouille pour ferronneries."
            },
            {
                q: "Quel délai pour une rénovation complète de maison à Istres ?",
                a: "Pour un appartement ou une villa standard de 80 à 100 m², le chantier de peinture intérieure dure en moyenne entre 5 et 10 jours ouvrés."
            }
        ],
        nearCities: ["peintre-miramas", "peintre-saint-mitre-les-remparts", "peintre-fos-sur-mer", "peintre-saint-chamas"]
    },
    {
        name: "Saint-Chamas",
        slug: "peintre-saint-chamas",
        zip: "13250",
        title: "Artisan Peintre Saint-Chamas (13250) : Rénovation & Finitions",
        metaDesc: "Rénovez votre maison ou appartement à Saint-Chamas avec un peintre qualifié. Placo, isolation, peinture soignée. Contactez TR Peinture pour un devis gratuit.",
        intro: "Le charme typique de Saint-Chamas et de ses maisons en bordure d'Étang de Berre mérite des intérieurs traités avec respect. J'interviens dans le village troglodytique, sur les collines et dans les lotissements pavillonnaires pour rafraîchir vos pièces de vie, poser des parquets stratifiés chaleureux ou isoler vos combles et cloisons.",
        neighborhoods: ["Le Port", "Quartier du Pertuis", "Les Baou", "La Poudrerie"],
        faq: [
            {
                q: "Comment protéger les sols délicats lors des travaux à Saint-Chamas ?",
                a: "Je protège systématiquement vos parquets, carrelages et escaliers à l'aide de feutre absorbant imperméable et de bâches polyéthylène Scotch 3M professionnelles."
            },
            {
                q: "Proposez-vous des peintures écologiques à Saint-Chamas ?",
                a: "Oui, je privilégie les peintures écolabellisées classe A+, à très faible teneur en solvants, idéales pour les chambres d'enfants et les pièces de vie."
            },
            {
                q: "Quel est le délai pour obtenir un devis à Saint-Chamas ?",
                a: "Le devis est établi sous 24h à 48h après ma visite sur place à Saint-Chamas."
            }
        ],
        nearCities: ["peintre-miramas", "peintre-la-fare-les-oliviers", "peintre-berre-l-etang", "peintre-salon-de-provence"]
    },
    {
        name: "Lamanon",
        slug: "peintre-lamanon",
        zip: "13113",
        title: "Peintre Lamanon (13113) : Travaux Peinture Maison & Appartement",
        metaDesc: "Artisan peintre intervenant à Lamanon. Finitions soignées, peintures professionnelles, placo et sols. Devis 100% gratuit.",
        intro: "Voisin direct d'Eyguières, j'interviens très régulièrement à Lamanon pour tous types de travaux de second œuvre : remise à neuf de murs anciens, réparation de fissures, application d'enduits lissés et pose de revêtements modernes. Je vous apporte des conseils personnalisés sur les accords de teintes et les textures.",
        neighborhoods: ["Village", "Quartier des Grottes de Calès", "Les Roques"],
        faq: [
            {
                q: "Êtes-vous disponible rapidement pour un chantier à Lamanon ?",
                a: "Oui, la proximité immédiate avec Eyguières me permet d'intervenir en priorité sur Lamanon pour vos chantiers urgents ou vos devis."
            },
            {
                q: "Faites-vous la pose de sols souples LVT et parquets à Lamanon ?",
                a: "Oui, je pose des parquets flottants stratifiés, contrecollés et des lames vinyles clipsables avec pose de sous-couches isolantes et plinthes assorties."
            },
            {
                q: "Le devis est-il sans engagement à Lamanon ?",
                a: "Oui, devis totalement gratuit et sans aucun engagement."
            }
        ],
        nearCities: ["peintre-eyguieres", "peintre-senas", "peintre-salon-de-provence", "peintre-alleins"]
    },
    {
        name: "Pélissanne",
        slug: "peintre-pelissanne",
        zip: "13330",
        title: "Artisan Peintre Pélissanne (13330) : Rénovation Intérieure",
        metaDesc: "Peintre en bâtiment qualifié à Pélissanne. Peinture murs et plafonds, ratissage, sols et placo. Finitions haute qualité. Devis offert.",
        intro: "À Pélissanne, commune dynamique du pays salonais, je mets mon savoir-faire au service de la rénovation de vos villas, maisons de village et appartements. Du ratissage complet de vos cloisons jusqu'à l'application de peintures de finition mates, veloutées ou satinées, je vous garantis un travail d'artisan méticuleux.",
        neighborhoods: ["Centre historique", "Les Cardelines", "La Prouvenço", "Saint-Pierre"],
        faq: [
            {
                q: "Quelle différence entre peinture mate et velours pour une maison à Pélissanne ?",
                a: "La peinture mate est idéale pour masquer les imperfections des plafonds. La finition velours est le compromis parfait pour les murs : soyeuse, lumineuse, lavable et très résistante."
            },
            {
                q: "Prenez-vous en charge le déplacement des meubles à Pélissanne ?",
                a: "Oui, nous regroupons le mobilier au centre des pièces pour le protéger sous bâche étanche avant de démarrer."
            },
            {
                q: "Quel est votre délai d'intervention à Pélissanne ?",
                a: "Visite sous 48h et démarrage du chantier programmé selon vos disponibilités."
            }
        ],
        nearCities: ["peintre-salon-de-provence", "peintre-aurons", "peintre-lambesc", "peintre-grans"]
    },
    {
        name: "Sénas",
        slug: "peintre-senas",
        zip: "13560",
        title: "Peintre Sénas (13560) : Isolation, Placo & Peinture Intérieure",
        metaDesc: "Votre artisan peintre à Sénas. Rénovation complète, pose de placo et isolation intérieure. Travail garanti et soigné. Devis gratuit.",
        intro: "Au carrefour de la Provence et du Luberon, Sénas compte un parc immobilier varié que j'entretiens et rénove régulièrement. Que vous souhaitiez moderniser votre pièce de vie, créer une suite parentale avec cloisons placo isolantes ou repeindre vos façades et boiseries, je vous apporte une solution clé en main.",
        neighborhoods: ["Centre-ville", "Les Garrigues", "La Tuilerie"],
        faq: [
            {
                q: "Réalisez-vous aussi l'isolation phonique entre pièces à Sénas ?",
                a: "Oui, nous posons des cloisons Placostil avec laine minérale acoustique haute densité pour une insonorisation optimale de vos chambres ou bureaux."
            },
            {
                q: "Quel est le coût moyen pour repeindre une pièce à Sénas ?",
                a: "Cela dépend de la surface et de l'état des murs. Contactez-moi au 06 35 23 81 07 pour un chiffrage précis et gratuit sur place."
            },
            {
                q: "Garantissez-vous vos chantiers à Sénas ?",
                a: "Oui, garantie décennale et assurance responsabilité civile professionnelle sur toutes nos réalisations."
            }
        ],
        nearCities: ["peintre-lamanon", "peintre-mallemort", "peintre-eyguieres", "peintre-alleins"]
    },
    {
        name: "Grans",
        slug: "peintre-grans",
        zip: "13450",
        title: "Artisan Peintre Grans (13450) : Finitions Haut de Gamme",
        metaDesc: "Artisan peintre à Grans (13450). Spécialiste de la rénovation soignée et de la peinture décorative pour villas et mas. Devis rapide.",
        intro: "À Grans, commune réputée pour sa douceur de vivre et son architecture provençale soignée, les propriétaires attendent un niveau d'exigence élevé. J'apporte un soin extrême à chaque détail : préparation millimétrée des fonds, lignes de coupe franches, peintures dépolluantes sans trace de rouleau et propreté exemplaire.",
        neighborhoods: ["Village", "Quartier de la Carraire", "Chemin de Salon"],
        faq: [
            {
                q: "Quelle marque de peinture utilisez-vous sur vos chantiers à Grans ?",
                a: "Je travaille en partenariat avec les leaders professionnels comme Seigneurie Gauthier, Unikalo et Tollens pour garantir une tenue irréprochable dans le temps."
            },
            {
                q: "Combien de temps à l'avance faut-il réserver pour un chantier à Grans ?",
                a: "Un délai d'anticipation de 2 à 3 semaines est recommandé, mais n'hésitez pas à me contacter pour toute demande urgente."
            },
            {
                q: "Le devis est-il détaillé poste par poste ?",
                a: "Oui, chaque devis détaille clairement les préparations de supports, les fournitures, les sous-couches et les couches de finition."
            }
        ],
        nearCities: ["peintre-salon-de-provence", "peintre-miramas", "peintre-pelissanne", "peintre-saint-chamas"]
    },
    {
        name: "Saint-Rémy-de-Provence",
        slug: "peintre-saint-remy-de-provence",
        zip: "13210",
        title: "Peintre Saint-Rémy-de-Provence (13210) : Rénovation Mas & Villas",
        metaDesc: "Peintre en bâtiment à Saint-Rémy-de-Provence. Rénovation de mas, bastides et villas de prestige dans les Alpilles. Devis gratuit.",
        intro: "Au cœur des Alpilles, Saint-Rémy-de-Provence requiert un savoir-faire d'artisan rigoureux pour respecter le cachet des mas en pierre, des bastides et des belles villas d'architecte. J'adapte mes techniques : peintures minérales, teintes douces et naturelles, protection soignée des poutres et ferronneries, et remise en état soignée de vos pièces de réception.",
        neighborhoods: ["Centre ancien", "Glanum", "Les Jardins", "Le Plan de Saint-Rémy"],
        faq: [
            {
                q: "Pouvez-vous restaurer des plafonds anciens et des poutres à Saint-Rémy ?",
                a: "Oui, je traite les poutres (ponçage, lasure, peinture mate) et restaure les plafonds anciens en respectant la structure du bâti."
            },
            {
                q: "Intervenez-vous pour des résidences secondaires dans les Alpilles ?",
                a: "Oui, j'interviens régulièrement en toute autonomie pour des propriétaires non résidents, avec envoi régulier de photos d'avancement du chantier."
            },
            {
                q: "Quel est le délai pour un devis à Saint-Rémy-de-Provence ?",
                a: "Je me déplace sous 24h à 48h dans les Alpilles pour étudier votre projet et vous remettre une proposition chiffrée."
            }
        ],
        nearCities: ["peintre-eyguieres", "peintre-maussane-les-alpilles", "peintre-mouries", "peintre-eygalieres"]
    },
    {
        name: "La Fare-les-Oliviers",
        slug: "peintre-la-fare-les-oliviers",
        zip: "13580",
        title: "Peintre La Fare-les-Oliviers (13580) : Rénovation Maison & Placo",
        metaDesc: "Artisan peintre intervenant à La Fare-les-Oliviers. Travaux de peinture intérieure, sols et isolation. Devis gratuit et travail soigné.",
        intro: "À La Fare-les-Oliviers, j'interviens dans les maisons de village et les zones résidentielles pour redonner éclat et modernité à vos espaces de vie. De la chambre d'enfants au salon cathédrale, je garantis une pose soignée de peinture et de revêtements de sol.",
        neighborhoods: ["Centre village", "Les Oliviers", "Les Grands Pins"],
        faq: [
            {
                q: "Faites-vous la pose de placo et cloisons à La Fare-les-Oliviers ?",
                a: "Oui, création de placards, faux-plafonds avec spots intégrés et doublage de murs extérieurs."
            },
            {
                q: "Comment se déroule le nettoyage en fin de chantier ?",
                a: "Les protections sont retirées, les sols aspirés et nettoyés : vous retrouvez un logement immédiatement habitable et propre."
            },
            {
                q: "Le devis est-il gratuit à La Fare-les-Oliviers ?",
                a: "Oui, devis 100% gratuit et sans engagement."
            }
        ],
        nearCities: ["peintre-coudoux", "peintre-velaux", "peintre-saint-chamas", "peintre-berre-l-etang"]
    },
    {
        name: "Velaux",
        slug: "peintre-velaux",
        zip: "13880",
        title: "Artisan Peintre Velaux (13880) : Peinture Intérieure & Sols",
        metaDesc: "Votre artisan peintre sur Velaux (13880). Rénovation complète murs, plafonds, parquet et placo. Devis rapide au 06 35 23 81 07.",
        intro: "Sur la commune de Velaux, je réalise tous vos travaux d'embellissement intérieur. Que ce soit pour préparer votre bien avant une mise en vente ou personnaliser votre nouvelle acquisition, je vous conseille sur les harmonies de couleurs et les matériaux résistants.",
        neighborhoods: ["Vieux Velaux", "Quartier de la Verane", "Les Bastides"],
        faq: [
            {
                q: "Quels types de sols posez-vous à Velaux ?",
                a: "Parquets stratifiés, parquets contrecollés en chêne, et dalles/lames PVC vinyle LVT étanches idéales pour cuisines et salles de bain."
            },
            {
                q: "Combien de couches de peinture appliquez-vous ?",
                a: "Toujours une sous-couche d'impression adaptée au support, suivie de 2 couches de finition pour un pouvoir couvrant et une profondeur de teinte irréprochables."
            },
            {
                q: "Quel est le délai pour un devis à Velaux ?",
                a: "Devis transmis sous 24 à 48 heures après visite technique."
            }
        ],
        nearCities: ["peintre-rognac", "peintre-ventabren", "peintre-coudoux", "peintre-la-fare-les-oliviers"]
    },
    {
        name: "Ventabren",
        slug: "peintre-ventabren",
        zip: "13122",
        title: "Peintre Ventabren (13122) : Finitions Soignées & Décoration",
        metaDesc: "Travaux de peinture haut de gamme à Ventabren. Peintre en bâtiment qualifié pour vos murs, plafonds et rénovations intérieures.",
        intro: "Niché sur sa colline, Ventabren abrite de superbes propriétés et villas provençales. J'apporte aux habitants de Ventabren mon expertise en finitions décoratives, ratissage complet des surfaces et pose soignée de revêtements de sol durables.",
        neighborhoods: ["Vieux Village", "Les Roques", "Plateau de Ventabren"],
        faq: [
            {
                q: "Réalisez-vous le ratissage d'enduit complet à Ventabren ?",
                a: "Oui, le ratissage permet de rendre les murs parfaitement lisses, sans aucune aspérité avant d'appliquer une peinture mate ou velours."
            },
            {
                q: "Travaillez-vous sur des chantiers occupés à Ventabren ?",
                a: "Oui, nous organisons le chantier pièce par pièce pour minimiser l'impact sur votre vie quotidienne."
            },
            {
                q: "Le devis est-il offert à Ventabren ?",
                a: "Oui, déplacement et chiffrage 100% gratuits."
            }
        ],
        nearCities: ["peintre-velaux", "peintre-coudoux", "peintre-rognac", "peintre-lambesc"]
    },
    {
        name: "Coudoux",
        slug: "peintre-coudoux",
        zip: "13111",
        title: "Artisan Peintre Coudoux (13111) : Travaux Peinture & Isolation",
        metaDesc: "Peintre en bâtiment à Coudoux. Devis gratuit sous 24h pour peinture intérieure, pose de parquet et faux-plafonds isolants.",
        intro: "À Coudoux, je propose aux particuliers des prestations de peinture artisanale soignée. Que vous ayez un salon à rafraîchir, des fissures à traiter ou une rénovation globale après achat, je m'engage sur le respect des délais et des prix convenus.",
        neighborhoods: ["Centre village", "Campagne de Coudoux", "Les Costes"],
        faq: [
            {
                q: "Traitez-vous les problèmes d'humidité avant peinture à Coudoux ?",
                a: "Absolument. Nous appliquons des primaires hydrofuges et isolants pour stopper net toute remontée d'humidité avant finition."
            },
            {
                q: "Quelle garantie pour les travaux de peinture à Coudoux ?",
                a: "Assurance décennale et RC Pro complètes sur toutes nos interventions."
            },
            {
                q: "Combien de temps prend un devis à Coudoux ?",
                a: "Visite rapide sous 24h et envoi du devis sous 24h."
            }
        ],
        nearCities: ["peintre-la-fare-les-oliviers", "peintre-velaux", "peintre-ventabren", "peintre-pelissanne"]
    },
    {
        name: "Berre-l'Étang",
        slug: "peintre-berre-l-etang",
        zip: "13130",
        title: "Peintre Berre-l'Étang (13130) : Rénovation Intérieure & Murs",
        metaDesc: "Entreprise de peinture intervenant à Berre-l'Étang. Peinture murs, plafonds, pose de placo et sols. Devis gratuit sans engagement.",
        intro: "J'interviens sur l'ensemble de la commune de Berre-l'Étang pour remettre à neuf appartements, maisons de ville et locaux professionnels. Protection complète des meubles, rebouchage des trous et fissures, et mise en peinture avec des produits professionnels durables.",
        neighborhoods: ["Centre-ville", "Les Cabanes", "Quartier Mauran", "Gare de Berre"],
        faq: [
            {
                q: "Peut-on repeindre une cuisine ou une salle de bain à Berre-l'Étang ?",
                a: "Oui, nous appliquons des peintures spéciales pièces humides anti-condensation et anti-moisissure ultra-lessivables."
            },
            {
                q: "Quel est le coût moyen pour repeindre un appartement à Berre-l'Étang ?",
                a: "Le tarif varie selon l'état des murs. Nous établissons un chiffrage précis et gratuit lors d'une visite technique sur place."
            },
            {
                q: "Les devis sont-ils gratuits à Berre-l'Étang ?",
                a: "Oui, 100% gratuits et sans engagement."
            }
        ],
        nearCities: ["peintre-rognac", "peintre-saint-chamas", "peintre-vitrolles", "peintre-la-fare-les-oliviers"]
    },
    {
        name: "Rognac",
        slug: "peintre-rognac",
        zip: "13340",
        title: "Peintre Rognac (13340) : Artisan Peinture & Revêtements",
        metaDesc: "Artisan peintre qualifié à Rognac. Peinture intérieure, pose de parquet stratifié, placo et isolation. Devis gratuit au 06 35 23 81 07.",
        intro: "Pour vos travaux sur Rognac, faites appel à un artisan réactif et rigoureux. Du bas de Rognac jusqu'aux hauteurs de la colline, je réalise la rénovation complète de vos pièces : plafonds sans trace, peintures lessivables pour couloirs et pièces à vivre, et pose impeccable de sols.",
        neighborhoods: ["Rognac Ville", "Les Barjaquets", "Plateau des Frégates"],
        faq: [
            {
                q: "Fournissez-vous la peinture ou le client peut-il l'acheter ?",
                a: "Je fournis systématiquement des peintures de qualité professionnelle (Seigneurie, Tollens) bénéficiant de tarifs artisans avantageux et d'une durabilité garantie."
            },
            {
                q: "Quel délai pour démarrer un chantier à Rognac ?",
                a: "En moyenne sous 2 à 3 semaines après validation de notre devis gratuit."
            },
            {
                q: "Êtes-vous assuré pour les chantiers à Rognac ?",
                a: "Oui, assurance RC Pro et garantie décennale complètes."
            }
        ],
        nearCities: ["peintre-berre-l-etang", "peintre-vitrolles", "peintre-velaux", "peintre-la-fare-les-oliviers"]
    },
    {
        name: "Vitrolles",
        slug: "peintre-vitrolles",
        zip: "13127",
        title: "Peintre Vitrolles (13127) : Rénovation Appartement & Villa",
        metaDesc: "Artisan peintre à Vitrolles. Travaux soignés de peinture intérieure, plafonds, pose de placo et revêtements de sol. Devis gratuit sous 24h.",
        intro: "J'interviens sur Vitrolles pour tous travaux de peinture en neuf et rénovation : du Vieux Village aux quartiers résidentiels des Pinchinades ou du Liourat. Je vous apporte un accompagnement technique et esthétique pour moderniser votre intérieur avec soin et propreté.",
        neighborhoods: ["Vieux Village", "Les Pinchinades", "Le Liourat", "La Frescoule", "Les Cadenières"],
        faq: [
            {
                q: "Intervenez-vous pour des bureaux ou commerces à Vitrolles ?",
                a: "Oui, nous pouvons intervenir en horaires adaptés pour rafraîchir vos bureaux, cabinets ou commerces vitrollais sans bloquer votre activité."
            },
            {
                q: "Combien coûte la peinture d'un plafond à Vitrolles ?",
                a: "Le tarif dépend de la hauteur et de l'état (fissures, jaunissement). Contactez-moi pour un devis gratuit et sur mesure."
            },
            {
                q: "Le devis est-il gratuit à Vitrolles ?",
                a: "Oui, devis et déplacement 100% gratuits."
            }
        ],
        nearCities: ["peintre-rognac", "peintre-berre-l-etang", "peintre-velaux", "peintre-saint-mitre-les-remparts"]
    },
    {
        name: "Saint-Mitre-les-Remparts",
        slug: "peintre-saint-mitre-les-remparts",
        zip: "13920",
        title: "Peintre Saint-Mitre-les-Remparts (13920) : Rénovation Habitat",
        metaDesc: "Votre artisan peintre à Saint-Mitre-les-Remparts. Travaux de peinture intérieure, sols souples et placo. Devis gratuit et chantier soigné.",
        intro: "Idéalement située entre étangs et collines, Saint-Mitre-les-Remparts possède de belles propriétés que je prends plaisir à embellir. Que ce soit dans le village médiéval ou dans les lotissements calmes de Varage et Massane, je répare vos murs et sublime vos pièces de vie.",
        neighborhoods: ["Centre historique", "Varage", "Massane", "Les Remparts"],
        faq: [
            {
                q: "Posez-vous du parquet dans les pièces d'eau à Saint-Mitre ?",
                a: "Nous recommandons et posons des lames vinyles LVT 100% étanches imitation bois, très résistantes et parfaitement compatibles avec l'eau."
            },
            {
                q: "Comment préparer les murs écaillés par le temps ?",
                a: "Grattage des parties non adhérentes, ponçage, durcisseur de fond, enduisage croisé et ponçage fin avant la couche d'impression."
            },
            {
                q: "Le devis est-il gratuit à Saint-Mitre-les-Remparts ?",
                a: "Oui, visite et devis entièrement gratuits."
            }
        ],
        nearCities: ["peintre-istres", "peintre-martigues", "peintre-port-de-bouc", "peintre-miramas"]
    },
    {
        name: "Martigues",
        slug: "peintre-martigues",
        zip: "13500",
        title: "Artisan Peintre Martigues (13500) : Rénovation Intérieure & Sols",
        metaDesc: "Peintre professionnel à Martigues. Travaux soignés de peinture murale, réfection de plafonds, placo et parquet. Devis gratuit sous 24h.",
        intro: "Surnommée la Venise Provençale, Martigues compte un tissu d'habitations riche : appartements de pêcheurs à Jonquières et Ferrières, maisons de ville à l'Île, et villas modernes à Saint-Julien ou La Couronne. J'apporte mon expertise de peintre pour protéger et magnifier votre cadre de vie avec des peintures haut de gamme.",
        neighborhoods: ["Ferrières", "Jonquières", "L'Île", "Saint-Julien", "Croix-Sainte", "La Couronne"],
        faq: [
            {
                q: "Appliquez-vous des peintures résistantes à l'air marin à Martigues ?",
                a: "Oui, nous sélectionnons des laques et peintures microporeuses spécialement traitées pour résister aux embruns et à l'humidité côtière."
            },
            {
                q: "Combien de temps dure un chantier de rénovation à Martigues ?",
                a: "En moyenne 3 à 7 jours pour un appartement 3 pièces, avec un planning précis respecté du début à la fin."
            },
            {
                q: "Déplacement gratuit à Martigues ?",
                a: "Oui, devis et déplacement offerts sur l'ensemble de la commune de Martigues."
            }
        ],
        nearCities: ["peintre-port-de-bouc", "peintre-saint-mitre-les-remparts", "peintre-fos-sur-mer", "peintre-istres"]
    },
    {
        name: "Fos-sur-Mer",
        slug: "peintre-fos-sur-mer",
        zip: "13270",
        title: "Artisan Peintre Fos-sur-Mer (13270) : Peinture & Placo",
        metaDesc: "Votre peintre en bâtiment à Fos-sur-Mer. Rénovation intérieure, réfection plafonds, cloisons placo et revêtements. Devis gratuit.",
        intro: "À Fos-sur-Mer, du village historique jusqu'aux quartiers balnéaires et résidentiels, je réalise tous vos travaux de peinture intérieure et rénovation. Protégez vos murs avec des finitions faciles d'entretien et transformez votre logement avec des couleurs modernes et lumineuses.",
        neighborhoods: ["Le Village", "Les Carabins", "La Jonquière", "Saint-Gervais"],
        faq: [
            {
                q: "Proposez-vous des peintures lessivables pour famille nombreuse à Fos-sur-Mer ?",
                a: "Oui, nos peintures velours professionnelles permettent un nettoyage facile à l'éponge douce sans altérer l'éclat de la couleur."
            },
            {
                q: "Faites-vous les faux-plafonds isolants à Fos-sur-Mer ?",
                a: "Oui, pose d'ossature métallique avec laine de verre et plaques de plâtre pour réduire les bruits et améliorer le confort thermique."
            },
            {
                q: "Le devis est-il sans engagement à Fos-sur-Mer ?",
                a: "Oui, devis 100% gratuit et sans engagement."
            }
        ],
        nearCities: ["peintre-istres", "peintre-port-de-bouc", "peintre-martigues", "peintre-miramas"]
    },
    {
        name: "Port-de-Bouc",
        slug: "peintre-port-de-bouc",
        zip: "13110",
        title: "Peintre Port-de-Bouc (13110) : Artisan Rénovation & Peinture",
        metaDesc: "Travaux de peinture à Port-de-Bouc. Artisan peintre qualifié pour maisons et appartements. Devis gratuit et chantier propre.",
        intro: "J'interviens sur Port-de-Bouc pour tous travaux de remise en état intérieure, rafraîchissement d'appartements locatifs ou rénovation complète de maisons de ville. Un travail soigné, des protections fiables et un tarif artisan compétitif.",
        neighborhoods: ["Les Aigues Douces", "Tassy", "Le Port", "Bellevue"],
        faq: [
            {
                q: "Intervenez-vous pour repeindre avant une mise en location à Port-de-Bouc ?",
                a: "Oui, nous proposons des forfaits rafraîchissement rapide (murs blancs, plafonds) pour relouer rapidement votre bien au meilleur prix."
            },
            {
                q: "Quelles sont les garanties apportées ?",
                a: "Tous nos travaux bénéficient de la garantie décennale et de l'assurance responsabilité civile professionnelle."
            },
            {
                q: "Le devis est-il gratuit à Port-de-Bouc ?",
                a: "Oui, déplacement et estimation gratuits."
            }
        ],
        nearCities: ["peintre-martigues", "peintre-fos-sur-mer", "peintre-saint-mitre-les-remparts", "peintre-istres"]
    },
    {
        name: "Mouriès",
        slug: "peintre-mouries",
        zip: "13890",
        title: "Peintre Mouriès (13890) : Rénovation Mas au Cœur des Alpilles",
        metaDesc: "Artisan peintre à Mouriès (13890). Rénovation de mas provençaux, bastides et maisons de village. Finitions d'exception et devis gratuit.",
        intro: "Au cœur de la vallée des Baux et première commune oléicole de France, Mouriès possède un patrimoine bâti remarquable. Je mets mon savoir-faire au service de la rénovation de vos mas traditionnels, granges réhabilitées et villas : teintes minérales, enduits lissés et respect des matériaux nobles provençaux.",
        neighborhoods: ["Village", "Le Servan", "Chemin des Alpilles"],
        faq: [
            {
                q: "Savez-vous travailler sur des murs en pierre et plâtre ancien à Mouriès ?",
                a: "Oui, nous adaptons nos primaires et enduits pour laisser respirer le bâti ancien sans créer d'écaillage."
            },
            {
                q: "Quel est votre rayon d'intervention autour de Mouriès ?",
                a: "J'interviens dans un rayon de 30 km couvrant l'ensemble du massif des Alpilles et du pays salonais."
            },
            {
                q: "Le devis est-il gratuit à Mouriès ?",
                a: "Oui, déplacement et devis offerts."
            }
        ],
        nearCities: ["peintre-maussane-les-alpilles", "peintre-saint-remy-de-provence", "peintre-aureille", "peintre-eyguieres"]
    },
    {
        name: "Maussane-les-Alpilles",
        slug: "peintre-maussane-les-alpilles",
        zip: "13520",
        title: "Peintre Maussane-les-Alpilles (13520) : Rénovation de Prestige",
        metaDesc: "Artisan peintre de référence à Maussane-les-Alpilles. Rénovation de propriétés, mas et villas. Finitions haut de gamme et devis gratuit.",
        intro: "À Maussane-les-Alpilles, village d'art et de tradition provençale, j'offre des prestations de peinture sur mesure aux propriétaires exigeants. Peinture haut de gamme, boiseries intérieures, mise en valeur des volumes et pose soignée de revêtements nobles pour sublimer votre bien.",
        neighborhoods: ["Le Paradou limitrophe", "Place de l'Église", "Vallée des Baux"],
        faq: [
            {
                q: "Conseillez-vous sur le choix des couleurs à Maussane ?",
                a: "Oui, je vous accompagne avec des nuanciers professionnels pour harmoniser les teintes avec votre lumière naturelle et votre mobilier."
            },
            {
                q: "Proposez-vous des peintures mates sans traces pour plafonds hauts ?",
                a: "Oui, nous appliquons des peintures mates à tension parfaite (classe 1) garantissant l'absence totale de traces d'outils, même en lumière rasante."
            },
            {
                q: "Visite gratuite à Maussane-les-Alpilles ?",
                a: "Oui, 100% gratuit."
            }
        ],
        nearCities: ["peintre-mouries", "peintre-saint-remy-de-provence", "peintre-eygalieres", "peintre-aureille"]
    },
    {
        name: "Aureille",
        slug: "peintre-aureille",
        zip: "13930",
        title: "Artisan Peintre Aureille (13930) : Peintre Local Proche de Vous",
        metaDesc: "Votre peintre en bâtiment à Aureille (13930). Rénovation intérieure, placo et sols. Artisan voisin basé à Eyguières. Devis sous 24h.",
        intro: "Voisin immédiat d'Aureille depuis Eyguières, je me rends chez vous en quelques minutes pour chiffrer vos travaux. Que vous souhaitiez rafraîchir un mas au pied des crêtes ou rénover une maison au cœur du village, vous profitez de la réactivité d'un artisan local de proximité.",
        neighborhoods: ["Le Village", "Chemin des Gaules", "Pied des Caous"],
        faq: [
            {
                q: "Étant situé à côté, quel est le délai pour venir à Aureille ?",
                a: "Je peux être sur place sous 24 heures pour évaluer votre chantier et discuter de votre projet."
            },
            {
                q: "Réalisez-vous aussi la pose de parquet à Aureille ?",
                a: "Oui, pose de parquets massifs, contrecollés et stratifiés avec plinthes et barres de seuil soignées."
            },
            {
                q: "Le devis est-il gratuit à Aureille ?",
                a: "Oui, déplacement et devis gratuits."
            }
        ],
        nearCities: ["peintre-eyguieres", "peintre-mouries", "peintre-eygalieres", "peintre-lamanon"]
    },
    {
        name: "Eygalières",
        slug: "peintre-eygalieres",
        zip: "13810",
        title: "Peintre Eygalières (13810) : Finitions Prestige & Mas Provençaux",
        metaDesc: "Artisan peintre à Eygalières. Rénovation de mas d'exception et bastides de charme. Peinture soignée, discrétion et professionnalisme.",
        intro: "Perle des Alpilles, Eygalières abrite parmi les plus belles propriétés de la région. Je mets à votre service une exigence sans compromis : discrétion absolue, respect scrupuleux des lieux, utilisation de peintures d'excellence et rendu satiné ou velouté d'une pureté incomparable.",
        neighborhoods: ["Vieux Village", "Chemin de la Chapelle Saint-Sixte", "Les Paluds"],
        faq: [
            {
                q: "Assurez-vous un suivi photo pour les résidents éloignés d'Eygalières ?",
                a: "Oui, un compte-rendu photographique vous est transmis à chaque étape clé du chantier."
            },
            {
                q: "Quelles peintures appliquez-vous sur les murs anciens à Eygalières ?",
                a: "Des peintures écologiques micro-respirantes adaptées aux plâtres traditionnels pour éviter tout cloquage."
            },
            {
                q: "Comment obtenir un rendez-vous rapide à Eygalières ?",
                a: "Appelez-moi directement au 06 35 23 81 07 pour convenir d'une visite à votre convenance."
            }
        ],
        nearCities: ["peintre-saint-remy-de-provence", "peintre-maussane-les-alpilles", "peintre-aureille", "peintre-senas"]
    },
    {
        name: "Mallemort",
        slug: "peintre-mallemort",
        zip: "13370",
        title: "Artisan Peintre Mallemort (13370) : Peinture & Rénovation",
        metaDesc: "Artisan peintre à Mallemort (13370). Peinture maison, appartement, domaine de Pont-Royal. Travail soigné et devis gratuit.",
        intro: "En bordure de Durance et aux abords du réputé Domaine de Pont-Royal, j'interviens à Mallemort pour tous vos projets de rénovation intérieure. Du rafraîchissement complet d'une maison de vacances à la réfection des peintures de votre résidence principale, comptez sur mon sérieux.",
        neighborhoods: ["Centre historique", "Domaine de Pont-Royal", "Les Bastides de Mallemort"],
        faq: [
            {
                q: "Intervenez-vous au Domaine de Pont-Royal à Mallemort ?",
                a: "Oui, j'interviens régulièrement pour les résidents permanents et les propriétaires de villas locatives à Pont-Royal."
            },
            {
                q: "Faites-vous les plafonds après un dégât des eaux à Mallemort ?",
                a: "Oui, nous assainissons le plâtre, appliquons une couche isolante anti-taches et remettons le plafond en état neuf."
            },
            {
                q: "Le devis est-il gratuit à Mallemort ?",
                a: "Oui, 100% gratuit."
            }
        ],
        nearCities: ["peintre-senas", "peintre-alleins", "peintre-lamanon", "peintre-eyguieres"]
    },
    {
        name: "Alleins",
        slug: "peintre-alleins",
        zip: "13980",
        title: "Peintre Alleins (13980) : Artisan Peintre en Bâtiment Local",
        metaDesc: "Artisan peintre à Alleins (13980). Travaux soignés de peinture intérieure, sols et placo. Devis gratuit sous 24h au 06 35 23 81 07.",
        intro: "Village provençal pittoresque situé entre Alpilles et Luberon, Alleins est une commune où j'interviens régulièrement pour les particuliers. Je réalise la peinture de vos murs, boiseries, pose de parquet et doublage isolant avec le professionnalisme d'un artisan local passionné.",
        neighborhoods: ["Le Village", "Les Bastides", "Chemin de Mallemort"],
        faq: [
            {
                q: "Combien de temps faut-il pour repeindre une maison à Alleins ?",
                a: "En moyenne 5 à 8 jours ouvrés selon la surface et l'état des murs."
            },
            {
                q: "Déplacez-vous les meubles avant de peindre à Alleins ?",
                a: "Oui, nous protégeons et bâchons l'ensemble du mobilier avec le plus grand soin."
            },
            {
                q: "Devis gratuit à Alleins ?",
                a: "Oui, visite technique et devis gratuits sous 24h."
            }
        ],
        nearCities: ["peintre-mallemort", "peintre-lamanon", "peintre-vernegues", "peintre-eyguieres"]
    },
    {
        name: "Vernègues",
        slug: "peintre-vernegues",
        zip: "13116",
        title: "Artisan Peintre Vernègues (13116) : Rénovation Intérieure",
        metaDesc: "Peintre en bâtiment à Vernègues et Cazan. Travaux de peinture soignée, placo et sols. Devis rapide et gratuit.",
        intro: "Sur le plateau de Vernègues et au hameau de Cazan, j'accompagne les propriétaires dans la rénovation de leur habitat. Réparation des fissures, application d'enduit de lissage et mise en peinture aux teintes chaleureuses pour transformer votre intérieur.",
        neighborhoods: ["Vieux Vernègues", "Cazan", "Le Plateau"],
        faq: [
            {
                q: "Intervenez-vous également sur Cazan ?",
                a: "Oui, je couvre l'ensemble de la commune de Vernègues et du hameau de Cazan."
            },
            {
                q: "Quelles garanties offrez-vous sur vos chantiers ?",
                a: "Garantie décennale et assurance responsabilité civile professionnelle."
            },
            {
                q: "Le devis est-il gratuit à Vernègues ?",
                a: "Oui, 100% gratuit."
            }
        ],
        nearCities: ["peintre-alleins", "peintre-lambesc", "peintre-aurons", "peintre-pelissanne"]
    },
    {
        name: "Aurons",
        slug: "peintre-aurons",
        zip: "13121",
        title: "Peintre Aurons (13121) : Artisan Peinture en Bâtiment",
        metaDesc: "Votre peintre artisan à Aurons (13121). Travaux de peinture intérieure soignée, parquets et finitions soignées. Devis gratuit.",
        intro: "Dans le cadre préservé du village d'Aurons, je prends en charge tous vos chantiers de peinture intérieure et revêtements. Je privilégie des peintures sans odeur, à fort pouvoir couvrant, pour vous offrir un résultat durable et esthétique sans désagrément.",
        neighborhoods: ["Village", "Chemin de Pélissanne", "Val de Cuech"],
        faq: [
            {
                q: "Quel type de finition recommandez-vous pour un séjour à Aurons ?",
                a: "La finition velours est idéale : elle apporte une ambiance douce et élégante tout en restant lessivable."
            },
            {
                q: "Faites-vous la pose de placo et isolation à Aurons ?",
                a: "Oui, création de cloisons, doublage isolant et faux-plafonds."
            },
            {
                q: "Le devis est-il gratuit à Aurons ?",
                a: "Oui, devis gratuit sans engagement."
            }
        ],
        nearCities: ["peintre-pelissanne", "peintre-salon-de-provence", "peintre-vernegues", "peintre-lambesc"]
    },
    {
        name: "Lambesc",
        slug: "peintre-lambesc",
        zip: "13410",
        title: "Artisan Peintre Lambesc (13410) : Peinture & Rénovation Pays d'Aix",
        metaDesc: "Peintre qualifié à Lambesc (13410). Peinture intérieure, réfection de plafonds, placo et parquet. Devis gratuit sous 24h.",
        intro: "Aux portes du Pays d'Aix, Lambesc combine un centre historique riche et de beaux quartiers résidentiels. J'interviens pour la rénovation soignée de vos pièces, la pose de plaques de plâtre et l'installation de parquets flottants pour valoriser durablement votre patrimoine.",
        neighborhoods: ["Centre historique", "Quartier Saint-Michel", "Les Baux de Lambesc", "Chemin d'Aix"],
        faq: [
            {
                q: "Combien de temps faut-il pour refaire un salon complet à Lambesc ?",
                a: "En moyenne 3 à 5 jours selon l'état des murs et la présence de boiseries ou plafonds hauts."
            },
            {
                q: "Travaillez-vous avec des peintures dépolluantes à Lambesc ?",
                a: "Oui, nous utilisons des peintures certifiées Ecolabel et NF Environnement pour préserver la qualité de l'air intérieur."
            },
            {
                q: "Le devis est-il gratuit à Lambesc ?",
                a: "Oui, visite et devis 100% gratuits sous 24 à 48h."
            }
        ],
        nearCities: ["peintre-pelissanne", "peintre-vernegues", "peintre-aurons", "peintre-salon-de-provence"]
    }
];

export function getCityData(slug: string): CityData | undefined {
    return cities.find(c => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
    return cities.map(c => c.slug);
}

export function getNearCitiesObjects(nearSlugs: string[]): CityData[] {
    return nearSlugs
        .map(slug => cities.find(c => c.slug === slug))
        .filter((c): c is CityData => Boolean(c));
}
