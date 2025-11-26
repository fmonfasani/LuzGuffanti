import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, setShowAuthModal }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'precios', label: 'Precios' },
    { id: 'blog', label: 'Blog' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-light text-gray-900">LG</h1>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`text-sm font-light transition-colors ${
                activeSection === item.id ? 'text-rose-500' : 'text-gray-500 hover:text-rose-400 hover:scale-105'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setShowAuthModal(true)}
            className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-light hover:bg-gray-800 transition-colors"
          >
            Acceder
          </button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
