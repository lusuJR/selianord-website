import Hero from "@/sections/Hero";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import WhyChooseUs from "@/sections/WhyChooseUs";
import CTASection from "@/sections/CTASection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import TechnologiesSection from "@/sections/TechnologiesSection";
import SolutionsSection from "@/sections/SolutionsSection";
import StatsSection from "@/sections/StatsSection";
import FeaturedProjectsSection from "@/sections/FeaturedProjectsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <SolutionsSection />
      <WhyChooseUs />
      <FeaturedProjectsSection />
      <TestimonialsSection />
      <TechnologiesSection />
      <CTASection />
    </>
  );
}