"use client";

import { X, MessageCircle, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ContactModalProps = {
    isOpen: boolean;
    onClose: () => void;
    whatsappNumber?: string;
    calendlyUrl?: string;
};

export function ContactModal({
    isOpen,
    onClose,
    whatsappNumber = "+5491112345678",
    calendlyUrl = "https://calendly.com/luzguffanti"
}: ContactModalProps) {
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

    const handleWhatsApp = () => {
        window.open(whatsappUrl, '_blank');
        onClose();
    };

    const handleCalendly = () => {
        window.open(calendlyUrl, '_blank');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
                    >
                        <div className="bg-card-light dark:bg-card-dark rounded-2xl p-8 shadow-2xl mx-4">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Title */}
                            <h2 className="text-2xl font-display font-bold text-center text-gray-900 dark:text-gray-100 mb-2">
                                ¡Trabajemos Juntos!
                            </h2>
                            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                                Elige cómo prefieres contactarme
                            </p>

                            {/* Options */}
                            <div className="space-y-4">
                                {/* WhatsApp Button */}
                                <button
                                    onClick={handleWhatsApp}
                                    className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-105"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    Enviar WhatsApp
                                </button>

                                {/* Calendly Button */}
                                <button
                                    onClick={handleCalendly}
                                    className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-white py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-105"
                                >
                                    <Calendar className="w-6 h-6" />
                                    Agendar Cita
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
