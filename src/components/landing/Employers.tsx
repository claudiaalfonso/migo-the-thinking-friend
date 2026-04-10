const steps = [
  { num: "01", title: "Role intake", desc: "Define tools, seniority, geography, compensation, and must-have proof." },
  { num: "02", title: "Agentic screening", desc: "Migo reaches candidates, asks adaptive questions, and collects voice answers." },
  { num: "03", title: "Human-ready shortlist", desc: "Recruiters get ranked matches, risks, quotes, and next-step recommendations." },
];

const Employers = () => (
  <section className="py-24 px-6" id="employers">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
      <div className="space-y-4">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">For employers</p>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
          Open a role. Let Migo do the first pass.
        </h2>
      </div>
      <div className="space-y-4">
        {steps.map((s) => (
          <article key={s.num} className="p-6 rounded-xl border-2 border-foreground bg-card">
            <div className="flex items-start gap-4">
              <span className="bg-[hsl(var(--sky))] text-foreground font-mono text-xs font-bold px-2 py-1 rounded">{s.num}</span>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-foreground">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Employers;
