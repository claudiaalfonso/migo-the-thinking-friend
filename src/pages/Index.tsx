import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Demo from "@/components/landing/Demo";
import Employers from "@/components/landing/Employers";
import Candidates from "@/components/landing/Candidates";
import Pilot from "@/components/landing/Pilot";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Demo />
      <Employers />
      <Candidates />
      <Pilot />
    </main>
    <footer className="py-10 px-6 border-t border-border text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Migo AI. All rights reserved.
    </footer>
  </>
);

export default Index;
