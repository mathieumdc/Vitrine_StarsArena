  import React from "react";

  const GlobalBackground = () => {
    return (
      <>
        {/* Dégradé violet sombre */}
        <div className="absolute inset-0 -z-50 bg-gradient-to-br from-[#2a1155] via-[#180b36] to-[#3b0080]"></div>

        {/* Tâches floues colorées (blobs) — plus nombreuses et plus visibles */}
        {[...Array(20)].map((_, i) => {
          const size = 200 + Math.random() * 200; // taille entre 200px et 400px
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const opacity = 0.4 + Math.random() * 0.3;
          const delay = Math.random() * 4;
          const colors = [
            "rgba(138, 43, 226, OPACITY)",
            "rgba(186, 85, 211, OPACITY)",
            "rgba(153, 50, 204, OPACITY)",
            "rgba(255, 105, 180, OPACITY)",
            "rgba(147, 112, 219, OPACITY)",
            "rgba(72, 61, 139, OPACITY)",
          ];
          const color =
            colors[Math.floor(Math.random() * colors.length)].replace(
              "OPACITY",
              opacity.toFixed(2)
            );

          return (
            <div
              key={i}
              className="absolute rounded-full filter blur-3xl animate-blob"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                backgroundColor: color,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}

        {/* Grille subtile */}
        <div className="absolute inset-0 pointer-events-none bg-grid-black/[0.04]" />

        {/* Lignes diagonales très discrètes */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="diagonalLines"
              patternUnits="userSpaceOnUse"
              width="40"
              height="40"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y="0"
                x2="0"
                y2="40"
                stroke="rgba(255, 255, 255, 0.02)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>

        {/* Bokeh lights */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => {
            const size = 6 + Math.random() * 10;
            const left = Math.random() * 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 5;
            return (
              <span
                key={i}
                className="absolute rounded-full bg-white opacity-10 animate-pulse"
                style={{
                  width: size,
                  height: size,
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay: `${delay}s`,
                  filter: "blur(3px)",
                }}
              />
            );
          })}
        </div>
      </>
    );
  };

  export default GlobalBackground;
