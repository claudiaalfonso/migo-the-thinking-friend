import { useState } from "react";

const initialMessages = [
  { from: "migo", text: "Hey! I'm Migo, screening for a product engineering role. Mind sharing a recent project?" },
  { from: "migo", text: "Anything with real users — a side project counts too." },
];

const Demo = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("I built a realtime voice agent for dental clinics.");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((m) => [
      ...m,
      { from: "user", text: input },
      { from: "migo", text: "Nice — that sounds like strong full-stack signal. Can you share a link or demo?" },
    ]);
    setInput("");
  };

  return (
    <section className="py-20 px-6 bg-muted/50" id="demo">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-3 max-w-xl">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">WhatsApp first</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Migo keeps the chat warm, then structures the evidence.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Phone */}
          <div className="rounded-2xl border border-border bg-background overflow-hidden shadow-sm">
            <div className="px-4 py-3 border-b border-border flex justify-between text-sm font-medium">
              <span>Migo</span>
              <span className="text-muted-foreground text-xs">online</span>
            </div>
            <div className="p-4 space-y-3 min-h-[260px] max-h-[320px] overflow-y-auto">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    m.from === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="flex border-t border-border">
              <input
                className="flex-1 px-4 py-3 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Reply to Migo…"
              />
              <button type="submit" className="px-4 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Send
              </button>
            </form>
          </div>

          {/* Scoreboard */}
          <div className="rounded-2xl border border-border bg-background p-6 space-y-5 shadow-sm">
            <div className="space-y-1">
              <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">Employer view</p>
              <h3 className="text-lg font-bold text-foreground">Shortlist, ranked by hiring signal.</h3>
            </div>

            {[
              { name: "Maya R.", desc: "Full-stack product, integrations, automation", score: 94, active: true },
              { name: "Leo M.", desc: "Sales ops, CRM automation, RevOps", score: 88 },
              { name: "Ina S.", desc: "Customer success, QA, process design", score: 83 },
            ].map((c, i) => (
              <div key={i} className={`flex items-center justify-between p-3 rounded-lg border ${c.active ? "border-foreground bg-muted" : "border-border"}`}>
                <div>
                  <h4 className="font-semibold text-sm">{c.name}</h4>
                  <p className="text-xs text-muted-foreground">{c.desc}</p>
                </div>
                <span className="text-2xl font-extrabold text-foreground">{c.score}</span>
              </div>
            ))}

            <div className="pt-3 border-t border-border text-xs text-muted-foreground space-y-1">
              <span>Evidence captured</span>
              <p className="font-semibold text-foreground">Voice sample, project links, availability, salary range, work rights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
