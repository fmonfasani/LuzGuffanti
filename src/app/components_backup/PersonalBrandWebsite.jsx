import React, { useState } from "react";
import { Hero as SectionsHero } from "../../components/sections/Hero";
import {
  Camera,
  Briefcase,
  Image,
  DollarSign,
  BookOpen,
  Mail,
  Menu,
  X,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { Portfolio as SectionsPortfolio } from "../../components/sections/Portfolio";
import { ContactForm as SectionsContactForm } from "../../components/forms/ContactForm";

export default function PersonalBrandWebsite() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const navItems = [
    { id: "inicio", label: "Inicio", icon: Camera },
    { id: "sobre-mi", label: "Sobre mí", icon: Camera },
    { id: "servicios", label: "Servicios", icon: Briefcase },
    { id: "portfolio", label: "Portfolio", icon: Image },
    { id: "precios", label: "Precios", icon: DollarSign },
    { id: "blog", label: "Blog", icon: BookOpen },
    { id: "contacto", label: "Contacto", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-light text-gray-900">SM</h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-light transition-colors ${
                  activeSection === item.id
                    ? "text-violet-500"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setShowAuthModal(true)}
              className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-light hover:bg-gray-800 transition-colors"
            >
              Acceder
            </button>
          </div>
