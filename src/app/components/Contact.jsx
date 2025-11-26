import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen py-24 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-6xl font-light text-center text-gray-900 mb-20">Contacto</h2>
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-light">Nombre</label>
              <input
                type="text"
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-rose-300 focus:outline-none font-light"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-light">Email</label>
              <input
                type="email"
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-rose-300 focus:outline-none font-light"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-light">Mensaje</label>
              <textarea
                rows="6"
                className="w-full px-6 py-4 rounded-3xl border border-gray-200 focus:border-rose-300 focus:outline-none font-light resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-violet-400 to-rose-400 hover:from-violet-500 hover:to-rose-500 text-white rounded-full text-lg font-light hover:shadow-xl transition-all">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
