// components/Partner.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Glow principal (pour les 2 bulles du haut)
const hoverGlow = {
  y: -2,
  boxShadow: "0 20px 60px rgba(168,85,247,0.35), 0 8px 24px rgba(79,70,229,0.25)",
  transition: { duration: 0.25 },
};

// Glow plus discret (stats / packs / logos / contact)
const hoverGlowLight = {
  y: -1,
  boxShadow: "0 14px 36px rgba(168,85,247,0.18), 0 6px 16px rgba(79,70,229,0.16)",
  transition: { duration: 0.25 },
};

const stats = [
  { value: "25k+", label: "Utilisateurs engagés" },
  { value: "1.2M", label: "Vues cumulées" },
  { value: "3x",   label: "Visibilité moyenne" },
  { value: "98%",  label: "Satisfaction partenaires" },
];

const tiers = [
  {
    name: "Pack Découverte",
    perks: ["Mention dans l’app", "Logo sur la page Partenaires", "1 post social"],
  },
  {
    name: "Pack Visibilité",
    perks: ["Emplacement carte dédiée", "2 posts + 1 story", "Lien tracké", "Rapport mensuel"],
  },
  {
    name: "Pack Premium",
    perks: ["Slot sponsor tournoi", "Push in-app", "Activation dédiée", "Reporting avancé"],
  },
];

const Partner: React.FC = () => (
  <section id="partner" className="relative w-full py-28 px-6 max-w-7xl mx-auto text-white overflow-hidden">
    {/* Fond décoratif léger */}
    <div className="pointer-events-none absolute inset-0 bg-[url('/pattern-light.svg')] bg-center opacity-5" />

    {/* Titre principal animé */}
    <div className="text-center mb-6 relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        <TextGenerateEffect
          className="inline-block"
          words={[
            { text: "DEVENEZ", white: true  },
            { text: "PARTENAIRE", white: false },
            { text: "DE", white: true  },
            { text: "STARSARENA", white: false },
          ]}
        />
      </h1>
      <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
        Associez votre image à une scène musicale digitale, communautaire et mesurable.
      </p>
    </div>

    {/* Stats rapides (glow subtil) */}
    <div className="relative z-10 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileHover={hoverGlowLight}
            className="group relative rounded-2xl bg-white/5 border border-white/10 px-6 py-5 text-center overflow-hidden"
          >
            {/* halo discret */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-15" />
            <div className="relative">
              <div className="text-2xl md:text-3xl font-extrabold text-purple-300">{s.value}</div>
              <div className="text-xs md:text-sm text-gray-300 mt-1">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Cartes “bulles” – glow principal */}
    <motion.div
      className="relative grid md:grid-cols-2 gap-12 mb-24 z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {[
        {
          icon: "/icons8-musical-note.png",
          title: "POURQUOI DEVENIR PARTENAIRE ?",
          items: [
            "Associez votre image à une app innovante",
            "Gagnez en visibilité auprès d’un public jeune et engagé",
            "Soutenez les nouveaux talents musicaux",
            "Participez à une nouvelle scène musicale 100 % digitale",
          ],
        },
        {
          icon: "/icons8-people.png",
          title: "POUR QUI ?",
          items: ["Radios", "Labels", "Médias", "Marques et sponsors", "Structures qui soutiennent les artistes"],
        },
      ].map((cardData, idx) => (
        <motion.div
          key={idx}
          variants={cardAnim}
          whileHover={hoverGlow}
          className="group relative cursor-pointer rounded-3xl"
        >
          {/* Glow doux en arrière-plan au hover */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30" />
          {/* Contour dégradé fin */}
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500">
            {/* Bulle */}
            <div className="bg-[#120e23]/80 backdrop-blur-md rounded-3xl px-8 py-10 shadow-lg h-full flex flex-col transition-shadow duration-300">
              <div className="flex flex-col items-center mb-8">
                <Image src={cardData.icon} alt="" width={64} height={64} className="mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-purple-300 drop-shadow-md text-center">
                  {cardData.title}
                </h2>
              </div>
              <ul className="space-y-3 flex-1 list-none">
                {cardData.items.map((line, i) => (
                  <motion.li
                    key={i}
                    className="relative rounded-lg"
                    whileHover={{ x: 4, backgroundColor: "rgba(138,43,226,0.10)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="block py-2 px-2">{line}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Packs partenaires (glow discret + halo faible) */}
    <motion.div
      className="relative grid md:grid-cols-3 gap-6 mb-24 z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {tiers.map((t, i) => (
        <motion.div
          key={i}
          variants={cardAnim}
          whileHover={hoverGlowLight}
          className="group relative h-full rounded-3xl"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-15" />
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 h-full">
            <div className="bg-[#120e23]/80 rounded-3xl p-7 h-full flex flex-col">
              <h3 className="text-xl font-bold text-white">{t.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-200 flex-1">
                {t.perks.map((p, idx) => (
                  <li key={idx} className="rounded-md px-3 py-2 bg-white/5 border border-white/10">
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-block rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500"
              >
                <span className="rounded-full bg-[#0f0c25] hover:bg-transparent px-5 py-2 text-sm font-medium transition-colors">
                  Nous contacter →
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Logos partenaires (hover très light) */}
    {/* <div className="relative z-10 mb-20">
      <div className="opacity-80 text-center text-sm text-gray-300 mb-6">Ils nous accompagnent</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {["/logos/partner1.svg", "/logos/partner2.svg", "/logos/partner3.svg", "/logos/partner4.svg"].map(
          (logo, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -1,
                boxShadow: "0 10px 28px rgba(168,85,247,0.15)",
                transition: { duration: 0.2 },
              }}
              className="rounded-xl bg-white/5 border border-white/10 h-16 flex items-center justify-center"
            >
              <Image src={logo} alt={`Logo partenaire ${i + 1}`} width={120} height={36} className="opacity-90" />
            </motion.div>
          )
        )}
      </div>
    </div> */}

    {/* CTA final */}
    <div className="relative z-10 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à co-créer la scène de demain ?</h2>
      <p className="text-xl md:text-2xl mb-10 font-medium leading-relaxed max-w-xl mx-auto">
        Activez votre marque au cœur des battles, du vote en live et des découvertes.
      </p>
      <a
        href="#contact"
        className="rounded-full px-10 py-4 font-semibold text-lg transition bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-purple-400/50 inline-block"
      >
        Discuter d’un partenariat
      </a>
    </div>

    {/* Carte contact mini (glow discret) */}
    <div className="relative z-10 mt-10 max-w-3xl mx-auto">
      <motion.div whileHover={hoverGlowLight} className="group relative rounded-3xl">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-15" />
        <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500">
          <div className="bg-[#120e23]/80 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-lg font-semibold">Un projet en tête ?</div>
              <div className="text-gray-300 text-sm mt-1">
                Écrivez-nous : <span className="text-purple-300">starsarena974@gmail.com</span>
              </div>
            </div>
            <a
              href="mailto:starsarena974@gmail.com"
              className="rounded-full px-6 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 transition"
            >
              Envoyer un e-mail
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Partner;