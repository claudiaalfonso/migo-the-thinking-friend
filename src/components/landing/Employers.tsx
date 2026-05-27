const steps = [
  { num: "1", title: "Candidates enroll", desc: "Through WhatsApp or from an existing community database." },
  { num: "2", title: "Migo screens and matches", desc: "Migo screens, updates, and matches candidates to relevant roles." },
  { num: "3", title: "Recruiters receive shortlists", desc: "Ranked shortlists, fresh signal, and direct communication through Migo." },
];

const Employers = () => (
  <section className="py-24 px-6 bg-[hsl(var(--sky))] border-t border-foreground" id="employers">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
      <div className="space-y-4">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
          Screen candidates, match to roles, coordinate next steps.
        </h2>
      </div>
      <div className="space-y-4">
        {steps.map((s) => (
          <article key={s.num} className="p-6 rounded-xl border-2 border-foreground bg-card">
            <div className="grid grid-cols-[2.5rem_1fr] items-start gap-4">
              <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground font-mono text-base font-bold leading-none text-[#2F80ED]">
                {s.num}
              </span>
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
