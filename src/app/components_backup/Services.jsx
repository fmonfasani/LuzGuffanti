import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Services() {
  const services = [
    { title: 'Creación de Contenido', desc: 'Videos y fotos profesionales para tu marca' },
    { title: 'Estrategia Digital', desc: 'Consultoría en redes sociales y crecimiento' },
    { title: 'Producción Audiovisual', desc: 'Desde la idea hasta el producto final' },
    { title: 'Fotografía Lifestyle', desc: 'Sesiones personalizadas y auténticas' },
  ];

  return (
    <div className="min-h-screen py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-light text-center text-gray-900 mb-20">Servicios</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-12 bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:scale-105 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-200 to-rose-200 rounded-bl-full opacity-20"></div>
              <Briefcase className="w-12 h-12 text-rose-400 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-4">{service.title}</h3>
              <p className="text-gray-600 font-light text-lg">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
