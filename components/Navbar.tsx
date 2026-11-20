"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Menu, X, PhoneCall } from "lucide-react";
import { PRODUCTS, COMPANY_CONTACT } from "@/data/products";
import { UVXLogo } from "./UVXLogo";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "PRODUCTS", href: "/products", hasDropdown: true },
    { label: "INDUSTRIES", href: "/industries" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy/95 backdrop-blur-md shadow-2xl border-b border-brand-green/40"
          : "bg-brand-navy border-b border-brand-navy-light"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center group focus:outline-none focus:ring-2 focus:ring-brand-green py-1"
          aria-label="UV Equipments - Home"
        >
          <UVXLogo height={34} showSubtext={true} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            if (link.hasDropdown) {
              return (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setProductsOpen(!productsOpen);
                      } else if (e.key === "Escape") {
                        setProductsOpen(false);
                      }
                    }}
                    aria-expanded={productsOpen}
                    aria-haspopup="true"
                    className={`px-3 py-2 text-sm font-heading tracking-wider flex items-center gap-1.5 transition-colors relative ${
                      isActive || productsOpen ? "text-brand-green-light" : "text-white hover:text-brand-green-light"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        productsOpen ? "rotate-180 text-brand-green-light" : "text-gray-400"
                      }`}
                    />
                    {/* Animated hover underline */}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2px] bg-brand-green transition-all duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu of Six Families */}
                  {productsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-brand-navy-dark border border-brand-green/50 shadow-2xl rounded-sm p-2 z-50 animate-fade-in chamfer-tr">
                      <div className="text-[10px] font-mono tracking-widest text-brand-green-light uppercase px-3 py-1.5 border-b border-brand-navy-light mb-1">
                        EQUIPMENT FAMILIES
                      </div>
                      <div className="flex flex-col space-y-1">
                        {PRODUCTS.map((prod) => (
                          <Link
                            key={prod.slug}
                            href={`/products/${prod.slug}`}
                            onClick={() => setProductsOpen(false)}
                            className="px-3 py-2 text-xs font-heading uppercase tracking-wide text-gray-200 hover:text-white hover:bg-brand-navy-light hover:border-l-2 hover:border-brand-green transition-all flex flex-col"
                          >
                            <span className="font-bold text-white">{prod.name}</span>
                            <span className="text-[10px] text-brand-green-light font-mono lowercase">
                              {prod.series}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 pt-2 border-t border-brand-navy-light text-center">
                        <Link
                          href="/products"
                          onClick={() => setProductsOpen(false)}
                          className="text-[11px] font-mono text-brand-green-light hover:underline tracking-wider uppercase block py-1"
                        >
                          View All 6 Product Families →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm font-heading tracking-wider transition-colors relative ${
                  isActive ? "text-brand-green-light" : "text-white hover:text-brand-green-light"
                }`}
              >
                <span>{link.label}</span>
                {/* Active Indicator & Animated Hover Underline */}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-[2px] bg-brand-green transition-all duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-heading font-bold uppercase tracking-widest bg-brand-green text-white hover:bg-brand-green-hover transition-all rounded-sm chamfer-sm shadow-lg border border-brand-green-light/40 hover:shadow-brand-green/20"
          >
            ENQUIRE NOW
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-green"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-brand-navy-dark/98 backdrop-blur-xl border-t border-brand-green/30 z-40 overflow-y-auto p-6 flex flex-col justify-between animate-fade-in">
          <div className="space-y-4">
            <div className="text-xs font-mono tracking-widest text-brand-green-light uppercase pb-2 border-b border-brand-navy-light">
              NAVIGATION
            </div>
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-lg font-heading tracking-wider uppercase text-white hover:text-brand-green-light"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className="text-lg font-heading tracking-wider uppercase text-white hover:text-brand-green-light"
              >
                ABOUT US
              </Link>

              {/* Mobile Products Accordion */}
              <div className="py-1">
                <div className="flex items-center justify-between text-lg font-heading tracking-wider uppercase text-white mb-2">
                  <span>PRODUCTS</span>
                  <span className="text-xs font-mono text-brand-green-light">6 FAMILIES</span>
                </div>
                <div className="pl-4 space-y-2 border-l-2 border-brand-green/40 mt-1">
                  {PRODUCTS.map((prod) => (
                    <Link
                      key={prod.slug}
                      href={`/products/${prod.slug}`}
                      className="block text-sm text-gray-300 hover:text-white font-medium"
                    >
                      {prod.name}
                    </Link>
                  ))}
                  <Link
                    href="/products"
                    className="block text-xs font-mono text-brand-green-light uppercase pt-1"
                  >
                    View All Products Overview →
                  </Link>
                </div>
              </div>

              <Link
                href="/industries"
                className="text-lg font-heading tracking-wider uppercase text-white hover:text-brand-green-light"
              >
                INDUSTRIES
              </Link>
              <Link
                href="/contact"
                className="text-lg font-heading tracking-wider uppercase text-white hover:text-brand-green-light"
              >
                CONTACT
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-brand-navy-light space-y-4">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center py-3 text-sm font-heading font-bold uppercase tracking-widest bg-brand-green text-white rounded-sm chamfer-sm"
            >
              ENQUIRE NOW
            </Link>
            <div className="flex flex-col text-xs text-gray-400 space-y-1 font-mono">
              <div className="flex items-center gap-2 text-brand-green-light">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{COMPANY_CONTACT.phones[0]}</span>
              </div>
              <div>{COMPANY_CONTACT.email}</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
