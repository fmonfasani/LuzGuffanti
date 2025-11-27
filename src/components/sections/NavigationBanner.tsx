"use client";

import { motion } from "framer-motion";
import { ChevronRight, Plus } from "lucide-react";

export function NavigationBanner() {
  const links = [
    { label: "SOBRE MÍ", href: "#sobre-mi" },
    { label: "VIDEOS", href: "#videos" },
    { label: "SERVICIOS", href: "#servicios" },
    { label: "HERRAMIENTAS DE TRABAJO", href: "#herramientas" },
    { label: "CONTACTO", href: "#contacto" },
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-20 border-b border-gray-100 relative overflow-hidden">
      {/* Decorative Plus Signs */}
      <div className="absolute top-1/2 -translate-y-1/2 right-8 md:right-20 flex flex-col gap-4 text-gray-800">
        <Plus className="w-6 h-6" />
        <Plus className="w-6 h-6" />
        <Plus className="w-6 h-6" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center group cursor-pointer"
            >
              <ChevronRight className="w-8 h-8 text-gray-600 mr-4 group-hover:text-pink-500 transition-colors stroke-[3]" />
              <span className="font-oswald text-2xl md:text-3xl text-gray-800 uppercase tracking-wide group-hover:text-pink-600 transition-colors">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
