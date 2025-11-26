"use client";
import { Hero } from "../components/sections/Hero";
import { Portfolio } from "../components/sections/Portfolio";
import { ContactForm } from "../components/forms/ContactForm";

export default function Home() {
  return (
    <>
      <Hero onCtaClick={() => {}} />
      <Portfolio />
      <ContactForm />
    </>
  );
}
