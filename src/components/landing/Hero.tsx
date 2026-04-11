import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="pt-32 pb-24 px-6" id="top">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <p className="text-sm font-medium text-muted-foreground tracking-wide">Agentic hiring layer</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-foreground">
          Hiring is already hard.
          <br className="hidden sm:block" />
          <span className="block mt-2 sm:mt-4">Coordination shouldn&apos;t make it worse.</span>
        </h1>
        <p className="text-base sm:text-lg max-w-xl leading-[1.8] text-muted-foreground">
          Migo is an AI hiring partner that keeps candidate information fresh, matches people to the right roles, and drives the conversation from screening to interview.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button asChild size="lg" className="h-14 px-8 rounded-md font-bold text-base bg-[hsl(var(--lime))] text-foreground hover:bg-[hsl(78,84%,60%)]">
            <a href="#pilot">Start the pilot</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-md font-bold text-base border-2 border-foreground hover:bg-foreground hover:text-background">
            <a href="#demo">See Migo work</a>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-foreground flex flex-col items-center justify-center p-8 transform rotate-2 shadow-2xl">
          <img src="/migo-cat-outline.png" alt="Migo" className="w-28 h-28 object-contain" />
          <div className="flex items-center gap-1 mt-4">
            <span className="bg-background text-foreground px-2 py-1 text-xs font-black">MIGO</span>
            <span className="border border-background text-background px-2 py-1 text-xs font-black">AI</span>
          </div>
          <p className="text-background/70 font-mono text-xs tracking-widest uppercase mt-4">Hiring in motion</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
