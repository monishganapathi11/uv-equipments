import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Cpu, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductImagePlate } from "@/components/ProductImagePlate";
import { DiagonalStripes } from "@/components/DiagonalStripes";

export const metadata: Metadata = {
  title: "Crushing & Screening Equipment Catalog | 6 Machinery Families",
  description:
    "Explore the complete lineup of UV Equipments machinery: Grizzly Feeders, Vertical Wave Jaw Crushers, Horizontal Wave Cone Crushers, Circular Wave Screens, VSIs, and Bucket Classifiers.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col bg-brand-navy">
      {/* HEADER */}
      <section className="relative py-16 bg-brand-navy bg-blueprint border-b border-brand-green/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-full opacity-15 pointer-events-none">
          <DiagonalStripes height="h-full" width="w-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-2">
            COMPLETE MACHINERY CATALOGUE
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            INDUSTRIAL EQUIPMENT FAMILIES
          </h1>
          <p className="mt-3 text-base text-brand-platinum/90 max-w-2xl font-sans">
            Precision-engineered crushing, sizing, shaping, and sand-washing solutions manufactured for high-tonnage mining and quarry applications.
          </p>
        </div>
      </section>

      {/* SIX FAMILY CARDS GRID */}
      <section className="py-16 bg-brand-navy-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((prod, idx) => (
              <div
                key={prod.slug}
                className="bg-brand-navy border border-brand-navy-light rounded-sm p-5 flex flex-col justify-between hover:border-brand-green transition-all duration-300 group shadow-2xl hover:-translate-y-1 chamfer-tr"
              >
                <div>
                  {/* Platinum Image Plate */}
                  <ProductImagePlate
                    src={prod.image}
                    alt={prod.name}
                    productName={prod.name}
                    series={prod.series}
                    showCaption={false}
                    className="mb-4"
                  />

                  {/* Header info */}
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-brand-green-light font-bold uppercase tracking-wider">
                      {prod.series}
                    </span>
                    <span className="text-gray-400 bg-brand-navy-light px-2 py-0.5 rounded-sm">
                      FAMILY 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="text-xl font-heading font-bold uppercase tracking-wider text-white group-hover:text-brand-green-light transition-colors mb-2">
                    {prod.name}
                  </h2>

                  <p className="text-xs text-gray-300 leading-relaxed font-sans min-h-[48px]">
                    {prod.tagline}
                  </p>

                  {/* Quick Feature Highlights */}
                  <div className="mt-4 pt-3 border-t border-brand-navy-light/60 space-y-1.5 text-[11px] text-gray-400 font-mono">
                    <div className="flex items-center gap-1.5 text-gray-300">
                      <Layers className="w-3.5 h-3.5 text-brand-green-light shrink-0" />
                      <span>{prod.models.length} Model Configurations</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-green-light shrink-0" />
                      <span>Standard Skid Mounting Available</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-navy-light flex items-center justify-between">
                  <Link
                    href={`/contact?product=${prod.slug}`}
                    className="text-xs font-mono text-gray-400 hover:text-white transition-colors"
                  >
                    Quick Quote
                  </Link>

                  <Link
                    href={`/products/${prod.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-navy-light group-hover:bg-brand-green text-white font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-all"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL MATRIX NOTE */}
      <section className="py-12 bg-brand-navy border-t border-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono text-gray-400 max-w-2xl mx-auto leading-relaxed">
            All parameters, capacities (TPH), drive powers, and weights represent verified technical specifications from UV Equipments engineering documentation.
          </p>
        </div>
      </section>
    </div>
  );
}
