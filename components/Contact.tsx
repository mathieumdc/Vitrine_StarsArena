"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const [btnHover, setBtnHover] = useState(false);

  // Dégradé RGBA
  const gradient = `linear-gradient(
    90deg,
    rgba(138,43,226,1)   0%,
    rgba(186,85,211,1)  20%,
    rgba(153,50,204,1)  40%,
    rgba(255,105,180,1) 60%,
    rgba(147,112,219,1) 80%,
    rgba(72,61,139,1)  100%
  )`;

  // Couleur de fond “interne” pour masquer le centre du wrapper au repos
  const innerBg = "#0e0b1f";

  return (
    <footer
      id="contact"
      className="bg-gradient-to-tr from-[#0e0b1f] to-[#1a162f] text-white py-6 px-4"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* 1. Colonne Contact */}
        <div className="space-y-2">
          <h4 className="text-base font-semibold">Contactez-nous</h4>
          <a
            href="mailto:starsarena974@gmail.com"
            className="block text-xs hover:text-purple-400 transition-colors"
          >
            starsarena974@gmail.com
          </a>
          <div className="flex space-x-3 mt-1">
            {[
              { Icon: FaTwitter, href: "https://twitter.com/StarsArena" },
              { Icon: FaTiktok, href: "https://www.tiktok.com/@starsarena974" },
              { Icon: FaInstagram, href: "https://instagram.com/starsarena974" },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={href.split("/").pop()}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* 2. Formulaire d’abonnement */}
        <div className="space-y-2">
          <h4 className="text-base font-semibold">Abonnez-vous !</h4>
          <p className="text-xs text-gray-300 leading-snug">
            Recevez toutes les dernières actus et tournois directement dans votre boîte mail.
          </p>
              <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Merci pour votre inscription !");
      }}
      className="flex flex-col sm:flex-row sm:items-center gap-2"
    >
      <input
        type="email"
        placeholder="Votre e-mail"
        required
        className="flex-1 px-3 py-1 rounded-full bg-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
      />

      {/* Wrapper pour le stroke gradient */}
      <span
        className="inline-block rounded-full overflow-hidden p-[2px] transition"
        style={{ background: gradient }}
      >
        <button
          type="submit"
          className="block w-full rounded-full px-3 py-0.5 text-white transition-colors duration-300"
          style={{
            backgroundColor: btnHover ? "transparent" : innerBg,
          }}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
        >
          S’abonner
        </button>
      </span>
    </form>
        </div>

        {/* 3. Liens utilitaires (alignés à droite) */}
        <div className="space-y-2 text-right">
          <div className="flex flex-col items-end space-y-1 text-xs">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Disclosures", href: "/disclosures" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-purple-400 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-6 border-t border-white/20 pt-3 text-center text-[10px] text-gray-400">
        &copy; {currentYear} StarsArena. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
