import React from "react";
import { MapPin } from "lucide-react";

type AnimatedLocationMapProps = {
  mapUrl: string;
  title: string;
  lines: string[];
  markerLeftPct?: number;
  markerTopPct?: number;
};

export function AnimatedLocationMap({
  mapUrl,
  title,
  lines,
  markerLeftPct = 52,
  markerTopPct = 32,
}: AnimatedLocationMapProps) {
  return (
    <a
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative w-full h-80 md:h-96 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl"
    >
      {/* Dark map background with roads pattern */}
      <div
        className="absolute inset-0 bg-slate-900"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
              <rect fill="#1a1a1a" width="800" height="500"/>
              <!-- Main roads -->
              <g stroke="#2a2a2a" stroke-width="8" fill="none">
                <path d="M0 180 Q200 160 400 200 T800 180"/>
                <path d="M0 320 Q200 350 400 300 T800 340"/>
                <path d="M200 0 Q180 250 220 500"/>
                <path d="M550 0 Q580 250 540 500"/>
              </g>
              <!-- Secondary roads -->
              <g stroke="#252525" stroke-width="3" fill="none">
                <path d="M0 100 Q150 120 300 90 T600 110 T800 90"/>
                <path d="M0 400 Q200 380 400 420 T800 390"/>
                <path d="M100 0 Q90 200 110 500"/>
                <path d="M350 0 Q370 250 340 500"/>
                <path d="M680 0 Q660 200 700 500"/>
              </g>
              <!-- Minor roads -->
              <g stroke="#222" stroke-width="1.5" fill="none" opacity="0.7">
                <path d="M0 60 L800 80"/>
                <path d="M0 140 L400 160 L800 140"/>
                <path d="M0 250 L800 230"/>
                <path d="M0 450 L800 460"/>
                <path d="M50 0 L40 500"/>
                <path d="M450 0 L470 500"/>
                <path d="M750 0 L740 500"/>
              </g>
              <!-- Building blocks -->
              <g fill="#1e1e1e" opacity="0.8">
                <rect x="60" y="200" width="80" height="50" rx="2"/>
                <rect x="250" y="100" width="60" height="40" rx="2"/>
                <rect x="380" y="220" width="100" height="70" rx="2"/>
                <rect x="600" y="150" width="70" height="45" rx="2"/>
                <rect x="120" y="350" width="90" height="60" rx="2"/>
                <rect x="320" y="380" width="80" height="50" rx="2"/>
                <rect x="520" y="320" width="110" height="80" rx="2"/>
                <rect x="700" y="400" width="60" height="40" rx="2"/>
              </g>
            </svg>`.trim()
          )}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Subtle vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 100%)"
        }}
      />

      {/* Marker with vertical line (like reference) */}
      <div
        className="absolute z-10"
        style={{
          left: `${markerLeftPct}%`,
          top: `${markerTopPct}%`,
        }}
      >
        {/* Vertical red line */}
        <div 
          className="absolute w-0.5 bg-gradient-to-b from-red-500 to-red-600"
          style={{
            height: "60px",
            left: "50%",
            top: "100%",
            transform: "translateX(-50%)",
          }}
        />
        
        {/* Pulsing ring at base */}
        <span
          className="absolute rounded-full bg-red-500/40"
          style={{
            width: 50,
            height: 50,
            left: "50%",
            top: "calc(100% + 60px)",
            animation: "ae-pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite",
          }}
        />
        <span
          className="absolute rounded-full bg-red-500/20"
          style={{
            width: 40,
            height: 40,
            left: "50%",
            top: "calc(100% + 60px)",
            animation: "ae-pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite 0.4s",
          }}
        />

        {/* Pin icon container */}
        <div 
          className="relative flex items-center justify-center"
          style={{
            width: 40,
            height: 40,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div className="absolute w-10 h-10 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
          <MapPin className="relative text-white w-5 h-5 fill-white" />
        </div>
      </div>

      {/* Address card */}
      <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-6 md:max-w-xs">
        <div className="bg-slate-800/95 backdrop-blur-md rounded-xl px-5 py-4 border border-slate-700/50 group-hover:border-red-500/30 transition-colors duration-300 shadow-xl">
          <h4 className="text-white font-semibold text-base mb-2">{title}</h4>
          <div className="text-slate-300 text-sm leading-relaxed space-y-0.5">
            {lines.map((l, idx) => (
              <p key={idx}>{l}</p>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
