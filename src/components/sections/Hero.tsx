"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type HeroProps = {
  onCtaClick: () => void;
};

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="Hero background"
        fill
        priority
        quality={100}
        unoptimized
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.h1
          className="text-4xl md:text-7xl font-display font-bold text-white mb-6 uppercase tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          LUZ GUFFANTI
          <br />
          <span className="text-3xl md:text-5xl font-light">
            CREADORA DE CONTENIDO
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          "Transformando ideas en contenido visual con propósito."
        </motion.p>

        <motion.button
          className="bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 uppercase tracking-widest shadow-xl"
          onClick={onCtaClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          TRABAJEMOS JUNTOS
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
