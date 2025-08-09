// components/GlobalBackground.tsx
"use client";
import React, { useMemo } from "react";

/** RNG déterministe pour éviter les différences SSR/CSR */
function makeRng(seed = 42) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}

const GlobalBackground: React.FC = () => {
  // Data générée une fois (perf) + stable
  const { blobs, bokehs } = useMemo(() => {
    const rand = makeRng(1337);

    const mk = (n: number) =>
      Array.from({ length: n }, () => ({
        size: 200 + Math.floor(rand() * 200), // 200–400
        top: Math.floor(rand() * 100),
        left: Math.floor(rand() * 100),
        opacity: +(0.45 + rand() * 0.3).toFixed(2),
        delay: +(rand() * 4).toFixed(2),
      }));

    const mkBokeh = (n: number) =>
      Array.from({ length: n }, () => ({
        size: 8 + Math.floor(rand() * 12), // 8–20
        top: Math.floor(rand() * 100),
        left: Math.floor(rand() * 100),
        delay: +(rand() * 5).toFixed(2),
        twinkle: 5 + Math.floor(rand() * 5), // 5–9s
        drift: 12 + Math.floor(rand() * 8),  // 12–20s
        hue: Math.floor(260 + rand() * 70),  // teintes violet→rose
        alpha: +(0.18 + rand() * 0.18).toFixed(2), // 0.18–0.36
      }));

    return {
      blobs: mk(12),
      bokehs: mkBokeh(22),
    };
  }, []);

  const palette = [
    "rgba(138, 43, 226, OPACITY)",
    "rgba(186, 85, 211, OPACITY)",
    "rgba(153, 50, 204, OPACITY)",
    "rgba(255, 105, 180, OPACITY)",
    "rgba(147, 112, 219, OPACITY)",
    "rgba(72, 61, 139, OPACITY)",
  ];

  return (
    <>
      {/* Dégradé global */}
      <div className="absolute inset-0 -z-50 bg-gradient-to-br from-[#2a1155] via-[#180b36] to-[#3b0080]" />

      {/* Blobs colorés (grosses taches floues) */}
      {blobs.map((b, i) => {
        const color = palette[i % palette.length].replace("OPACITY", String(b.opacity));
        return (
          <div
            key={`blob-${i}`}
            className="
              absolute rounded-full pointer-events-none
              animate-blob
              blur-2xl md:blur-3xl
            "
            style={{
              width: b.size,
              height: b.size,
              top: `${b.top}%`,
              left: `${b.left}%`,
              backgroundColor: color,
              animationDelay: `${b.delay}s`,
              willChange: "transform, opacity",
              mixBlendMode: "screen",
            }}
          />
        );
      })}

      {/* Grille subtile */}
      {/* <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse at 50% 20%, rgba(0,0,0,0.6), rgba(0,0,0,0.1) 60%, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 20%, rgba(0,0,0,0.6), rgba(0,0,0,0.1) 60%, transparent)",
        }}
      /> */}

      {/* Lignes diagonales discrètes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <pattern id="diag" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag)" />
      </svg>

      {/* Bokeh lights (petits points lumineux) */}
      <div className="absolute inset-0 pointer-events-none">
        {bokehs.map((k, i) => {
          const glow = `hsla(${k.hue}, 90%, 65%, ${k.alpha})`;
          return (
            <span
              key={`bokeh-${i}`}
              className="
                absolute rounded-full
                animate-bokeh-twinkle animate-bokeh-drift
              "
              style={{
                width: k.size,
                height: k.size,
                left: `${k.left}%`,
                top: `${k.top}%`,
                backgroundColor: glow,
                boxShadow: `0 0 ${Math.max(14, k.size * 2)}px ${Math.max(6, Math.floor(k.size / 2))}px ${glow}`,
                animationDelay: `${k.delay}s`,
                // on ajuste les durées d'anim par bokeh pour un rendu organique
                animationDuration: `${k.twinkle}s, ${k.drift}s`,
                filter: "blur(2px)",
                mixBlendMode: "screen",
                willChange: "transform, opacity",
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default GlobalBackground;
