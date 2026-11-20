import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { COMPANY_CONTACT } from "@/data/products";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_CONTACT.siteUrl),
  title: {
    default: "UV Equipments | Advanced Crushing and Screening Solutions",
    template: "%s | UV Equipments",
  },
  description:
    "Industrial crushing, screening, and material processing equipment manufacturer based in Malur, Karnataka, India. Heavy-duty jaw crushers, cone crushers, VSIs, screens, and classifiers.",
  keywords: [
    "UV Equipments",
    "Crushing and screening solutions",
    "Jaw Crusher India",
    "Cone Crusher",
    "Grizzly Feeder",
    "Circular Wave Screen",
    "Vertical Shaft Impactor VSI",
    "Sand Washer Bucket Classifier",
    "Malur Karnataka crushing equipment",
    "Mining machinery India",
  ],
  authors: [{ name: "UV Equipments" }],
  creator: "UV Equipments",
  publisher: "UV Equipments",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: COMPANY_CONTACT.siteUrl,
    title: "UV Equipments | Innovation Through Engineering",
    description:
      "Advanced crushing, screening, and material processing equipment for the mining and construction industries.",
    siteName: "UV Equipments",
    images: [
      {
        url: "/assets/logo/UV LOGO.webp",
        width: 1000,
        height: 1000,
        alt: "UV Equipments - Advanced Crushing & Screening Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UV Equipments | Advanced Crushing and Screening Solutions",
    description:
      "Cutting-edge crushing, screening, and material processing equipment for mining and quarrying.",
    images: ["/assets/logo/UV LOGO.webp"],
  },
  alternates: {
    canonical: COMPANY_CONTACT.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization JSON-LD (Verified facts strictly from brochure)
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UV Equipments",
    legalName: "UV Equipments",
    url: COMPANY_CONTACT.siteUrl,
    logo: `${COMPANY_CONTACT.siteUrl}/assets/logo/UV%20LOGO.webp`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8296138419",
        contactType: "sales and technical support",
        areaServed: "IN",
        availableLanguage: ["English", "Kannada", "Hindi", "Tamil"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9488877519",
        contactType: "customer service",
        areaServed: "IN",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 118, 3rd Phase, KIADB Industrial Area",
      addressLocality: "Malur",
      addressRegion: "Karnataka",
      postalCode: "563130",
      addressCountry: "IN",
    },
    email: COMPANY_CONTACT.email,
  };

  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-brand-navy text-brand-platinum min-h-screen flex flex-col font-body selection:bg-brand-green selection:text-white">
        <LoadingScreen />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
