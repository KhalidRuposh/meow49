# Retro Motion Pass — Custom Cursor, Animations, Scroll Effects

All vanilla CSS + React (no new libraries), all gated behind `prefers-reduced-motion` so nothing moves for users who opt out.

## 1. Custom cursor — print registration crosshair
New `src/components/Cursor.jsx`, mounted in `App.jsx`:
- Hides the native cursor on precise pointers only (`@media (pointer: fine)`) — touch devices unaffected
- A small crosshair mark (matches the corner registration marks already in the hero) + a trailing ring that follows with smooth `requestAnimationFrame` lerp — like a print register slowly aligning
- Over links/buttons the ring expands and flips to Swiss red; crosshair rotates 45°; `mix-blend-mode: difference` for the classic invert feel over black blocks
- Text inputs keep normal behavior; falls back to native cursor if JS hasn't loaded

## 2. Retro animations
- **Hero entrance**: the two headline lines slide up from behind overflow-hidden masks (editorial reveal), red square stamps in after, mono meta row types in — one-shot on load, ~0.8s total
- **Marquee ticker**: new `src/components/Ticker.jsx` — a thin bordered strip between hero and "01 Selected Work" with `BRANDING ★ EDITORIAL ★ POSTER ★ PRINT ★ TYPE ★ …` scrolling in Space Mono; seamless CSS loop, `aria-hidden` duplicate. The quintessential retro touch
- **Hover micro-motion**: work figures get a 2px "misprint offset" shift + hard shadow on card hover; arrows already nudge — keep
- **Blinking block cursor** (▮) after "Est. 2019" in hero meta — old terminal blink

## 3. Scroll effects
- **Reveal on scroll**: new `src/components/Reveal.jsx` — IntersectionObserver wrapper adding an ink-in effect (fade + small rise); staggered delays so gallery items appear one after another like pages turning
- **Reading progress bar**: thin red line under the header that fills with `scaleX` as you scroll (rAF-throttled) — reads like a print registration strip
- Applied to: Home sections + work cards, Works grid, case-study figures and meta cells, Blog rows, article headers

## Files touched
- New: `components/Cursor.jsx`, `components/Ticker.jsx`, `components/Reveal.jsx`
- Edit: `index.css` (keyframes + cursor + reduced-motion guards), `App.jsx` (mount cursor/progress), `Header.jsx` (progress bar slot), `Home.jsx` (hero entrance, ticker, reveals), `Works/WorkDetail/Blog/PostDetail.jsx` (reveals)

## Verify
`npm run build` passes → dev server → browser: confirm hero animation, ticker loop, reveal-on-scroll (scroll via Playwright), hover states, and that reduced-motion emulation shows everything static with a normal cursor.