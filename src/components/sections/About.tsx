"use client";

import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-20 bg-section-light dark:bg-section-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about-photo.jpg"
                alt="Luz Guffanti"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              About Me
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
              Soy una apasionada creadora de contenido con experiencia en la producción de videos UGC (User Generated Content) para marcas y empresas. Mi enfoque combina creatividad, autenticidad y estrategia para conectar marcas con su audiencia de manera efectiva.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
              Con una visión artística y un profundo conocimiento de las tendencias digitales, trabajo para potenciar la presencia en línea de mis clientes a través de contenido visual atractivo y significativo.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Mi objetivo es contar historias que inspiren, conecten y generen resultados tangibles para las marcas con las que colaboro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}