"use client";

import { services } from "../../data/portfolio";

export function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-background-light dark:bg-background-dark"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-12 uppercase tracking-wider">
          SERVICIOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card-light dark:bg-card-dark p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-800 group"
            >
              <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
