const tags = ["Voice portfolio", "Async screen", "Matched roles", "Warm intros"];

const Candidates = () => (
  <section className="py-20 px-6 bg-muted/50" id="candidates">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-4">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">For candidates</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
          No portals. No mystery forms. Just a useful hiring chat.
        </h2>
        <p className="text-muted-foreground">
          Migo helps candidates explain what they have actually built, where they want to work, and which teams should hear from them next.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        {tags.map((t) => (
          <span key={t} className="px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground bg-background">
            {t}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Candidates;
