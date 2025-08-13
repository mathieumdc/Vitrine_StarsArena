// components/About.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Cartes “Comment ça marche ?”
const howItWorks = [
  {
    title: "Choisis ta catégorie",
    text:
      "Inscris-toi à un tournoi (Rap, Pop, etc.) selon ton style. Les compétitions sont organisées par thèmes pour plus d’équité.",
    img: "/icons/category.svg",
  },
  {
    title: "Enregistre depuis l’app",
    text:
      "Filme/importe ta prestation directement depuis l’application. L’identité est vérifiée et la reconnaissance vocale contribue à limiter la triche.",
    img: "/icons/record.svg",
  },
  {
    title: "Valide ton ticket",
    text:
      "Chaque participation nécessite un ticket d’entrée (à l’unité, en pack ou via abonnement si tu joues souvent).",
    img: "/icons/ticket.svg",
  },
  {
    title: "Monte grâce aux votes",
    text:
      "Les matchs se jouent en 1 contre 1. Les spectateurs doivent regarder au moins 15 s avant de pouvoir voter. Les gagnants avancent à la manche suivante.",
    img: "/icons/vote.svg",
  },
];

// Sections Compétiteurs (2 blocs alternés)
const competitorSections = [
  {
    titleWords: [
      { text: "Pourquoi", white: true },
      { text: "rejoindre", white: false },
      { text: "StarsArena", white: false },
      { text: "?", white: true },
    ],
    lines: [
      "Transforme ta passion en revenus concrets grâce aux récompenses et aux cash prizes.",
      "Gagne en visibilité à chaque performance et bâtis une fanbase engagée.",
      "Affronte des artistes de ton univers et progresse via un classement en direct.",
      "Accumule des trophées et débloque l’accès à des compétitions plus prestigieuses.",
    ],
    img: "/singer2.png",
    imgAlt: "Artiste sur scène avec projecteurs",
    ctaLabel: "Je deviens compétiteur",
    ctaHref: "#download",
    badges: ["Visibilité", "Duels 1v1", "Trophées"],
  },
  {
    titleWords: [
      { text: "Comment", white: true },
      { text: "ça", white: true },
      { text: "marche", white: false },
      { text: "?", white: true },
    ],
    lines: [
      "Enregistre ta prestation directement depuis l’app : simple et rapide.",
      "Les matchs se jouent en 1v1 et le public décide — plus tu performes, plus tu montes.",
      "Participations via tickets (à l’unité, packs ou abonnement) pour jouer régulièrement.",
      "Cash prize réparti entre les 4 derniers finalistes : performe et sois récompensé.",
    ],
    img: "/singer1.png",
    imgAlt: "Enregistrement de performance sur smartphone",
    ctaLabel: "Commencer maintenant",
    ctaHref: "#download",
    badges: ["Mobile", "Tous styles", "Récompenses"],
  },
];

// Sections Spectateurs (1 bloc alterné)
const spectatorSections = [
  {
    titleWords: [
      { text: "Et", white: true },
      { text: "le", white: true },
      { text: "public", white: false },
      { text: "?", white: true },
    ],
    lines: [
      "Découvre de nouveaux talents à chaque compétition et suis leurs parcours.",
      "Regarde au moins 15 s pour voter, puis fais avancer tes artistes préférés.",
      "Abonne-toi, commente et partage : ton engagement pèse dans le résultat.",
      "Le classement évolue en temps réel : chaque vote compte.",
    ],
    img: "/singer3.png",
    imgAlt: "Public enthousiaste levant les bras",
    ctaLabel: "Je deviens spectateur",
    ctaHref: "#download",
    badges: ["Vote en live", "Classement", "Découvertes"],
  },
];

const About: React.FC = () => (
  <section
    id="about"
    className="relative w-full py-28 px-6 max-w-7xl mx-auto overflow-hidden text-white"
  >
    {/* Fond léger */}
    <div className="pointer-events-none absolute inset-0 bg-[url('/pattern-light.svg')] bg-center opacity-5" />

    {/* COMPÉTITEURS */}
    <div id="competitors" className="mb-20">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
        <TextGenerateEffect className="inline-block" words={[{ text: "Compétiteurs", white: false }]} />
      </h3>

      <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed text-lg">
        Des tournois par catégories, des duels 1v1 et un vote du public pour faire grimper les meilleurs.
      </p>
      {/* Grid process 4 cartes */}
      <motion.div
        className="mt-10 mb-16 md:mb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {howItWorks.map((s, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{
              y: -1,
              boxShadow:
                "0 10px 30px rgba(168,85,247,0.20), 0 6px 16px rgba(79,70,229,0.18)",
            }}
            transition={{ duration: 0.22 }}
            className="relative group rounded-3xl"
          >
            {/* Glow flou CLIPPÉ par les coins arrondis */}
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden">
              <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500
                              opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
            </div>

            {/* Carte avec contour dégradé */}
            <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 h-full">
              <div className="bg-[#120e23]/80 rounded-3xl p-6 h-full">
                {/* Icône sans fond/ring => plus de petit carré même si l'image casse */}
                <div className="h-10 w-10 mb-3 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src={s.img}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{s.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="space-y-24 relative z-10 "
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
            <div className="space-y-6">
              <TextGenerateEffect
                className="text-2xl md:text-3xl lg:text-4xl font-bold"
                words={sec.titleWords}
              />

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
                        className="relative rounded-lg"
                        whileHover={{ x: 4, backgroundColor: "rgba(138,43,226,0.1)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="block py-2 px-2">{text}</span>
                      </motion.li>
                    ))}
                  </ul>

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

    {/* RÈGLES DU DUEL */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {[
        { title: "1 contre 1", text: "Chaque match oppose deux artistes. Le vainqueur passe à la manche suivante, le perdant est éliminé." },
        { title: "Vote après 15 s", text: "Les spectateurs doivent regarder le duel au moins 15 secondes avant de pouvoir voter." },
        { title: "Classement & trophées", text: "Les meilleurs montent au classement, gagnent des trophées et des récompenses/cash prizes." },
      ].map((r, i) => (
        <motion.div
          key={i}
          whileHover={{
            y: -1,
            boxShadow:
              "0 10px 30px rgba(168,85,247,0.20), 0 6px 16px rgba(79,70,229,0.18)",
          }}
          transition={{ duration: 0.22 }}
          className="relative group rounded-3xl"
        >
          {/* Glow flou CLIPPÉ */}
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden">
            <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500
                            opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
          </div>

          <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500">
            <div className="bg-[#120e23]/80 rounded-3xl p-6">
              <h4 className="text-lg font-semibold mb-2">{r.title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{r.text}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* SPECTATEURS */}
    <div id="spectators">
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
        <TextGenerateEffect className="inline-block" words={[{ text: "Spectateurs", white: false }]} />
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
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-purple-200">
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
                        className="relative rounded-lg"
                        whileHover={{ x: 4, backgroundColor: "rgba(138,43,226,0.1)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="block py-2 px-2">{text}</span>
                      </motion.li>
                    ))}
                  </ul>

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
