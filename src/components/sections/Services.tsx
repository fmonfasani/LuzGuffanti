"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function Services() {
    const services = [
        "CONTENIDO UGC",
        "FILMMAKER",
        "EDICIÓN DE VIDEOS",
        "GUIONES/COPYWRITING",
        "ESTRATEGIA DE CONTENIDOS"
    ];

    return (
        <section id="servicios" className="relative min-h-screen w-full overflow-hidden flex">
            {/* Split Background - Reversed */}
            <div className="absolute inset-0 z-0 flex">
                <div className="w-1/2 bg-white"></div>
                <div className="w-1/2 bg-gradient-to-br from-[#fff4a3] via-[#fff9c4] via-[#fffbd4] to-[#fff4a3]"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row h-full">

                {/* Left Side - White (Empty) */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-full flex items-center justify-center"
                    >
                        {/* Empty space for future content */}
                        <div className="w-full h-[500px] flex items-center justify-center">
                            {/* Space reserved */}
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Yellow with Services */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-oswald text-6xl md:text-7xl lg:text-8xl font-bold text-[#333333] tracking-tighter uppercase mb-8">
                            SERVICIOS
                        </h2>

                        {/* Decorative Plus Signs */}
                        <div className="flex gap-4 mb-12">
                            <Plus className="w-8 h-8 text-[#333333]" />
                            <Plus className="w-8 h-8 text-[#333333]" />
                            <Plus className="w-8 h-8 text-[#333333]" />
                        </div>

                        {/* Services List */}
                        <div className="space-y-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-2 h-2 bg-[#333333] rounded-full"></div>
                                    <p className="font-oswald text-xl md:text-2xl font-medium text-[#333333] uppercase tracking-wide">
                                        {service}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
