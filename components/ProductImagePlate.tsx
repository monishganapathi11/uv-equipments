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
}

export const ProductImagePlate: React.FC<ProductImagePlateProps> = ({
  src,
  alt,
  productName,
  series,
  priority = false,
  className = "",
  showCaption = true,
  captionText = "Representative image",
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Outer Platinum Plate */}
      <div className="relative p-2.5 sm:p-3 bg-platinum-metal rounded-sm shadow-xl border border-brand-platinum-dark/70 chamfer-tr">
        {/* Fine Technical Corner Accent */}
        <div className="absolute top-0 right-0 w-4 h-4 bg-brand-green pointer-events-none" />
        <div className="absolute top-1 left-2 text-[9px] font-mono tracking-widest text-brand-navy/60 uppercase">
          {"PLATE // "}{series}
        </div>

        {/* Inner Pure White / Studio Mounting Surface */}
        <div className="relative w-full aspect-[4/3] bg-white rounded-sm overflow-hidden flex items-center justify-center border border-gray-200">
          {!hasError ? (
            <div className="relative w-full h-full p-4 flex items-center justify-center">
              <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-2"
                onError={() => setHasError(true)}
              />
            </div>
          ) : (
            /* Technical Blueprint Placeholder when pre-processed WebP is pending */
            <div className="w-full h-full bg-[#0B1A28] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
              {/* Technical Grid Overlay */}
              <div className="absolute inset-0 bg-blueprint opacity-60" />
              <div className="absolute inset-0 border border-brand-green/30 m-2 pointer-events-none" />
              
              {/* Corner crosshairs */}
              <div className="absolute top-3 left-3 text-brand-green text-xs font-mono">+</div>
              <div className="absolute top-3 right-3 text-brand-green text-xs font-mono">+</div>
              <div className="absolute bottom-3 left-3 text-brand-green text-xs font-mono">+</div>
              <div className="absolute bottom-3 right-3 text-brand-green text-xs font-mono">+</div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-sm bg-brand-navy border border-brand-green flex items-center justify-center mb-3 text-brand-green-light shadow-md">
                  <Cpu className="w-6 h-6 animate-pulse" />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-green-light mb-1 px-2 py-0.5 bg-brand-navy/80 border border-brand-green/40">
                  {series}
                </span>
                <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-white max-w-[200px] mb-2">
                  {productName}
                </h4>
                <p className="text-[10px] text-gray-400 font-mono tracking-tight">
                  [Studio WebP Plate Pending]
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mandatory Caption */}
      {showCaption && (
        <div className="mt-1.5 flex items-center justify-between text-[11px] text-gray-400 px-1 font-mono">
          <span>{captionText}</span>
          <span className="text-brand-green-light/80 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> UV SPEC
          </span>
        </div>
      )}
    </div>
  );
};
