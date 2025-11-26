import React from 'react';

export default function Hero({ setActiveSection }) {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-900 via-fuchsia-900 to-rose-800 text-white">
      <div className="text-center px-4">
        <h1 className="text-7xl md:text-9xl font-light tracking-tight mb-6">Luz Guffanti</h1>
        <p className="text-xl md:text-2xl mb-12 font-light">
          Creadora de contenido · Storyteller visual
        </p>
        <button
          onClick={() => setActiveSection('portfolio')}
          className="px-12 py-4 bg-white text-gray-900 rounded-full text-lg font-light hover:scale-105 transition-all"
        >
          Ver Portfolio
        </button>
      </div>
    </div>
  );
}
