import { MetadataRoute } from 'next';
import { cities } from '@/lib/cities';

const BASE_URL = 'https://trpeinture.fr'; // Replace with actual domain if different

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        '',
        '/peinture',
        '/placo-isolation',
        '/revetements',
        '/renovation',
        '/realisations',
        '/zone-intervention',
        '/contact',
        '/mentions-legales',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const cityRoutes = cities.map((city) => ({
        url: `${BASE_URL}/peintre-${city.slug.replace('peintre-', '')}`, // Ensure consistent URL format
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...cityRoutes];
}
