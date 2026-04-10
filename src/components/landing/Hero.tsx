import { Button } from "@/components/ui/button";

const Hero = () => (
  <section className="pt-32 pb-24 px-6" id="top">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">Your thinking friend in hiring</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight text-foreground">
          Migo screens candidates before your calendar gets wrecked.
        </h1>
        <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
          A WhatsApp and voice agent that interviews candidates, checks signal, and hands employers a ranked shortlist with receipts.
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
        <div className="w-full max-w-md aspect-[4/3] rounded-2xl bg-foreground flex items-center justify-center p-8 transform rotate-2 shadow-2xl">
          <div className="text-background space-y-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="bg-background text-foreground px-2 py-1 text-xs font-black">MIGO</span>
              <span className="bg-[hsl(var(--lime))] text-foreground px-2 py-1 text-xs font-black">HIRING</span>
            </div>
            <div className="font-mono text-sm space-y-1">
              <p>Migo</p>
              <p>Talent</p>
              <p>Screening</p>
            </div>
            <div className="inline-block bg-[hsl(var(--lime))] text-foreground px-3 py-1 text-xs font-mono font-bold mt-4">
              94% MATCH
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
