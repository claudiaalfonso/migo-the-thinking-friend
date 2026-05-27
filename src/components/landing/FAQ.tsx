import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Migo replacing recruiters?",
    answer:
      "No. Migo handles repetitive coordination and early candidate conversations so recruiters can spend more time on judgment, alignment, and closing.",
  },
  {
    question: "Does this only work on WhatsApp?",
    answer:
      "WhatsApp is the starting point because it is familiar, high-response, and easy for candidates. The value is the coordination layer and hiring signal Migo captures around those conversations.",
  },
  {
    question: "How does Migo rank candidates?",
    answer:
      "Migo turns conversations into structured signal around fit, preferences, availability, and role relevance so teams receive clearer shortlists instead of raw chat logs.",
  },
  {
    question: "Can teams control who moves forward?",
    answer:
      "Yes. Migo supports the workflow, but hiring teams stay in control of advancement decisions, follow-up questions, and next steps.",
  },
];

const FAQ = () => (
  <section className="py-24 px-6 border-t-2 border-foreground" id="faq">
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="space-y-4 text-center">
        <p className="text-sm font-medium text-muted-foreground tracking-wide">FAQ</p>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
          Questions teams usually ask first.
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-[1.8] max-w-2xl mx-auto">
          The product is simple to grasp once you see it in action, but these are the questions that tend to come up before a pilot.
        </p>
      </div>

      <div className="rounded-2xl border-2 border-foreground bg-card px-6 sm:px-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-foreground/20">
              <AccordionTrigger className="py-6 text-left text-lg font-bold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-[1.8] text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
