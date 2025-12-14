"use client";

import { useState } from "react";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-section-light dark:bg-section-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-primary mb-12">
          Contacto
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card-light dark:bg-card-dark border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card-light dark:bg-card-dark border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card-light dark:bg-card-dark border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tu mensaje..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all disabled:opacity-70"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
              
              {submitSuccess && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                  ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                </div>
              )}
              
              {submitError && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                  {submitError}
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-800 dark:text-gray-200 mb-2">Email</h3>
                  <p className="text-gray-700 dark:text-gray-300">luzguffanti@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-800 dark:text-gray-200 mb-2">Teléfono</h3>
                  <p className="text-gray-700 dark:text-gray-300">+54 11 XXXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-800 dark:text-gray-200 mb-2">Ubicación</h3>
                  <p className="text-gray-700 dark:text-gray-300">Buenos Aires, Argentina</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Instagram className="w-6 h-6 text-primary mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-display font-bold text-gray-800 dark:text-gray-200 mb-2">Redes Sociales</h3>
                  <div className="flex space-x-4">
                    <a href="https://instagram.com/luzguffanti" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                      Instagram
                    </a>
                    <a href="https://tiktok.com/@luzdegira" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}