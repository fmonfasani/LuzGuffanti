"use client";

import { useState } from "react";
import { PortfolioTab } from "../PortfolioTab";
import { PortfolioItem } from "../PortfolioItem";
import { portfolioCategories } from "../../data/portfolio";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(
    portfolioCategories[0].id,
  );

  const activeCategoryData =
    portfolioCategories.find((category) => category.id === activeCategory) ||
    portfolioCategories[0];

  return (
    <section
      id="portfolio"
      className="py-20 bg-background-light dark:bg-background-dark"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-12 uppercase tracking-wider">
          PORTFOLIO
        </h2>

        {/* Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12 max-w-5xl mx-auto">
          {portfolioCategories.map((category) => (
            <PortfolioTab
              key={category.id}
              label={category.label.toUpperCase()}
              isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        {/* Portfolio Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activeCategoryData.items.map((item, index) => (
            <PortfolioItem
              key={`${activeCategory}-${index}-${item.videoSrc || "empty"}`}
              videoSrc={item.videoSrc}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
