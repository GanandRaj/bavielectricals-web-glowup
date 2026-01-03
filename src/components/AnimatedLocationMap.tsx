import React from "react";

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
  markerLeftPct = 58,
  markerTopPct = 44,
}: AnimatedLocationMapProps) {
  return (
    <a
      href={mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative w-full h-72 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl"
    >
      {/* Map background (stylized SVG lines) */}
      <div
        className="absolute inset-0 bg-slate-900"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
              <rect fill="#0f172a" width="800" height="400"/>
              <g stroke="#1e293b" stroke-width="1" fill="none">
                <path d="M0 100 Q200 50 400 100 T800 100"/>
                <path d="M0 150 Q200 200 400 150 T800 150"/>
                <path d="M0 200 Q200 150 400 200 T800 200"/>
                <path d="M0 250 Q200 300 400 250 T800 250"/>
                <path d="M0 300 Q200 250 400 300 T800 300"/>
                <path d="M100 0 Q50 200 100 400"/>
                <path d="M200 0 Q250 200 200 400"/>
                <path d="M300 0 Q250 200 300 400"/>
                <path d="M400 0 Q450 200 400 400"/>
                <path d="M500 0 Q450 200 500 400"/>
                <path d="M600 0 Q650 200 600 400"/>
                <path d="M700 0 Q650 200 700 400"/>
              </g>
              <g fill="#334155" opacity="0.3">
                <rect x="120" y="80" width="80" height="60" rx="4"/>
                <rect x="250" y="120" width="100" height="80" rx="4"/>
                <rect x="400" y="60" width="120" height="90" rx="4"/>
                <rect x="550" y="140" width="90" height="70" rx="4"/>
                <rect x="180" y="220" width="70" height="50" rx="4"/>
                <rect x="320" y="260" width="110" height="80" rx="4"/>
                <rect x="500" y="240" width="80" height="60" rx="4"/>
                <rect x="620" y="280" width="100" height="70" rx="4"/>
              </g>
            </svg>`.trim()
          )}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Pulsing marker */}
      <div
        className="absolute z-10"
        style={{
          left: `${markerLeftPct}%`,
          top: `${markerTopPct}%`,
        }}
      >
        {/* ring */}
        <span
          className="absolute rounded-full bg-primary/60"
          style={{
            width: 56,
            height: 56,
            left: "50%",
            top: "50%",
            animation: "ae-pulse-ring 1.6s cubic-bezier(0.4,0,0.6,1) infinite",
          }}
        />
        {/* dot */}
        <span
          className="absolute rounded-full bg-primary shadow-lg shadow-primary/50"
          style={{
            width: 18,
            height: 18,
            left: "50%",
            top: "50%",
            animation: "ae-pulse-dot 1.6s ease-in-out infinite",
          }}
        />
      </div>

      {/* Address card */}
      <div className="absolute inset-0 flex items-end justify-start p-5 md:p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent">
        <div className="bg-slate-800/80 backdrop-blur-md rounded-xl px-5 py-4 max-w-xs border border-slate-700/50 group-hover:border-primary/50 transition-colors duration-300">
          <h4 className="text-white font-semibold text-lg mb-1">{title}</h4>
          <div className="text-slate-300 text-sm leading-relaxed">
            {lines.map((l, idx) => (
              <p key={idx}>{l}</p>
            ))}
          </div>
          <p className="text-primary text-xs mt-3 group-hover:underline transition-all">
            Tap to open in Google Maps
          </p>
        </div>
      </div>
    </a>
  );
}
