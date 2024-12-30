import { Navigation } from "./components/navigation/navigation";
import "./globals.css";
import type { Metadata } from "next";

const logoMeta: string = "https://ppelplenrldbrhejcorc.supabase.co/storage/v1/object/public/images/logo.jpg";

export const metadata: Metadata = {
  title: process.env.LOCAL_ES_TITLE,
  description: process.env.LOCAL_ES_DESCRIPTION,
  keywords: "Josephglz, Joseph, Gonzalez, Joseph Ian Gonzalez Cabrales, Josephgonzalez, programacion, joseph, Desarrollador, Fullstack, Web, Móviles, Angular, Node, Express, MongoDB, MySQL, PHP, Laravel, NextJS, React, UX, UI, Frontend, Backend, DevOps, Tampico, Tamaulipas, Mexico",
  authors: {
    name: "Joseph Gonzalez", 
    url: process.env.LOCAL_URL,
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: process.env.LOCAL_URL,
    siteName: "Joseph Gonzalez",
    title: process.env.LOCAL_ES_TITLE,
    description: process.env.LOCAL_ES_DESCRIPTION,
    emails: "joseph220199@gmail.com",
    images: process.env.LOCAL_LOGO,
    countryName: "Mexico",
  },
  twitter: {
    site: "@Josephglz99",
    card: "summary_large_image",
    title: process.env.LOCAL_ES_TITLE,
    description: process.env.LOCAL_ES_DESCRIPTION,
    creator: "@Josephglz99",
    images: process.env.LOCAL_LOGO,
  },
  icons: [
    {
      href: "/favicon.ico",
      rel: "icon",
      type: "image/x-icon",
      url: logoMeta,
    },
    {
      href: "/apple-touch-icon.png",
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: logoMeta,
    },
    {
      href: "/favicon-32x32.png",
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
      url: logoMeta,
    },
    {
      href: "/favicon-16x16.png",
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
      url: logoMeta,
    },
    {
      href: "/site.webmanifest",
      rel: "manifest",
      url: "/site.webmanifest",
    },
    {
      href: "/safari-pinned-tab.svg",
      rel: "mask-icon",
      color: "#5bbad5",
      url: "/safari-pinned-tab.svg",
    },
  ],
  alternates: {
      canonical: process.env.LOCAL_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-background font-Lato text-white flex flex-col">
        <Navigation />
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}