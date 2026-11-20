"use client";

import React, { useState, useEffect } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import { PRODUCTS, COMPANY_CONTACT } from "@/data/products";

interface EnquiryFormProps {
  initialProduct?: string | null;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "general",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [mailtoUrl, setMailtoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (initialProduct) {
      const match = PRODUCTS.find((p) => p.slug === initialProduct);
      if (match) {
        setFormData((prev) => ({ ...prev, product: match.slug }));
      }
    }
  }, [initialProduct]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.company.trim()) errs.company = "Company name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    }
    if (!formData.message.trim()) {
      errs.message = "Please include details about your enquiry or material specifications";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const selectedProduct =
      formData.product === "general"
        ? "General Equipment Enquiry"
        : PRODUCTS.find((p) => p.slug === formData.product)?.name ?? formData.product;

    const subject = encodeURIComponent(`[Equipment Enquiry] ${selectedProduct} - ${formData.company}`);
    const body = encodeURIComponent(
      `Dear UV Equipments Sales & Engineering Team,\n\n` +
      `I am requesting technical details and commercial terms for the following equipment:\n\n` +
      `Product of Interest: ${selectedProduct}\n` +
      `Full Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Project / Technical Requirement:\n` +
      `${formData.message}\n\n` +
      `Best regards,\n${formData.name}\n${formData.company}`
    );

    const generatedMailto = `mailto:${COMPANY_CONTACT.email}?subject=${subject}&body=${body}`;
    setMailtoUrl(generatedMailto);

    // Open email application directly
    window.location.href = generatedMailto;
  };

  return (
    <div className="bg-platinum-metal text-brand-navy p-6 sm:p-8 rounded-sm shadow-2xl border border-brand-platinum-dark chamfer-sm">
      <div className="border-b border-brand-platinum-dark pb-4 mb-6">
        <span className="text-xs font-mono tracking-widest text-brand-green font-bold uppercase block">
          OFFICIAL ENQUIRY & QUOTATION CHANNEL
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-brand-navy leading-tight">
          Request Technical Specifications & Pricing
        </h3>
        <p className="text-xs text-gray-700 mt-1">
          Direct communication with UV Equipments engineering team in Malur, Karnataka.
        </p>
      </div>

      {mailtoUrl ? (
        <div className="bg-white p-6 rounded-sm border-2 border-brand-green space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
            <div>
              <h4 className="text-base font-heading font-bold uppercase tracking-wider text-brand-navy">
                Opening Your Email Application...
              </h4>
              <p className="text-xs text-gray-700 mt-1 leading-relaxed">
                As per our verified privacy and transmission standards, your formatted enquiry has been generated and transferred to your system’s default email client addressed to <strong className="font-mono text-brand-navy">{COMPANY_CONTACT.email}</strong>.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={mailtoUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-green text-white font-heading font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-brand-green-hover transition-all"
            >
              Open Email App Again <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMailtoUrl(null)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-gray-600 hover:text-brand-navy border border-gray-300 rounded-sm"
            >
              Edit Form Fields
            </button>
          </div>
          <div className="text-[11px] font-mono text-gray-500 bg-gray-50 p-2.5 rounded-sm">
            💡 <strong>Note:</strong> If your browser does not trigger your email app automatically, click the green button above or write directly to <span className="text-brand-navy font-bold">{COMPANY_CONTACT.email}</span>.
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-heading font-bold uppercase tracking-wider text-brand-navy mb-1"
              >
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rajesh Kumar"
                className={`w-full px-3 py-2 text-xs sm:text-sm bg-white border rounded-sm text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <span className="text-[11px] text-red-600 font-mono mt-1 block">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="company"
                className="block text-xs font-heading font-bold uppercase tracking-wider text-brand-navy mb-1"
              >
                Company / Quarry Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Deccan Aggregates Pvt Ltd"
                className={`w-full px-3 py-2 text-xs sm:text-sm bg-white border rounded-sm text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green ${
                  errors.company ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.company && (
                <span className="text-[11px] text-red-600 font-mono mt-1 block">
                  {errors.company}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-heading font-bold uppercase tracking-wider text-brand-navy mb-1"
              >
                Business Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rajesh@company.com"
                className={`w-full px-3 py-2 text-xs sm:text-sm bg-white border rounded-sm text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <span className="text-[11px] text-red-600 font-mono mt-1 block">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-heading font-bold uppercase tracking-wider text-brand-navy mb-1"
              >
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className={`w-full px-3 py-2 text-xs sm:text-sm bg-white border rounded-sm text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <span className="text-[11px] text-red-600 font-mono mt-1 block">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          {/* Product of Interest */}
          <div>
            <label
              htmlFor="product"
              className="block text-xs font-heading font-bold uppercase tracking-wider text-brand-navy mb-1"
            >
              Product of Interest
            </label>
            <select
              id="product"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-sm text-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-green"
            >
              <option value="general">General Enquiry / Complete Plant Solutions</option>
              {PRODUCTS.map((prod) => (
                <option key={prod.slug} value={prod.slug}>
                  {prod.name} ({prod.series})
                </option>
              ))}
            </select>
          </div>

          {/* Message / Material Specs */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-heading font-bold uppercase tracking-wider text-brand-navy mb-1"
            >
              Requirement Details / Feed Specs <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Specify required capacity (TPH), feed rock size, desired output aggregate sizes, or plant location..."
              className={`w-full px-3 py-2 text-xs sm:text-sm bg-white border rounded-sm text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-green ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <span className="text-[11px] text-red-600 font-mono mt-1 block">
                {errors.message}
              </span>
            )}
          </div>

          {/* Notice of Mailto Execution */}
          <div className="flex items-start gap-2 text-[11px] text-gray-600 font-mono bg-gray-100 p-2.5 rounded-sm">
            <AlertCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> Submitting this form builds a pre-filled message and opens your default email application. No automated third-party data collection.
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-brand-green hover:bg-brand-green-hover text-white font-sans font-semibold text-xs uppercase tracking-wider rounded-sm chamfer-sm transition-all shadow-lg border border-brand-green-light/40"
          >
            <Send className="w-4 h-4" /> Transmit Technical Enquiry
          </button>
        </form>
      )}
    </div>
  );
};
