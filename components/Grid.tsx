// components/Grid.tsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Exemple de data enrichie (id, title, description, href)
const items = [
  {
    id: 1,
    title: "Duels musicaux en ligne",
    description: "Affronte d’autres talents, fais voter le public et grimpe au classement.",
    href: "#competitors",
  },
  {
    id: 2,
    title: "Vote en temps réel",
    description: "Deviens juge : soutiens tes artistes préférés et influence le podium.",
    href: "#spectators",
  },
  {
    id: 3,
    title: "Gains & récompenses",
    description: "Gagne en visibilité, débloque des trophées et monétise ton audience.",
    href: "#competitors",
  },
];

const Grid: React.FC = () => {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-20">
      {/* Titre animé */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12">
        <TextGenerateEffect
          words={[
            { text: "Fonctionnalités", white: false },
            { text: "clés", white: true },
          ]}
          className="text-purple-400"
        />
      </h2>

      {/* Grille */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {items.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            {/* Wrapper dégradé */}
            <div className="p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500">
              {/* Carte */}
              <div className="rounded-3xl bg-[#120e23]/80 backdrop-blur-md p-6 h-full shadow-lg hover:shadow-purple-700 transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {item.description}
                </p>

                {/* CTA avec contour dégradé qui matche le reste du site */}
                <Link
                  href={item.href}
                  className="inline-block rounded-full p-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                  <span className="rounded-full bg-[#0f0c25] hover:bg-transparent px-4 py-2 text-sm font-medium transition-colors">
                    En savoir plus →
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Grid;
