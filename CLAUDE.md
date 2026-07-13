@AGENTS.md

# Abans High-End Phones — "Go Premium, Pay Easy" Campaign

## What this project is

A single Next.js (App Router) landing page for Abans that promotes the "High-End Campaign": premium smartphones paired with the **Tiken Tika Pay** easy-installment plan. Goal: convert "I want a premium smartphone" into "I can buy it easily from Abans."

Stack: Next.js 16 (App Router), React 19, Tailwind CSS v4 (CSS-first config, no `tailwind.config.js` — theme tokens live in `app/globals.css` under `@theme inline`). No animation library is installed; scroll effects are done with a small IntersectionObserver-based `Reveal` client component (`components/Reveal.tsx`) to keep the bundle light.

## Design tokens

- Primary (brand): `#80246D`
- Ink (headings/body): `#343434`
- Muted (secondary text): `#555555`
- Font: Raleway (loaded via `next/font/google` in `app/layout.tsx`, exposed as `--font-raleway`, wired as the default sans in `app/globals.css`)

Keep all color/font usage referencing the Tailwind tokens (`bg-primary`, `text-ink`, `text-muted`, `font-sans`) defined in `app/globals.css` rather than hard-coding hex values in components, so the palette can be adjusted from one place.

## Content structure (`app/page.tsx`)

1. **Hero** (`components/Hero.tsx`) — uses `public/images/hero.jpeg`, campaign badge + "Go Premium, Pay Easy" headline.
2. **Easy Payments explainer** (`components/EasyPayments.tsx`) — how Tiken Tika Pay works (3-4 steps).
3. **Product showcase** (`components/ProductsSection.tsx` + `ProductRow.tsx`) — one row per model: device art, specs, tenure selector, live monthly instalment, full price. Data lives in `lib/products.ts`.
4. **Why Abans** trust section, **final CTA**, **footer**.

## Product data (`lib/products.ts`)

Sourced from the spec sheet provided for this campaign (screenshot, 2026-07-06). Known gaps to resolve with the business team before this goes live:

- **Itel Super 26 Ultra** — earlier confirmed (2026-07-06) as not part of the lineup and removed; reinstated (2026-07-13) as an 11th device with real specs/photos/colours supplied directly by the business team. `ProductRow.tsx` still supports a `comingSoon` product flag generically, but nothing currently uses it.
- **Oppo Reno 16F** — price is "TBA" and confirmed to stay that way for now. Rendered with a "Price announcing soon" state; EMI calculator is disabled until a real price lands.
- All 11 devices from the spec sheet plus Itel are shown in the showcase, including **Vivo X300 Pro** and **Oppo Reno 15F** — both flagged `featured: true` in `lib/products.ts`. The showcase order follows the array order in `lib/products.ts`, which mirrors the confirmed device list order.
- **Special Price / Down Payment / Monthly Instalment** columns were empty in the source sheet for every model. The EMI calculator therefore computes an **indicative, 0%-interest** monthly figure (`(price − down payment) / tenure`) with a selectable down-payment percentage (0/10/20/30%) and tenure (3/6/9/12/18/24 months). This is clearly labeled "indicative" in the UI. **Do not treat this as real bank/finance-partner terms** — swap in actual APR/tenure rules from the business team once available (see `calcInstalment` in `lib/products.ts`).

## Product imagery

Real front/back photos have been supplied for all 11 devices, at `public/images/products/{n}/front.png` + `back.png` (numbered 1–11, matching array order in `lib/products.ts`, not slugs). Each `Product.images` entry points at its pair. `components/DeviceShowcase.tsx` crossfades between the two frames while the card is hovered; if a future product is added without an `images` array, it falls back to the placeholder frames baked into that component.

## Working notes

- Root of the repo (not `my-app/`) is the active project — `public/images/hero.jpeg` and the real `package.json` live at the root. `my-app/` appears to be a leftover scaffold duplicate; leave it alone unless told otherwise.
- Tailwind v4: don't add a `tailwind.config.js`. Add tokens via `@theme inline` in `globals.css`.
