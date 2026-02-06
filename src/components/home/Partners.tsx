import Image from 'next/image';

const partners = [
    { name: 'Tollens', logo: '/images/partners/tollens.png' },
    { name: 'Unikalo', logo: '/images/partners/unikalo.png' },
    { name: 'Bastien Arfi Immobilier', logo: '/images/partners/bastien-arfi.png' },
    { name: 'ALMA', logo: '/images/partners/alma.png' },
    { name: 'FAVD', logo: '/images/partners/favd.png' },
];

export function Partners() {
    return (
        <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-2xl font-bold text-slate-800">Nos Partenaires et Fournisseurs</h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
                    {partners.map((partner) => (
                        <div key={partner.name} className="relative w-40 h-24 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 px-8">
                    {partners.map((partner) => (
                        <div key={`${partner.name}-duplicate`} className="relative w-40 h-24 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
