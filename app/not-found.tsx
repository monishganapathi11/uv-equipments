import React from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-navy bg-blueprint p-6">
      <div className="max-w-md w-full bg-platinum-metal text-brand-navy p-8 rounded-sm shadow-2xl border border-brand-platinum-dark text-center chamfer-sm">
        <div className="w-12 h-12 rounded-sm bg-brand-navy border border-brand-green flex items-center justify-center text-brand-green-light mx-auto mb-4">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <span className="text-xs font-mono tracking-widest text-brand-green font-bold uppercase block mb-1">
          {"ERROR 404 // ROUTE NOT FOUND"}
        </span>
        <h1 className="text-3xl font-heading font-extrabold uppercase tracking-tight text-brand-navy mb-2">
          Page Not Located
        </h1>
        <p className="text-xs text-gray-700 leading-relaxed font-sans mb-6">
          The requested specification page or resource is not catalogued on this server. Please navigate to our verified product listings or contact our engineering desk.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-green hover:bg-brand-green-hover text-white font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-all"
          >
            <Home className="w-4 h-4" /> Return Home
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-navy hover:bg-brand-navy-light text-white font-heading font-bold text-xs uppercase tracking-wider rounded-sm transition-all"
          >
            All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
