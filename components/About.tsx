// components/About.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const competitorSections = [
  {
    titleWords: [
      { text: "Pourquoi", white: true },
      { text: "rejoindre", white: false },
      { text: "StarsArena", white: false },
      { text: "?", white: true },
    ],
    lines: [
      "Transforme ta passion en revenus et en fans fidèles.",
      "Participe à des battles en ligne pour te faire repérer.",
      "Gagne en visibilité et fais évoluer ton projet musical.",
      "Deviens acteur d’une nouvelle scène musicale plus ouverte et plus interactive.",
    ],
    img: "/singer2.png",
    imgAlt: "Artiste sur scène avec projecteurs",
    ctaLabel: "Je deviens compétiteur",
    ctaHref: "#download",
    badges: ["Visibilité", "Duels", "Récompenses"],
  },
  {
    titleWords: [
      { text: "Comment", white: true },
      { text: "ça", white: true },
      { text: "marche", white: false },
      { text: "?", white: true },
    ],
    lines: [
      "Exprime ton talent depuis ton téléphone, sans te déplacer.",
      "Chante, rappe, compose : tout style est le bienvenu.",
      "Tu n’as pas besoin d’être chanteur pour faire partie du show : beatmakers, DJ… tu as ta place.",
    ],
    img: "/singer1.png",
    imgAlt: "Enregistrement de performance sur smartphone",
    ctaLabel: "Commencer maintenant",
    ctaHref: "#download",
    badges: ["Simple", "Mobile", "Tous styles"],
  },
];

const spectatorSections = [
  {
    titleWords: [
      { text: "Et", white: true },
      { text: "le", white: true },
      { text: "public", white: false },
      { text: "?", white: true },
    ],
    lines: [
      "Le public vote pour ses artistes préférés à chaque round.",
      "Les fans influencent le classement en temps réel.",
      "Fais monter ton artiste préféré sur le podium et découvre de nouveaux talents.",
    ],
    img: "/singer3.png",
    imgAlt: "Public enthousiaste levant les bras",
    ctaLabel: "Je deviens spectateur",
    ctaHref: "#download",
    badges: ["Vote en live", "Classement", "Découvertes"],
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About: React.FC = () => (
  <section id="about" className="relative w-full py-28 px-6 max-w-7xl mx-auto overflow-hidden text-white">
    {/* Fond léger */}
    <div className="pointer-events-none absolute inset-0 bg-[url('/pattern-light.svg')] bg-center opacity-5" />

    {/* Compétiteurs */}
    <div id="competitors" className="mb-20">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <TextGenerateEffect className="inline-block" words={[{ text: "Compétiteurs", white: false }]} />
      </h3>

      <motion.div
        className="space-y-24 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {competitorSections.map((sec, idx) => (
          <motion.div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" variants={item}>
            {/* Texte + liste */}
            <div className="space-y-6">
              <TextGenerateEffect className="text-2xl md:text-3xl lg:text-4xl font-bold" words={sec.titleWords} />

              {/* Badges rapides */}
              <div className="flex flex-wrap gap-2">
                {sec.badges.map((b, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-purple-200"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <div className="p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500">
                <div className="bg-[#120e23]/80 backdrop-blur-md rounded-3xl p-8 shadow-lg transition-shadow duration-500 hover:shadow-purple-700">
                  <ul className="space-y-4 text-lg md:text-xl font-medium leading-relaxed list-none">
                    {sec.lines.map((text, i) => (
                      <motion.li
                        key={i}
                        className="relative pl-2 rounded-lg"
                        whileHover={{ x: 4, backgroundColor: "rgba(138,43,226,0.1)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="block py-2">{text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA section */}
                  <div className="mt-6">
                    <a
                      href={sec.ctaHref}
                      className="inline-block rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                    >
                      <span className="rounded-full bg-[#0f0c25] hover:bg-transparent px-5 py-2 text-sm font-medium transition-colors">
                        {sec.ctaLabel} →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image (alternée) */}
            <motion.div
              className={`flex justify-center ${idx % 2 === 1 ? "md:order-first" : ""}`}
              variants={item}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 max-w-md w-full">
                <div className="bg-[#120e23]/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
                  <Image src={sec.img} alt={sec.imgAlt} width={800} height={538} className="w-full h-full object-cover" />
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
          <motion.div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" variants={item}>
            {/* Texte + liste */}
            <div className="space-y-6">
              <TextGenerateEffect className="text-2xl md:text-3xl lg:text-4xl font-bold" words={sec.titleWords} />

              {/* Badges rapides */}
              <div className="flex flex-wrap gap-2">
                {sec.badges.map((b, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-purple-200"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <div className="p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500">
                <div className="bg-[#120e23]/80 backdrop-blur-md rounded-3xl p-8 shadow-lg transition-shadow duration-500 hover:shadow-purple-700">
                  <ul className="space-y-4 text-lg md:text-xl font-medium leading-relaxed list-none">
                    {sec.lines.map((text, i) => (
                      <motion.li
                        key={i}
                        className="relative pl-2 rounded-lg"
                        whileHover={{ x: 4, backgroundColor: "rgba(138,43,226,0.1)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="block py-2">{text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA section */}
                  <div className="mt-6">
                    <a
                      href={sec.ctaHref}
                      className="inline-block rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                    >
                      <span className="rounded-full bg-[#0f0c25] hover:bg-transparent px-5 py-2 text-sm font-medium transition-colors">
                        {sec.ctaLabel} →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Image (alternée) */}
            <motion.div
              className={`flex justify-center ${idx % 2 === 1 ? "md:order-first" : ""}`}
              variants={item}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 max-w-md w-full">
                <div className="bg-[#120e23]/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
                  <Image src={sec.img} alt={sec.imgAlt} width={800} height={538} className="w-full h-full object-cover" />
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
