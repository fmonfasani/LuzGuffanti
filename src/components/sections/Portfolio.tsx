"use client";

import { motion } from "framer-motion";

interface PortfolioItemProps {
  title: string;
  index: number;
}

function PortfolioItem({ title, index }: PortfolioItemProps) {
  // Alternate gradient direction
  const isEven = index % 2 === 0;
  const gradientClass = isEven
    ? "bg-gradient-to-r from-[#ffcce0] to-[#fff9c4]"
    : "bg-gradient-to-r from-[#fff9c4] to-[#ffcce0]";

  return (
    <section className={`relative min-h-screen w-full overflow-hidden flex ${gradientClass}`}>
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold text-[#333333] tracking-tighter uppercase mb-12">
            {title}
          </h2>

          {/* Placeholder for content */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-4xl h-[400px] flex items-center justify-center">
              {/* Content will go here - videos, images, etc */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Portfolio() {
  const portfolioItems = [
    "UGC",
    "TURISMO",
    "JETSMART",
    "INSTITUCIONAL",
    "ASMR",
    "ECOMMERCE",
    "REAL STATE"
  ];

  return (
    <div id="videos">
      {portfolioItems.map((item, index) => (
        <PortfolioItem key={index} title={item} index={index} />
      ))}
    </div>
  );
}
