import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: process.env.LOCAL_ES_TITLE,
        description: process.env.LOCAL_ES_DESCRIPTION,
        short_name: 'Joseph Gonzalez',
        start_url: '/',
        display: 'standalone',
        background_color: '#010E1B',
        theme_color: '#010E1B',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
            {
                src: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
            }
            
        ]

    }
}