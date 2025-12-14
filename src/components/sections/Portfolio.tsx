"use client";

import { useState } from "react";
import { PortfolioTab } from "../PortfolioTab";
import { PortfolioItem } from "../PortfolioItem";
import { portfolioCategories } from "../../data/portfolio";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(portfolioCategories[0].id);

  const activeCategoryData = portfolioCategories.find(
    category => category.id === activeCategory
  ) || portfolioCategories[0];

  return (
    <section id="portfolio" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-12">
          Portafolio
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {portfolioCategories.map((category) => (
            <PortfolioTab
              key={category.id}
              label={category.label}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        {/* Portfolio Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activeCategoryData.items.map((item, index) => (
            <PortfolioItem
              key={index}
              videoSrc={item.videoSrc}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}