# CLAUDE.md — The Sassy Aesthetician

## Project Overview

Landing page for **The Sassy Aesthetician**, a beauty/aesthetician brand offering laser hair removal, skin treatments, and microneedling. The brand identity is Y2K kawaii maximalist — pastel holographic gradients, bubbly typography, and a chibi mascot character integrated throughout the site.

Built with **Next.js** (via v0), deployed on **Vercel**.

Live: https://v0-sassy-aesthetician-landing-page.vercel.app/

## Brand Identity

### Vibe
Y2K kawaii meets professional beauty. Playful, bold, personality-driven — but polished and navigable. The site should feel like the logo came to life as a full experience. Think Starface's visual energy with Vacation Inc / Glossier's layout sophistication and Neopets' character-driven page integration.

### Reference Sites
- **Starface** (starface.world) — colors, menu style, playful typography
- **Vacation Inc** (vacation.inc) — overall layout structure and content flow
- **Glossier** (glossier.com) — layout structure, clean spacing
- **Sugarpill** (sugarpill.com) — pastel gradient treatment
- **Neopets** (neopets.com) — character integration with page layout, characters peeking into sections from edges, wavy organic section dividers

### Color Palette
Pastel holographic base — soft gradients shifting between:
- **Lavender** (purple tones)
- **Baby pink**
- **Mint green**
- **Soft cyan**

Accent colors:
- **White** — clean space, card backgrounds
- **Dark charcoal** — text contrast, footer background (pulled from the chibi's outfit)
- **Mint/green** — secondary pop color for buttons and hover states (from the logo's 3D text shadow)

The holographic effect is achieved through animated multi-stop CSS gradients (pink → lavender → cyan → mint → pink loop) with subtle hue-rotate or color-shift on scroll. The goal is to genuinely translate the holographic shimmer from the logo into the web experience.

### Typography
- **Display / Headlines:** Bubbly, rounded, retro — echoing the logo's script style. Candidates: Baloo 2, Boogaloo, or similar rounded display fonts.
- **Body text:** Clean rounded sans-serif — Nunito or Quicksand. Legible but soft.
- **Nav items and CTAs:** All caps
- **Body copy:** Mixed case

### Border Radius & Shape Language
Everything is heavily rounded. Pill-shaped buttons, rounded cards, rounded image frames. No sharp corners anywhere. Soft drop shadows, no hard edges.

## Page Structure

### Navigation / Header
- Sticky top nav, clean and minimal (Starface-inspired)
- Logo with mascot character (left) + text logo
- Pill-shaped nav links: SERVICES, ABOUT, REVIEWS, BOOK NOW
- Soft hover states with gradient color shifts
- Chibi character in nav at small scale (~40-50px)

### Hero Section
- Full-width holographic gradient background (currently a static image — will be replaced with AI-generated animated video background)
- Separated hero assets: background layer, "The Sassy" text, "Aesthetician" text, chibi character — each as independent layers for parallax/animation potential
- Subheadline: "Where Y2K kawaii meets professional beauty..."
- Pill-shaped CTA: "Book Your Glow-Up"
- Scattered decorative sticker elements (hearts, sparkles, smiley faces) with subtle drift animation

### Services Section
- Three cards: Laser Hair Removal, Skin Treatments, Microneedling
- Each card has a pastel gradient background (different hue per card)
- Icons or small illustrations per service
- Hover effect: card lifts, gradient shifts
- Chibi character peeks in from the right edge (Neopets-style edge-peek, not centered)

### About Section
- Split layout: photo/logo on one side, personality-driven copy on the other
- Holographic border/frame around the image
- Stats row: 5+ Years Experience, 1000+ Happy Clients, 100% Sass Guaranteed
- Small decorative sticker elements (2-3 max) placed like scrapbook stickers
- Floating sparkle particles on softer single-tone pastel background

### Testimonials Section
- Horizontal scroll carousel with rounded cards
- Pastel card backgrounds
- Custom heart or sparkle icons instead of default star ratings
- Clean, minimal (Glossier approach)

### Booking / CTA Section
- Saturated holographic gradient background
- Large headline: "Ready to Glow?"
- Two CTAs: "Book Now" (primary) + "DM on Instagram" (secondary)
- Chibi character at medium scale in inviting pose, gesturing toward booking button
- Sticker-style decorative elements (light)

### Footer
- Dark charcoal background for contrast
- Logo, nav links, social links (pastel pill-style icons)
- Small chibi character waving goodbye, peeking up from bottom edge
- Copyright: "Stay sassy."

## Section Dividers
Use **wavy SVG dividers** between every major section instead of hard lines (Neopets-inspired). Each divider transitions the gradient hue between sections:
- Hero → Services: pink-to-lavender wave
- Services → About: lavender-to-mint wave
- About → Testimonials: mint-to-pink wave
- Testimonials → Booking: pink-to-lavender wave

This makes the page feel like one continuous flowing environment.

## Chibi Mascot Character Rules

The character appears in **exactly 4 places** (no more, to avoid fatigue):

1. **Navigation** (small, ~40-50px) — brand mark in the header
2. **Hero** (large) — main introduction, placed beside headline text
3. **Services section** (medium) — peeking in from the right edge, leaning in
4. **Booking / CTA section** (medium) — gesturing toward the booking button

Each appearance should feel like she's **interacting with the layout** — leaning on things, peeking around corners, gesturing at content. Not just floating on top.

**Footer** has a small wave-goodbye version as a sign-off.

On mobile, the fixed/peeking character instances simplify or hide to keep the layout clean.

## Animations & Micro-interactions

- **Holographic background:** Slow ambient CSS gradient color animation (the hero background will eventually be an AI-generated video loop)
- **Sticker elements:** Subtle float/drift with parallax on scroll
- **Buttons:** Hover glow effect, gradient color shift
- **Cards:** Lift on hover with soft shadow increase
- **Section transitions:** Gradient hue shifts as user scrolls through wavy dividers
- **Optional fun toggle:** Sparkle cursor trail

Keep all animations subtle and smooth. The brand is playful but the UX should never feel chaotic or distracting.

## Services Offered

1. **Laser Hair Removal** — gentle, effective laser treatments
2. **Skin Treatments** — customized facials, peels, glow treatments
3. **Microneedling** — collagen stimulation, minimize imperfections

## Booking Flow

- **Primary:** Fresha (free booking platform for beauty/wellness)
- **Secondary:** Instagram DMs
- Both CTAs should be prominent in the booking section and accessible from the nav

## Development Notes

- Hero assets are being separated into individual layers (background, text elements, character) for independent animation/parallax control
- The holographic background in the hero will be replaced with an AI-generated animated video (looping pastel gradient shimmer)
- All images are currently hosted on Vercel Blob storage
- The same chibi character PNG is reused across sections — consider creating variant poses/crops for the peek and gesture placements
- Mobile-first responsive: sticker elements reduce on mobile, peeking character instances hide or simplify, cards stack vertically

## Code Style

- React / Next.js components
- Tailwind CSS for styling
- Keep components modular — each section should be its own component
- Use CSS custom properties for the brand palette so holographic colors are consistent and easy to adjust
- SVG for wavy section dividers (inline or as components)
- Framer Motion or CSS animations for micro-interactions