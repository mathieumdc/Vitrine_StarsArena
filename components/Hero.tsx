// components/Hero.tsx
"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      <div className="relative z-10 pb-20 pt-36 flex flex-col items-center justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] text-center text-white my-20">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 mb-3">
            Le futur des compétitions artistiques
          </h2>

          {/* Ici on passe un tableau pour contrôler la couleur mot à mot */}
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

          <MagicButton
            title="Télécharger l'app"
            icon={<FaLocationArrow />}
            position="right"
            href="#about"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
