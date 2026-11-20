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
  Cpu,
  Zap,
  TrendingUp,
  Award,
  Layers,
  Users,
} from "lucide-react";
import { DiagonalStripes } from "@/components/DiagonalStripes";
import { SectionSeparator } from "@/components/SectionSeparator";
import { COMPANY_CONTACT } from "@/data/products";

export const metadata: Metadata = {
  title: "About UV Equipments | Engineering Experience & Generational Innovation",
  description:
    "With over 25 years of experience in the crushing and screening industry, UV Equipments engineers heavy-duty crushing, screening, and material processing equipment in Malur, Karnataka, India.",
};

export default function AboutPage() {
  const philosophyPillars = [
    {
      title: "Experience-Driven Engineering",
      desc: "Designing equipment based on real-world plant operating conditions, feed realities, and heavy-duty wear challenges.",
      icon: Wrench,
      num: "01",
    },
    {
      title: "Next-Generation Technology",
      desc: "Integrating modern engineering methods, finite element analysis, and advanced metallurgical solutions.",
      icon: Cpu,
      num: "02",
    },
    {
      title: "Intelligent Automation",
      desc: "Developing automated and smart operating systems to maximize plant uptime, throughput, and operational efficiency.",
      icon: Zap,
      num: "03",
    },
    {
      title: "Energy Efficiency",
      desc: "Focusing on optimized power-to-crushing performance, low idle draw, and reduced energy consumption per processed ton.",
      icon: TrendingUp,
      num: "04",
    },
    {
      title: "Reliable Performance",
      desc: "Building robust, fatigue-resistant equipment engineered specifically for demanding, abrasive quarry environments.",
      icon: ShieldCheck,
      num: "05",
    },
    {
      title: "Young Engineering Talent",
      desc: "Synthesizing deep veteran industry wisdom with the innovative, data-driven thinking of next-generation engineers.",
      icon: Users,
      num: "06",
    },
  ];

  return (
    <div className="flex flex-col bg-brand-navy">
      {/* PAGE HERO HEADER */}
      <section className="relative py-16 lg:py-24 bg-brand-navy bg-blueprint border-b border-brand-green/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-full opacity-15 pointer-events-none">
          <DiagonalStripes height="h-full" width="w-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy-light/90 border border-brand-green rounded-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-green-light" />
            <span className="text-[11px] font-mono tracking-widest text-brand-green-light uppercase font-bold">
              ABOUT UV EQUIPMENTS // MALUR, KARNATAKA
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold uppercase tracking-tight text-white max-w-4xl leading-tight">
            ENGINEERING EXPERIENCE. GENERATIONAL INNOVATION.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-brand-platinum/90 max-w-3xl font-sans leading-relaxed">
            With over 25 years of experience in the crushing and screening industry, UV EQUIPMENTS is built on a strong foundation of practical knowledge, technical expertise, and a deep understanding of the challenges faced by the crushing industry.
          </p>
        </div>
      </section>

      {/* FOUNDATION & OUR JOURNEY */}
      <section className="py-16 lg:py-20 bg-brand-navy-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block">
                OUR EVOLUTION
              </span>

              <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase tracking-wider text-white">
                Our Journey – From Experience to Engineering
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                <p>
                  Our journey represents the transformation of 25+ years of practical industry experience into a new generation of engineering and manufacturing.
                </p>
                <p>
                  Our journey began with providing services and technical support to crushing and screening plants. Over the years, we have worked closely with plant operators, understood real-world operational challenges, solved complex machinery problems and gained valuable hands-on experience across the industry.
                </p>
                <p>
                  This experience became the foundation of our evolution from service providers to equipment manufacturers. Having spent decades understanding machinery, plant operations, equipment failures and customer requirements, we recognised the need for smarter, more efficient and technologically advanced crushing and screening solutions.
                </p>
                <p>
                  This understanding inspired us to expand into manufacturing, bringing together the knowledge gained through years of field experience and the capabilities of modern engineering.
                </p>
              </div>

              {/* Core Philosophy Quote Callout */}
              <div className="p-4 bg-brand-navy border-l-4 border-brand-green rounded-r-sm">
                <p className="text-base font-heading font-bold text-white uppercase tracking-wide">
                  &ldquo;Our strength lies in understanding the problems before designing the solutions.&rdquo;
                </p>
                <span className="text-xs font-mono text-brand-green-light mt-1 block">
                  At UV EQUIPMENTS, we don&apos;t just manufacture machinery. We engineer solutions based on real industry experience.
                </span>
              </div>
            </div>

            {/* Right Industrial Metric & Facility Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-platinum-metal p-6 sm:p-8 rounded-sm shadow-2xl border border-brand-platinum-dark text-brand-navy chamfer-tr">
                <span className="text-xs font-mono tracking-widest text-brand-green font-bold uppercase block mb-1">
                  MANUFACTURING BASE
                </span>
                <h3 className="text-2xl font-heading font-bold uppercase tracking-wider mb-4">
                  Built on Field Realities
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-6 font-sans">
                  Today, we combine more than two decades of industry knowledge with modern engineering, generational technology, automation, and the fresh perspectives of young engineers to develop reliable, efficient and performance-driven crushing and screening equipment.
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-300 text-xs font-mono text-brand-navy">
                  <div className="flex items-center gap-2">
                    <Factory className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Plot No. 118, 3rd Phase, KIADB Industrial Area, Malur, Karnataka</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-brand-green shrink-0" />
                    <span>25+ Years Crushing & Screening Plant Heritage</span>
                  </div>
                </div>
              </div>

              {/* 25+ Years Stat Card */}
              <div className="p-6 bg-brand-navy border border-brand-green/40 rounded-sm chamfer-sm">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl sm:text-5xl font-heading font-extrabold text-white">
                    25+
                  </span>
                  <span className="text-xs font-mono text-brand-green-light uppercase tracking-wider font-bold">
                    Years of Field Engineering Experience
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  Decades of solving operational dilemmas in quarries and mining plants across South India, now engineered into every UVX production model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator />

      {/* MANUFACTURING PHILOSOPHY (6 PILLARS) */}
      <section className="py-16 lg:py-24 bg-brand-navy bg-blueprint relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-2">
              OUR SIX CORE PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase tracking-wider text-white">
              Our Manufacturing Philosophy
            </h2>
            <p className="mt-3 text-sm sm:text-base text-brand-platinum/90 font-sans">
              At UV EQUIPMENTS, manufacturing is driven by practical experience and continuous innovation. We combine our extensive field knowledge with modern engineering practices and automation technologies to develop machinery that meets the evolving demands of the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophyPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="bg-brand-navy-dark border border-brand-navy-light p-6 rounded-sm chamfer-tr group hover:border-brand-green transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-sm bg-brand-navy border border-brand-green/40 group-hover:border-brand-green flex items-center justify-center text-brand-green-light transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-gray-500 font-bold">
                        {pillar.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-bold uppercase tracking-wider text-white group-hover:text-brand-green-light transition-colors mb-2">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISION & VALUES */}
      <section className="py-16 bg-brand-navy-dark relative border-t border-brand-green/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Vision */}
            <div className="bg-brand-navy border border-brand-navy-light p-8 rounded-sm chamfer-tr space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-brand-navy-light border border-brand-green flex items-center justify-center text-brand-green-light">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-heading font-bold uppercase tracking-wider text-white">
                  Our Vision
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                To become a trusted and globally recognised manufacturer of crushing, screening and material processing equipment by combining proven engineering experience with next-generation technology.
              </p>
              <p className="text-xs sm:text-sm text-gray-400 font-mono leading-relaxed pt-2 border-t border-brand-navy-light">
                We envision a future where crushing plants achieve higher productivity, greater energy efficiency, intelligent automation and improved operational reliability.
              </p>
            </div>

            {/* Commitment & Mission Motto */}
            <div className="bg-gradient-to-br from-[#132A3E] to-[#0A1826] border border-brand-green/50 p-8 rounded-sm chamfer-tr space-y-4 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-brand-green border border-brand-green-light flex items-center justify-center text-white">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold uppercase tracking-wider text-white">
                    Our Commitment
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-sans mb-4">
                  Our commitment is simple: to deliver machinery that creates real value for our customers.
                </p>
                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                  With a foundation of 25+ years of industry experience and a vision driven by innovation, UV EQUIPMENTS continues to move forward with one mission:
                </p>
              </div>

              {/* The Mandated Mission Motto */}
              <div className="mt-4 p-4 bg-brand-navy/90 border border-brand-green rounded-sm">
                <span className="text-[10px] font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-1">
                  OFFICIAL COMPANY MISSION
                </span>
                <p className="text-lg sm:text-xl font-heading font-extrabold uppercase tracking-widest text-white">
                  UNMATCHED VALUE. ENGINEERED FOR PERFORMANCE.
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
              Discuss Your Crushing Plant Requirements
            </h3>
            <p className="text-xs text-gray-300 font-mono mt-1">
              Connect with our application engineers in Malur, Karnataka.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green hover:bg-brand-green-hover text-white font-heading font-bold text-xs uppercase tracking-widest rounded-sm chamfer-sm transition-all shadow-md shrink-0"
          >
            Contact Engineering Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
