import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { X, Send } from "lucide-react";

// TODO: Replace with your Kapso WhatsApp number (digits only, e.g. "34612345678")
const WHATSAPP_NUMBER = "12084084168";

const QUICK_REPLIES = [
  { label: "Post a job", message: "Hi Migo, I'd like to post a job" },
  { label: "Hire talent", message: "Hi Migo, I'm looking to hire talent" },
  { label: "Get featured", message: "Hi Migo, I'd like to get featured" },
  { label: "General question", message: "Hi Migo, I have a question" },
];

function getWhatsAppUrl(text: string) {
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-3 py-2">
      {[0, 0.15, 0.3].map((delay, i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay }}
        />
      ))}
    </div>
  );
}

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const panelRef = useRef<HTMLDivElement>(null);

  // Typing indicator on open
  useEffect(() => {
    if (open) {
      setShowTyping(true);
      setShowWelcome(false);
      const t = setTimeout(() => {
        setShowTyping(false);
        setShowWelcome(true);
      }, 1200);
      return () => clearTimeout(t);
    } else {
      setShowTyping(false);
      setShowWelcome(false);
    }
  }, [open]);

  // Click outside to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const handleSend = () => {
    const text = inputValue.trim() || "Hi Migo!";
    window.open(getWhatsAppUrl(text), "_blank", "noopener,noreferrer");
    setInputValue("");
  };

  const handleQuickReply = (message: string) => {
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const now = new Date();
  const timestamp = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[340px] max-h-[520px] sm:w-[360px] bg-background border border-border rounded-lg overflow-hidden flex flex-col shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-card">
              <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-foreground">M</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground leading-tight">Migo AI</p>
                <p className="text-xs text-muted-foreground leading-tight">
                  Typically replies within a few hours
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat body */}
            <div className="flex-1 px-4 py-4 overflow-y-auto bg-background min-h-[180px]">
              {showTyping && <TypingDots />}

              <AnimatePresence>
                {showWelcome && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    {/* Welcome message bubble */}
                    <div className="max-w-[85%]">
                      <div className="bg-card border border-border rounded-lg rounded-tl-sm px-3 py-2.5">
                        <p className="text-sm text-foreground leading-relaxed">
                          Hey! 👋 I'm Migo, your AI recruiting assistant. How can I help you today?
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-1 text-right">{timestamp}</p>
                      </div>
                    </div>

                    {/* Quick replies */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {QUICK_REPLIES.map((qr) => (
                        <button
                          key={qr.label}
                          onClick={() => handleQuickReply(qr.message)}
                          className="px-3 py-1.5 text-xs font-medium text-foreground bg-card border border-border rounded-md hover:bg-muted transition-colors"
                        >
                          {qr.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input area */}
            <div className="px-3 py-2.5 border-t border-border bg-card flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message…"
                className="flex-1 bg-background border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button
                onClick={handleSend}
                className="w-8 h-8 flex items-center justify-center rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center shadow-sm hover:bg-foreground/90 transition-colors"
        whileTap={{ scale: 0.93 }}
        aria-label="Chat with Migo on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-5 h-5" />
            </motion.span>
          ) : (
            <motion.span key="wa" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.15 }}>
              <WhatsAppIcon className="w-5 h-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
