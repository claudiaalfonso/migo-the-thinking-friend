import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { openWhatsAppUrl } from "@/lib/whatsapp";

const WHATSAPP_NUMBER = "12084084168";
const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent("Hi Migo, I'm interested in the pilot!")}&type=phone_number&app_absent=0`;

const Pilot = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 bg-foreground" id="pilot">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <p className="text-sm font-medium text-muted-foreground tracking-wide">Who it&apos;s for</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-background leading-[1.1]">
            Spend less time coordinating. Activate the talent you already have.
          </h2>
          <p className="text-base text-muted-foreground leading-[1.8]">
            Startup recruiters hiring fast. Talent communities with underused candidate pools. Teams tired of fragmented coordination.
          </p>
        </div>

        {submitted ? (
          <div className="flex items-center justify-center">
            <div className="bg-card rounded-xl p-8 text-center space-y-4">
              <img src="/migo-cat.png" alt="Migo" className="w-16 h-16 mx-auto" />
              <p className="text-xl font-bold text-foreground">Thanks! Migo will reply with the pilot brief.</p>
            </div>
          </div>
        ) : (
          <div className="bg-card rounded-xl p-8 space-y-6 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block space-y-2">
                <span className="text-sm font-bold text-foreground">Work email</span>
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="founder@company.com" 
                  required 
                  className="h-12 text-base border-2 border-input rounded-lg"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-bold text-foreground">Hiring need</span>
                <select
                  name="need"
                  className="flex h-12 w-full rounded-lg border-2 border-input bg-background px-4 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option>Software engineer</option>
                  <option>Operations or automation hire</option>
                  <option>Sales or customer success hire</option>
                  <option>Founding GTM hire</option>
                </select>
              </label>
              <Button 
                type="submit" 
                className="w-full h-14 rounded-lg font-bold text-base bg-[hsl(var(--lime))] text-foreground hover:bg-[hsl(78,84%,60%)]" 
                size="lg"
              >
                Request access
              </Button>
            </form>
            <p className="text-sm text-muted-foreground text-center">Migo will reply with the pilot brief.</p>
            <button
              type="button"
              onClick={() => openWhatsAppUrl(WHATSAPP_URL)}
              className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-[#25D366] hover:underline"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Or chat with Migo on WhatsApp
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pilot;
