# Astro: Zero JS by Default
## Presentation Outline — ~40 minutes

**Audience:** Frontend developers familiar with React/Next.js, new to Astro
**Format:** Slides (Google Slides) + live demo (`/demos/*`)
**Tone:** Conversational, lots of "you already know X from Next, here's how Astro does it"

---

## Part 1: What is Astro? (slides, ~8 min)

### Slide 1 — Title
- "Astro: Zero JS by Default"
- Your name, Ducky Coding

### Slide 2 — The Problem
- Modern web ships too much JavaScript
- Average website: ~500 KB JS (often more for SPAs)
- Most content sites don't need all that interactivity
- "Does your marketing page really need a 200 KB React runtime?"

### Slide 3 — Enter Astro
- Created by Fred K. Schott (co-creator of Snowpack) and the Astro core team
- First released 2021, now at v5 (stable, production-ready)
- **Core philosophy: ship zero JavaScript by default, add it only where needed**
- Open source, MIT licensed, growing ecosystem (35k+ GitHub stars)

### Slide 4 — What Astro Is (and Isn't)
- **IS:** A web framework for content-driven websites — blogs, docs, marketing, e-commerce storefronts, portfolios
- **IS:** An MPA (Multi-Page Application) framework at its core
- **IS NOT:** A replacement for React/Next for highly interactive apps (dashboards, Figma, etc.)
- Think: "Next.js for content sites, minus the JS baggage"

### Slide 5 — How It Runs
- Built on **Vite** (you already know Vite from Next.js/CRA alternatives)
- `.astro` files = component format (HTML-first, like JSX but no virtual DOM)
- Template syntax: frontmatter (fenced `---`) for server logic + HTML body
- Everything renders to **static HTML** at build time (or on-demand via server)
- Rendering modes: `static` (default SSG), `server` (SSR), or hybrid (per-page)

### Slide 6 — Astro vs. Next.js Comparison
| | Next.js | Astro |
|---|---|---|
| Default output | React SPA (hydrated) | Static HTML (0 JS) |
| Component format | JSX (React) | `.astro` (HTML-first) + any framework |
| Routing | File-based (`app/` or `pages/`) | File-based (`src/pages/`) |
| Rendering | SSR/SSG/ISR | SSG / SSR / Hybrid |
| Interactivity | Always ships React runtime | Opt-in via Islands |
| Styling | CSS Modules, Tailwind, etc. | Scoped CSS built-in + everything else |
| Content | MDX, file-based | Content Collections (type-safe) |
| Built on | Webpack/Turbopack | Vite |

### Slide 7 — Who Uses Astro?
- Porsche, Google, Microsoft, NordVPN, The Guardian, Trivago
- The Astro docs site itself (Starlight)
- Perfect for: docs sites, blogs, marketing pages, e-commerce storefronts, portfolios, landing pages

> **Transition:** "Let me show you what this looks like in practice."

---

## Part 2: The Basics (slides + demo, ~5 min)

### Slide 8 — Astro File Anatomy
- Show a minimal `.astro` file structure:
  ```
  ---
  // Server-side JavaScript (runs at build/request time)
  const greeting = "Hello";
  ---
  <h1>{greeting}</h1>
  <style>
    h1 { color: blue; }  /* Auto-scoped! */
  </style>
  ```
- Frontmatter = Node.js (access DB, fetch APIs, read files)
- Template = HTML + JSX-like expressions
- `<style>` = auto-scoped per component (like CSS Modules, but zero config)

### Slide 9 — Three Core Principles
1. **HTML-first output** — Server renders to plain HTML, no JS runtime
2. **Scoped CSS** — Each component's styles are isolated via `data-astro-cid-*`
3. **Opt-in interactivity** — JS only when you explicitly add a `<script>` tag

> **DEMO: `/demos/1-basics`** (~2 min)
>
> Walk through the three sections:
> 1. **Server Rendered** — Point out the timestamp, "View Source" to show pure HTML, 0 JS
> 2. **Scoped Styles** — Two components both using `.text` class with different colors. Inspect DOM to show different `data-astro-cid-*` attributes
> 3. **Client Interaction** — The only section with a `<script>` tag. Click "Activate Systems", mention `<script is:inline>` for view transition compatibility

---

## Part 3: Routing & View Transitions (slides + demo, ~5 min)

### Slide 10 — File-Based Routing
- `src/pages/about.astro` → `/about`
- `src/pages/blog/[slug].astro` → `/blog/my-post` (dynamic routes)
- `src/pages/[...slug].astro` → catch-all / 404
- Familiar if you've used Next.js `pages/` directory

### Slide 11 — View Transitions (MPA That Feels Like SPA)
- Astro's `<ClientRouter />` component (in your layout)
- Enables the **View Transitions API** (native browser API, Chrome 111+)
- MPA navigation gets SPA-like animated transitions — no client-side router needed
- `transition:name` attribute for morphing elements between pages (FLIP animations)
- `transition:animate` for built-in presets (`fade`, `slide`, `none`)
- Fallback: graceful degradation in unsupported browsers (instant navigation)

### Slide 12 — Persistent Elements
- `transition:persist` keeps an element alive across navigations
- Use case: video player, audio player, shopping cart widget
- The element isn't re-created — it continues playing/running

> **DEMO: `/demos/2-routing`** (~2 min)
>
> 1. Show the Planetary Archives grid
> 2. Click a planet card — watch the planet visual and name **morph** smoothly to the detail page (point out `transition:name`)
> 3. Navigate back — morph animates in reverse
> 4. Point out the **video player** at the top — it keeps playing across navigations (`transition:persist`)
> 5. "All of this is an MPA. Each click is a full page load, but the View Transitions API makes it feel like an SPA."

---

## Part 4: Islands Architecture (slides + demo, ~7 min)

### Slide 13 — The Islands Concept
- Coined by Katie Sylor-Miller, popularized by Jason Miller (Preact creator)
- **"Islands of interactivity in a sea of static HTML"**
- Traditional SPA: entire page is a JavaScript app
- Islands: page is static HTML, with specific interactive components ("islands") hydrated independently
- Each island loads its own JS independently — the rest of the page is pure HTML

### Slide 14 — Hydration Directives
- `client:load` — Hydrate immediately on page load (highest priority)
- `client:idle` — Hydrate when browser main thread is free (`requestIdleCallback`)
- `client:visible` — Hydrate when component scrolls into viewport (`IntersectionObserver`)
- `client:media="(query)"` — Hydrate only when media query matches
- `client:only="framework"` — Skip SSR entirely, render only on client
- **No directive = zero JS** (server-rendered HTML only)

### Slide 15 — Framework Agnostic
- Same Astro page can contain React, Vue, Svelte, Solid, Preact components
- Each island uses its own framework's runtime (only loaded for that island)
- Import `.jsx`, `.vue`, `.svelte` files naturally — Astro handles the rest
- **You don't have to pick one framework** — use the right tool for each job
- Migrate incrementally: bring your existing React components into Astro

> **DEMO: `/demos/3-islands`** (~3 min)
>
> 1. **Static HTML card** — An Astro `<Counter>` with no directive. Renders as HTML. Click it — nothing happens. No JS shipped.
> 2. **client:load (Vue)** — Hydrates immediately. Counter works right away.
> 3. **client:idle (Svelte)** — Open DevTools Console: notice the "BLOCKING MAIN THREAD (2s)" log. The idle counter doesn't hydrate until the thread frees up.
> 4. **client:media (React)** — Resize below 1000px — counter becomes static. Resize above — it hydrates. (Good for desktop-only widgets.)
> 5. **client:only (Svelte)** — Show it loads from client only (useful for `window`/`localStorage`).
> 6. **Scroll down** for `client:visible` (Solid) — hydrates only when scrolled into view.
> 7. **Key point:** "We just mixed React, Vue, Svelte, and Solid on the same page. Open the Network tab — each framework bundle loads independently."

---

## Part 5: Server Islands & Actions (slides + demo, ~5 min)

### Slide 16 — Server Islands
- New in Astro 5 (released Dec 2024)
- `server:defer` directive on an Astro component
- The page renders immediately with fallback content (placeholder/skeleton)
- The deferred component renders on the server and streams in later
- **Use case:** Personalized content (user avatar, cart count, pricing) that shouldn't block the rest of the page
- The main page can be aggressively cached (CDN), while deferred islands are always fresh
- Think: React Server Components, but simpler and framework-agnostic

### Slide 17 — Astro Actions
- Type-safe server functions (like Next.js Server Actions)
- Defined in `src/actions/index.ts` with `defineAction()`
- Input validated with **Zod** (same Zod used for Content Collections)
- Can be called from HTML forms (`method="POST" action={actions.myAction}`) or from client JS
- `Astro.getActionResult()` to read the result on the server after form submission
- Zero-JS form handling: works without any client-side JavaScript

> **DEMO: `/demos/4-server`** (~2 min)
>
> 1. **Server Island** — Page loads instantly with "Scanning systems..." fallback. After ~2 seconds, the mission status streams in. "The main page was served immediately; the slow component didn't block it."
> 2. **Astro Action** — Type "1234" in the launch code → submit → success message. Type anything else → error. "This is a full form POST, validated server-side with Zod, no API route needed."

---

## Part 6: Content Collections (slides + demo, ~7 min)

### Slide 18 — What Are Content Collections?
- Astro's built-in system for managing structured content (Markdown, MDX, JSON, YAML)
- Defined in `src/content.config.ts`
- Each collection has a **loader** (where data comes from) and a **schema** (what shape it has)
- Loaders: `glob()` for local files, `file()` for single JSON/YAML, or custom loaders for CMSes/APIs

### Slide 19 — Type-Safe Schemas with Zod
- Show the ships schema from the demo:
  ```typescript
  schema: z.object({
    name: z.string(),
    class: z.enum(['Explorer', 'Warship', 'Freighter', 'Science', 'Colony']),
    status: z.enum(['Active', 'Decommissioned', 'Missing', 'Under Construction']),
    crew: z.number().int().positive(),
    commissioned: z.coerce.date(),
    armament: z.array(z.string()).default([]),
    homePort: z.string().optional(),
    captain: z.string().default('Unassigned'),
  })
  ```
- **7 Zod patterns** in one schema: `.string()`, `.enum()`, `.number().int().positive()`, `.coerce.date()`, `.array().default()`, `.optional()`, `.default()`
- **Build-time validation:** If frontmatter doesn't match the schema, the build fails with a clear error
- **Full TypeScript:** `CollectionEntry<'ships'>` gives you autocomplete everywhere

### Slide 20 — Querying Collections
- `getCollection('ships')` — returns all entries (filterable in JS)
- `getEntry('ships', 'quackstar')` — returns a single entry by ID
- `render(entry)` — renders the Markdown body to HTML
- Content lives outside `src/pages/` — you decide how to display it
- Compare to Next.js: like `getStaticProps` + MDX, but with built-in validation

### Slide 21 — Remote/Live Collections (Mention)
- Content Layer API (Astro 5) supports custom loaders for any data source
- Community loaders exist for: Contentful, Sanity, Notion, Storyblok, WordPress, etc.
- Experimental: `defineLiveCollection()` for real-time data (queries at runtime, not build time)
- "Your schema stays the same whether content is local Markdown or a remote CMS"

> **DEMO: `/demos/5-content`** (~3 min)
>
> 1. **Ship Registry** — 16 ships in a CSS scroll-snap carousel (zero JS!)
>    - Point out the modern CSS: `scroll-snap`, `::scroll-button()`, `::scroll-marker()` (Chrome 135+)
>    - Scroll-driven animations for scale/opacity effects
> 2. **Filtering** — Click filter pills (Class: Explorer, Status: Active, etc.)
>    - "These are plain `<a>` tags with query params. The server re-renders with filtered data. Zero JavaScript."
> 3. **Detail page** — Click a ship card → detail page with full data + rendered Markdown body
>    - Point out `transition:name` morphing from card to detail
> 4. **Break the schema** — Open `src/content/ships/quackstar.md`, change `crew: 120` to `crew: "many"`. Show the Zod validation error in the terminal.
>    - "This is the power of Content Collections: your content is type-checked at build time."

---

## Part 7: Prefetching (slides + demo, ~3 min)

### Slide 22 — Prefetch Strategies
- Astro can prefetch links before the user clicks them
- `data-astro-prefetch="hover"` — prefetch on mouse hover (default)
- `data-astro-prefetch="tap"` — prefetch on mousedown/touchstart (mobile-friendly)
- `data-astro-prefetch="load"` — prefetch immediately when page loads (aggressive)
- `data-astro-prefetch="viewport"` — prefetch when link scrolls into view
- External links are never prefetched
- Configurable globally in `astro.config.mjs`

> **DEMO: `/demos/6-prefetch`** (~1 min)
>
> 1. Open DevTools Network tab
> 2. Hover over "Hover" link — watch the prefetch appear in Network
> 3. Scroll down to "Viewport" — watch it prefetch as it enters the viewport
> 4. "Combined with View Transitions, this makes navigation feel instant"

---

## Part 8: Wrap-Up & When to Use Astro (slides, ~3 min)

### Slide 23 — The Astro Mental Model (Recap)
1. **HTML-first** — Everything is static HTML unless you opt in to JS
2. **Islands** — Interactive components hydrate independently, with fine-grained control
3. **Framework agnostic** — Use React, Vue, Svelte, Solid, or none at all
4. **Content-first** — Built-in Content Collections with type-safe schemas
5. **Performance by default** — Zero JS baseline, prefetching, view transitions

### Slide 24 — When to Choose Astro
**Great fit:**
- Documentation sites (see: Starlight)
- Blogs and content sites
- Marketing / landing pages
- E-commerce storefronts (product pages + a few interactive islands)
- Portfolios
- Any content-heavy site where performance matters

**Probably not:**
- Highly interactive apps (dashboards, real-time collaboration)
- Apps where every component needs client-side state (use Next/Remix/SvelteKit)

### Slide 25 — Getting Started
- `npm create astro@latest` — interactive CLI wizard
- `npx astro add react` — add any framework in one command
- Docs: `docs.astro.build` (built with Astro's Starlight)
- Templates: `astro.new`

### Slide 26 — Q&A
- Thank you!
- Links: Astro docs, your demo repo, Ducky Coding socials

---

## Timing Guide

| Section | Topic | Minutes | Cumulative |
|---------|-------|---------|------------|
| Part 1 | What is Astro? (slides) | 8 | 8 |
| Part 2 | The Basics (slides + demo) | 5 | 13 |
| Part 3 | Routing & View Transitions (slides + demo) | 5 | 18 |
| Part 4 | Islands Architecture (slides + demo) | 7 | 25 |
| Part 5 | Server Islands & Actions (slides + demo) | 5 | 30 |
| Part 6 | Content Collections (slides + demo) | 7 | 37 |
| Part 7 | Prefetching (slides + demo) | 3 | 40 |
| Part 8 | Wrap-Up & Q&A | 3 | 43 |
| **Total** | | | **~40-43 min** |

---

## Demo Flow Cheat Sheet

Keep the demo app running at `localhost:4321`. Navigate in this order:

```
/ (home)
  → /demos/1-basics        (Part 2: HTML-first, scoped CSS, opt-in JS)
  → /demos/2-routing        (Part 3: View Transitions, transition:name, persistent video)
  → /demos/3-islands        (Part 4: All hydration directives, multi-framework)
  → /demos/4-server         (Part 5: server:defer fallback, Astro Actions form)
  → /demos/5-content        (Part 6: Ship Registry, filtering, detail pages, break Zod)
  → /demos/6-prefetch       (Part 7: Network tab, hover/tap/load/viewport)
```

---

## Speaker Notes & Tips

- **Before the talk:** Have the demo running, DevTools open (Network + Elements tabs), and `src/content/ships/quackstar.md` open in your editor for the Zod break demo.
- **React/Next bridge:** Throughout the talk, make comparisons: "In Next.js you'd do X, in Astro you do Y." This helps the audience map concepts.
- **View Source is your friend:** For demos 1 and 2, viewing page source is a powerful way to show "zero JS."
- **Network tab:** For demos 3 (island bundles loading at different times) and 7 (prefetch requests).
- **Don't rush the Islands demo:** This is the "aha moment" for most React developers. Take time to show the console blocking + idle hydration, and the multi-framework aspect.
- **Content Collections Zod break:** This is a crowd-pleaser. Have `crew: "many"` ready to paste, and show the clear error message Astro gives you.
