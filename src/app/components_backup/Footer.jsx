import React from 'react';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-light mb-4">Luz Guffanti</h3>
            <p className="text-gray-400 font-light">Creando historias visuales que inspiran</p>
          </div>
          <div>
            <h4 className="text-lg font-light mb-4">Contacto</h4>
            <p className="text-gray-400 font-light mb-2">hola@luzguffanti.com</p>
            <p className="text-gray-400 font-light">+54 11 1234-5678</p>
          </div>
          <div>
            <h4 className="text-lg font-light mb-4">Redes Sociales</h4>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 text-gray-400 hover:text-rose-400 cursor-pointer" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-rose-400 cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-rose-400 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 font-light italic">
            "La creatividad es inteligencia divirtiéndose"
          </p>
        </div>
      </div>
    </footer>
  );
}
