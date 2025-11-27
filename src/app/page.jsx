"use client";
import { Hero } from "../components/sections/Hero";
import { ContactForm } from "../components/forms/ContactForm";
import { NavigationBanner } from "../components/sections/NavigationBanner";
import { AboutMe } from "../components/sections/AboutMe";
import { Services } from "../components/sections/Services";
import { Portfolio } from "../components/sections/Portfolio";
import { Tools } from "../components/sections/Tools";

export default function Home() {
  return (
    <>
      <Hero onCtaClick={() => { }} />
      <NavigationBanner />
      <AboutMe />
      <Services />
      <Portfolio />
      <Tools />
      <ContactForm />
    </>
  );
}
