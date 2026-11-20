"use client";

import React, { useState } from "react";
import { Play, ExternalLink, Youtube, ShieldCheck } from "lucide-react";

export const YouTubeSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Official public video ID from @uveqiupments
  const videoId = "BaHmfX0sMHM";
  const channelUrl = "https://www.youtube.com/@uveqiupments";

  return (
    <section className="py-16 lg:py-24 bg-brand-navy-dark border-t border-brand-green/30 relative overflow-hidden">
      {/* Background Technical Grid Motif */}
      <div className="absolute inset-0 bg-blueprint-fine opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-brand-navy-light pb-6 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-navy border border-brand-green/50 rounded-sm">
              <Youtube className="w-4 h-4 text-red-500" />
              <span className="text-xs font-medium tracking-widest text-brand-green-light uppercase">
                OFFICIAL VIDEO CHANNEL // @UVEQIUPMENTS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white leading-tight">
              WATCH US IN ACTION
            </h2>

            <p className="text-sm sm:text-base font-normal text-brand-platinum/90 max-w-2xl leading-relaxed">
              Explore our engineering solutions, industrial machinery and manufacturing capabilities through our videos.
            </p>
          </div>

          {/* Primary Subscribe CTA */}
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-sm chamfer-sm transition-all duration-300 shadow-xl hover:shadow-red-600/30 hover:scale-[1.02] shrink-0 border border-red-500/50 group"
          >
            <Youtube className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            <span>SUBSCRIBE TO OUR YOUTUBE CHANNEL</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Video Showcase Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main 16:9 Video Player */}
          <div className="lg:col-span-8">
            <div className="relative w-full aspect-video bg-black rounded-sm overflow-hidden shadow-2xl border border-brand-green/40 chamfer-tr group">
              {!isPlaying ? (
                /* Custom High-Impact Thumbnail Facade */
                <div className="relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-t from-black/90 via-black/40 to-black/70">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-brand-navy/90 border border-brand-green/60 text-brand-green-light font-medium text-xs rounded-sm uppercase tracking-wider">
                      Featured Field Run
                    </span>
                    <span className="text-xs font-medium text-gray-300 flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-green-light" /> 52 TPH Production Run
                    </span>
                  </div>

                  {/* Center Play Button with Industrial Ripple Effect */}
                  <div className="flex flex-col items-center justify-center my-auto">
                    <button
                      onClick={() => setIsPlaying(true)}
                      aria-label="Play UV Equipments Fine Cone Crusher Video"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-brand-green/60 cursor-pointer"
                    >
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                    </button>
                    <span className="text-xs font-bold uppercase tracking-widest text-white mt-3 drop-shadow">
                      Click to Play Field Demonstration
                    </span>
                  </div>

                  {/* Bottom Video Metadata */}
                  <div className="border-t border-white/20 pt-3">
                    <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                      UV EQUIPMENTS FINE CONE || 53MM TO M-SAND || BELOW 4.5 - 52 TPH || UNMATCHED VALUE
                    </h3>
                    <p className="text-xs font-normal text-gray-300 mt-0.5">
                      Actual plant footage demonstrating high reduction ratios down to manufactured sand specifications.
                    </p>
                  </div>
                </div>
              ) : (
                /* Active YouTube Iframe Embed */
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="UV EQUIPMENTS Fine Cone Crusher in Action"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )}
            </div>
          </div>

          {/* Side Context & Channel Features */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-brand-navy p-6 rounded-sm border border-brand-navy-light chamfer-tr space-y-3">
              <span className="text-xs font-medium tracking-widest text-brand-green-light uppercase block border-b border-brand-navy-light pb-2">
                WHAT YOU&apos;LL FIND ON OUR CHANNEL
              </span>

              <ul className="space-y-3 text-xs font-normal text-gray-200">
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-brand-green-light shrink-0 mt-1" />
                  <span>
                    <strong className="font-bold text-white">Full-Circuit Field Tests:</strong> Real quarry trials proving crushing reduction ratios and tonnages.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-brand-green-light shrink-0 mt-1" />
                  <span>
                    <strong className="font-bold text-white">Manufacturing & Assembly:</strong> Inside our Malur facility during heavy machinery fabrication.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-brand-green-light shrink-0 mt-1" />
                  <span>
                    <strong className="font-bold text-white">Maintenance & Best Practices:</strong> Liner replacement guides, lubrication routines, and hydraulic adjustments.
                  </span>
                </li>
              </ul>
            </div>

            {/* Direct Channel Access Card */}
            <div className="bg-gradient-to-br from-brand-navy to-[#07131F] p-5 rounded-sm border border-brand-green/40 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-medium text-gray-400 block uppercase">
                  Official Channel
                </span>
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  @uveqiupments
                </span>
              </div>
              <a
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all"
              >
                Visit Channel <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
