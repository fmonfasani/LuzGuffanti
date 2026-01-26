"use client";

import { useState } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Portfolio } from "../components/sections/Portfolio";
import { Tools } from "../components/sections/Tools";
import { Services } from "../components/sections/Services";
import { Testimonials } from "../components/sections/Testimonials";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/Footer";
import { ContactModal } from "../components/ContactModal";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCtaClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Header />
      <Hero onCtaClick={handleCtaClick} />
      <About />
      <Services />
      <Portfolio />
      <Tools />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        whatsappNumber="+54 9 11 6681-1646"
        calendlyUrl="https://calendly.com/luzguffanti"
      />
      <WhatsAppButton />
    </>
  );
}
