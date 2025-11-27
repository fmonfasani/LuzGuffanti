// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Instagram, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col bg-white">
      {/* Background Split */}
      <div className="absolute inset-0 z-0 flex flex-col">
        <div className="h-[55%] w-full bg-white"></div>
        <div className="h-[45%] w-full bg-gradient-to-r from-[#fff9c4] to-[#ffcce0]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full">

        {/* Left Side - "CONTENT CREATOR" */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 md:left-4 lg:left-8 bottom-[45%] z-20 flex flex-col leading-[0.85]"
        >
          <h1 className="font-oswald text-[12vw] md:text-[7rem] font-bold text-[#333333] tracking-tighter uppercase mb-2 md:mb-4">
            CONTENT
          </h1>
          <h1 className="font-oswald text-[12vw] md:text-[7rem] font-bold text-[#333333] tracking-tighter uppercase">
            CREATOR
          </h1>
        </motion.div>

        {/* Center - Image */}
        <div className="absolute inset-0 flex items-end justify-center z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-full flex items-end justify-center"
          >
            {/* Placeholder for Image - Transparent now */}
            <div className="w-[80%] h-[60%] flex items-center justify-center mb-0">
              {/* Image will go here */}
            </div>
          </motion.div>
        </div>

        {/* Right Side - Name & Info */}
        <div className="absolute right-0 md:right-4 lg:right-8 bottom-[45%] z-20 flex flex-col items-end text-right">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-oswald text-[8vw] md:text-[5rem] font-bold text-[#333333] tracking-tighter uppercase leading-none mb-0">
              LUZ GUFFANTI
            </h2>
          </motion.div>
        </div>

        {/* Description - Positioned below the split */}
        <div className="absolute right-4 md:right-8 lg:right-16 top-[58%] z-20 flex flex-col items-end text-right">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="max-w-xs ml-auto text-sm md:text-base font-medium text-black tracking-wide mb-0 uppercase font-oswald">
              <p>CREADORA DE CONTENIDO UGC.</p>
              <p>PRODUZCO CONTENIDO PARA</p>
              <p>MARCAS Y POTENCIO SU</p>
              <p>VISIBILIDAD EN REDES.</p>
            </div>
          </motion.div>
        </div>

        {/* Socials - Bottom Right */}
        <div className="absolute right-4 md:right-8 lg:right-16 bottom-8 z-20 flex flex-col items-end gap-2 text-black">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-end gap-2"
          >
            <a href="https://instagram.com/luzguffanti" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-medium hover:text-gray-700 transition-colors">
              <Instagram className="w-6 h-6" />
              <span className="font-oswald tracking-wide">luzguffanti</span>
            </a>
            <a href="https://tiktok.com/@luzdegira" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-medium hover:text-gray-700 transition-colors">
              {/* Custom TikTok Icon SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span className="font-oswald tracking-wide">luzdegira</span>
            </a>
          </motion.div>
        </div>

        {/* Mobile Location - Bottom Left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute left-4 bottom-8 flex items-center gap-2 text-gray-700 font-medium z-20"
        >
          <MapPin className="w-5 h-5" />
          <span>Buenos Aires, <span className="font-bold">Argentina</span></span>
        </motion.div>

      </div>
    </section>
  );
}
