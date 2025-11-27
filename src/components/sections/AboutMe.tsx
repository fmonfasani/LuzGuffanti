"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function AboutMe() {
    return (
        <section id="sobre-mi" className="relative min-h-screen w-full overflow-hidden flex">
            {/* Split Background */}
            <div className="absolute inset-0 z-0 flex">
                <div className="w-1/2 bg-gradient-to-br from-[#ffb3d9] via-[#ffcce0] via-[#ffd4e8] to-[#ffb3d9]"></div>
                <div className="w-1/2 bg-white"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row h-full">

                {/* Left Side - Pink with Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-oswald text-6xl md:text-7xl lg:text-8xl font-bold text-[#333333] tracking-tighter uppercase mb-8">
                            SOBRE MÍ
                        </h2>

                        {/* Decorative Plus Signs */}
                        <div className="flex gap-4 mb-8">
                            <Plus className="w-8 h-8 text-[#333333]" />
                            <Plus className="w-8 h-8 text-[#333333]" />
                            <Plus className="w-8 h-8 text-[#333333]" />
                        </div>

                        <div className="space-y-6 text-[#333333] font-medium">
                            <p className="text-base md:text-lg leading-relaxed">
                                Soy Luz, Lic. en Relaciones Públicas e Institucionales y creadora de contenido digital con más de 5 años de experiencia trabajando en distintos rubros como aerolíneas, hotelería, restaurantes, blanquerías, vinotecas, lifestyle, real state, entreo otras.
                            </p>

                            <p className="text-base md:text-lg leading-relaxed">
                                Soy una persona pasional y versátil, me involucro en el proceso creativo, desde la idea hasta la edición final. Creo contenido auténtico, estratégico y con propósito.
                            </p>

                            <p className="text-base md:text-lg leading-relaxed">
                                Me inspiran los viajes, las historias visuales y la posibilidad de transformar ideas en experiencias audiovisuales. Cada proyecto es una oportunidad de narrar desde una mirada creativa y profesional.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - White with Image Placeholder */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full flex items-center justify-center"
                    >
                        {/* Placeholder for image */}
                        <div className="w-full h-[500px] flex items-center justify-center">
                            {/* Image will go here */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
