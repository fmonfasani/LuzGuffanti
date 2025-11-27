"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export function Tools() {
    const tools = [
        "CAPCUT",
        "ADOBE PREMIERE",
        "ADOBE PHOTOSHOP",
        "CANVA",
        "CHATGPT",
        "NOTION"
    ];

    return (
        <section id="herramientas" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-white">
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="font-oswald text-6xl md:text-7xl lg:text-8xl font-bold text-[#333333] tracking-tighter uppercase mb-8">
                        HERRAMIENTAS DE TRABAJO
                    </h2>

                    {/* Decorative Plus Signs */}
                    <div className="flex gap-4 mb-12 justify-center">
                        <Plus className="w-8 h-8 text-[#333333]" />
                        <Plus className="w-8 h-8 text-[#333333]" />
                        <Plus className="w-8 h-8 text-[#333333]" />
                    </div>

                    {/* Tools Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center justify-center"
                            >
                                <p className="font-oswald text-2xl md:text-3xl font-bold text-[#333333] uppercase tracking-wide">
                                    {tool}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
