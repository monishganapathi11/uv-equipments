import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Target,
  Wrench,
  ShieldCheck,
  CheckCircle,
  Factory,
  ArrowRight,
} from "lucide-react";
import { DiagonalStripes } from "@/components/DiagonalStripes";
import { SectionSeparator } from "@/components/SectionSeparator";
import { COMPANY_CONTACT } from "@/data/products";

export const metadata: Metadata = {
  title: "About Us & Engineering Capabilities",
  description:
    "Learn about UV Equipments, an industrial equipment manufacturer based in Malur, Karnataka, India specializing in heavy-duty crushing, screening, and material classification systems.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-brand-navy">
      {/* PAGE HEADER */}
      <section className="relative py-16 lg:py-24 bg-brand-navy bg-blueprint border-b border-brand-green/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-full opacity-15 pointer-events-none">
          <DiagonalStripes height="h-full" width="w-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-3">
            {"ABOUT UV EQUIPMENTS // MALUR, KARNATAKA"}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight text-white max-w-4xl leading-tight">
            INNOVATION THROUGH ENGINEERING INTEGRITY
          </h1>
          <p className="mt-4 text-base sm:text-lg text-brand-platinum/90 max-w-2xl font-sans">
            Delivering robust crushing, screening, and material beneficiation systems engineered for high productivity, structural endurance, and minimal operational downtime.
          </p>
        </div>
      </section>

      {/* OVERVIEW & BACKGROUND */}
      <section className="py-16 bg-brand-navy-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block">
                ORGANIZATIONAL OVERVIEW
              </span>
              <h2 className="text-3xl font-heading font-bold uppercase tracking-wider text-white">
                Industrial Material Processing Solutions
              </h2>

              {/* TODO: Owner Review - Modest statement of intent based strictly on supplied brochure facts */}
              <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-sans">
                <p>
                  UV Equipments operates as an industrial manufacturing firm located in the KIADB Industrial Area (3rd Phase) of Malur, Kolar District, Karnataka, India. We specialize in the design, engineering, and manufacture of heavy-duty machinery for the aggregate, quarrying, mining, and sand production sectors.
                </p>
                <p>
                  Our machinery portfolio encompasses the complete material reduction and classification cycle—ranging from heavy primary vibratory grizzly feeders and jaw crushers to precision cone crushers, high-tonnage multi-deck circular screens, vertical shaft impactors (VSI), and water-efficient bucket classifiers.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-brand-green-light">
                <Factory className="w-4 h-4" />
                <span>Facility: Plot No. 118, 3rd Phase, KIADB Industrial Area, Malur</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-platinum-metal p-6 sm:p-8 rounded-sm shadow-2xl border border-brand-platinum-dark text-brand-navy chamfer-tr">
                <span className="text-xs font-mono tracking-widest text-brand-green font-bold uppercase block mb-2">
                  ENGINEERING PHILOSOPHY
                </span>
                <h3 className="text-2xl font-heading font-bold uppercase tracking-wider mb-4">
                  Built for Tough Field Realities
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 font-sans">
                  {/* TODO: Statement of intent for owner approval */}
                  Our manufacturing ethos is centered on structural rigidity and serviceability. Rather than complex, fragile mechanisms, our units incorporate accessible grease points, interchangeable wear-resistant components, and hydraulic safety systems that allow quarry operators to maintain steady throughput in harsh environments.
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 bg-white rounded-sm border border-gray-200">
                    <span className="font-bold block text-brand-navy">High-Manganese Steel</span>
                    <span className="text-gray-500 text-[11px]">Replaceable wear plates</span>
                  </div>
                  <div className="p-3 bg-white rounded-sm border border-gray-200">
                    <span className="font-bold block text-brand-navy">Hydraulic Overload</span>
                    <span className="text-gray-500 text-[11px]">Dynamic CSS clearing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* MISSION, VISION & VALUES */}
      <section className="py-16 bg-brand-navy bg-blueprint relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-2">
              GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase tracking-wider text-white">
              Mission, Vision & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="bg-brand-navy-dark border border-brand-navy-light p-6 rounded-sm chamfer-sm space-y-4 hover:border-brand-green transition-colors">
              <div className="w-10 h-10 rounded-sm bg-brand-navy border border-brand-green flex items-center justify-center text-brand-green-light">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-heading font-bold uppercase tracking-wider text-white">
                Our Mission
              </h3>
              {/* TODO: Modest statement of intent for owner approval */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                To design and fabricate high-yield, dependable material processing equipment that reduces downtime, maximizes feed-to-product reduction ratios, and lowers the operational cost per ton for aggregate and mining producers.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-brand-navy-dark border border-brand-navy-light p-6 rounded-sm chamfer-sm space-y-4 hover:border-brand-green transition-colors">
              <div className="w-10 h-10 rounded-sm bg-brand-navy border border-brand-green flex items-center justify-center text-brand-green-light">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-heading font-bold uppercase tracking-wider text-white">
                Our Vision
              </h3>
              {/* TODO: Modest statement of intent for owner approval */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                To establish UV Equipments as a trusted Indian engineering benchmark in crushing, screening, and sand-washing technology through continuous innovation, precision mechanical execution, and responsive technical support.
              </p>
            </div>

            {/* Values */}
            <div className="bg-brand-navy-dark border border-brand-navy-light p-6 rounded-sm chamfer-sm space-y-4 hover:border-brand-green transition-colors">
              <div className="w-10 h-10 rounded-sm bg-brand-navy border border-brand-green flex items-center justify-center text-brand-green-light">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-heading font-bold uppercase tracking-wider text-white">
                Our Values
              </h3>
              {/* TODO: Modest statement of intent for owner approval */}
              <ul className="text-xs sm:text-sm text-gray-300 space-y-2 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-green-light shrink-0 mt-0.5" />
                  <span><strong>Engineering Rigor:</strong> Prioritizing structural stamina over superficial compromises.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-green-light shrink-0 mt-0.5" />
                  <span><strong>Operational Transparency:</strong> Truth in technical specifications, capacities, and ratings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-green-light shrink-0 mt-0.5" />
                  <span><strong>Sustainable Practice:</strong> Minimizing energy consumption and process water loss in sand washing.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY COMMITMENT & ENGINEERING CAPABILITIES */}
      <section className="py-16 bg-brand-navy-dark relative border-t border-brand-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block">
                QUALITY STANDARDS
              </span>
              <h2 className="text-3xl font-heading font-bold uppercase tracking-wider text-white">
                Quality Commitment & Fabrication Controls
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed font-sans">
                {/* TODO: Modest statement of intent for owner approval */}
                Every component—from welded high-carbon alloyed jaw crusher frames to precision-balanced VSI rotors—is subjected to dimensional inspection and mechanical alignment checks before leaving our Malur plant.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-brand-navy p-5 rounded-sm border border-brand-navy-light">
                <div className="text-brand-green-light font-mono text-xs uppercase mb-1">
                  {"01 // WELDED STEEL STRUCTURES"}
                </div>
                <h4 className="font-heading font-bold uppercase tracking-wider text-white text-base mb-1">
                  High-Grade Alloyed Steel
                </h4>
                <p className="text-xs text-gray-400">
                  Heavy fabricated frames designed to absorb cyclic impact loads without premature structural fatigue.
                </p>
              </div>

              <div className="bg-brand-navy p-5 rounded-sm border border-brand-navy-light">
                <div className="text-brand-green-light font-mono text-xs uppercase mb-1">
                  {"02 // ADVANCED BEARINGS & LUBRICATION"}
                </div>
                <h4 className="font-heading font-bold uppercase tracking-wider text-white text-base mb-1">
                  Heavy-Duty Thrust Bearings
                </h4>
                <p className="text-xs text-gray-400">
                  Leaded bronze sleeves and pressurized oil/grease circuits designed to endure high radial crushing forces.
                </p>
              </div>

              <div className="bg-brand-navy p-5 rounded-sm border border-brand-navy-light">
                <div className="text-brand-green-light font-mono text-xs uppercase mb-1">
                  {"03 // MODULAR CARDAN SHAFTS"}
                </div>
                <h4 className="font-heading font-bold uppercase tracking-wider text-white text-base mb-1">
                  Two Bearings Per Vibrator
                </h4>
                <p className="text-xs text-gray-400">
                  Vibrator assemblies interconnected by cardan shafts for uniform circular motion and rapid field maintenance.
                </p>
              </div>

              <div className="bg-brand-navy p-5 rounded-sm border border-brand-navy-light">
                <div className="text-brand-green-light font-mono text-xs uppercase mb-1">
                  {"04 // CARBIDE ROTOR TIPS"}
                </div>
                <h4 className="font-heading font-bold uppercase tracking-wider text-white text-base mb-1">
                  Enhanced Wear Metallurgy
                </h4>
                <p className="text-xs text-gray-400">
                  VSI rotors finished with specialized carbide tips to withstand high-velocity rock-on-rock impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-12 bg-brand-navy border-t border-brand-green/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-heading font-bold uppercase tracking-wider text-white">
              Interested in Visiting Our Malur Facility?
            </h3>
            <p className="text-xs text-gray-300 font-mono mt-1">
              Contact our administration office to schedule an engineering walkthrough.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green hover:bg-brand-green-hover text-white font-heading font-bold text-xs uppercase tracking-widest rounded-sm chamfer-sm transition-all shadow-md shrink-0"
          >
            Contact UV Equipments <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
