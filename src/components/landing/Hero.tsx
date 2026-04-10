import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";

// TODO: Replace with your Kapso WhatsApp number (digits only, e.g. "34612345678")
const WHATSAPP_NUMBER = "12084084168";
const WHATSAPP_URL = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent("Hi Migo, I'd like to learn more!")}&type=phone_number&app_absent=0`;

const Hero = () => (
  <section className="pt-28 pb-20 px-6" id="top">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
          Migo screens candidates before your calendar gets wrecked.
        </h1>
        <p className="text-lg text-muted-foreground max-w-lg">
          A WhatsApp and voice agent that interviews candidates, checks signal, and hands employers a ranked shortlist with receipts.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild size="lg" className="rounded-full font-semibold">
            <a href="#pilot">Start the pilot</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full font-semibold">
            <a href="#demo">See Migo work</a>
          </Button>
          <Button asChild size="lg" className="rounded-full font-semibold bg-[#25D366] hover:bg-[#1da851] text-white">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <WhatsAppIcon className="w-5 h-5" />
              Chat with Migo
            </a>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm aspect-square rounded-3xl bg-muted flex items-center justify-center border border-border">
          <span className="text-6xl font-extrabold text-muted-foreground/30 select-none">M</span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
