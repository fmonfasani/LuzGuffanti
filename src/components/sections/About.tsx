"use client";

import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-20 bg-section-light dark:bg-section-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/About_left.jpg"
                alt="Luz Guffanti"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              SOBRE MÍ
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
              Soy creadora de contenido UGC, filmmaker & editora de videos.
              Trabajo con marcas y empresas que buscan comunicar su esencia de
              forma creativa, estética, auténtica y profesional.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
              Me especializo en la producción de contenido para redes sociales,
              combinando una mirada estratégica con un fuerte enfoque visual y
              un profundo conocimiento de las tendencias digitales. Mi objetivo
              es crear piezas que conecten con la audiencia y generen resultados
              reales.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Viajar es una de mis mayores fuentes de inspiración: me permite
              observar, descubrir nuevas historias y capturar miradas distintas.
              Cada proyecto es una oportunidad de transformar ideas en contenido
              visual con identidad, sensibilidad y propósito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
