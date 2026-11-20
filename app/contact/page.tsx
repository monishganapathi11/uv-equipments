import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Globe, ExternalLink, Clock, ShieldCheck } from "lucide-react";
import { COMPANY_CONTACT } from "@/data/products";
import { EnquiryForm } from "@/components/EnquiryForm";
import { DiagonalStripes } from "@/components/DiagonalStripes";

export const metadata: Metadata = {
  title: "Contact Us & Factory Location | Technical Enquiry",
  description:
    "Get in touch with UV Equipments in Malur, Karnataka, India. Phone: +91 8296 13 8419 / +91 9488 87 7519. Email: info@uvequipments.com. Heavy-duty crushing and screening machinery.",
};

function ContactFormWrapper({ searchParams }: { searchParams?: { product?: string } }) {
  return <EnquiryForm initialProduct={searchParams?.product} />;
}

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { product?: string };
}) {
  return (
    <div className="flex flex-col bg-brand-navy">
      {/* HEADER */}
      <section className="relative py-16 bg-brand-navy bg-blueprint border-b border-brand-green/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-full opacity-15 pointer-events-none">
          <DiagonalStripes height="h-full" width="w-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-2">
            DIRECT FACTORY COMMUNICATION
          </span>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold uppercase tracking-tight text-white leading-tight">
            CONTACT & ENQUIRY
          </h1>
          <p className="mt-3 text-base text-brand-platinum/90 max-w-2xl font-sans">
            Connect directly with UV Equipments engineering and sales representatives in Malur, Karnataka for equipment quotations, plant sizing, and technical proposals.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-16 bg-brand-navy-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Info Blocks */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-b border-brand-navy-light pb-3">
                <span className="text-xs font-mono tracking-widest text-brand-green-light uppercase font-bold block mb-1">
                  OFFICIAL FACTORY DETAILS
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold uppercase tracking-wider text-white">
                  Head Office & Facility
                </h2>
              </div>

              {/* Verified Contact Details (Strictly from brochure) */}
              <div className="space-y-4">
                {/* Physical Address */}
                <div className="p-5 bg-brand-navy rounded-sm border border-brand-navy-light chamfer-sm space-y-2">
                  <div className="flex items-center gap-2 text-brand-green-light text-xs font-mono uppercase font-bold">
                    <MapPin className="w-4 h-4" />
                    <span>Works Address</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans">
                    {COMPANY_CONTACT.address}
                  </p>
                  <a
                    href={COMPANY_CONTACT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-green-light hover:underline pt-1 block"
                  >
                    Open Location in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Telephone lines */}
                <div className="p-5 bg-brand-navy rounded-sm border border-brand-navy-light chamfer-sm space-y-2">
                  <div className="flex items-center gap-2 text-brand-green-light text-xs font-mono uppercase font-bold">
                    <Phone className="w-4 h-4" />
                    <span>Telephone & Mobile</span>
                  </div>
                  <div className="space-y-1 font-mono text-xs sm:text-sm text-gray-200">
                    <div>
                      <a href={COMPANY_CONTACT.phoneLinks[0]} className="hover:text-brand-green-light transition-colors">
                        M: {COMPANY_CONTACT.phones[0]}
                      </a>
                    </div>
                    <div>
                      <a href={COMPANY_CONTACT.phoneLinks[1]} className="hover:text-brand-green-light transition-colors">
                        M: {COMPANY_CONTACT.phones[1]}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Channels */}
                <div className="p-5 bg-brand-navy rounded-sm border border-brand-navy-light chamfer-sm space-y-2">
                  <div className="flex items-center gap-2 text-brand-green-light text-xs font-mono uppercase font-bold">
                    <Mail className="w-4 h-4" />
                    <span>Email & Domain</span>
                  </div>
                  <div className="space-y-1 font-mono text-xs sm:text-sm text-gray-200">
                    <div>
                      <a href={COMPANY_CONTACT.emailLink} className="hover:text-brand-green-light transition-colors">
                        {COMPANY_CONTACT.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Globe className="w-3.5 h-3.5 text-brand-green-light" />
                      <span>{COMPANY_CONTACT.website}</span>
                    </div>
                  </div>
                </div>

                {/* Operating hours & verified support */}
                <div className="p-4 bg-brand-navy/60 rounded-sm border border-brand-navy-light flex items-start gap-3 text-xs text-gray-300 font-mono">
                  <Clock className="w-4 h-4 text-brand-green-light shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Engineering Operations:</span>
                    <span>Monday – Saturday: 09:00 to 18:00 IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 text-xs font-mono text-gray-400">Loading form...</div>}>
                <ContactFormWrapper searchParams={searchParams} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
