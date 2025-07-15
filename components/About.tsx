import React from "react";
import Image from "next/image";

const content = [
  {
    title: "C’est quoi StarsArena ?",
    description: [
      "Tu es chanteur, rappeur, beatmaker en quête de visibilité ?",
      "Tu rêves de faire découvrir ton talent sans bouger de chez toi ?",
      "StarsArena est une app de tournois musicaux en ligne.",
      "Ici, les artistes s’affrontent en duel, le public vote, et les meilleurs montent sur le podium !",
    ],
    img: "/rapBattle.svg",
  },
  {
    title: "Pourquoi rejoindre StarsArena ?",
    description: [
      "Transforme ta passion en revenus et en fans fidèles.",
      "Participe à des battles en ligne pour te faire repérer.",
      "Gagne en visibilité et fais évoluer ton projet musical.",
      "Deviens acteur d’une nouvelle scène musicale plus ouverte et plus interactive.",
    ],
    img: "/singer2.png",
  },
  {
    title: "Comment ça marche ?",
    description: [
      "Exprime ton talent depuis ton téléphone, sans te déplacer.",
      "Chante, rappe, compose : tout style est le bienvenu.",
      "Tu n’as pas besoin d’être chanteur pour faire partie du show : beatmakers, DJ… tu as ta place.",
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
    <section id="about" className="w-full py-20 px-4 md:px-0 max-w-6xl mx-auto">
      {content.map((item, index) => (
        <div
          key={index}
          className={`grid md:grid-cols-2 gap-x-5 ${
            index !== content.length - 1 ? "mb-10" : ""
          }`}
        >
          {/* Texte */}
          <div className="bg-[#120e23] border border-[#8157ff] rounded-lg p-6 text-white flex flex-col justify-center items-center text-center h-[538px]">
            <h2 className="text-5xl font-bold mb-6">{item.title}</h2>
            <ul className="list-disc pl-5 space-y-4 text-2xl font-semibold text-left max-w-[90%]">
              {item.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="w-full flex justify-center items-center h-[538px]">
            <div className="w-full h-full overflow-hidden rounded-lg">
              <Image
                src={item.img}
                alt=""
                width={800}
                height={538}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
