"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

type SpotlightProps = {
  className?: string;
  fill?: string;
  intensity?: number; // contrôleur de flou
  duration?: number; // durée de l'animation
};

export const Spotlight: React.FC<SpotlightProps> = ({
  className,
  fill = "url(#gradient)",
  intensity = 0.2,
  duration = 2,
}) => {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: [1, 1.05, 1] }}
      transition={{ duration, ease: "easeInOut", repeat: Infinity }}
      className={cn(
        "pointer-events-none absolute z-10 h-[170vh] w-[140vw] lg:w-[80vw]",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <defs>
        <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={fill} stopOpacity={intensity} />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </radialGradient>
        <filter
          id="spotlightBlur"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur stdDeviation="100" />
        </filter>
      </defs>
      <ellipse
        cx="50%"
        cy="30%"
        rx="50%"
        ry="15%"
        transform="translate(0,0)"
        fill="url(#gradient)"
        filter="url(#spotlightBlur)"
      />
    </motion.svg>
  );
};
