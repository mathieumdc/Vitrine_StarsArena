import React from "react";
import Image from "next/image";

const Partner: React.FC = () => {
  return (
    <section id="partner" className="w-full py-20 px-4 md:px-0 max-w-6xl mx-auto text-white">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          DEVENEZ PARTENAIRE DE STARSARENA
        </h1>
      </div>

      {/* Deux bulles côte à côte */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Bulle gauche */}
        <div className="bg-[#120e23] border border-[#8157ff] rounded-lg p-8 h-full">
          <div className="flex flex-col items-center mb-6">
            <Image 
              src="/icons8-musical-note.png" 
              alt="Note musicale" 
              width={64} 
              height={64} 
              className="mb-4"
            />
            <h2 className="text-4xl font-bold text-center">
              POURQUOI DEVENIR PARTENAIRE ?
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-3 text-xl">
            <li>Associez votre image à une app innovante</li>
            <li dangerouslySetInnerHTML={{ __html: "Gagnez en visibilit&eacute; aupr&egrave;s d&apos;un public jeune et engag&eacute;" }} />
            <li>Soutenez les nouveaux talents musicaux</li>
            <li dangerouslySetInnerHTML={{ __html: "Participez &agrave; une nouvelle sc&egrave;ne musicale 100&#37; digitale" }} />
          </ul>
        </div>

        {/* Bulle droite */}
        <div className="bg-[#120e23] border border-[#8157ff] rounded-lg p-8 h-full">
          <div className="flex flex-col items-center mb-6">
            <Image 
              src="/icons8-people.png" 
              alt="Personnes" 
              width={64} 
              height={64} 
              className="mb-4"
            />
            <h2 className="text-4xl font-bold text-center">POUR QUI ?</h2>
          </div>
          <ul className="list-disc pl-6 space-y-3 text-xl">
            <li>Radios</li>
            <li>Labels</li>
            <li>Médias</li>
            <li>Marques et sponsors</li>
            <li>Structures qui soutiennent les artistes</li>
          </ul>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center mt-12">
        <h2 className="text-4xl font-bold mb-6">
          Télécharge dès maintenant l&apos;app StarsArena !
        </h2>
        <p className="text-2xl mb-8">
          <span
            dangerouslySetInnerHTML={{
              __html:
                "D&eacute;couvre, vote et soutiens les artistes de demain. Participe &agrave; l&apos;aventure musicale depuis ton t&eacute;l&eacute;phone."
            }}
          />
        </p>
        <button className="bg-[#8157ff] hover:bg-[#6a46d5] text-white font-bold py-4 px-8 rounded-full text-xl">
          Télécharger l&apos;app
        </button>
      </div>
    </section>
  );
};

export default Partner;
