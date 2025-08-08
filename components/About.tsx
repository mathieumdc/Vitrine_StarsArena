// components/About.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const competitorSections = [
  {
    titleWords: [
      { text: "Pourquoi",   white: true  },
      { text: "rejoindre",  white: false },
      { text: "StarsArena", white: false },
      { text: "?",          white: true  },
    ],
    lines: [
      "Transforme ta passion en revenus et en fans fidèles.",
      "Participe à des battles en ligne pour te faire repérer.",
      "Gagne en visibilité et fais évoluer ton projet musical.",
      "Deviens acteur d’une nouvelle scène musicale plus ouverte et plus interactive.",
    ],
    img: "/singer2.png",
  },
  {
    titleWords: [
      { text: "Comment", white: true },
      { text: "ça",      white: true },
      { text: "marche",  white: false},
      { text: "?",       white: true },
    ],
    lines: [
      "Exprime ton talent depuis ton téléphone, sans te déplacer.",
      "Chante, rappe, compose : tout style est le bienvenu.",
      "Tu n’as pas besoin d’être chanteur pour faire partie du show : beatmakers, DJ… tu as ta place.",
    ],
    img: "/singer1.png",
  },
];

const spectatorSections = [
  {
    titleWords: [
      { text: "Et",     white: true },
      { text: "le",     white: true },
      { text: "public", white: false},
      { text: "?",      white: true },
    ],
    lines: [
      "Le public vote pour ses artistes préférés à chaque round.",
      "Les fans influencent le classement en temps réel.",
      "Fais monter ton artiste préféré sur le podium et découvre de nouveaux talents.",
    ],
    img: "/singer3.png",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const cardHover = {
  scale: 1.03,
  boxShadow: "0 15px 30px rgba(138,43,226,0.4)",
  transition: { duration: 0.4 },
};

const About: React.FC = () => (
  <section id="about" className="relative w-full py-28 px-6 max-w-7xl mx-auto overflow-hidden text-white">
    {/* Fond léger */}
    <div className="pointer-events-none absolute inset-0 bg-[url('/pattern-light.svg')] bg-center opacity-5" />

    {/* Intro */}
    <div className="text-center mb-16 relative z-10">
      <h2 className="text-4xl font-extrabold mb-4">
        <TextGenerateEffect
          className="inline-block"
          words={[
            { text: "À",         white: true },
            { text: "propos",    white: true },
            { text: "de",        white: true },
            { text: "StarsArena",white: false },
          ]}
        />
      </h2>
      <p className="max-w-2xl mx-auto text-gray-300 text-lg">
        Plonge dans les coulisses de notre plateforme et découvre comment nous
        révolutionnons la compétition musicale.
      </p>
    </div>

    {/* Compétiteurs */}
    <div id="competitors" className="mb-20">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <TextGenerateEffect
          className="inline-block"
          words={[
            { text: "Compétiteurs", white: false },
          ]}
        />
      </h3>
      <motion.div
        className="space-y-24 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {competitorSections.map((sec, idx) => (
          <motion.div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={item}
          >
            {/* Texte + liste */}
            <motion.div className="space-y-6" whileHover={cardHover} variants={item}>
              <TextGenerateEffect
                className="text-2xl md:text-3xl lg:text-4xl font-bold"
                words={sec.titleWords}
              />
              <div className="p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500">
                <div className="bg-[#120e23]/80 backdrop-blur-md rounded-3xl p-8 shadow-lg transition-shadow duration-500 hover:shadow-purple-700">
                  <ul className="space-y-4 text-lg md:text-xl font-medium leading-relaxed list-none">
                    {sec.lines.map((text, i) => (
                      <motion.li
                        key={i}
                        className="relative pl-2 rounded-lg"
                        whileHover={{
                          x: 4,
                          backgroundColor: "rgba(138,43,226,0.1)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="relative block py-2">{text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className={`flex justify-center ${idx % 2 === 1 ? "md:order-first" : ""}`}
              variants={item}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 max-w-md w-full">
                <div className="bg-[#120e23]/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
                  <Image src={sec.img} alt="" width={800} height={538} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Spectateurs */}
    <div id="spectators">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <TextGenerateEffect
          className="inline-block"
          words={[
            { text: "Section",    white: true },
            { text: "Spectateurs", white: false },
          ]}
        />
      </h3>
      <motion.div
        className="space-y-24 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {spectatorSections.map((sec, idx) => (
          <motion.div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            variants={item}
          >
            {/* Texte + liste */}
            <motion.div className="space-y-6" whileHover={cardHover} variants={item}>
              <TextGenerateEffect
                className="text-2xl md:text-3xl lg:text-4xl font-bold"
                words={sec.titleWords}
              />
              <div className="p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500">
                <div className="bg-[#120e23]/80 backdrop-blur-md rounded-3xl p-8 shadow-lg transition-shadow duration-500 hover:shadow-purple-700">
                  <ul className="space-y-4 text-lg md:text-xl font-medium leading-relaxed list-none">
                    {sec.lines.map((text, i) => (
                      <motion.li
                        key={i}
                        className="relative pl-2 rounded-lg"
                        whileHover={{
                          x: 4,
                          backgroundColor: "rgba(138,43,226,0.1)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="relative block py-2">{text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className={`flex justify-center ${idx % 2 === 1 ? "md:order-first" : ""}`}
              variants={item}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 max-w-md w-full">
                <div className="bg-[#120e23]/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
                  <Image src={sec.img} alt="" width={800} height={538} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default About;
