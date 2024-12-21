import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    
    /**
     * Las rutas que se deben incluir en el sitemap son:
     * - / Pagina principal que solo tendrá links a las demás secciones
     * - /about Pagina de acerca de mi
     * - /education Pagina de educación
     * - /experience Pagina de experiencia
     * - /projects Pagina de proyectos
     * La información dentro de cada una, se obtendrá de la base de datos de supabase y se generará de forma dinámica
     * Por lo que puede cambiar en cualquier momento y no se puede definir de forma estática
     */
    return [
        {
            url: "/",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0
        },
        {
            url: "/about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "/education",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8
        },
        {
            url: "/experience",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "/projects",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.8
        }
    ]
}