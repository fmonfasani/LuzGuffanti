"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type HeaderProps = {
  onCtaClick: () => void;
};

export function Header({ onCtaClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "portfolio", label: "Portfolio" },
    { id: "tools", label: "Herramientas" },
    { id: "services", label: "Servicios" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 dark:bg-black/90 dark:border-neutral-800">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-display font-bold text-primary hover:opacity-80 transition-opacity tracking-tight"
        >
          LUZ GUFFANTI
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={onCtaClick}
            className="bg-primary text-white px-7 py-2.5 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-bold text-sm uppercase tracking-widest shadow-md"
          >
            TRABAJEMOS JUNTOS
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 dark:text-white p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-black border-t border-gray-100 dark:border-neutral-800 overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-display text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <button
                onClick={() => {
                  onCtaClick();
                  setIsMenuOpen(false);
                }}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-base uppercase tracking-widest shadow-lg inline-block w-fit"
              >
                TRABAJEMOS JUNTOS
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
