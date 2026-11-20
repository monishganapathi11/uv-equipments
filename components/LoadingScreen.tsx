"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check if user already saw the loader in this session to respect quick browsing
    const hasSeenLoader = typeof window !== "undefined" && sessionStorage.getItem("uvx_intro_seen");
    if (hasSeenLoader) {
      setShouldRender(false);
      return;
    }

    // Fast industrial progress simulation (completes in ~550ms)
    const startTime = Date.now();
    const duration = 500;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        setIsLoaded(true);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("uvx_intro_seen", "true");
        }
        setTimeout(() => {
          setShouldRender(false);
        }, 400); // Wait for fade-out transition
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-navy-dark transition-opacity duration-400 ease-out select-none ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />

      {/* Industrial Machine Stage Card */}
      <div className="relative z-10 flex flex-col items-center p-8 bg-brand-navy border border-brand-green/30 rounded-sm chamfer-tr shadow-2xl max-w-sm w-full mx-4">
        {/* Tricolor Precision Stripe */}
        <div className="flex items-center gap-1.5 mb-4">
          <span className="w-6 h-1.5 bg-[#C53030] rounded-[1px]" />
          <span className="w-6 h-1.5 bg-white rounded-[1px]" />
          <span className="w-6 h-1.5 bg-brand-green-light rounded-[1px]" />
        </div>

        {/* Brand UVX Logo */}
        <div className="relative w-48 h-14 mb-2">
          <Image
            src="/assets/logo/uvx-logo-white.webp"
            alt="UVX - UV Equipments"
            fill
            sizes="192px"
            className="object-contain"
            priority
          />
        </div>

        <span className="text-[11px] font-heading font-bold uppercase tracking-[0.3em] text-gray-300 mb-6">
          UV EQUIPMENTS
        </span>

        {/* Industrial Precision Progress Bar */}
        <div className="w-full bg-[#081522] border border-brand-navy-light rounded-[1px] h-2 relative overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-brand-green via-brand-green-light to-brand-green transition-all duration-75 ease-out rounded-[1px]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Machine Calibration Status Text */}
        <div className="w-full flex items-center justify-between text-[10px] font-mono text-gray-400">
          <span className="flex items-center gap-1.5 text-brand-green-light">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green-light animate-ping" />
            INITIALIZING SYSTEMS
          </span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};
