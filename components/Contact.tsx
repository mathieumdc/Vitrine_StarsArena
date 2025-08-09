// components/Footer.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaTwitter, FaTiktok, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [hoverBtn, setHoverBtn] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const gradient =
    "linear-gradient(90deg, rgba(138,43,226,1) 0%, rgba(186,85,211,1) 20%, rgba(153,50,204,1) 40%, rgba(255,105,180,1) 60%, rgba(147,112,219,1) 80%, rgba(72,61,139,1) 100%)";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <footer
      id="contact"
      className="relative mt-24 bg-gradient-to-tr from-[#0e0b1f] to-[#1a162f] text-white"
    >
      {/* conteneur centré + grosses marges latérales + marge bas */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pt-10 pb-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* 1) Bloc contact + socials */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wide text-purple-200">Contact</h4>
              <a
                href="mailto:starsarena974@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-purple-400 transition-colors"
              >
                <FaEnvelope className="w-4 h-4" />
                starsarena974@gmail.com
              </a>

              <div className="flex gap-3 pt-2">
                {[
                  { href: "https://twitter.com/StarsArena", label: "Twitter / X", Icon: FaTwitter },
                  { href: "https://www.tiktok.com/@starsarena974", label: "TikTok", Icon: FaTiktok },
                  { href: "https://instagram.com/starsarena974", label: "Instagram", Icon: FaInstagram },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group inline-flex items-center justify-center p-[2px] rounded-full"
                    style={{ background: gradient }}
                  >
                    <span className="rounded-full bg-[#0e0b1f] px-3 py-2 transition-colors group-hover:bg-transparent">
                      <Icon className="w-4 h-4" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* 2) Newsletter */}
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-purple-200">Abonnez-vous</h4>
              <p className="text-xs text-gray-300 mt-1">
                Actus, tournois et nouveautés — directement dans votre boîte mail.
              </p>

              <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row gap-3">
                {/* input avec icône et ring dégradé */}
                <div className="relative flex-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300">
                    <FaEnvelope className="w-4 h-4" />
                  </span>
                  <span className="block rounded-full p-[2px]" style={{ background: gradient }}>
                    <input
                      type="email"
                      required
                      placeholder="Votre e-mail"
                      className="w-full pl-10 pr-4 py-2 rounded-full bg-[#0e0b1f] placeholder-gray-400 text-white focus:outline-none"
                    />
                  </span>
                </div>

                {/* bouton : contour dégradé qui se remplit au hover */}
                <span className="inline-block rounded-full p-[2px]" style={{ background: gradient }}>
                  <button
                    type="submit"
                    onMouseEnter={() => setHoverBtn(true)}
                    onMouseLeave={() => setHoverBtn(false)}
                    className="px-6 py-2 rounded-full font-medium transition-colors"
                    style={{ background: hoverBtn ? "transparent" : "#0e0b1f" }}
                  >
                    {submitted ? "Merci !" : "S’abonner"}
                  </button>
                </span>
              </form>

              <p className="mt-2 text-[10px] text-gray-400">
                En vous inscrivant, vous acceptez de recevoir nos communications. Désinscription en 1 clic.
              </p>
            </div>

            {/* 3) Liens utiles */}
            <div className="md:text-right">
              <h4 className="text-sm font-semibold tracking-wide text-purple-200">Liens utiles</h4>
              <nav className="mt-2 space-y-2">
                {[
                  { label: "Privacy Policy", href: "/privacy-policy" },
                  { label: "Terms & Conditions", href: "/terms" },
                  { label: "Disclosures", href: "/disclosures" },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block text-xs text-gray-200 hover:text-purple-400 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bas de page fin */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-400">
          <span>&copy; {currentYear} StarsArena. Tous droits réservés.</span>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 hover:text-purple-300 transition"
            aria-label="Remonter en haut"
          >
            ↑ Retour en haut
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
