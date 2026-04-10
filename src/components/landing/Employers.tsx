const steps = [
  { num: "01", title: "Role intake", desc: "Define tools, seniority, geography, compensation, and must-have proof." },
  { num: "02", title: "Agentic screening", desc: "Migo reaches candidates, asks adaptive questions, and collects voice answers." },
  { num: "03", title: "Human-ready shortlist", desc: "Recruiters get ranked matches, risks, quotes, and next-step recommendations." },
];

const Employers = () => (
  <section className="py-20 px-6" id="employers">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
      <div className="space-y-3">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">For employers</p>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
          Open a role. Let Migo do the first pass.
        </h2>
      </div>
      <div className="space-y-6">
        {steps.map((s) => (
          <article key={s.num} className="space-y-1">
            <span className="font-mono text-xs text-muted-foreground">{s.num}</span>
            <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Employers;
