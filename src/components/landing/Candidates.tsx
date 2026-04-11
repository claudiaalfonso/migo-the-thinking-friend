const tags = ["Join via WhatsApp", "Text or voice", "Profile stays fresh", "Matched to roles"];

const Candidates = () => (
  <section className="py-24 px-6 bg-[hsl(var(--sky))]" id="candidates">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <p className="text-sm font-medium text-muted-foreground tracking-wide">For candidates</p>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
          No portals. No mystery forms. Just a better way to hire and get hired.
        </h2>
        <p className="text-base text-muted-foreground leading-[1.8]">
          Join once through WhatsApp, keep your profile alive over time, and get surfaced for relevant roles as they open.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {tags.map((t) => (
          <div key={t} className="p-8 rounded-2xl border-2 border-foreground bg-card flex items-center justify-center text-center">
            <span className="text-xl font-bold text-foreground">{t}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Candidates;
