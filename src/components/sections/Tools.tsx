"use client";

import Image from "next/image";
import { tools } from "../../data/portfolio";
import { motion } from "framer-motion";

export function Tools() {
  return (
    <section
      id="tools"
      className="py-24 bg-background-light dark:bg-background-dark overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center text-primary mb-16 uppercase tracking-widest">
          MI EQUIPO DE TRABAJO
        </h2>

        {/* Fila Superior: Icons Realistas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 max-w-6xl mx-auto">
          {tools.mainTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col items-center p-8 bg-white dark:bg-neutral-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(148,99,79,0.15)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative w-full aspect-square mb-8 p-4">
                <Image
                  src={tool.imageSrc}
                  alt={tool.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <p className="text-sm font-bold tracking-widest text-gray-400 dark:text-gray-500 mb-1 uppercase">
                EQUIPO
              </p>
              <h3 className="text-lg md:text-xl font-display font-semibold text-gray-800 dark:text-white text-center">
                {tool.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Fila Inferior: List/Cards Simples */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary/60 bg-primary/5 px-4 py-2 rounded-full">
              Softwares & Complementos
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.secondaryTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-6 p-5 bg-card-light/30 dark:bg-card-dark/30 backdrop-blur-sm rounded-2xl border border-primary/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="relative w-14 h-14 flex-shrink-0">
                  <Image
                    src={tool.imageSrc}
                    alt={tool.name}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                  {tool.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
