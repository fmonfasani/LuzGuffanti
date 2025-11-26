import React from 'react';

export default function AboutMe() {
  return (
    <div className="min-h-screen py-24 px-4 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-violet-400 to-rose-400 rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-8xl">📸</div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-50"></div>
          </div>
          <div>
            <h2 className="text-5xl font-light mb-6">Hola, soy Luz</h2>
            <p className="text-xl mb-6 leading-relaxed font-light text-gray-700">
              Creadora de contenido apasionada por capturar momentos auténticos alrededor del mundo. 
              Mi trabajo combina narrativa visual con estética cinematográfica.
            </p>
            <p className="text-xl mb-8 leading-relaxed font-light text-gray-700">
              Con más de 5 años de experiencia, ayudo a marcas y personas a contar sus historias 
              de forma única y memorable.
            </p>
            <div className="border-l-4 border-rose-400 pl-6 py-2">
              <p className="text-2xl italic font-light">
                “Cada imagen cuenta una historia, cada historia merece ser contada bellamente.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
