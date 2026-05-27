import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const outcomes = [
  {
    label: "Candidate data",
    title: "Keeps candidate data fresh",
    description:
      "Migo stays in touch over WhatsApp so candidate context does not go stale between sourcing and hiring.",
  },
  {
    label: "Coordination",
    title: "Reduces coordination load",
    description:
      "Screening, follow-ups, and next-step logistics happen in one conversational flow instead of scattered manual outreach.",
  },
  {
    label: "Screening",
    title: "Turns conversations into shortlists",
    description:
      "Recruiters get structured hiring signal and clear candidate summaries they can act on quickly.",
  },
];

const WhyTeams = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [24, -18]);
  const gridY = useTransform(scrollYProgress, [0, 1], [48, -24]);

  return (
    <section ref={sectionRef} className="py-24 px-6 border-t-2 border-foreground bg-card" id="why-teams">
      <div className="max-w-7xl mx-auto space-y-12">
        <motion.div style={{ y: headerY }} className="max-w-2xl space-y-4">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
            Better candidate coordination, without adding more recruiter overhead.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-[1.8]">
            Migo helps lean hiring teams keep candidate conversations alive and move strong people forward faster.
          </p>
        </motion.div>

        <motion.div style={{ y: gridY }} className="grid gap-4 lg:grid-cols-3 auto-rows-fr">
          {outcomes.map((outcome, index) => (
            <motion.article
              key={outcome.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              className="flex h-full flex-col rounded-2xl border-2 border-foreground bg-background p-8 space-y-4"
            >
              <div className="inline-flex w-fit self-start rounded-md bg-[hsl(var(--lime))] px-2 py-1 text-xs font-mono font-bold uppercase tracking-wide text-foreground">
                {outcome.label}
              </div>
              <h3 className="text-2xl font-black tracking-tight text-foreground leading-tight lg:min-h-[4.75rem]">
                {outcome.title}
              </h3>
              <p className="text-muted-foreground leading-[1.8]">{outcome.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTeams;
