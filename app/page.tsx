import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { TrainersSection } from "@/components/TrainersSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LeadFormSection } from "@/components/LeadFormSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <PricingSection />
        <TrainersSection />
        <TestimonialsSection />
        <LeadFormSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
