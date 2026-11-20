import React from "react";

interface BrandTaglineProps {
  className?: string;
  size?: "default" | "sm";
}

export const BrandTagline: React.FC<BrandTaglineProps> = ({
  className = "",
  size = "default",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-3 relative select-none ${className}`}
      aria-label="Brand Tagline: UNMATCHED VALUE"
    >
      {/* Precision Industrial Frame with Chamfered Corners */}
      <div className="relative flex items-center px-4 py-1.5 bg-[#0F2438] border border-brand-green/60 rounded-[2px] shadow-lg chamfer-sm group">
        {/* Subtle Diagonal Technical Corner Accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-brand-green-light pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-brand-green-light pointer-events-none" />

        {/* Precision Status Indicator */}
        <div className="flex items-center gap-2 mr-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green-light opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green-light" />
          </span>
          <span className="h-3 w-[1px] bg-brand-green/50" />
        </div>

        {/* Tagline Typography: Inter, 700, Uppercase, 2.5px tracking, Industrial Green */}
        <span
          className={`font-sans font-bold uppercase text-brand-green-light tracking-[0.2em] leading-none ${
            size === "sm" ? "text-[11px]" : "text-[12px] sm:text-[13px]"
          }`}
          style={{ letterSpacing: "2.5px" }}
        >
          UNMATCHED VALUE
        </span>

        {/* Right Engineering Notch */}
        <div className="ml-2.5 flex items-center gap-1 opacity-70">
          <span className="h-3 w-[1px] bg-brand-green/50" />
          <span className="text-[9px] font-mono text-brand-green-light tracking-tighter">
            {"//"}
          </span>
        </div>
      </div>
    </div>
  );
};
