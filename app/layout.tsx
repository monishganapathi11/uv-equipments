import type { Metadata } from "next";
import { Saira_Condensed } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { COMPANY_CONTACT } from "@/data/products";

const sairaCondensed = Saira_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-saira",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_CONTACT.siteUrl),
  title: {
    default: "UV Equipments | Unmatched Value",
    template: "%s | UV Equipments",
  },
  description:
    "Industrial crushing, screening, and material processing equipment manufacturer based in Malur, Karnataka, India. Heavy-duty jaw crushers, cone crushers, VSIs, screens, and classifiers.",
  keywords: [
    "UV Equipments",
    "Unmatched Value",
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
    title: "UV Equipments | Unmatched Value",
    description:
      "Advanced crushing, screening, and material processing equipment for the mining and construction industries.",
    siteName: "UV Equipments",
    images: [
      {
        url: "/assets/logo/UV LOGO.webp",
        width: 1000,
        height: 1000,
        alt: "UV Equipments - Unmatched Value",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UV Equipments | Unmatched Value",
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
    logo: `${COMPANY_CONTACT.siteUrl}/assets/logo/uvx-logo-white.png`,
    description:
      "Manufacturer of industrial crushing, screening, and material handling equipment in Malur, Karnataka, India.",
    foundingLocation: {
      "@type": "Place",
      name: "Malur, Kolar District, Karnataka, India",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: COMPANY_CONTACT.phones[0],
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Kannada", "Hindi", "Tamil"],
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
    <html lang="en" className={`${sairaCondensed.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="bg-brand-navy text-brand-platinum min-h-screen flex flex-col font-sans selection:bg-brand-green selection:text-white">
        <LoadingScreen />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
