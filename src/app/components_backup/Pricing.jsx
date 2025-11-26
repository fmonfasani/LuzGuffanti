import React from "react";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Básico",
      price: "$500",
      features: [
        "1 video",
        "10 fotos",
        "Consultoría básica",
        "Entrega en 7 días",
      ],
    },
    {
      name: "Profesional",
      price: "$1200",
      features: [
        "3 videos",
        "30 fotos",
        "Estrategia completa",
        "Entrega en 5 días",
        "Revisiones ilimitadas",
      ],
    },
    {
      name: "Premium",
      price: "$2500",
      features: [
        "5 videos",
        "50 fotos",
        "Producción completa",
        "Entrega en 3 días",
        "Soporte prioritario",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-light text-center text-gray-900 mb-20">
          Precios
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`p-10 rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 ${
                i === 1
                  ? "bg-gradient-to-br from-rose-300 via-fuchsia-300 to-violet-300"

                  : "bg-white"
              }`}
            >
              <h3 className="text-3xl font-light mb-4">{plan.name}</h3>
              <p className="text-5xl font-light mb-8">{plan.price}</p>
              <ul className="space-y-4 mb-8 text-gray-700 font-light">
                {plan.features.map((f, j) => (
                  <li key={j}>✓ {f}</li>
                ))}
              </ul>
              <button className="w-full py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-light transition-colors">
                Elegir Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
