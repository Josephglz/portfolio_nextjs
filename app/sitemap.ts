import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
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