const tags = ["Voice portfolio", "Async screen", "Matched roles", "Warm intros"];

const Candidates = () => (
  <section className="py-24 px-6 bg-[hsl(var(--sky))]" id="candidates">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">For candidates</p>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.1] italic">
          No portals. No mystery forms. Just a useful hiring chat.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Migo helps candidates explain what they have actually built, where they want to work, and which teams should hear from them next.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {tags.map((t) => (
          <div key={t} className="p-6 rounded-xl border-2 border-foreground bg-card">
            <span className="text-lg font-bold text-foreground">{t}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Candidates;
