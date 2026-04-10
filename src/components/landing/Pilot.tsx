import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// TODO: Replace with your Kapso WhatsApp number (digits only, e.g. "34612345678")
const WHATSAPP_NUMBER = "12084084168";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Migo, I'm interested in the pilot!")}`;

const Pilot = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-6" id="pilot">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">Pilot offer</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Launch with 10 companies and the first hard-to-fill roles.
          </h2>
          <p className="text-muted-foreground">
            Start with WhatsApp outreach, voice-note screening, and a concierge review loop before automating deeper workflows.
          </p>
        </div>

        {submitted ? (
          <div className="flex items-center justify-center">
            <p className="text-lg font-semibold text-foreground">Thanks! Migo will reply with the pilot brief.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
            <label className="block space-y-1">
              <span className="text-sm font-medium text-foreground">Work email</span>
              <Input type="email" name="email" placeholder="founder@company.com" required />
            </label>
            <label className="block space-y-1">
              <span className="text-sm font-medium text-foreground">Hiring need</span>
              <select
                name="need"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option>Software engineer</option>
                <option>Operations or automation hire</option>
                <option>Sales or customer success hire</option>
                <option>Founding GTM hire</option>
              </select>
            </label>
            <Button type="submit" className="w-full rounded-full font-semibold" size="lg">
              Request access
            </Button>
            <p className="text-xs text-muted-foreground">Migo will reply with the pilot brief.</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-medium text-[#25D366] hover:underline pt-1"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Or chat with Migo on WhatsApp
            </a>
          </form>
        )}
      </div>
    </section>
  );
};

export default Pilot;
