# Implementation Tracker: 1-basics + Ship Registry

Progress tracker for completing demo pages 1 and 5 of the Astro tech talk project.

---

## Step 1: Feature 1 — Improve `1-basics.astro`

Split the page into 3 sections, each in a standalone Astro component demonstrating one core concept.

- [x] Create `src/components/demos/basics/ServerRendered.astro` — HTML-first / zero JS
- [x] Create `src/components/demos/basics/ScopedStyles.astro` — scoped CSS with `data-astro-cid-*`
- [x] Create `src/components/demos/basics/ClientInteraction.astro` — opt-in `<script>` tag
- [x] Rewrite `src/pages/demos/1-basics.astro` — 3 labeled sections using the components above

---

## Step 2: Feature 2A — Ships Content Collection Schema + Entries

Replace the `logs` collection with a `ships` collection showcasing 7 Zod patterns.

- [x] Modify `src/content.config.ts` — define `ships` collection with enum, number, date, array, optional, default
- [x] Delete `src/content/logs/` directory
- [x] Create `src/content/ships/quackstar.md` — Explorer, Active
- [x] Create `src/content/ships/iron-feather.md` — Warship, Active
- [x] Create `src/content/ships/the-migrator.md` — Freighter, Active (no armament, no homePort)
- [x] Create `src/content/ships/bill-nye.md` — Science, Decommissioned
- [x] Create `src/content/ships/golden-egg.md` — Colony, Under Construction (default captain)
- [x] Create `src/content/ships/phantom-wing.md` — Warship, Missing (no homePort)

---

## Step 3: Feature 2B — Content Demo Components

All pure Astro components in `src/components/demos/content/`.

- [x] Create `ShipCard.astro` — partial data card with status badge, links to detail page
- [x] Create `ShipCarousel.astro` — 3D CSS carousel with perspective transforms, query param navigation
- [x] Create `FilterBar.astro` — `<a>` tag pills for class/status filtering via URL query params
- [x] Create `ShipDetail.astro` — full detail view with stats grid, armament pills, rendered markdown

---

## Step 4: Feature 2C — Ship Registry Pages

- [x] Move `src/pages/demos/5-content.astro` → `src/pages/demos/5-content/index.astro` — carousel + filters + getCollection
- [x] Create `src/pages/demos/5-content/[id].astro` — detail page with getEntry + render

---

## Step 5: Polish

- [x] Update `src/pages/index.astro` — card 5 description to match Ship Registry
- [x] Update `src/components/shared/Navbar.astro` — nav link label (optional)

---

## Verification Checklist

- [ ] `/demos/1-basics` — 3 sections render, button works, view source shows zero JS in sections 1 & 2
- [ ] `/demos/5-content` — carousel renders with 6 ships
- [ ] Filter pills — URL updates, carousel shows filtered ships
- [ ] Prev/Next — carousel rotates via query param
- [ ] Ship card click — detail page renders with full data + markdown body
- [ ] Browser back — view transition morphing works
- [ ] Break a ship's `crew` field — Zod validation error appears
- [ ] `npm run build` — no build errors
