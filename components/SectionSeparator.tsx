import React from "react";

interface SectionSeparatorProps {
  className?: string;
}

export const SectionSeparator: React.FC<SectionSeparatorProps> = ({ className = "" }) => {
  return (
    <div className={`w-full py-4 relative flex items-center justify-center ${className}`} aria-hidden="true">
      <div className="w-full h-px bg-brand-green/30" />
      <div className="absolute h-1 w-24 bg-brand-green" />
      <div className="absolute h-2 w-2 bg-brand-green-light rotate-45" />
    </div>
  );
};
