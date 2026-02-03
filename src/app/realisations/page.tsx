import Image from "next/image";

export const metadata = {
    title: "Réalisations & Chantiers | TR Peinture Eyguières",
    description: "Découvrez mes derniers chantiers de peinture, placo et sols en images. Avant/Après et finitions soignées.",
};

const projects = [
    {
        title: "Rénovation Villa Salon",
        category: "Peinture Intérieure",
        image: "/images/service-peinture.png",
    },
    {
        title: "Pose Parquet Miramas",
        category: "Sols",
        image: "/images/service-sol.jpg",
    },
    {
        title: "Création Cloisons Eyguières",
        category: "Placo",
        image: "/images/service-placo.jpg",
    },
    {
        title: "Ravalement Façade",
        category: "Extérieur",
        image: "/images/service-renovation.jpg",
    },
];

export default function RealisationsPage() {
    return (
        <>
            <section className="relative bg-brand-dark text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-secondary/60 to-secondary/30 z-0"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-script">Mes Réalisations</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Quelques exemples de chantiers livrés.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-secondary text-sm font-bold mb-1">{project.category}</span>
                                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-slate-600 mb-4">Vous avez un projet similaire ?</p>
                        <a href="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors">
                            Demander un devis
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
