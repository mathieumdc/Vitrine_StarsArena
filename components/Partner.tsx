// components/Partner.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const hover3D = { scale: 1.02, rotateX: 2, rotateY: -2, transition: { duration: 0.3 } };

const Partner: React.FC = () => (
  <section
    id="partner"
    className="relative w-full py-28 px-6 max-w-7xl mx-auto text-white overflow-hidden"
  >
    {/* Fond décoratif léger */}
    <div className="pointer-events-none absolute inset-0 bg-[url('/pattern-light.svg')] bg-center opacity-5" />

    {/* Titre principal animé */}
    <div className="text-center mb-20 relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        <TextGenerateEffect
          className="inline-block"
          words={[
            { text: "DEVENEZ",    white: true  },
            { text: "PARTENAIRE", white: false },
            { text: "DE",         white: true  },
            { text: "STARSARENA", white: false },
          ]}
        />
      </h1>
    </div>

    {/* Cartes “bulles” */}
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
          items: [
            "Radios",
            "Labels",
            "Médias",
            "Marques et sponsors",
            "Structures qui soutiennent les artistes",
          ],
        },
      ].map((cardData, idx) => (
        <motion.div
          key={idx}
          variants={cardAnim}
          whileHover={hover3D}
          className="cursor-pointer"
        >
          {/* Wrapper dégradé + coins arrondis */}
          <div className="p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500">
            {/* Bulle principale */}
            <div className="bg-[#120e23]/80 backdrop-blur-md rounded-3xl px-8 py-10 shadow-lg transition-shadow duration-500 hover:shadow-purple-700 h-full flex flex-col">
              {/* Icône + titre */}
              <div className="flex flex-col items-center mb-8">
                <Image
                  src={cardData.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h2 className="text-2xl md:text-3xl font-bold text-purple-300 drop-shadow-md text-center">
                  {cardData.title}
                </h2>
              </div>
              {/* Liste des points */}
              <ul className="space-y-4 flex-1 list-none">
                {cardData.items.map((line, i) => (
                  <motion.li
                    key={i}
                    className="relative pl-2 rounded-lg"
                    whileHover={{
                      x: 4,
                      backgroundColor: "rgba(138,43,226,0.1)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="block py-2">{line}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>

    {/* Call to action */}
    <div className="relative z-10 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Télécharge dès maintenant l’app StarsArena !
      </h2>
      <p className="text-xl md:text-2xl mb-10 font-medium leading-relaxed max-w-xl mx-auto">
        Découvrez, votez et soutenez les artistes de demain depuis votre téléphone.
      </p>
      <button
        className="rounded-full px-10 py-4 font-semibold text-lg transition
                   bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500
                   hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-purple-400/50"
      >
        Télécharger l'app
      </button>
    </div>
  </section>
);

export default Partner;
