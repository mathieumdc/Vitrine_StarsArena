// components/Grid.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { GridItems } from "@/data";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Grid: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      {/* Titre animé */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        <TextGenerateEffect words={[
              { text: "À", white: false },
              { text: "propos", white: false },
              { text: "de", white: true },
              { text: "StarsArena", white: true },
            ]} className="text-purple-400" />
      </h2>

      {/* Grille */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {GridItems.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <BentoGridItem
              id={item.id}
              title={item.title}
              description={item.description}
              img={item.img}
              spareImg={item.spareImg}
              className="hover:scale-105 transition-transform duration-300 backdrop-blur-sm bg-gray-900/50"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Grid;
