import React from "react";
import { ProductSpec, SPEC_FOOTNOTE } from "@/data/products";
import { Info, ArrowRightLeft } from "lucide-react";

interface SpecTableProps {
  productName: string;
  series: string;
  models: string[];
  specs: ProductSpec[];
  commonFeatures?: { label: string; value: string }[];
}

export const SpecTable: React.FC<SpecTableProps> = ({
  productName,
  series,
  models,
  specs,
  commonFeatures,
}) => {
  return (
    <div className="w-full space-y-4">
      {/* Scroll Hint for Mobile Viewports */}
      <div className="flex items-center justify-between text-xs font-mono text-gray-300 lg:hidden px-1">
        <span className="flex items-center gap-1.5 text-brand-green-light">
          <ArrowRightLeft className="w-3.5 h-3.5" />
          Scroll horizontally to view all {models.length} models
        </span>
        <span className="text-[10px] text-gray-400 uppercase">Swipe ↔</span>
      </div>

      {/* Main Platinum Specification Panel */}
      <div className="bg-platinum-metal text-brand-navy p-3 sm:p-6 rounded-sm shadow-2xl border border-brand-platinum-dark chamfer-sm relative overflow-hidden">
        {/* Decorative Top Accent Tag */}
        <div className="flex items-center justify-between border-b border-brand-platinum-dark pb-3 mb-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-brand-green font-bold uppercase block">
              {"ENGINEERING TECHNICAL MATRIX // "}{series}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-brand-navy">
              Technical Specifications
            </h3>
          </div>
          <span className="text-xs font-bold bg-brand-navy text-white px-2.5 py-1 rounded-sm uppercase tracking-wider">
            {models.length} Models
          </span>
        </div>

        {/* Scrollable Table Viewport */}
        <div className="relative overflow-x-auto border border-brand-platinum-dark/80 rounded-sm bg-white shadow-inner">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-brand-navy text-white border-b-2 border-brand-green">
                {/* Sticky Parameter Header */}
                <th
                  scope="col"
                  className="sticky left-0 z-20 bg-brand-navy px-4 py-3 font-bold uppercase tracking-wider min-w-[170px] sm:min-w-[200px] border-r border-brand-navy-light shadow-[2px_0_5px_rgba(0,0,0,0.15)]"
                >
                  Description / Specification
                </th>
                {models.map((model) => (
                  <th
                    key={model}
                    scope="col"
                    className="px-4 py-3 font-bold uppercase tracking-wider text-center min-w-[130px] sm:min-w-[150px] border-r border-brand-navy-light last:border-r-0"
                  >
                    <span className="block text-brand-green-light font-bold">
                      {model}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {specs.map((spec, idx) => (
                <tr
                  key={spec.parameter}
                  className={`hover:bg-brand-platinum/40 transition-colors ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/80"
                  }`}
                >
                  {/* Sticky First Column */}
                  <th
                    scope="row"
                    className={`sticky left-0 z-10 px-4 py-3 font-medium text-brand-navy border-r border-gray-200 shadow-[2px_0_5px_rgba(0,0,0,0.05)] ${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <div className="font-semibold">{spec.parameter}</div>
                    {spec.unit && (
                      <span className="text-[11px] font-mono text-gray-500 block font-normal">
                        [{spec.unit}]
                      </span>
                    )}
                  </th>

                  {/* Model Data Cells */}
                  {models.map((model) => {
                    const val = spec.values[model] ?? "-";
                    return (
                      <td
                        key={model}
                        className="px-4 py-3 text-center font-mono text-xs sm:text-sm text-gray-800 border-r border-gray-100 last:border-r-0 whitespace-nowrap"
                      >
                        {val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Common Technical Specifications (if applicable) */}
        {commonFeatures && commonFeatures.length > 0 && (
          <div className="mt-5 pt-4 border-t border-brand-platinum-dark">
            <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-brand-navy mb-2.5">
              Standard Design & Engineering Features (All Models):
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              {commonFeatures.map((feat) => (
                <div
                  key={feat.label}
                  className="bg-white p-2.5 rounded-sm border border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                >
                  <span className="font-semibold text-brand-navy">{feat.label}:</span>
                  <span className="text-gray-700 font-mono text-[11px] sm:text-xs">
                    {feat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mandatory Engineering Footnote */}
        <div className="mt-4 pt-3 border-t border-brand-platinum-dark/60 flex items-start gap-2 text-[11px] text-gray-600 font-mono leading-relaxed">
          <Info className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
          <span>
            <strong>Note:</strong> {SPEC_FOOTNOTE}
          </span>
        </div>
      </div>
    </div>
  );
};
