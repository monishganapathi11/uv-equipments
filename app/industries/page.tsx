import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mountain, Hammer, Building2, Grid, Droplets } from "lucide-react";
import { DiagonalStripes } from "@/components/DiagonalStripes";
import { SectionSeparator } from "@/components/SectionSeparator";
import { BrandTagline } from "@/components/BrandTagline";

export const metadata: Metadata = {
  title: "Industries Served | Mining, Quarrying & Construction Processing",
  description:
    "Industrial crushing and screening solutions for mining, quarrying, construction, aggregate processing, and manufactured sand production.",
};

export default function IndustriesPage() {
  const industries = [
    {
      id: "mining",
      title: "Mining & Ore Extraction",
      icon: Mountain,
      description:
        "High-tonnage primary rock breaking and coarse scalping for metalliferous and non-metalliferous open-cast mining operations. Heavy fabricated steel structures absorb extreme impact during primary feed sizing.",
      keyMachinery: [
        { name: "Vertical Wave Jaw Crusher", slug: "vertical-wave-jaw-crusher", series: "UV-JVW Series" },
        { name: "Grizzly Feeder", slug: "grizzly-feeder", series: "UVGF Series F1" },
      ],
      features: [
        "Heavy single-toggle primary reduction",
        "High manganese steel grizzly bypass bars",
        "Continuous operations under abrasive ore feeds",
      ],
    },
    {
      id: "quarrying",
      title: "Quarrying Operations",
      icon: Hammer,
      description:
        "Granite, basalt, limestone, and hard rock quarries requiring durable reduction machinery from blasted face material down to uniform road metal and sub-base grades.",
      keyMachinery: [
        { name: "Vertical Wave Jaw Crusher", slug: "vertical-wave-jaw-crusher", series: "UV-JVW Series" },
        { name: "Horizontal Wave Cone Crusher", slug: "horizontal-wave-cone-crusher", series: "UV-CHW Series" },
        { name: "Circular Wave Screen", slug: "circular-wave-screen", series: "UV-SCW Series" },
      ],
      features: [
        "Reversible jaw plates for maximum wear utilization",
        "Hydraulic CSS quick extract for chamber clearing",
        "Modular vibrator decks for sharp sizing",
      ],
    },
    {
      id: "construction",
      title: "Civil Construction & Infrastructure",
      icon: Building2,
      description:
        "Crushing and grading aggregates for highway corridors, structural foundations, airport runways, and mass concrete infrastructure with strict elongation and flakiness criteria.",
      keyMachinery: [
        { name: "Horizontal Wave Cone Crusher", slug: "horizontal-wave-cone-crusher", series: "UV-CHW Series" },
        { name: "Multi Wave VSI", slug: "multi-wave-vertical-shaft-impactor", series: "UV-VMW Series" },
      ],
      features: [
        "Superior cubical particle shaping",
        "Consistent gradation for asphalt and high-grade concrete",
        "Skid-mounted flexibility for project relocation",
      ],
    },
    {
      id: "aggregate-processing",
      title: "Aggregate Processing",
      icon: Grid,
      description:
        "Multi-fraction dry and wet classification separating crushed rock into distinct commercial sizes (e.g. 40mm, 20mm, 10mm, 6mm and grit) with high segregation efficiency.",
      keyMachinery: [
        { name: "Circular Wave Screen", slug: "circular-wave-screen", series: "UV-SCW Series" },
        { name: "Horizontal Wave Cone Crusher", slug: "horizontal-wave-cone-crusher", series: "UV-CHW Series" },
      ],
      features: [
        "1, 2, 3, or 4 deck modular arrangements",
        "Cardan shaft interconnected vibrator motion",
        "Accessible grease lubrication and counterweight stroke tuning",
      ],
    },
    {
      id: "sand-processing",
      title: "Manufactured Sand (M-Sand) & Washing",
      icon: Droplets,
      description:
        "Production of manufactured concrete sand and plaster sand complying with ASTM C144 standards, paired with high-efficiency bucket classification to eliminate clay and micro-fines.",
      keyMachinery: [
        { name: "Multi Wave Vertical Shaft Impactor", slug: "multi-wave-vertical-shaft-impactor", series: "UV-VMW Series" },
        { name: "Sand Washer Bucket Classifier", slug: "sand-washer-bucket-classifier", series: "UVBC Series" },
      ],
      features: [
        "Rock-on-rock cartridge impact chamber",
        "Parallel flow system to control fine generation",
        "Low water waste classification and rapid dewatering",
      ],
    },
  ];

  return (
    <div className="flex flex-col bg-brand-navy">
      {/* HEADER */}
      <section className="relative py-16 lg:py-20 bg-brand-navy bg-blueprint border-b border-brand-green/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-full opacity-15 pointer-events-none">
          <DiagonalStripes height="h-full" width="w-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <BrandTagline size="sm" />
          <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-white leading-tight">
            Industries Served
          </h1>
          <p className="text-base sm:text-lg text-brand-platinum/90 max-w-2xl font-sans font-normal">
            Engineered equipment applications across mining extraction, hard rock quarrying, multi-deck aggregate classification, and manufactured sand washing.
          </p>
        </div>
      </section>

      {/* DETAILED INDUSTRY SECTIONS */}
      <section className="py-16 bg-brand-navy-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                id={ind.id}
                className="bg-brand-navy border border-brand-navy-light rounded-sm p-6 sm:p-8 chamfer-tr shadow-xl hover:border-brand-green/60 transition-colors scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-sm bg-brand-navy-light border border-brand-green flex items-center justify-center text-brand-green-light">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                          SECTOR 0{idx + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-serif font-normal text-white">
                          {ind.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed font-sans">
                      {ind.description}
                    </p>

                    <div className="pt-2">
                      <span className="text-xs font-mono tracking-wider text-brand-green-light uppercase font-bold block mb-2">
                        APPLICATION ADVANTAGES:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                        {ind.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-brand-green rounded-full shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Relevant Equipment Families Links */}
                  <div className="lg:col-span-5 bg-brand-navy-dark p-5 rounded-sm border border-brand-navy-light space-y-3">
                    <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block border-b border-brand-navy-light pb-2">
                      RECOMMENDED EQUIPMENT
                    </span>
                    <div className="space-y-2">
                      {ind.keyMachinery.map((mach) => (
                        <Link
                          key={mach.slug}
                          href={`/products/${mach.slug}`}
                          className="p-3 bg-brand-navy hover:bg-brand-navy-light rounded-sm border border-brand-navy-light hover:border-brand-green flex items-center justify-between group transition-all"
                        >
                          <div>
                            <span className="text-sm font-sans font-semibold text-white group-hover:text-brand-green-light transition-colors block">
                              {mach.name}
                            </span>
                            <span className="text-[10px] font-mono text-gray-400">
                              {mach.series}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-brand-green-light group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ))}
                    </div>

                    <div className="pt-2 text-right">
                      <Link
                        href={`/contact?industry=${ind.id}`}
                        className="inline-flex items-center gap-1 text-xs font-mono text-brand-green-light hover:text-white transition-colors"
                      >
                        Enquire for this sector →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SectionSeparator />

      {/* FOOTER CTA */}
      <section className="py-16 bg-brand-navy text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-3xl sm:text-4xl font-serif font-normal text-white">
            Custom Plant Circuit Flowsheet Sizing
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 font-sans max-w-xl mx-auto">
            Discuss your material feed size and output fraction criteria with our engineering team in Malur, Karnataka.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-green hover:bg-brand-green-hover text-white font-sans font-semibold text-xs uppercase tracking-wider rounded-sm chamfer-sm shadow-xl transition-all"
            >
              Request Plant Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
