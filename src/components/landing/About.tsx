const About = () => (
  <section className="py-24 px-6 bg-[hsl(var(--lime)/0.15)]" id="about">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <p className="text-sm font-medium text-muted-foreground tracking-wide">End-to-end coordination</p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15] text-balance">
        From screening to interview without the usual coordination chaos.
      </h2>
      <p className="text-base sm:text-lg text-muted-foreground leading-[1.8] max-w-3xl mx-auto">
        Migo handles end-to-end communication for candidates and employers. It lives on top of existing talent pools, uses WhatsApp to keep candidate information fresh, matches people to relevant roles, and gives recruiters trustworthy shortlists with clear control over next steps.
      </p>
    </div>
  </section>
);

export default About;
