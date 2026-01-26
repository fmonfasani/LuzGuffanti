"use client";

import { useState } from "react";

type HeaderProps = {
  onCtaClick: () => void;
};

export function Header({ onCtaClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "INICIO" },
    { id: "about", label: "SOBRE MÍ" },
    { id: "portfolio", label: "PORTFOLIO" },
    { id: "tools", label: "HERRAMIENTAS" },
    { id: "services", label: "SERVICIOS" },
    { id: "contact", label: "CONTACTO" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background-light/90 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-display font-bold text-primary hover:opacity-80 transition-opacity"
        >
          LUZ GUFFANTI
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <button
          onClick={onCtaClick}
          className="hidden md:block bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-bold text-sm uppercase tracking-wider shadow-md"
        >
          TRABAJEMOS JUNTOS
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <button
              onClick={() => {
                onCtaClick();
                setIsMenuOpen(false);
              }}
              className="bg-primary text-white px-6 py-3 rounded-full font-bold uppercase tracking-wider shadow-md"
            >
              TRABAJEMOS JUNTOS
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
