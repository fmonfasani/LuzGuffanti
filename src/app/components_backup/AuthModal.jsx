import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function AuthModal({ setShowAuthModal }) {
  const [authMode, setAuthMode] = useState('login');

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-10 max-w-md w-full shadow-2xl relative animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-light text-gray-900">
            {authMode === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
          </h3>
          <button
            onClick={() => setShowAuthModal(false)}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {authMode === 'register' && (
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-rose-300 focus:outline-none font-light transition-all"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-rose-300 focus:outline-none font-light transition-all"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-rose-300 focus:outline-none font-light transition-all"
          />

          <button className="w-full py-4 bg-gradient-to-r from-violet-400 to-rose-400 text-white rounded-full font-light hover:shadow-lg transition-all">
            {authMode === 'login' ? 'Ingresar' : 'Crear Cuenta'}
          </button>
        </div>

        {/* Footer text */}
        <p className="text-center mt-6 text-gray-600 font-light">
          {authMode === 'login' ? '¿No tenés cuenta?' : '¿Ya tenés cuenta?'}
          <button
            onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
            className="text-rose-500 ml-2 hover:underline transition-colors"
          >
            {authMode === 'login' ? 'Registrate' : 'Ingresá'}
          </button>
        </p>
      </div>
    </div>
  );
}
