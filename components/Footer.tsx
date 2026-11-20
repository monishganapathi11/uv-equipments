import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, ExternalLink, Youtube } from "lucide-react";
import { PRODUCTS, COMPANY_CONTACT } from "@/data/products";
import { DiagonalStripes } from "./DiagonalStripes";
import { UVXLogo } from "./UVXLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy-dark border-t border-brand-green/40 text-brand-platinum relative overflow-hidden">
      {/* Top Accent Stripe */}
      <DiagonalStripes height="h-2" className="opacity-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block group focus:outline-none focus:ring-2 focus:ring-brand-green"
              aria-label="UV Equipments - Home"
            >
              <UVXLogo height={32} showSubtext={true} />
            </Link>
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Advanced crushing, screening, and material processing equipment engineered for heavy-duty mining, quarrying, and aggregate applications.
            </p>
            <div className="text-[11px] font-mono text-gray-400">
              Facility: Malur Industrial Area, Karnataka, India
            </div>
          </div>

          {/* Col 2: Equipment Families */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-brand-green-light mb-4 border-b border-brand-navy-light pb-2">
              EQUIPMENT FAMILIES
            </h4>
            <ul className="space-y-2 text-xs">
              {PRODUCTS.map((prod) => (
                <li key={prod.slug}>
                  <Link
                    href={`/products/${prod.slug}`}
                    className="text-gray-300 hover:text-white hover:underline flex items-center justify-between group"
                  >
                    <span>{prod.name}</span>
                    <span className="text-[10px] font-mono text-brand-green-light/70 group-hover:text-brand-green-light">
                      {prod.series.split(" ")[0]}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation & Industries */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-brand-green-light mb-4 border-b border-brand-navy-light pb-2">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About Us & Engineering
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white">
                  All Products Matrix
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Enquiry & Technical Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details (Strictly verified) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest uppercase text-brand-green-light mb-4 border-b border-brand-navy-light pb-2">
              GET IN TOUCH
            </h4>
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green-light shrink-0 mt-0.5" />
                <div className="leading-snug">
                  {COMPANY_CONTACT.address}
                  <a
                    href={COMPANY_CONTACT.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-green-light hover:underline mt-1 block"
                  >
                    Open in Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-green-light shrink-0" />
                <div className="flex flex-col font-mono">
                  <a href={COMPANY_CONTACT.phoneLinks[0]} className="hover:text-white hover:underline">
                    {COMPANY_CONTACT.phones[0]}
                  </a>
                  <a href={COMPANY_CONTACT.phoneLinks[1]} className="hover:text-white hover:underline">
                    {COMPANY_CONTACT.phones[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-green-light shrink-0" />
                <a
                  href={COMPANY_CONTACT.emailLink}
                  className="font-mono hover:text-white hover:underline"
                >
                  {COMPANY_CONTACT.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-brand-green-light shrink-0" />
                <span className="font-mono">{COMPANY_CONTACT.website}</span>
              </div>

              {/* Official YouTube Channel */}
              <div className="flex items-center gap-2.5 pt-1">
                <Youtube className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href="https://www.youtube.com/@uveqiupments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-xs text-gray-200 hover:text-white flex items-center gap-1 group"
                >
                  <span>YouTube: @uveqiupments</span>
                  <ExternalLink className="w-3 h-3 text-brand-green-light opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Band */}
        <div className="mt-12 pt-6 border-t border-brand-navy-light flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 font-mono">
          <div>
            © {new Date().getFullYear()} UV Equipments. All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0 flex items-center space-x-4">
            <span>KIADB Industrial Area, Malur</span>
            <span>•</span>
            <Link href="/contact" className="text-brand-green-light hover:underline">
              Request Technical Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
