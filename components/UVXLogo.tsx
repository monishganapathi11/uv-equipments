import React from "react";

interface UVXLogoProps {
  className?: string;
  height?: number;
  showSubtext?: boolean;
}

export const UVXLogo: React.FC<UVXLogoProps> = ({
  className = "",
  height = 44,
  showSubtext = true,
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Industrial Mark */}
      <svg
        height={height}
        viewBox="0 0 280 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
        aria-label="UVX UV Equipments Logo"
      >
        {/* Tricolor Accent Stripe (Red, White, Green) */}
        <rect x="42" y="2" width="24" height="6" fill="#C53030" rx="1" />
        <rect x="68" y="2" width="24" height="6" fill="#FFFFFF" rx="1" />
        <rect x="94" y="2" width="24" height="6" fill="#016534" rx="1" />

        {/* 'U' in UVX */}
        <path
          d="M 12 18 L 26 18 L 26 42 C 26 48 30 52 36 52 C 42 52 46 48 46 42 L 46 18 L 60 18 L 60 42 C 60 56 50 64 36 64 C 22 64 12 56 12 42 Z"
          fill="#FFFFFF"
        />

        {/* 'V' in UVX */}
        <path
          d="M 68 18 L 81 18 L 92 48 L 103 18 L 116 18 L 100 64 L 84 64 Z"
          fill="#FFFFFF"
        />

        {/* 'X' with signature Green styling */}
        <path
          d="M 122 18 L 137 18 L 157 44 L 177 18 L 192 18 L 167 50 L 194 64 L 178 64 L 157 53 L 136 64 L 120 64 L 146 47 Z"
          fill="#3FAE6A"
        />

        {/* 'UV EQUIPMENTS' Underline Text */}
        {showSubtext && (
          <text
            x="12"
            y="80"
            fill="#E5E7EB"
            fontSize="15"
            fontWeight="700"
            fontFamily="var(--font-heading), sans-serif"
            letterSpacing="0.15em"
          >
            UV EQUIPMENTS
          </text>
        )}
      </svg>
    </div>
  );
};
