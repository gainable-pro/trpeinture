import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "Rénovation Villa Salon",
        category: "Peinture Intérieure",
        image: "/images/service-peinture.png",
    },
    {
        title: "Pose Parquet Miramas",
        category: "Sols",
        image: "/images/service-revetements.png",
    },
    {
        title: "Création Cloisons Eyguières",
        category: "Placo",
        image: "/images/service-placo.png",
    },
];

export function Realisations() {
    return (
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dernières Réalisations</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Découvrez la qualité de mes finitions sur mes chantiers récents.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <div key={idx} className="group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all aspect-[4/3]">
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

            <div className="mt-12 text-center">
                <Link href="/realisations" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors">
                    Voir tous les chantiers
                </Link>
            </div>
        </div>
    );
}
