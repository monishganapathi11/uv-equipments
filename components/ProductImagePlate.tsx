"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Cpu, ShieldCheck } from "lucide-react";

interface ProductImagePlateProps {
  src: string;
  alt: string;
  productName: string;
  series: string;
  priority?: boolean;
  className?: string;
  showCaption?: boolean;
  captionText?: string;
  aspectRatio?: string;
}

export const ProductImagePlate: React.FC<ProductImagePlateProps> = ({
  src,
  alt,
  productName,
  series,
  priority = false,
  className = "",
  showCaption = true,
  captionText = "Representative machinery render",
  aspectRatio = "aspect-[16/10]",
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`flex flex-col group ${className}`}>
      {/* Heavy Industrial Engineering Stage Plate */}
      <div className="relative p-2.5 sm:p-3 bg-gradient-to-b from-[#132A3E]/90 via-[#0D1E2E] to-[#081522] rounded-sm shadow-2xl border border-brand-navy-light group-hover:border-brand-green/60 transition-all duration-300 chamfer-tr overflow-hidden">
        {/* Subtle Chamfer Green Corner */}
        <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-green pointer-events-none z-10" />

        {/* Technical Header Strip */}
        <div className="flex items-center justify-between pb-2 mb-1.5 border-b border-white/5 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase">
          <span className="text-brand-green-light flex items-center gap-1.5 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light animate-pulse" />
            {"PLATE // "}{series}
          </span>
          <span className="text-gray-400 font-mono tracking-tighter hidden sm:inline">
            PRECISION FABRICATION
          </span>
        </div>

        {/* Studio Machinery Display Arena */}
        <div className={`relative w-full ${aspectRatio} rounded-sm overflow-hidden flex items-center justify-center bg-radial from-[#1A3854]/30 via-transparent to-transparent`}>
          {/* Engineering Blueprint Grid Background */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

          {/* Corner Precision Alignment Markers */}
          <div className="absolute top-1.5 left-1.5 text-brand-green/30 font-mono text-[9px] pointer-events-none">+</div>
          <div className="absolute bottom-1.5 left-1.5 text-brand-green/30 font-mono text-[9px] pointer-events-none">+</div>
          <div className="absolute bottom-1.5 right-1.5 text-brand-green/30 font-mono text-[9px] pointer-events-none">+</div>

          {!hasError ? (
            <div className="relative w-full h-full p-2 sm:p-3 flex items-center justify-center">
              {/* Studio Ground Contact Shadow */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/60 rounded-[100%] blur-md pointer-events-none" />

              <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-1 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.65)] group-hover:scale-105 transition-transform duration-500 ease-out"
                onError={() => setHasError(true)}
              />
            </div>
          ) : (
            /* Technical Fallback Placeholder */
            <div className="w-full h-full bg-[#0B1A28] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-sm bg-brand-navy border border-brand-green flex items-center justify-center mb-2 text-brand-green-light">
                  <Cpu className="w-5 h-5 animate-pulse" />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-green-light mb-1 px-2 py-0.5 bg-brand-navy/80 border border-brand-green/40">
                  {series}
                </span>
                <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-white mb-1">
                  {productName}
                </h4>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mandatory Technical Caption */}
      {showCaption && (
        <div className="mt-2 flex items-center justify-between text-[11px] text-gray-400 px-1 font-mono">
          <span className="truncate max-w-[70%]">{captionText}</span>
          <span className="text-brand-green-light flex items-center gap-1 font-semibold shrink-0">
            <ShieldCheck className="w-3.5 h-3.5" /> UV SPEC
          </span>
        </div>
      )}
    </div>
  );
};
