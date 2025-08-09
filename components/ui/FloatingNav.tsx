// components/FloatingNav.tsx
"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

type Item = { name: string; link: string };

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: Item[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string>(navItems?.[0]?.link.replace("#", "") || "hero");
  const prefersReducedMotion = useReducedMotion();

  // Dégradé de la bordure
  const gradient =
    "linear-gradient(90deg, rgba(138,43,226,1) 0%, rgba(186,85,211,1) 20%, rgba(153,50,204,1) 40%, rgba(255,105,180,1) 60%, rgba(147,112,219,1) 80%, rgba(72,61,139,1) 100%)";

  // Apparition/disparition selon la direction du scroll
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      setVisible(scrollYProgress.get() > 0.05 && direction < 0);
    }
  });

  // Scroll doux vers une ancre
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Scrollspy : met à jour l’item actif selon la section dans le viewport
  useEffect(() => {
    const ids = navItems.map((n) => n.link.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // On prend la section la plus visible
        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visibleEntries[0]?.target?.id) {
          setActive(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "0px 0px -30% 0px", threshold: [0.2, 0.4, 0.6, 0.8] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [navItems]);

  // Pour que l’indicateur actif garde la même largeur/position entre items
  const layoutId = useMemo(() => "active-pill", []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={visible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
        className={cn(
          "fixed top-4 inset-x-0 z-[5000] flex justify-center pointer-events-none",
          className
        )}
        aria-hidden={!visible}
      >
        {/* Wrapper gradient (stroke) */}
        <div
          className="pointer-events-auto rounded-full p-[2px] shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
          style={{ background: gradient }}
        >
          {/* Fond verre dépoli */}
          <nav
            aria-label="Navigation principale"
            className="flex max-w-[92vw] overflow-x-auto no-scrollbar items-center gap-1 rounded-full bg-[#0f0c25]/80 backdrop-blur-md border border-white/10 px-2 py-2"
          >
            {navItems.map((item) => {
              const id = item.link.replace("#", "");
              const isActive = active === id;

              return (
                <button
                  key={item.link}
                  onClick={() => scrollTo(id)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors outline-none",
                    isActive ? "text-white" : "text-gray-200 hover:text-white",
                    "focus-visible:ring-2 focus-visible:ring-purple-500/70"
                  )}
                >
                  {/* Pastille animée sous l’item actif */}
                  {isActive && (
                    <motion.span
                      layoutId={layoutId}
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    />
                  )}
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
