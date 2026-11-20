import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Send,
  Layers,
  Wrench,
  ShieldAlert,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PRODUCTS, Product, COMPANY_CONTACT } from "@/data/products";
import { ProductImagePlate } from "@/components/ProductImagePlate";
import { SpecTable } from "@/components/SpecTable";
import { DiagonalStripes } from "@/components/DiagonalStripes";
import { SectionSeparator } from "@/components/SectionSeparator";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return {};

  return {
    title: `${product.name} (${product.series})`,
    description: product.overview,
    openGraph: {
      title: `${product.name} | UV Equipments`,
      description: product.overview,
      url: `${COMPANY_CONTACT.siteUrl}/products/${product.slug}`,
      images: [
        {
          url: product.image,
          alt: `${product.name} ${product.series}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | UV Equipments`,
      description: product.overview,
    },
    alternates: {
      canonical: `${COMPANY_CONTACT.siteUrl}/products/${product.slug}`,
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const currentIndex = PRODUCTS.findIndex((p) => p.slug === params.slug);
  if (currentIndex === -1) notFound();

  const product = PRODUCTS[currentIndex];
  const prevProduct = PRODUCTS[(currentIndex - 1 + PRODUCTS.length) % PRODUCTS.length];
  const nextProduct = PRODUCTS[(currentIndex + 1) % PRODUCTS.length];

  // Schema.org Product JSON-LD (Verified facts only, no invented prices or ratings)
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    model: product.series,
    description: product.description,
    image: `${COMPANY_CONTACT.siteUrl}${product.image}`,
    brand: {
      "@type": "Brand",
      name: "UV Equipments",
    },
    manufacturer: {
      "@type": "Organization",
      name: "UV Equipments",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Plot No. 118, 3rd Phase, KIADB Industrial Area",
        addressLocality: "Malur",
        addressRegion: "Karnataka",
        postalCode: "563130",
        addressCountry: "IN",
      },
    },
  };

  return (
    <div className="flex flex-col bg-brand-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* BREADCRUMB & TOP NAV */}
      <div className="bg-brand-navy-dark border-b border-brand-navy-light py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center space-x-2 text-gray-400">
            <Link href="/" className="hover:text-white">
              HOME
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white">
              PRODUCTS
            </Link>
            <span>/</span>
            <span className="text-brand-green-light font-bold uppercase truncate max-w-[180px] sm:max-w-none">
              {product.name}
            </span>
          </div>

          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-1 text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All Products
          </Link>
        </div>
      </div>

      {/* PRODUCT HERO & OVERVIEW */}
      <section className="relative py-12 lg:py-20 bg-brand-navy bg-blueprint border-b border-brand-green/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-full opacity-15 pointer-events-none">
          <DiagonalStripes height="h-full" width="w-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy-light border border-brand-green rounded-sm">
                <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold">
                  {product.series}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white leading-tight">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-brand-platinum font-sans font-normal leading-relaxed">
                {product.overview}
              </p>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {product.description}
              </p>

              {/* Models list badges */}
              <div className="pt-2">
                <span className="text-[11px] font-mono tracking-widest text-brand-green-light uppercase block mb-2">
                  MODELS IN THIS SERIES:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.models.map((m) => (
                    <span
                      key={m}
                      className="px-2.5 py-1 text-xs font-mono font-bold bg-brand-navy-light text-white border border-brand-navy-light rounded-sm"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Enquiry Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={`/contact?product=${product.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-brand-green hover:bg-brand-green-hover text-white font-sans font-semibold text-xs uppercase tracking-wider rounded-sm chamfer-sm shadow-xl border border-brand-green-light/40 transition-all"
                >
                  <Send className="w-3.5 h-3.5" /> Enquire About This Product
                </Link>
                <a
                  href="#specifications"
                  className="inline-flex items-center justify-center px-6 py-3 text-xs font-sans font-semibold uppercase tracking-wider text-brand-platinum hover:text-white bg-brand-navy-light rounded-sm border border-brand-platinum-dark/30 transition-all"
                >
                  View Full Specs Table ↓
                </a>
              </div>
            </div>

            {/* Right Product Plate */}
            <div className="lg:col-span-5">
              <ProductImagePlate
                src={product.image}
                alt={`${product.name} ${product.series}`}
                productName={product.name}
                series={product.series}
                priority={true}
                captionText={product.imageCaption}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SALIENT FEATURES & APPLICATIONS */}
      <section className="py-16 bg-brand-navy-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Salient Features */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border-b border-brand-navy-light pb-3">
                <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-1">
                  ENGINEERING HIGHLIGHTS
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-normal text-white">
                  Salient Features
                </h2>
              </div>

              <div className="space-y-3">
                {product.salientFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-brand-navy border border-brand-navy-light rounded-sm flex items-start gap-3 hover:border-brand-green/50 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-green-light shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications & Common Specs */}
            <div className="lg:col-span-5 space-y-6">
              {/* Applications where brochure supports them */}
              {product.applications && product.applications.length > 0 && (
                <div className="bg-brand-navy p-6 rounded-sm border border-brand-navy-light chamfer-tr">
                  <div className="border-b border-brand-navy-light pb-2 mb-4">
                    <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-1">
                      PROVEN DEPLOYMENT
                    </span>
                    <h3 className="text-2xl font-serif font-normal text-white">
                      Field Applications
                    </h3>
                  </div>
                  <ul className="space-y-2.5 text-xs text-gray-300">
                    {product.applications.map((app, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-green rounded-full shrink-0" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skid Mounting / Common engineering note */}
              <div className="bg-brand-navy p-6 rounded-sm border border-brand-navy-light text-xs text-gray-400 space-y-2 font-mono">
                <div className="flex items-center gap-2 text-brand-green-light font-bold uppercase">
                  <Wrench className="w-4 h-4" />
                  <span>Mounting & Customization</span>
                </div>
                <p className="leading-relaxed">
                  Skid mounting packages and custom feeder hopper adaptations are available on request to interface seamlessly with primary and secondary crushing plant designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* FULL SPECIFICATION MATRIX TABLE */}
      <section id="specifications" className="py-16 bg-brand-navy bg-blueprint relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-1">
              DATA AUDIT ACCURACY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white">
              Model Comparison Matrix
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-mono mt-1">
              Exact technical ratings as published in the official UV Equipments engineering documentation.
            </p>
          </div>

          {/* Platinum Spec Table Component */}
          <SpecTable
            productName={product.name}
            series={product.series}
            models={product.models}
            specs={product.specs}
            commonFeatures={product.commonFeatures}
          />
        </div>
      </section>

      {/* PREV / NEXT PRODUCT NAVIGATION */}
      <section className="py-8 bg-brand-navy-dark border-t border-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href={`/products/${prevProduct.slug}`}
            className="w-full sm:w-auto inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-white bg-brand-navy rounded-sm border border-brand-navy-light hover:border-brand-green transition-all"
          >
            <ChevronLeft className="w-4 h-4 text-brand-green-light" />
            <span>Prev: {prevProduct.name}</span>
          </Link>

          <Link
            href={`/products/${nextProduct.slug}`}
            className="w-full sm:w-auto inline-flex items-center justify-end gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider text-gray-300 hover:text-white bg-brand-navy rounded-sm border border-brand-navy-light hover:border-brand-green transition-all text-right"
          >
            <span>Next: {nextProduct.name}</span>
            <ChevronRight className="w-4 h-4 text-brand-green-light" />
          </Link>
        </div>
      </section>

      {/* ENQUIRY CTA SECTION */}
      <section className="py-16 bg-brand-navy border-t border-brand-green/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block">
            NEED A QUOTATION FOR {product.name.toUpperCase()}?
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-normal text-white">
            Request Model Sizing & Commercial Proposals
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto font-sans">
            Our engineers in Malur will review your feed size, desired output, and production TPH to configure the optimal {product.series} model.
          </p>
          <div className="pt-2">
            <Link
              href={`/contact?product=${product.slug}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-green hover:bg-brand-green-hover text-white font-sans font-semibold text-xs uppercase tracking-wider rounded-sm chamfer-sm transition-all shadow-xl"
            >
              Enquire About {product.name} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
