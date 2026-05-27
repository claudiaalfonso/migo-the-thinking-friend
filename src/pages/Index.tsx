import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Demo from "@/components/landing/Demo";
import Employers from "@/components/landing/Employers";
import WhyTeams from "@/components/landing/WhyTeams";
import FAQ from "@/components/landing/FAQ";
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
        <About />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <Demo />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <WhyTeams />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <Employers />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <FAQ />
      </AnimatedSection>
      <AnimatedSection delay={0.05}>
        <Pilot />
      </AnimatedSection>
    </main>
    <footer className="py-10 px-6 border-t border-border text-center text-xs text-muted-foreground">
      <img src="/migo-cat.png" alt="Migo" className="w-10 h-10 mx-auto mb-3 opacity-80" />
      <p>{`© ${new Date().getFullYear()} Migo AI. All rights reserved.`}</p>
      <div className="mt-4 flex items-center justify-center">
        <span className="inline-flex items-center rounded-full border border-foreground/20 bg-card px-4 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-foreground/80">
          ElevenLabs Grant
        </span>
      </div>
    </footer>
  </>
  );
};

export default Index;
