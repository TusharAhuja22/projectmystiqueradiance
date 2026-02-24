# 🍯 Mystique Radiance Breweries LLP — Website

A premium, static corporate website built with **Next.js 14 (App Router)** + **Tailwind CSS** + **Framer Motion**.

## ✦ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + Custom CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Playfair Display (serif) + Montserrat (body)
- **Export:** Static (`next build` with `output: 'export'`)

## 📁 Project Structure

```
mystique-radiance/
├── app/
│   ├── layout.tsx              # Root layout with Navbar, Footer, AgeVerification
│   ├── globals.css             # Global styles, CSS variables, utility classes
│   ├── page.tsx                # Homepage (/)
│   ├── about/
│   │   ├── page.tsx            # SEO metadata export
│   │   └── AboutClient.tsx     # Client component with animations
│   ├── brews/
│   │   ├── page.tsx
│   │   └── BrewsClient.tsx
│   ├── tasting-room/
│   │   ├── page.tsx
│   │   └── TastingRoomClient.tsx
│   ├── journal/
│   │   ├── page.tsx
│   │   └── JournalClient.tsx
│   └── contact/
│       ├── page.tsx
│       └── ContactClient.tsx
├── components/
│   ├── Navbar.tsx              # Sticky, scroll-responsive navbar with mobile menu
│   ├── Footer.tsx              # Full footer with links, contact, hours
│   ├── AgeVerification.tsx     # Age gate modal with localStorage persistence
│   ├── ProductCard.tsx         # Glassmorphism card with tasting notes modal
│   └── SectionDivider.tsx      # Decorative gold divider
├── public/
│   └── images/                 # Add your images here
├── tailwind.config.ts
├── next.config.js              # Static export config
├── package.json
└── tsconfig.json
```

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

## 🏗 Build & Deploy

### Static Export (Vercel / Namecheap Hosting)
```bash
npm run build
# Output folder: ./out (ready to deploy)
```

### Deploy to Vercel
1. Push to GitHub
2. Connect repo at vercel.com
3. Vercel auto-detects Next.js — no config needed
4. Add custom domain from Namecheap in Vercel dashboard
5. Update Namecheap DNS → add CNAME record pointing to `cname.vercel-dns.com`

## 🎨 Design System

| Token | Value |
|-------|-------|
| Gold | `#d4af37` |
| Gold Light | `#f0d060` |
| Gold Shimmer | `#f5e088` |
| Mystic Black | `#0a0008` |
| Mystic Purple | `#1a0a2e` |
| Mystic Violet | `#2d0f4e` |

### CSS Utility Classes
- `.btn-gold` — Gold shimmer CTA button
- `.btn-outline-gold` — Outlined gold button
- `.glass-card` — Glassmorphism card with hover glow
- `.text-gold-gradient` — Animated gold shimmer text
- `.honeycomb-overlay` — SVG honeycomb background texture
- `.divider-gold` — Horizontal gold gradient divider
- `.input-mystic` — Styled form input

## 🔧 Customizations Needed

1. **Phone Number:** Replace `+91 9096671114` in Footer + Contact page
2. **Google Maps:** Replace the placeholder div in `TastingRoomClient.tsx` with actual embed:
   ```html
   <iframe
     src="https://maps.google.com/maps?q=YOUR_ADDRESS&output=embed"
     width="100%" height="420" style="border:0;" allowFullScreen loading="lazy"
   />
   ```
3. **Images:** Add photos to `/public/images/` and replace emoji placeholders
4. **Social Links:** Update Instagram/Facebook hrefs
5. **Email/Contact Form:** Integrate with Formspree, EmailJS, or Netlify Forms:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
6. **Favicon:** Add `favicon.ico`, `icon.png` to `/public/`
7. **OG Image:** Add `opengraph-image.jpg` to `/app/`

## 📋 Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, Values, Brand Intro, Product Spotlight, CTA |
| `/about` | Our Story, Craft, Vision |
| `/brews` | Full product collection with tasting note modals |
| `/tasting-room` | Booking, hours, map, experience types |
| `/journal` | 3 editorial articles |
| `/contact` | Contact form + info panel |

## ⚖️ Legal Compliance
- Age verification modal on first visit (localStorage)
- "Drink Responsibly" in footer
- "No sale to persons below legal drinking age" in footer
- Underage users see a blocked page with no content

## 📦 Next Steps
1. `npm install` → `npm run dev` to preview
2. Replace placeholder contact details
3. Add real photography
4. Add favicon + OG image
5. Deploy to Vercel + connect Namecheap domain
