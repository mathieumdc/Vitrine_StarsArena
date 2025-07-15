import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero">
      <div className='pb-20 pt-36'>
        <div>
          <Spotlight
            className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
            fill="rgba(138, 43, 226, 0.8)"
          />
          <Spotlight
            className='-top-10 left-full h-[80vh] w-[50vw]'
            fill="rgba(186, 85, 211, 0.8)"
          />
          <Spotlight
            className='top-28 left-80 h-[80vh] w-[50vw]'
            fill="rgba(153, 50, 204, 0.8)"
          />
        </div>
        
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
              Le futur des compétitions artistiques
            </h2>
            
            <TextGenerateEffect
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words='Rejoignez StarsArena : Devenez la Prochaine Icône de la Musique'
            />
            
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
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
  )
}

export default Hero