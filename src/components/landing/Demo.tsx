import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { RotateCcw, Check } from "lucide-react";

const messages = [
  { type: "migo", text: "Hey! What kind of role are you after?" },
  { type: "user", text: "Senior ML, Barcelona or remote EU, €70k+" },
  { type: "migo", text: "Preferred company size?" },
  { type: "user", text: "Under 50 people, ideally seed/Series A" },
  { type: "migo", text: "Got 2 matches. Glint (Series A, AI infrastructure) and Wayve (autonomous vehicles). Want intros?" },
  { type: "user", text: "Yes to Glint, pass on Wayve" },
  { type: "migo", text: "Done. Glint's CTO will reach out today. Good luck!" },
];

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-muted rounded-lg rounded-bl-sm px-3 py-2 flex items-center gap-1">
        {[0, 0.2, 0.4].map((delay, i) => (
          <motion.span key={i} className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay }} />
        ))}
      </div>
    </div>
  );
}

function UserComposingIndicator() {
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }} className="flex justify-end">
      <div className="bg-foreground/10 rounded-lg rounded-br-sm px-3 py-2 flex items-center gap-1">
        {[0, 0.2, 0.4].map((delay, i) => (
          <motion.span key={i} className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay }} />
        ))}
      </div>
    </motion.div>
  );
}

function ReadReceipt({ read }: { read: boolean }) {
  return (
    <span className="inline-flex ml-1">
      <Check className={`w-3 h-3 ${read ? "text-primary" : "text-muted-foreground/50"}`} />
      <Check className={`w-3 h-3 -ml-1.5 ${read ? "text-primary" : "text-muted-foreground/50"}`} />
    </span>
  );
}

const Demo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [showUserComposing, setShowUserComposing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const timeoutIds = useRef<NodeJS.Timeout[]>([]);

  const isMessageRead = (index: number) => {
    if (messages[index].type !== "user") return false;
    for (let i = index + 1; i < messages.length; i++) {
      if (messages[i].type === "migo") return visibleMessages.includes(i);
    }
    return false;
  };

  const playConversation = () => {
    timeoutIds.current.forEach(clearTimeout);
    timeoutIds.current = [];
    setVisibleMessages([]);
    setIsPlaying(true);
    setShowTyping(false);
    setShowUserComposing(false);

    let delay = 0;

    messages.forEach((message, index) => {
      if (message.type === "migo") {
        timeoutIds.current.push(setTimeout(() => setShowTyping(true), delay));
        delay += 1400;
        timeoutIds.current.push(setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages((prev) => [...prev, index]);
        }, delay));
        delay += 800;
      } else {
        timeoutIds.current.push(setTimeout(() => setShowUserComposing(true), delay));
        delay += 700;
        timeoutIds.current.push(setTimeout(() => {
          setShowUserComposing(false);
          setVisibleMessages((prev) => [...prev, index]);
        }, delay));
        delay += 900;
      }

      if (index === messages.length - 1) {
        timeoutIds.current.push(setTimeout(() => setIsPlaying(false), delay));
      }
    });
  };

  useEffect(() => {
    // Auto-play conversation when section comes into view
    if (isInView && !hasPlayed) {
      setHasPlayed(true);
      const timer = setTimeout(() => playConversation(), 500);
      return () => {
        clearTimeout(timer);
        timeoutIds.current.forEach(clearTimeout);
      };
    }
  }, [isInView, hasPlayed]);

  // Show all messages immediately if animation has completed
  useEffect(() => {
    if (!isPlaying && hasPlayed && visibleMessages.length === 0) {
      // Fallback: show all messages if animation didn't run properly
      setVisibleMessages(messages.map((_, i) => i));
    }
  }, [isPlaying, hasPlayed, visibleMessages.length]);

  return (
    <section className="py-24 px-6 border-t-2 border-foreground" id="demo" ref={ref}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4 max-w-2xl">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">WhatsApp first</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.1]">
            Migo keeps the chat warm, then structures the evidence.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Chat widget */}
          <div className="flex justify-center">
            <div className="w-full max-w-[380px] rounded-xl border-2 border-foreground bg-card overflow-hidden shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b-2 border-foreground bg-card">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                    <span className="text-xs font-black text-background">M</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-tight">Migo</p>
                    <p className="text-[10px] text-muted-foreground leading-tight">
                      {showTyping ? (
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-foreground">typing…</motion.span>
                      ) : "online"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => playConversation()}
                  disabled={isPlaying}
                  className="flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors disabled:opacity-40"
                  title="Replay conversation"
                >
                  <RotateCcw className={`w-3 h-3 ${isPlaying ? "animate-spin" : ""}`} />
                  <span>Replay</span>
                </button>
              </div>

              {/* Messages */}
              <div className="px-4 py-4 space-y-2 min-h-[240px] max-h-[360px] overflow-y-auto flex flex-col justify-end bg-background">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={visibleMessages.includes(index) ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[85%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                      message.type === "user"
                        ? "bg-foreground text-background rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}>
                      <span>{message.text}</span>
                      {message.type === "user" && (
                        <span className="inline-flex items-center ml-2 text-[9px] opacity-60">
                          <span className="mr-0.5">now</span>
                          <ReadReceipt read={isMessageRead(index)} />
                        </span>
                      )}
                      {message.type === "migo" && (
                        <span className="inline-flex items-center ml-2 text-[9px] text-muted-foreground">now</span>
                      )}
                    </div>
                  </motion.div>
                ))}

                <AnimatePresence>
                  {showTyping && (
                    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.15 }}>
                      <TypingIndicator />
                    </motion.div>
                  )}
                  {showUserComposing && <UserComposingIndicator />}
                </AnimatePresence>
              </div>

              {/* Input */}
              <div className="px-4 pb-4 bg-background">
                <div className="bg-muted border border-border rounded-lg px-4 py-2.5 flex items-center">
                  <span className="text-muted-foreground text-sm">Message</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scoreboard */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl font-black text-foreground">Shortlist, ranked by hiring signal.</h3>
            </div>
            
            <div className="border-t-2 border-foreground pt-6 space-y-4">
              {[
                { name: "Maya R.", desc: "Full-stack product, integrations, automation", score: 94, active: true },
                { name: "Leo M.", desc: "Sales ops, CRM automation, RevOps", score: 88 },
                { name: "Ina S.", desc: "Customer success, QA, process design", score: 83 },
              ].map((c, i) => (
                <div key={i} className={`flex items-center justify-between p-5 rounded-xl border-2 ${c.active ? "border-foreground bg-[hsl(var(--lime))]" : "border-foreground bg-card"}`}>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{c.name}</h4>
                    <p className="text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                  <span className="bg-foreground text-background text-2xl font-black px-4 py-2 rounded-lg">{c.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
