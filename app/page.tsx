import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldAlert,
  Sliders,
  Layers,
  Wrench,
  Droplet,
  CheckCircle,
  Cpu,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { DiagonalStripes } from "@/components/DiagonalStripes";
import { ProductImagePlate } from "@/components/ProductImagePlate";
import { SectionSeparator } from "@/components/SectionSeparator";
import { BrandTagline } from "@/components/BrandTagline";

export default function HomePage() {
  const featuredProducts = PRODUCTS;

  // Company Strengths strictly derived from brochure features (no invented numbers)
  const brochureStrengths = [
    {
      title: "Replaceable Wear Liners & Manganese Bars",
      desc: "Cartridge arrangements and hardened high-manganese wear components safeguard impact areas and extend operational service life under high-tonnage feed.",
      icon: ShieldAlert,
    },
    {
      title: "Reliable Hydraulic Overload Protection",
      desc: "Dynamic hydraulic adjustment and high-speed CSS quick extraction ensure rapid chamber clearance and critical system protection.",
      icon: Sliders,
    },
    {
      title: "Modular Vibrator & Cardan Shaft Design",
      desc: "Interconnected circular-motion modular vibrators with two bearings per vibrator and adjustable stroke deliver durable, low-stress operation.",
      icon: Layers,
    },
    {
      title: "Low-Maintenance Engineering",
      desc: "Designed with easily accessible lubrication systems, single-toggle mechanisms, and interchangeable jaw plates to minimize plant downtime.",
      icon: Wrench,
    },
    {
      title: "Water-Saving Sand Washing Technology",
      desc: "Integrated bucket classifier and dewatering screens minimize water waste, promoting sustainable and environmentally sound quarry practices.",
      icon: Droplet,
    },
  ];

  const industriesList = [
    {
      name: "Mining & Mineral Extraction",
      desc: "Primary boulder breaking, heavy-duty scalping, and hard ore reduction.",
      slug: "/industries#mining",
    },
    {
      name: "Quarrying Operations",
      desc: "High-throughput primary and secondary crushing for granite, basalt, and limestone.",
      slug: "/industries#quarrying",
    },
    {
      name: "Aggregate Processing",
      desc: "Accurate multi-fraction segregation for high-spec road sub-base and concrete aggregate.",
      slug: "/industries#aggregate-processing",
    },
    {
      name: "Manufactured Sand (M-Sand)",
      desc: "Cubical rock-on-rock VSI shaping and bucket washing conforming to ASTM C144 standards.",
      slug: "/industries#sand-processing",
    },
  ];

  return (
    <div className="flex flex-col bg-brand-navy">
      {/* HERO SECTION - CLAUDE EDITORIAL TYPOGRAPHY */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-brand-navy bg-blueprint overflow-hidden border-b border-brand-green/30">
        {/* Signature Diagonal Stripes Motifs */}
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-full opacity-15 pointer-events-none">
          <DiagonalStripes height="h-full" width="w-full" />
        </div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 opacity-20 pointer-events-none">
          <DiagonalStripes height="h-full" width="w-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-7">
              {/* Official Short Brand Tagline Treatment */}
              <div>
                <BrandTagline />
              </div>

              {/* Large Editorial Serif Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-serif font-normal text-white leading-[1.08] tracking-tight">
                Advanced Crushing and Screening Solutions
              </h1>

              {/* Refined Sans-Serif Body */}
              <p className="text-base sm:text-lg text-brand-platinum/90 font-sans font-normal max-w-2xl leading-relaxed">
                Engineered for heavy-duty mining, quarrying, and aggregate operations. Built for continuous high-reduction performance, hydraulic safety, and minimal plant maintenance.
              </p>

              {/* Modern Sans-Serif CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-green hover:bg-brand-green-hover text-white font-sans font-semibold text-xs uppercase tracking-wider rounded-sm chamfer-sm shadow-xl border border-brand-green-light/40 transition-all"
                >
                  Explore Products <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-navy-light hover:bg-brand-navy-light/80 text-brand-platinum hover:text-white font-sans font-semibold text-xs uppercase tracking-wider rounded-sm chamfer-sm border border-brand-platinum-dark/40 transition-all"
                >
                  Enquire Now
                </Link>
              </div>

              {/* Verified Engineering Badges */}
              <div className="pt-6 border-t border-brand-navy-light grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-green-light shrink-0" />
                  <span>25+ Yrs Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-green-light shrink-0" />
                  <span>Modular Cardan Shaft</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-green-light shrink-0" />
                  <span>Hydraulic Clearance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-green-light shrink-0" />
                  <span>M-Sand C 144 Shaping</span>
                </div>
              </div>
            </div>

            {/* Hero Right Showcase Plate - Flagship Cone Crusher */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Decorative Chamfered Background Grid */}
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-green/30 to-brand-navy-light rounded-sm chamfer-tr blur-sm" />
                <ProductImagePlate
                  src="/assets/products/cone-crusher.webp"
                  alt="UV Equipments Horizontal Wave Cone Crusher UV-CHW 220"
                  productName="Horizontal Wave Cone Crusher"
                  series="UV-CHW 220"
                  priority={true}
                  captionText="Flagship Heavy Machinery: UV-CHW 220 Cone Crusher"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SEPARATOR */}
      <SectionSeparator />

      {/* COMPANY INTRO */}
      <section className="py-16 bg-brand-navy-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-2">
                MALUR, KARNATAKA, INDIA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
                Heavy Industrial Machinery Built for Rugged Durability
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-brand-platinum/90 leading-relaxed font-sans">
              <p>
                At UV Equipments, we design and manufacture cutting-edge crushing, screening, and material processing equipment tailored specifically for the rigorous demands of quarrying, mining, and civil construction. Operating from our manufacturing base in the KIADB Industrial Area, Malur, Kolar District, Karnataka, we focus on engineering integrity, precision tolerances, and operational longevity.
              </p>
              <p className="text-xs sm:text-sm text-gray-400 font-mono">
                Every unit in our lineup incorporates field-serviceable wear components, standardized replaceable manganese liners, and advanced hydraulic clearance mechanisms to deliver predictable production tonnage with low total cost of ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-16 lg:py-24 bg-brand-navy bg-blueprint relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-brand-navy-light pb-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-2">
                FLAGSHIP MACHINERY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
                Featured Equipment Solutions
              </h2>
            </div>
            <Link
              href="/products"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wider text-brand-green-light hover:text-white transition-colors"
            >
              Explore Complete 6-Product Lineup →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((prod) => (
              <div
                key={prod.slug}
                className="bg-brand-navy-dark border border-brand-navy-light rounded-sm p-4 flex flex-col justify-between hover:border-brand-green transition-all duration-300 group shadow-xl hover:-translate-y-1"
              >
                <div>
                  <ProductImagePlate
                    src={prod.image}
                    alt={prod.name}
                    productName={prod.name}
                    series={prod.series}
                    showCaption={false}
                    className="mb-4"
                  />
                  <span className="text-[10px] font-mono tracking-widest text-brand-green-light uppercase block mb-1">
                    {prod.series}
                  </span>
                  <h3 className="text-2xl font-serif font-normal text-white group-hover:text-brand-green-light transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-3 leading-relaxed font-sans">
                    {prod.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-navy-light flex items-center justify-between">
                  <span className="text-[11px] font-mono text-gray-400">
                    {prod.models.length} Models
                  </span>
                  <Link
                    href={`/products/${prod.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-sans font-semibold uppercase tracking-wider text-white group-hover:text-brand-green-light"
                  >
                    View Specs <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIX CATEGORY TILES */}
      <section className="py-16 bg-brand-navy-dark relative border-t border-brand-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-2">
              EQUIPMENT SPECTRUM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
              Six Primary Machinery Families
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 font-mono">
              From heavy primary boulder feeding down to calibrated sand classifying and water recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((prod, idx) => (
              <Link
                key={prod.slug}
                href={`/products/${prod.slug}`}
                className="bg-brand-navy border border-brand-navy-light hover:border-brand-green p-6 rounded-sm chamfer-sm transition-all duration-300 group flex flex-col justify-between hover:shadow-xl hover:shadow-brand-green/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-gray-400 bg-brand-navy-light px-2 py-0.5 rounded-sm">
                      {"0" + (idx + 1) + " // FAMILY"}
                    </span>
                    <span className="text-[11px] font-mono text-brand-green-light uppercase font-bold">
                      {prod.series}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-normal text-white group-hover:text-brand-green-light transition-colors mb-2">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    {prod.overview}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-navy-light flex items-center justify-between text-xs font-sans font-semibold uppercase tracking-wider text-brand-green-light">
                  <span>Explore Technical Matrix</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE UV EQUIPMENTS & BROCHURE STRENGTHS */}
      <section className="py-16 lg:py-24 bg-brand-navy bg-blueprint relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-2">
              WHY CHOOSE UV EQUIPMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
              Engineering Capabilities & Built-in Strengths
            </h2>
            <p className="text-sm text-gray-300 mt-2 font-sans">
              All engineering features and design capabilities are strictly grounded in our verified product specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brochureStrengths.map((strength) => {
              const IconComp = strength.icon;
              return (
                <div
                  key={strength.title}
                  className="bg-brand-navy-dark border border-brand-navy-light p-6 rounded-sm chamfer-sm space-y-3 hover:border-brand-green/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-sm bg-brand-navy border border-brand-green flex items-center justify-center text-brand-green-light">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-normal text-white">
                    {strength.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans">
                    {strength.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="py-16 bg-brand-navy-dark relative border-t border-brand-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-brand-navy-light pb-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-2">
                SECTORS & APPLICATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight">
                Industries Served
              </h2>
            </div>
            <Link
              href="/industries"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wider text-brand-green-light hover:text-white transition-colors"
            >
              View Detailed Applications →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesList.map((ind) => (
              <div
                key={ind.name}
                className="bg-brand-navy p-6 rounded-sm border border-brand-navy-light hover:border-brand-green transition-all"
              >
                <div className="w-8 h-8 rounded-sm bg-brand-navy-light border border-brand-green/40 flex items-center justify-center text-brand-green-light mb-4 font-mono text-xs">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-serif font-normal text-white mb-2">
                  {ind.name}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY CTA BAND */}
      <section className="py-16 bg-brand-navy bg-blueprint relative border-t border-brand-green/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-platinum-metal text-brand-navy p-8 sm:p-12 rounded-sm shadow-2xl border border-brand-platinum-dark chamfer-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-full opacity-10 pointer-events-none">
              <DiagonalStripes height="h-full" width="w-full" />
            </div>

            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="text-xs font-mono tracking-widest text-brand-green font-bold uppercase block">
                DIRECT FACTORY CONSULTATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-brand-navy leading-tight">
                Require Custom Crushing or Screening Plant Sizing?
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                Contact our engineering facility in Malur, Karnataka. We supply full technical specifications, dimension drawings, and equipment proposals for your quarry, mine, or aggregate installation.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-green hover:bg-brand-green-hover text-white font-sans font-semibold text-xs uppercase tracking-widest rounded-sm chamfer-sm shadow-lg transition-all"
                >
                  Contact Our Engineers <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="text-xs font-mono text-gray-700 flex items-center justify-center sm:justify-start">
                  Phone: +91 8296 13 8419
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
