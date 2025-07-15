import React from "react";
import Link from "next/link";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <footer className="w-full py-12 px-4 md:px-0 max-w-6xl mx-auto text-white text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-6">Contactez Nous</h1>
          <a 
            href="mailto:starsarena974@gmail.com" 
            className="text-2xl hover:text-[#8157ff] transition-colors block mb-6"
          >
            starsarena974@gmail.com
          </a>
          {/* Icônes des réseaux sociaux */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/icons8-twitter.png" 
                alt="Twitter" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/icons8-tik-tok.png" 
                alt="TikTok" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/icons8-instagram.png" 
                alt="Instagram" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>

        <div className="text-lg mb-4">
          Copyright © - 2025 StarsArena
        </div>

        <div className="flex justify-center space-x-6">
          <Link href="/privacy-policy" className="hover:text-[#8157ff] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-[#8157ff] transition-colors">
            Term & Condition
          </Link>
          <Link href="/disclosures" className="hover:text-[#8157ff] transition-colors">
            Disclosures
          </Link>
        </div>
      </footer>
    </section>
  );
};

export default Contact;