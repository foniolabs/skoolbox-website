import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PilotPartner from "@/components/PilotPartner";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PilotPartner />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Stats />
        <Pricing />
        <FAQ />
        <ContactUs />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
