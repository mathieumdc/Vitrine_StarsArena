import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      <div className="relative z-10 pb-20 pt-36 flex flex-col items-center justify-center">
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-white">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-3">
              Le futur des compétitions artistiques
            </h2>

            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Rejoignez StarsArena : Devenez la Prochaine Icône de la Musique"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl max-w-xl">
              Présentez vos talents, gagnez des trophées et des récompenses dans des compétitions de musique passionnantes
            </p>

            <MagicButton
              title="Télécharger l'app"
              icon={<FaLocationArrow />}
              position="right"
              href="#about"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
