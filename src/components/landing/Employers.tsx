const steps = [
  { num: "01", title: "Candidates enroll", desc: "Through WhatsApp or from an existing community database." },
  { num: "02", title: "Migo screens and matches", desc: "Migo screens, updates, and matches candidates to relevant roles." },
  { num: "03", title: "Recruiters receive shortlists", desc: "Ranked shortlists, fresh signal, and direct communication through Migo." },
];

const Employers = () => (
  <section className="py-24 px-6" id="employers">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
      <div className="space-y-4">
        <p className="text-sm font-medium text-muted-foreground tracking-wide">How it works</p>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
          Screen candidates, match to roles, coordinate next steps.
        </h2>
      </div>
      <div className="space-y-4">
        {steps.map((s) => (
          <article key={s.num} className="p-6 rounded-xl border-2 border-foreground bg-card">
            <div className="flex items-start gap-4">
              <span className="bg-[hsl(var(--sky))] text-foreground font-mono text-xs font-bold px-2 py-1 rounded">{s.num}</span>
              <div className="space-y-2">
                <h3 className="text-xl font-black text-foreground">{s.title}</h3>
                <p className="text-muted-foreground leading-[1.7]">{s.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Employers;
