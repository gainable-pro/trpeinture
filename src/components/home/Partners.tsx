import Image from 'next/image';

const partners = [
    { name: 'Exceed Digital', logo: '/images/partners/logo-exceed.png', url: 'https://www.exceeddigital.fr/' },
    { name: 'Tollens', logo: '/images/partners/tollens.png' },
    { name: 'Unikalo', logo: '/images/partners/unikalo.png' },
    { name: 'Seigneurie', logo: '/images/partners/seigneurie.png' },
    { name: 'Comptoir de l\'Ours', logo: '/images/partners/comptoir-ours.png' },
    { name: 'Bastien Arfi Immobilier', logo: '/images/partners/bastien-arfi.png' },
    { name: 'ALMA', logo: '/images/partners/alma.png' },
    { name: 'FAVD', logo: '/images/partners/favd.png' },
    { name: 'Air G Energie', logo: '/images/partners/air-g-energie.png' },
];

export function Partners() {
    return (
        <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-2xl font-bold text-slate-800">Nos Partenaires et Fournisseurs</h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                    {partners.map((partner) => {
                        const content = (
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                className="object-contain"
                            />
                        );
                        return (
                            <div key={partner.name} className="relative w-40 h-24 flex-shrink-0 transition-all duration-300 hover:opacity-100">
                                {partner.url ? (
                                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative cursor-pointer" title={partner.name}>
                                        {content}
                                    </a>
                                ) : (
                                    content
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 px-8">
                    {partners.map((partner) => {
                        const content = (
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                className="object-contain"
                            />
                        );
                        return (
                            <div key={`${partner.name}-duplicate`} className="relative w-40 h-24 flex-shrink-0 transition-all duration-300 hover:opacity-100">
                                {partner.url ? (
                                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative cursor-pointer" title={partner.name}>
                                        {content}
                                    </a>
                                ) : (
                                    content
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
