import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { RotateCcw, Check } from "lucide-react";
const heroMessages = [
  { type: "user", text: "Hey, I'm looking for product roles. I've been leading design systems and AI features for the last 4 years." },
  { type: "migo", text: "Love that! You can reply by text or voice note. I'll keep your profile updated and surface relevant roles as they come up." },
  { type: "user", text: "I'm open to remote roles in Europe. Salary from 75k. Can start in 4 weeks." },
  { type: "migo", text: "Perfect, updated! I've matched you to 2 roles that look relevant. Want me to show you the strongest one first?" },
  { type: "user", text: "Sounds good. What is it?" },
  { type: "migo", text: "Senior Product role. Team is moving quickly and you look interview-ready. Want me to move you forward?" },
  { type: "user", text: "Sure thing." },
  { type: "migo", text: "Amazing! Share a few time windows that work for you and I'll take care of the scheduling." },
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

const Hero = () => {
  // Start with all messages visible for instant load
  const [visibleMessages, setVisibleMessages] = useState<number[]>(() => heroMessages.map((_, i) => i));
  const [showTyping, setShowTyping] = useState(false);
  const [showUserComposing, setShowUserComposing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const timeoutIds = useRef<NodeJS.Timeout[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isMessageRead = (index: number) => {
    if (heroMessages[index].type !== "user") return false;
    for (let i = index + 1; i < heroMessages.length; i++) {
      if (heroMessages[i].type === "migo") return visibleMessages.includes(i);
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

    heroMessages.forEach((message, index) => {
      if (message.type === "migo") {
        timeoutIds.current.push(setTimeout(() => setShowTyping(true), delay));
        delay += 1200;
        timeoutIds.current.push(setTimeout(() => {
          setShowTyping(false);
          setVisibleMessages((prev) => [...prev, index]);
        }, delay));
        delay += 600;
      } else {
        timeoutIds.current.push(setTimeout(() => setShowUserComposing(true), delay));
        delay += 600;
        timeoutIds.current.push(setTimeout(() => {
          setShowUserComposing(false);
          setVisibleMessages((prev) => [...prev, index]);
        }, delay));
        delay += 700;
      }

      if (index === heroMessages.length - 1) {
        timeoutIds.current.push(setTimeout(() => setIsPlaying(false), delay));
      }
    });
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [visibleMessages, showTyping, showUserComposing]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutIds.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="pt-32 pb-24 px-6" id="top">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-foreground">
            Hiring is already hard.
            <br className="hidden sm:block" />
            <span className="block mt-2 sm:mt-4">Coordination shouldn&apos;t make it worse.</span>
          </h1>
          <p className="text-base sm:text-lg max-w-xl leading-[1.8] text-muted-foreground">
            Migo is an AI hiring partner that keeps candidate information fresh, matches people to the right roles, and drives the conversation from screening to interview.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="h-14 px-8 rounded-md font-bold text-base bg-[hsl(var(--lime))] text-foreground hover:bg-[hsl(78,84%,60%)]">
              <a href="#pilot">Start the pilot</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 rounded-md font-bold text-base border-2 border-foreground hover:bg-foreground hover:text-background">
              <a href="#demo">See Migo work</a>
            </Button>
          </div>
        </div>

        {/* WhatsApp Chat */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[380px] rounded-xl border-2 border-foreground bg-card overflow-hidden shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b-2 border-foreground bg-card">
              <div className="flex items-center gap-3">
                <img src="/migo-cat.png" alt="Migo" className="w-8 h-8 rounded-full object-cover" />
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
            <div className="px-4 py-4 space-y-2 min-h-[280px] max-h-[340px] overflow-y-auto bg-background">
              <AnimatePresence mode="popLayout">
                {heroMessages.map((message, index) => (
                  visibleMessages.includes(index) && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
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
                  )
                ))}

                {showTyping && (
                  <motion.div key="typing" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                    <TypingIndicator />
                  </motion.div>
                )}
                {showUserComposing && (
                  <motion.div key="user-composing" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                    <UserComposingIndicator />
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 pb-4 bg-background">
              <div className="bg-muted border border-border rounded-lg px-4 py-2.5 flex items-center">
                <span className="text-muted-foreground text-sm">Message</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
