"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      setVisible(scrollYProgress.get() > 0.05 && direction < 0);
    }
  });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-4 inset-x-0 mx-auto px-6 py-3 rounded-full bg-black-100 border border-white/10 shadow-lg z-[5000]",
          className
        )}
      >
        {navItems.map((item) => (
          <button
            key={item.link}
            onClick={() => scrollTo(item.link.replace("#", ""))}
            className="px-4 py-2 text-sm font-medium text-white hover:text-[#8157ff] transition-colors"
          >
            {item.name}
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};