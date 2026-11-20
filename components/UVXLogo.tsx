import React from "react";
import Image from "next/image";

interface UVXLogoProps {
  className?: string;
  height?: number;
  variant?: "white" | "dark";
  showSubtext?: boolean;
}

export const UVXLogo: React.FC<UVXLogoProps> = ({
  className = "",
  height = 42,
  variant = "white",
  showSubtext = true,
}) => {
  // Approximate aspect ratio of 758 / 196 ≈ 3.867
  const logoWidth = Math.round(height * 3.4);

  return (
    <div className={`flex flex-col select-none group ${className}`}>
      {/* Tricolor Precision Engineering Accent Stripe */}
      <div className="flex items-center gap-1 mb-1 pl-1">
        <span className="w-4 h-1 bg-[#C53030] rounded-[1px]" />
        <span className="w-4 h-1 bg-white rounded-[1px]" />
        <span className="w-4 h-1 bg-brand-green-light rounded-[1px]" />
      </div>

      <div className="flex items-center gap-2">
        <div className="relative" style={{ height: `${height}px`, width: `${logoWidth}px` }}>
          <Image
            src={variant === "white" ? "/assets/logo/uvx-logo-white.webp" : "/assets/logo/uvx-logo.webp"}
            alt="UVX - UV Equipments"
            fill
            sizes={`${logoWidth}px`}
            className="object-contain object-left"
            priority
          />
        </div>
      </div>

      {showSubtext && (
        <span className="text-[10px] sm:text-[11px] font-heading font-bold uppercase tracking-[0.25em] text-gray-200 mt-0.5 pl-1 leading-none">
          UV EQUIPMENTS
        </span>
      )}
    </div>
  );
};
