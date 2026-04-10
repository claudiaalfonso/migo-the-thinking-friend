

## Copy WhatsApp styles from AIE_C project

Replace the current plain chat mockup in `Demo.tsx` with the realistic WhatsApp dark-theme phone UI from the [AIE Connect](/projects/0f7603b4-f76e-4ea6-b335-e216b3b956c6) project.

### What changes

1. **Rewrite `src/components/landing/Demo.tsx`** — Replace the current flat chat card with the `WhatsAppPhone` component pattern from AIE_C's `HowItWorks.tsx`. This includes:
   - Dark phone frame (`bg-[#111]`, rounded corners, notch)
   - WhatsApp dark header (`bg-[#1f2c34]`) with avatar circle, name "Migo", and "online" / "typing..." status
   - Message bubbles: outgoing `bg-[#005c4b]` (green, rounded-br-sm), incoming `bg-[#1f2c34]` (dark, rounded-bl-sm)
   - Animated typing indicator (three bouncing dots) and user composing indicator
   - Read receipts (double-check marks, blue when read)
   - Timestamps on each message
   - Auto-play conversation on scroll into view with staggered timing
   - Replay button below the phone
   - Bottom input bar styled as WhatsApp (`bg-[#1f2c34]` rounded pill)

2. **Keep the employer scoreboard** on the right side — no changes there.

3. **Conversation content** stays Migo-branded (screening for a product role), just displayed in the new WhatsApp style with the animated reveal.

### Technical details

- Uses `framer-motion` (already installed) for `motion.div` animations, `AnimatePresence`, and `useInView`
- Adapts the `WhatsAppPhone`, `TypingIndicator`, `UserComposingIndicator`, and `ReadReceipt` sub-components inline in `Demo.tsx` (no new files needed)
- Replaces the interactive text input with the auto-playing animated conversation — more visually impressive and requires no user interaction
- Message timing: ~1.4s typing delay for Migo messages, ~0.7s composing delay for user messages
- All references use "Migo" instead of "AIE_C"

