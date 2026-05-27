const outcomes = [
  {
    title: "Keeps candidate data fresh",
    description:
      "Migo stays in touch over WhatsApp so candidate context does not go stale between sourcing and hiring.",
  },
  {
    title: "Reduces recruiter coordination load",
    description:
      "Screening, follow-ups, and next-step logistics happen in one conversational flow instead of scattered manual outreach.",
  },
  {
    title: "Turns conversations into ranked shortlists",
    description:
      "Recruiters get structured hiring signal and clear candidate summaries they can act on quickly.",
  },
];

const WhyTeams = () => (
  <section className="py-24 px-6 border-t-2 border-foreground bg-card" id="why-teams">
    <div className="max-w-7xl mx-auto space-y-12">
      <div className="max-w-2xl space-y-4">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
          Better candidate coordination, without adding more recruiter overhead.
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-[1.8]">
          Migo helps lean hiring teams keep candidate conversations alive and move strong people forward faster.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {outcomes.map((outcome) => (
          <article key={outcome.title} className="rounded-2xl border-2 border-foreground bg-background p-8 space-y-4">
            <div className="inline-flex rounded-md bg-[hsl(var(--lime))] px-2 py-1 text-xs font-mono font-bold uppercase tracking-wide text-foreground">
              Outcome
            </div>
            <h3 className="text-2xl font-black tracking-tight text-foreground leading-tight">{outcome.title}</h3>
            <p className="text-muted-foreground leading-[1.8]">{outcome.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyTeams;
