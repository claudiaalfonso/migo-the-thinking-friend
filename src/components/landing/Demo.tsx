import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { RotateCcw, Check, MessageCircle } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

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
      <div className="bg-[#1f2c34] rounded-lg rounded-bl-sm px-3 py-2 flex items-center gap-1">
        <motion.span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} />
        <motion.span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
        <motion.span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
      </div>
    </div>
  );
}

function UserComposingIndicator() {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.15 }} className="flex justify-end">
      <div className="bg-[#005c4b] rounded-lg rounded-br-sm px-3 py-2 flex items-center gap-1">
        <motion.span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} />
        <motion.span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
        <motion.span className="w-1.5 h-1.5 bg-[#8696a0] rounded-full" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
      </div>
    </motion.div>
  );
}

function ReadReceipt({ read }: { read: boolean }) {
  return (
    <span className="inline-flex ml-1">
      <Check className={`w-3 h-3 ${read ? "text-[#53bdeb]" : "text-[#8696a0]"}`} />
      <Check className={`w-3 h-3 -ml-1.5 ${read ? "text-[#53bdeb]" : "text-[#8696a0]"}`} />
    </span>
  );
}

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
    if (isInView && !hasPlayed) {
      setHasPlayed(true);
      const timer = setTimeout(() => playConversation(), 500);
      return () => {
        clearTimeout(timer);
        timeoutIds.current.forEach(clearTimeout);
      };
    }
  }, [isInView, hasPlayed]);

  return (
    <section className="py-20 px-6 bg-muted/50" id="demo" ref={ref}>
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-3 max-w-xl">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">WhatsApp first</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Migo keeps the chat warm, then structures the evidence.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* WhatsApp Phone */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="relative bg-[#111] rounded-[2rem] p-2 shadow-lg w-full max-w-[280px] md:max-w-[320px]" style={{ aspectRatio: "9/19" }}>
                <div className="relative w-full h-full bg-[#0b141a] rounded-[1.5rem] overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="bg-[#1f2c34] px-3 py-2 flex items-center gap-2 flex-shrink-0">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#25D366] flex items-center justify-center">
                      <WhatsAppIcon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-xs md:text-sm font-medium">Migo</p>
                      <p className="text-[#8696a0] text-[10px] md:text-xs">
                        {showTyping ? (
                          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#25D366]">typing...</motion.span>
                        ) : "online"}
                      </p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 px-2 py-3 space-y-1.5 overflow-hidden flex flex-col justify-end">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={visibleMessages.includes(index) ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`max-w-[85%] px-2.5 py-1 rounded-lg text-[10px] md:text-xs leading-relaxed ${
                          message.type === "user" ? "bg-[#005c4b] text-white rounded-br-sm" : "bg-[#1f2c34] text-white rounded-bl-sm"
                        }`}>
                          <span>{message.text}</span>
                          {message.type === "user" && (
                            <span className="inline-flex items-center ml-1.5 text-[8px] md:text-[9px] text-[#8696a0]">
                              <span className="mr-0.5">now</span>
                              <ReadReceipt isRead={isMessageRead(index)} />
                            </span>
                          )}
                          {message.type === "migo" && (
                            <span className="inline-flex items-center ml-1.5 text-[8px] md:text-[9px] text-[#8696a0]">now</span>
                          )}
                        </div>
                      </motion.div>
                    ))}

                    <AnimatePresence>
                      {showTyping && (
                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                          <TypingIndicator />
                        </motion.div>
                      )}
                      {showUserComposing && <UserComposingIndicator />}
                    </AnimatePresence>
                  </div>

                  {/* Input */}
                  <div className="px-2 pb-2 flex-shrink-0">
                    <div className="bg-[#1f2c34] rounded-full px-3 py-1.5 flex items-center">
                      <span className="text-[#8696a0] text-[10px] md:text-xs flex-1">Message</span>
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#111] rounded-full" />
              </div>

              {/* Replay */}
              <motion.button
                onClick={() => playConversation()}
                disabled={isPlaying}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs transition-colors disabled:opacity-50 text-muted-foreground hover:text-foreground"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <RotateCcw className={`w-3 h-3 ${isPlaying ? "animate-spin" : ""}`} />
                <span>Replay</span>
              </motion.button>
            </div>
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
