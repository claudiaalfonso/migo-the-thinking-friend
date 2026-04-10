import WhatsAppIcon from "@/components/WhatsAppIcon";

// TODO: Replace with your Kapso WhatsApp number (digits only, e.g. "34612345678")
const WHATSAPP_NUMBER = "REPLACE_ME";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Migo!")}`;

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1da851] shadow-lg flex items-center justify-center transition-colors"
      aria-label="Chat with Migo on WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  );
}
