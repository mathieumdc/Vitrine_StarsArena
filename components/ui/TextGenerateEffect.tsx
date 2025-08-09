// components/ui/TextGenerateEffect.tsx
"use client";
import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

type WordItem = { text: string; white: boolean };

export const TextGenerateEffect: React.FC<{
  words: WordItem[];
  className?: string;
  filter?: boolean;
  duration?: number;
}> = ({ words, className, filter = true, duration = 0.5 }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, filter: filter ? "blur(0px)" : "none" },
      { duration, delay: stagger(0.15) }
    );
  }, [animate, filter, duration]);

  return (
    <div className={cn("font-bold inline-block", className)}>
      <motion.div ref={scope} className="leading-snug tracking-tight">
        {words.map(({ text, white }, idx) => (
          <motion.span
            key={text + idx}
            className={cn(
              white ? "text-white" : "text-[#CBACF9]",
              "opacity-0 inline-block pr-1"
            )}
          >
            {text}
            &nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
