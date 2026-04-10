import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Demo from "@/components/landing/Demo";
import Employers from "@/components/landing/Employers";
import Candidates from "@/components/landing/Candidates";
import Pilot from "@/components/landing/Pilot";
import AnimatedSection from "@/components/landing/AnimatedSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
  <>
    <Header />
    <FloatingWhatsApp />
    <main>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <Demo />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <Employers />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <Candidates />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <Pilot />
      </AnimatedSection>
    </main>
    <footer className="py-10 px-6 border-t border-border text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Migo AI. All rights reserved.
    </footer>
  </>
  );
};

export default Index;
