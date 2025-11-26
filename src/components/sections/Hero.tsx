// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onCtaClick?: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900">
      {/* Background Video */}
      <div className="absolute inset-0 opacity-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transformá tus ideas en
            <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              contenido que vende
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Llevá tus ideas a un contenido visual que impacte, conecte y
            convierta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={onCtaClick}
              className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-2xl transition-all hover:scale-105"
              data-testid="cta-primary"
            >
              Solicitar propuesta creativa
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full"
              data-testid="cta-secondary"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver portfolio
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "500+", label: "Proyectos" },
            { value: "50M+", label: "Vistas" },
            { value: "98%", label: "Satisfacción" },
            { value: "24h", label: "Respuesta" },
          ].map((stat, idx) => (
            <div key={idx} className="text-white">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
