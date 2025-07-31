import React from "react";
import Image from "next/image";

const Partner: React.FC = () => {
  return (
    <section id="partner" className="w-full py-28 px-6 max-w-7xl mx-auto text-white">
      {/* Titre principal */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          DEVENEZ PARTENAIRE DE STARSARENA
        </h1>
      </div>

      {/* Deux bulles côte à côte */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        {/* Bulle gauche */}
        <div className="bg-[#120e23] border border-purple-600 rounded-3xl p-10 shadow-xl hover:shadow-purple-700 transition-shadow duration-300">
          <div className="flex flex-col items-center mb-8">
            <Image 
              src="/icons8-musical-note.png" 
              alt="Note musicale" 
              width={64} 
              height={64} 
              className="mb-4"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 drop-shadow-[0_0_10px_#a855f7]">
              POURQUOI DEVENIR PARTENAIRE ?
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-4 text-lg md:text-xl font-medium leading-relaxed">
            <li>Associez votre image à une app innovante</li>
            <li dangerouslySetInnerHTML={{ __html: "Gagnez en visibilit&eacute; aupr&egrave;s d&apos;un public jeune et engag&eacute;" }} />
            <li>Soutenez les nouveaux talents musicaux</li>
            <li dangerouslySetInnerHTML={{ __html: "Participez &agrave; une nouvelle sc&egrave;ne musicale 100&#37; digitale" }} />
          </ul>
        </div>

        {/* Bulle droite */}
        <div className="bg-[#120e23] border border-purple-600 rounded-3xl p-10 shadow-xl hover:shadow-purple-700 transition-shadow duration-300">
          <div className="flex flex-col items-center mb-8">
            <Image 
              src="/icons8-people.png" 
              alt="Personnes" 
              width={64} 
              height={64} 
              className="mb-4"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 drop-shadow-[0_0_10px_#a855f7]">
              POUR QUI ?
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-4 text-lg md:text-xl font-medium leading-relaxed">
            <li>Radios</li>
            <li>Labels</li>
            <li>Médias</li>
            <li>Marques et sponsors</li>
            <li>Structures qui soutiennent les artistes</li>
          </ul>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Télécharge dès maintenant l&apos;app StarsArena !
        </h2>
        <p className="text-xl md:text-2xl mb-10 font-medium leading-relaxed">
          <span
            dangerouslySetInnerHTML={{
              __html:
                "D&eacute;couvre, vote et soutiens les artistes de demain. Participe &agrave; l&apos;aventure musicale depuis ton t&eacute;l&eacute;phone."
            }}
          />
        </p>
        <button className="bg-[#8157ff] hover:bg-[#6a46d5] transition-colors duration-300 text-white font-semibold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-purple-400/50">
          Télécharger l&apos;app
        </button>
      </div>
    </section>
  );
};

export default Partner;
