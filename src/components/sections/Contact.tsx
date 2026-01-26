"use client";

import { useState } from "react";
import { Instagram, Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <section
      id="contact"
      className="py-20 bg-section-light dark:bg-section-dark"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-display font-medium text-gray-800 dark:text-gray-200 mb-4 italic">
            ¿Tenés una idea para tu marca?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            llená este formulario y te creamos el contenido ideal:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card-light dark:bg-card-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  NOMBRE
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  MENSAJE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-neutral-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Tu mensaje..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white px-6 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all uppercase tracking-wider disabled:opacity-70"
              >
                {isSubmitting ? "ENVIANDO..." : "ENVIAR MENSAJE"}
              </button>

              {submitSuccess && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center font-medium">
                  ¡Mensaje enviado con éxito! Me pondré en contacto pronto.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center lg:pl-12">
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-xl mr-5">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">
                    Email
                  </h3>
                  <a
                    href="mailto:luzguffanti13@gmail.com"
                    className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                  >
                    luzguffanti13@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-xl mr-5">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">
                    Teléfono
                  </h3>
                  <a
                    href="https://wa.me/5491166811646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-primary transition-colors"
                  >
                    +54 9 11 6681 1646
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-xl mr-5">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">
                    Ubicación
                  </h3>
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
                  Redes Sociales
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="https://instagram.com/luzguffanti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card-light dark:bg-card-dark p-3 rounded-full hover:text-primary transition-all border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://tiktok.com/@luzdegira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card-light dark:bg-card-dark p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary transition-all border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.76-.54-1.45-1.27-1.92-2.11-.01 2.62-.01 5.24-.01 7.86 0 1.13-.19 2.27-.64 3.32-1.22 2.76-4.48 4.23-7.41 3.51-3.32-.82-5.46-4.52-4.42-7.79.62-1.9 2.2-3.41 4.16-3.86 1.21-.29 2.44-.14 3.58.42v4.11c-.81-.47-1.78-.63-2.7-.42-1.12.25-2.01 1.18-2.22 2.3-.23 1.11.23 2.33 1.13 3.03 1.05.8 2.61.8 3.59-.08.6-.53.91-1.31.91-2.1V.02z" />
                    </svg>
                  </a>

                  <a
                    href="https://linkedin.com/in/luz-guffanti"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card-light dark:bg-card-dark p-3 rounded-full hover:text-primary transition-all border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
