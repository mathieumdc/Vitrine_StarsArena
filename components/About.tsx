// components/About.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBullhorn, FaUsers, FaMobileAlt, FaChartLine } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const sections = [
  {
    title: "C’est quoi StarsArena ?",
    lines: [
      { icon: FaBullhorn, text: "Une plateforme de tournois musicaux 100% en ligne." },
      { icon: FaUsers, text: "Des duels musicaux live, jugés par le public." },
      { icon: FaChartLine, text: "Un classement temps réel pour plus de suspense." },
      { icon: FaMobileAlt, text: "Accessible depuis ton téléphone ou ton ordinateur." },
    ],
    img: "/rapBattle.svg",
  },
  {
    title: "Pourquoi nous rejoindre ?",
    lines: [
      { icon: FaChartLine, text: "Boostez votre visibilité auprès de milliers de fans." },
      { icon: FaUsers, text: "Créez et fédérez votre propre communauté." },
      { icon: FaBullhorn, text: "Transformez vos performances en revenus." },
      { icon: FaMobileAlt, text: "Profitez d’outils de promotion intégrés." },
    ],
    img: "/singer2.png",
  },
  {
    title: "Comment ça marche ?",
    lines: [
      { icon: FaMobileAlt, text: "Inscrivez-vous gratuitement en quelques clics." },
      { icon: FaBullhorn, text: "Publiez votre prestation audio ou vidéo." },
      { icon: FaUsers, text: "Partagez le lien pour faire voter vos fans." },
      { icon: FaChartLine, text: "Gravissez les échelons du podium digital." },
    ],
    img: "/singer1.png",
  },
  {
    title: "Le rôle du public",
    lines: [
      { icon: FaUsers, text: "Votez pour vos talents préférés à chaque round." },
      { icon: FaChartLine, text: "Influencez directement les résultats." },
      { icon: FaBullhorn, text: "Partagez et recommandez autour de vous." },
      { icon: FaMobileAlt, text: "Suivez les performances en live depuis votre appli." },
    ],
    img: "/singer3.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const hover3D = { scale: 1.02, rotateX: 2, rotateY: -2, transition: { duration: 0.3 } };

const About: React.FC = () => (
  <section
    id="about"
    className="relative w-full py-28 px-6 max-w-7xl mx-auto overflow-hidden text-white"
  >
    {/* Fond léger */}
    <div className="pointer-events-none absolute inset-0 bg-[url('/pattern-light.svg')] bg-center opacity-5" />

    {/* Intro étoffée */}
    <div className="relative z-10 text-center mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
        <TextGenerateEffect
          className="inline-block"
          words={[
            { text: "A", white: true },
            { text: "propos", white: false },
            { text: "de", white: true },
            { text: "StarsArena", white: true },
          ]}
        />
      </h2>
    </div>

    {/* Contenu animé */}
    <motion.div
      className="relative grid grid-cols-1 gap-16 z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {sections.map((sec, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <motion.div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              !isEven ? "md:flex-row-reverse" : ""
            }`}
            variants={itemVariants}
            whileHover={hover3D}
          >
            {/* Texte + points illustrés */}
            <div className="flex-1">
              <div className="p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500">
                <div className="bg-[#120e23]/80 backdrop-blur-md rounded-3xl p-8 shadow-lg transition-shadow duration-500 hover:shadow-purple-700">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">
                    {sec.title}
                  </h3>
                  <ul className="space-y-4 text-lg md:text-xl font-medium leading-relaxed">
                    {sec.lines.map(({ icon: Icon, text }, i) => (
                      <li key={i} className="flex items-start">
                        <Icon className="text-purple-400 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Image arrondie */}
            <div className="flex-1 max-w-md">
              <div className="p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500">
                <div className="bg-[#120e23]/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
                  <Image
                    src={sec.img}
                    alt={sec.title}
                    width={800}
                    height={538}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>

    {/* CTA final */}
    <div className="relative z-10 text-center max-w-3xl mx-auto mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Prêt à relever le défi ?
      </h2>
      <p className="text-lg md:text-xl mb-8 text-gray-300">
        Inscris-toi dès maintenant et entre dans l’arène pour partager ta musique
        avec le monde entier.
      </p>
      <button
        className="rounded-full px-10 py-4 font-semibold text-lg transition
                   bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500
                   hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-purple-400/50"
      >
        Créer mon compte
      </button>
    </div>
  </section>
);

export default About;
