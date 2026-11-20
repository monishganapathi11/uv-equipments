import React from "react";

interface DiagonalStripesProps {
  className?: string;
  width?: string;
  height?: string;
  opacity?: number;
}

export const DiagonalStripes: React.FC<DiagonalStripesProps> = ({
  className = "",
  width = "w-full",
  height = "h-4",
  opacity = 1,
}) => {
  return (
    <div
      className={`overflow-hidden pointer-events-none select-none ${width} ${height} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div
        className="w-full h-full"
        style={{
          background: `repeating-linear-gradient(
            -35deg,
            #016534,
            #016534 10px,
            transparent 10px,
            transparent 22px
          )`,
        }}
      />
    </div>
  );
};
