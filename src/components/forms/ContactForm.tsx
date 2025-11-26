// src/components/forms/ContactForm.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  serviceId: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  services?: Array<{ id: string; title: string }>;
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

export function ContactForm({ services = [], onSubmit }: ContactFormProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    setStatus("loading");

    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        // Mock API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setStatus("success");
      reset();

      // Reset success message after 3s
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-yellow-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-6xl md:text-8xl font-black text-gray-800 mb-4">
            CONTACTO
          </h2>
          <p className="text-xl text-gray-600">
            LLEVÁ TU CONTENIDO A OTRO NIVEL
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(handleFormSubmit)}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
          data-testid="contact-form"
        >
          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              NOMBRE *
            </label>
            <input
              {...register("name")}
              type="text"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-800 outline-none transition-colors"
              placeholder="Juan Pérez"
              data-testid="input-name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600" data-testid="error-name">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              EMAIL *
            </label>
            <input
              {...register("email")}
              type="email"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-800 outline-none transition-colors"
              placeholder="juan@ejemplo.com"
              data-testid="input-email"
            />
            {errors.email && (
              <p
                className="mt-1 text-sm text-red-600"
                data-testid="error-email"
              >
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              TELÉFONO
            </label>
            <input
              {...register("phone")}
              type="tel"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-800 outline-none transition-colors"
              placeholder="+54 9 11 1234-5678"
              data-testid="input-phone"
            />
          </div>

          {/* Service */}
          {services.length > 0 && (
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                SERVICIO
              </label>
              <select
                {...register("serviceId")}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-800 outline-none transition-colors"
                data-testid="input-service"
              >
                <option value="">Seleccionar servicio...</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              MENSAJE *
            </label>
            <textarea
              {...register("message")}
              rows={5}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-800 outline-none transition-colors resize-none"
              placeholder="Contanos sobre tu proyecto..."
              data-testid="input-message"
            />
            {errors.message && (
              <p
                className="mt-1 text-sm text-red-600"
                data-testid="error-message"
              >
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-gray-800 text-white py-4 rounded-full font-bold text-lg hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            data-testid="submit-button"
          >
            {status === "loading" && "Enviando..."}
            {status === "idle" && (
              <>
                Solicitar propuesta creativa
                <Send className="w-5 h-5" />
              </>
            )}
            {status === "success" && (
              <>
                ¡Mensaje enviado!
                <CheckCircle className="w-5 h-5" />
              </>
            )}
            {status === "error" && (
              <>
                Error al enviar
                <AlertCircle className="w-5 h-5" />
              </>
            )}
          </button>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200 space-y-3">
            <div className="flex items-center gap-3 text-gray-600">
              <span className="text-2xl">📱</span>
              <a
                href="https://wa.me/5491166811646"
                className="hover:text-gray-800"
              >
                +54 9 11 6681 1646
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <span className="text-2xl">✉️</span>
              <a
                href="mailto:luzguffanti13@gmail.com"
                className="hover:text-gray-800"
              >
                luzguffanti13@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <span className="text-2xl">📸</span>
              <a
                href="https://instagram.com/luzguffanti"
                className="hover:text-gray-800"
              >
                @luzguffanti
              </a>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
