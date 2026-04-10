

## Add Click-to-WhatsApp Button

### What changes

1. **Hero section** (`src/components/landing/Hero.tsx`) — Add a prominent "Chat with Migo on WhatsApp" button with the WhatsApp icon. Links to `https://wa.me/{PHONE_NUMBER}` (opens in new tab).

2. **Pilot section** (`src/components/landing/Pilot.tsx`) — Add a secondary WhatsApp CTA alongside or below the existing form.

3. **Floating WhatsApp button** (optional) — A small fixed-position WhatsApp icon in the bottom-right corner, visible on all pages, that links to the same `wa.me` URL.

### What you need to provide

- Your Kapso WhatsApp phone number (international format, digits only, e.g. `34612345678`)
- Optional: a pre-filled greeting message (e.g. "Hi Migo, I'd like to learn more")

### Technical details

- No API keys or backend needed — just an `<a href="https://wa.me/...">` link
- WhatsApp icon SVG already exists in `Demo.tsx`, will reuse it
- Button styled with green WhatsApp brand color (`#25D366`)
- `target="_blank"` and `rel="noopener noreferrer"` for security

