import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0e0b1f] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Colonne gauche : Email + Réseaux sociaux */}
        <div className="flex flex-col items-center md:items-start gap-3">
          {/* Email */}
          <a
            href="mailto:starsarena974@gmail.com"
            className="text-sm hover:text-[#8157ff] transition"
          >
            starsarena974@gmail.com
          </a>

          {/* Réseaux sociaux */}
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80 transition">
              <Image
                src="/icons8-twitter.png"
                alt="X"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Image
                src="/icons8-tik-tok.png"
                alt="TikTok"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <Image
                src="/icons8-instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        {/* Colonne centre : Copyright */}
        <div className="text-xs text-white/50">
          &copy; 2025 StarsArena. Tous droits réservés.
        </div>

        {/* Colonne droite : Liens légaux */}
        <div className="flex gap-4 text-sm">
          <Link
            href="/privacy-policy"
            className="hover:text-[#8157ff] transition"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-[#8157ff] transition"
          >
            Terms
          </Link>
          <Link
            href="/disclosures"
            className="hover:text-[#8157ff] transition"
          >
            Disclosures
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
