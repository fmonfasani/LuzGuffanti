import React, { useState } from 'react';
import { Camera, Briefcase, Image, DollarSign, BookOpen, Mail, Menu, X, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function PersonalBrandWebsite() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Camera },
    { id: 'sobre-mi', label: 'Sobre mí', icon: Camera },
    { id: 'servicios', label: 'Servicios', icon: Briefcase },
    { id: 'portfolio', label: 'Portfolio', icon: Image },
    { id: 'precios', label: 'Precios', icon: DollarSign },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'contacto', label: 'Contacto', icon: Mail }
  ];

  const services = [
    { title: 'Creación de Contenido', desc: 'Videos y fotos profesionales para tu marca' },
    { title: 'Estrategia Digital', desc: 'Consultoría en redes sociales y crecimiento' },
    { title: 'Producción Audiovisual', desc: 'Desde la idea hasta el producto final' },
    { title: 'Fotografía Lifestyle', desc: 'Sesiones personalizadas y auténticas' }
  ];

  const portfolioItems = [
    { type: 'video', title: 'Campaña París 2024' },
    { type: 'photo', title: 'Serie Tokio' },
    { type: 'video', title: 'Documental Barcelona' },
    { type: 'photo', title: 'Editorial NYC' },
    { type: 'video', title: 'Proyecto Roma' },
    { type: 'photo', title: 'Sesión Londres' }
  ];

  const pricingPlans = [
    { name: 'Básico', price: '$500', features: ['1 video editado', '10 fotos retocadas', 'Consultoría básica', 'Entrega en 7 días'] },
    { name: 'Profesional', price: '$1200', features: ['3 videos editados', '30 fotos retocadas', 'Estrategia completa', 'Entrega en 5 días', 'Revisiones ilimitadas'] },
    { name: 'Premium', price: '$2500', features: ['5 videos editados', '50 fotos retocadas', 'Producción completa', 'Entrega en 3 días', 'Soporte prioritario', 'Material exclusivo'] }
  ];

  const blogPosts = [
    { title: 'Cómo construir tu marca personal en 2025', date: '15 Oct 2025', image: '📸' },
    { title: 'Las mejores locaciones para contenido', date: '22 Oct 2025', image: '🌍' },
    { title: 'Tendencias visuales que dominan', date: '30 Oct 2025', image: '✨' },
    { title: 'Mi viaje creativo por Europa', date: '5 Nov 2025', image: '🎬' }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'inicio':
        return (
          <div className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-200/30 via-rose-200/30 to-cyan-200/30 backdrop-blur-3xl"></div>
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-4 gap-4 h-full p-8">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bg-gradient-to-br from-violet-300 to-rose-300 rounded-lg animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                ))}
              </div>
            </div>
            <div className="relative z-10 text-center px-4">
              <h1 className="text-7xl md:text-9xl font-light tracking-tight text-gray-900 mb-6">
                Sofia Martínez
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 font-light">
                Creadora de contenido · Storyteller visual
              </p>
              <button 
                onClick={() => setActiveSection('portfolio')}
                className="px-12 py-4 bg-violet-300 hover:bg-violet-400 text-gray-900 rounded-full text-lg font-light transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Ver Portfolio
              </button>
            </div>
          </div>
        );

      case 'sobre-mi':
        return (
          <div className="min-h-screen py-24 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-violet-300 to-rose-300 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="w-full h-full flex items-center justify-center text-8xl">📸</div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-cyan-200 rounded-full blur-3xl opacity-50"></div>
                </div>
                <div>
                  <h2 className="text-5xl font-light text-gray-900 mb-6">Hola, soy Sofia</h2>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed font-light">
                    Creadora de contenido apasionada por capturar momentos auténticos alrededor del mundo. Mi trabajo combina narrativa visual con estética cinematográfica.
                  </p>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed font-light">
                    Con más de 5 años de experiencia, ayudo a marcas y personas a contar sus historias de forma única y memorable.
                  </p>
                  <div className="border-l-4 border-violet-300 pl-6 py-2">
                    <p className="text-2xl italic text-gray-800 font-light">
                      "Cada imagen cuenta una historia, cada historia merece ser contada bellamente"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'servicios':
        return (
          <div className="min-h-screen py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-light text-center text-gray-900 mb-20">Servicios</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, i) => (
                  <div key={i} className="group relative p-12 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-105">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-200 to-rose-200 rounded-bl-full opacity-20"></div>
                    <Briefcase className="w-12 h-12 text-violet-400 mb-6" strokeWidth={1.5} />
                    <h3 className="text-2xl font-light text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 font-light text-lg">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'portfolio':
        return (
          <div className="min-h-screen py-24 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-6xl font-light text-center text-gray-900 mb-20">Portfolio</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {portfolioItems.map((item, i) => (
                  <div key={i} className="group relative aspect-[4/5] bg-gradient-to-br from-violet-200 via-rose-200 to-cyan-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl">
                      {item.type === 'video' ? '🎬' : '📷'}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-8 left-8 right-8">
                        <p className="text-white text-xl font-light">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'precios':
        return (
          <div className="min-h-screen py-24 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-6xl font-light text-center text-gray-900 mb-20">Precios</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, i) => (
                  <div key={i} className={`p-10 rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 ${i === 1 ? 'bg-gradient-to-br from-violet-300 to-rose-300 scale-105' : 'bg-white'}`}>
                    <h3 className="text-3xl font-light text-gray-900 mb-4">{plan.name}</h3>
                    <p className="text-5xl font-light text-gray-900 mb-8">{plan.price}</p>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start text-gray-700 font-light">
                          <span className="mr-3 text-violet-500">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-colors font-light">
                      Elegir Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'blog':
        return (
          <div className="min-h-screen py-24 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-6xl font-light text-center text-gray-900 mb-20">Blog</h2>
              <div className="grid md:grid-cols-2 gap-10">
                {blogPosts.map((post, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-violet-200 to-rose-200 rounded-2xl mb-6 overflow-hidden flex items-center justify-center text-7xl group-hover:scale-105 transition-transform duration-300">
                      {post.image}
                    </div>
                    <p className="text-sm text-gray-500 mb-2 font-light">{post.date}</p>
                    <h3 className="text-2xl font-light text-gray-900 group-hover:text-violet-500 transition-colors">{post.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'contacto':
        return (
          <div className="min-h-screen py-24 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-6xl font-light text-center text-gray-900 mb-20">Contacto</h2>
              <div className="bg-white rounded-3xl shadow-2xl p-12">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-light">Nombre</label>
                    <input type="text" className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-violet-300 focus:outline-none transition-colors font-light" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-light">Email</label>
                    <input type="email" className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-violet-300 focus:outline-none transition-colors font-light" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-light">Mensaje</label>
                    <textarea rows="6" className="w-full px-6 py-4 rounded-3xl border border-gray-200 focus:border-violet-300 focus:outline-none transition-colors font-light resize-none" placeholder="Cuéntame sobre tu proyecto..."></textarea>
                  </div>
                  <button className="w-full py-4 bg-gradient-to-r from-violet-300 to-rose-300 hover:from-violet-400 hover:to-rose-400 text-gray-900 rounded-full text-lg transition-all font-light hover:shadow-xl">
                    Enviar Mensaje
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-light text-gray-900">SM</h1>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-light transition-colors ${activeSection === item.id ? 'text-violet-500' : 'text-gray-600 hover:text-gray-900'}`}
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

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 font-light ${activeSection === item.id ? 'text-violet-500' : 'text-gray-600'}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setShowAuthModal(true);
                  setMenuOpen(false);
                }}
                className="w-full py-2 bg-gray-900 text-white rounded-full text-sm font-light"
              >
                Acceder
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-light mb-4">Sofia Martínez</h3>
              <p className="text-gray-400 font-light">Creando historias visuales que inspiran</p>
            </div>
            <div>
              <h4 className="text-lg font-light mb-4">Contacto</h4>
              <p className="text-gray-400 font-light mb-2">hola@sofiamartinez.com</p>
              <p className="text-gray-400 font-light">+54 11 1234-5678</p>
            </div>
            <div>
              <h4 className="text-lg font-light mb-4">Redes Sociales</h4>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-violet-300 cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-rose-300 cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-cyan-300 cursor-pointer transition-colors" />
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

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-10 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-light text-gray-900">
                {authMode === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
              </h3>
              <button onClick={() => setShowAuthModal(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              {authMode === 'register' && (
                <input type="text" placeholder="Nombre completo" className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-violet-300 focus:outline-none font-light" />
              )}
              <input type="email" placeholder="Email" className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-violet-300 focus:outline-none font-light" />
              <input type="password" placeholder="Contraseña" className="w-full px-6 py-4 rounded-full border border-gray-200 focus:border-violet-300 focus:outline-none font-light" />
              <button className="w-full py-4 bg-gradient-to-r from-violet-300 to-rose-300 text-gray-900 rounded-full font-light hover:shadow-xl transition-all">
                {authMode === 'login' ? 'Ingresar' : 'Crear Cuenta'}
              </button>
            </div>
            <p className="text-center mt-6 text-gray-600 font-light">
              {authMode === 'login' ? '¿No tenés cuenta?' : '¿Ya tenés cuenta?'}
              <button
                onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                className="text-violet-500 ml-2 hover:underline"
              >
                {authMode === 'login' ? 'Registrate' : 'Ingresá'}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
