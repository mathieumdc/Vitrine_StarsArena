// components/Footer.tsx
"use client";
import React from "react";
import Link from "next/link";
import { FaTwitter, FaTiktok, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre inscription !");
  };

  return (
    <footer id="contact" className="bg-gradient-to-tr from-[#0e0b1f] to-[#1a162f] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* 1. Contact */}
        <div className="space-y-4">
          <h4 className="text-base font-semibold">Contactez-nous</h4>
          <a
            href="mailto:starsarena974@gmail.com"
            className="block text-xs hover:text-purple-400 transition-colors"
          >
            starsarena974@gmail.com
          </a>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://twitter.com/StarsArena"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@starsarena974"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/starsarena974"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 2. Abonnement */}
        <div className="space-y-4">
          <h4 className="text-base font-semibold">Abonnez-vous !</h4>
          <p className="text-xs text-gray-300">
            Recevez toutes les dernières actus et tournois directement dans votre boîte mail.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-4">
            {/* Input avec icône et wrapper gradient */}
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                <FaEnvelope className="w-5 h-5" />
              </span>
              <span className="block rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 shadow-purple-700/20">
                <input
                  type="email"
                  placeholder="Votre e-mail"
                  required
                  className="w-full pl-12 pr-4 py-2 rounded-full bg-[#0e0b1f] placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                />
              </span>
            </div>
            {/* Bouton S’abonner */}
            <span className="inline-block rounded-full p-[2px] bg-gradient-to-r from-purple-500 via-purple-400 to-indigo-500 shadow-purple-700/20">
              <button
                type="submit"
                className="px-6 py-2 rounded-full bg-[#0e0b1f] text-white font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              >
                S’abonner
              </button>
            </span>
          </form>
        </div>

        {/* 3. Liens utilitaires */}
        <div className="space-y-4 text-right">
          {[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Disclosures", href: "/disclosures" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="block text-xs hover:text-purple-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-[10px] text-gray-400">
        &copy; {currentYear} StarsArena. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
