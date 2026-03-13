import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import SocialProof from "@/components/sections/SocialProof";
import Target from "@/components/sections/Target";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/layout/Footer";
import ScrollRevealInitializer from "@/components/ui/ScrollRevealInitializer";

export default function Home() {
  return (
    <>
      <ScrollRevealInitializer />
      <Navbar />
      <Hero />
      <PainPoints />
      <About />
      <Services />
      <Process />
      <SocialProof />
      <Target />
      <Cta />
      <Footer />
    </>
  );
}
