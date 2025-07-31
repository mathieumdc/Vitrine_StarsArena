import React from "react";
import Image from "next/image";

const content = [
  {
    title: "C&rsquo;est quoi StarsArena ?",
    description: [
      "Tu es chanteur, rappeur, beatmaker en quête de visibilité ?",
      "Tu rêves de faire découvrir ton talent sans bouger de chez toi ?",
      "StarsArena est une app de tournois musicaux en ligne.",
      "Ici, les artistes s&rsquo;affrontent en duel, le public vote, et les meilleurs montent sur le podium !",
    ],
    img: "/rapBattle.svg",
  },
  {
    title: "Pourquoi rejoindre StarsArena ?",
    description: [
      "Transforme ta passion en revenus et en fans fidèles.",
      "Participe à des battles en ligne pour te faire repérer.",
      "Gagne en visibilité et fais évoluer ton projet musical.",
      "Deviens acteur d&rsquo;une nouvelle scène musicale plus ouverte et plus interactive.",
    ],
    img: "/singer2.png",
  },
  {
    title: "Comment ça marche ?",
    description: [
      "Exprime ton talent depuis ton téléphone, sans te déplacer.",
      "Chante, rappe, compose : tout style est le bienvenu.",
      "Tu n&rsquo;as pas besoin d&rsquo;être chanteur pour faire partie du show : beatmakers, DJ… tu as ta place.",
    ],
    img: "/singer1.png",
  },
  {
    title: "Et le public dans tout ça ?",
    description: [
      "Le public vote pour ses artistes préférés à chaque round.",
      "Les fans influencent le classement en temps réel.",
      "Fais monter ton artiste préféré sur le podium et découvre de nouveaux talents.",
    ],
    img: "/singer3.png",
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full py-28 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {content.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              !isEven ? "md:flex-row-reverse" : ""
            } items-center gap-12 md:gap-20 mb-32 group`}
          >
            {/* Texte */}
            <div className="flex-1 bg-[#120e23] border border-purple-600 rounded-3xl p-10 text-white shadow-xl transition-all duration-500 hover:shadow-purple-700">
              <h2
                className="text-4xl md:text-5xl font-extrabold mb-8 text-purple-400 leading-snug drop-shadow-[0_0_10px_#a855f7]"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              <ul className="list-disc pl-6 space-y-4 text-lg md:text-xl font-medium leading-relaxed">
                {item.description.map((line, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: line }} />
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="flex-1 w-full">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-purple-400/50">
                <Image
                  src={item.img}
                  alt=""
                  width={800}
                  height={538}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default About;
