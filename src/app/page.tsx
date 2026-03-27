import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { Programs } from "@/components/sections/programs";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ContentSeries } from "@/components/sections/content-series";
import { Testimonials } from "@/components/sections/testimonials";
import { AboutFounder } from "@/components/sections/about-founder";
import { Newsletter } from "@/components/sections/newsletter";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Programs />
        <HowItWorks />
        <ContentSeries />
        <Testimonials />
        <AboutFounder />
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
