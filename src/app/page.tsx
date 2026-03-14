import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import InfinitePortfolio from "@/components/sections/InfinitePortfolio";
import PainPoints from "@/components/sections/PainPoints";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Backstage from "@/components/sections/Backstage";
import Process from "@/components/sections/Process";
import SocialProof from "@/components/sections/SocialProof";
import Target from "@/components/sections/Target";
import BrandStrip from "@/components/sections/BrandStrip";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/layout/Footer";
import ScrollRevealInitializer from "@/components/ui/ScrollRevealInitializer";

export default function Home() {
  return (
    <>
      <ScrollRevealInitializer />
      <Navbar />
      <Hero />
      <InfinitePortfolio />
      <PainPoints />
      <About />
      <Services />
      <Backstage />
      <Process />
      <SocialProof />
      <Target />
      <BrandStrip />
      <Cta />
      <Footer />
    </>
  );
}
