"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/portfolio";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section
      id="testimonials"
      className="py-16 bg-background-light dark:bg-background-dark border-t border-b border-gray-100 dark:border-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-display font-medium text-center text-gray-500 dark:text-gray-400 mb-12 uppercase tracking-[0.2em]">
          TESTIMONIOS
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <div className="p-4 md:p-8">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6 text-center leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            <p className="text-base font-display font-bold text-primary text-center uppercase tracking-wider">
              {testimonials[currentIndex].author}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 text-gray-400 hover:text-primary transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 text-gray-400 hover:text-primary transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-4"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
