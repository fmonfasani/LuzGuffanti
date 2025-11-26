// src/components/sections/Portfolio.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

type Category =
  | "ALL"
  | "REELS"
  | "BRANDING"
  | "TURISMO"
  | "INSTITUCIONAL"
  | "LIFESTYLE"
  | "ECOMMERCE";

interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  thumbnailUrl: string;
  videoUrl?: string;
  metrics?: {
    views?: string;
    saves?: string;
  };
}

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "ALL", label: "TODOS" },
  { value: "REELS", label: "REELS" },
  { value: "BRANDING", label: "BRANDING" },
  { value: "TURISMO", label: "TURISMO" },
  { value: "INSTITUCIONAL", label: "INSTITUCIONAL" },
  { value: "LIFESTYLE", label: "LIFESTYLE" },
  { value: "ECOMMERCE", label: "ECOMMERCE" },
];

const MOCK_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "Campaña Verano Hotel Boutique",
    category: "TURISMO",
    thumbnailUrl: "/portfolio/turismo-1.jpg",
    metrics: { views: "2.5M", saves: "45K" },
  },
  {
    id: "2",
    title: "Reel Lanzamiento Producto",
    category: "REELS",
    thumbnailUrl: "/portfolio/reel-1.jpg",
    metrics: { views: "1.8M", saves: "32K" },
  },
  {
    id: "3",
    title: "Identidad Visual Marca Lifestyle",
    category: "BRANDING",
    thumbnailUrl: "/portfolio/branding-1.jpg",
  },
  {
    id: "4",
    title: "Video Institucional Tech",
    category: "INSTITUCIONAL",
    thumbnailUrl: "/portfolio/institucional-1.jpg",
    metrics: { views: "850K" },
  },
  {
    id: "5",
    title: "Contenido UGC Ecommerce",
    category: "ECOMMERCE",
    thumbnailUrl: "/portfolio/ecommerce-1.jpg",
    metrics: { views: "1.2M", saves: "28K" },
  },
  {
    id: "6",
    title: "Travel Vlog Argentina",
    category: "LIFESTYLE",
    thumbnailUrl: "/portfolio/lifestyle-1.jpg",
    metrics: { views: "3.1M", saves: "67K" },
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  const filteredItems =
    activeCategory === "ALL"
      ? MOCK_ITEMS
      : MOCK_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-pink-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-black text-gray-800 mb-4">
            VIDEOS
          </h2>
          <div className="flex gap-2 text-4xl">
            <span>+</span>
            <span>+</span>
            <span>+</span>
          </div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat.value
                  ? "bg-gray-800 text-white scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
              data-testid={`filter-${cat.value}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-testid="portfolio-grid"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-200 cursor-pointer"
                data-testid="portfolio-item"
              >
                {/* Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-300" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Play className="w-16 h-16 text-white" />
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  {item.metrics && (
                    <div className="flex gap-4 text-sm">
                      {item.metrics.views && (
                        <span>👁️ {item.metrics.views}</span>
                      )}
                      {item.metrics.saves && (
                        <span>💾 {item.metrics.saves}</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                  {item.category}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform inline-flex items-center gap-2">
            Ver todos los proyectos
            <ExternalLink className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
