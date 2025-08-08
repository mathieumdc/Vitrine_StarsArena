// components/Hero.tsx
"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow, FaMicrophone, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const cardHover = {
  scale: 1.03,
  boxShadow: "0 15px 30px rgba(138,43,226,0.4)",
  transition: { duration: 0.3 },
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      <div className="relative z-10 pb-20 pt-36 flex flex-col items-center justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] text-center text-white my-20">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 mb-3">
            Le futur des compétitions artistiques
          </h2>

          <TextGenerateEffect
            className="text-[40px] md:text-5xl lg:text-6xl"
            words={[
              { text: "Rejoignez", white: false },
              { text: "StarsArena", white: false },
              { text: ":", white: true },
              { text: "Devenez", white: true },
              { text: "la", white: true },
              { text: "Prochaine", white: true },
              { text: "Icône", white: true },
              { text: "de", white: true },
              { text: "la", white: true },
              { text: "Musique", white: true },
            ]}
          />

          <p className="mt-4 text-sm md:text-lg lg:text-2xl max-w-xl mx-auto">
            Présentez vos talents, gagnez des trophées et des récompenses
            dans des compétitions de musique passionnantes
          </p>

          {/* Cartes Compétiteur / Spectateur */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 w-full max-w-3xl mx-auto">
            {[
              {
                title: "Je suis compétiteur",
                icon: <FaMicrophone className="w-7 h-7 text-purple-400" />,
                desc: "Participez aux duels & grimpez sur le podium.",
                href: "#competitors",
              },
              {
                title: "Je suis spectateur",
                icon: <FaUsers className="w-7 h-7 text-purple-400" />,
                desc: "Votez en live & découvrez de nouveaux talents.",
                href: "#spectators",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 16px rgba(138,43,226,0.3)",
                }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-600 p-[2px]"
              >
                <a
                  href={card.href}
                  className="block bg-[#0f0c25]/80 backdrop-blur-md rounded-2xl px-6 py-8 flex flex-col items-center text-center"
                >
                  <div className="mb-3">{card.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-1">{card.title}</h3>
                  <p className="text-gray-300 text-sm">{card.desc}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
