"use client";

import Image from "next/image";
import { tools } from "../../data/portfolio";

export function Tools() {
  return (
    <section id="tools" className="py-20 bg-section-light dark:bg-section-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-12">
          Herramientas
        </h2>

        <div className="border-t-2 border-dashed border-primary my-8"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-card-light dark:bg-card-dark rounded-lg shadow-sm"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={tool.imageSrc}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-body font-semibold text-center">{tool.name}</h3>
            </div>
          ))}
        </div>

        <div className="border-b-2 border-dashed border-primary my-8"></div>
      </div>
    </section>
  );
}