# 🚀 Project Onboarding: Astro Tech Talk ("Space Ducks")

Start Date: Feb 2026  
Goal: Create an interactive, comprehensive technical demonstration of Astro's core capabilities for a conference talk.  
Theme: **"Space Ducks"** (Dark mode, sci-fi UI, 🦆 emojis).

---

## 🛠 Tech Stack

*   **Core**: Astro 5.1 (Stable Release - Downgraded from v6 Beta due to adapter compatibility).
*   **Adapter**: `@astrojs/node` (Standalone Mode) - Enables SSR features like Server Islands and Actions.
*   **Frameworks**: React, Vue, Svelte, SolidJS (All integrated and co-existing).
*   **Styling**: Vanilla CSS with CSS Variables (No Tailwind). Scoped styles by default, global utility classes where needed.
*   **Routing**: Standard Astro file-based routing + View Transitions (`<ClientRouter />`).

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── demos/              # Demo-specific components
│   │   ├── react-components/
│   │   ├── solid-components/
│   │   ├── svelte-components/
│   │   ├── vue-components/
│   │   ├── PersistentYouTube.astro  DEPRECATED (Replaced by VideoPlayer.astro)
│   │   └── VideoPlayer.astro        # Handles persistent video state across transitions
│   └── shared/
│       └── Navbar.astro    # Uses native Popover API (Zero JS navigation)
├── content/                # Content Collections (Captain's Logs)
├── data/
│   └── planets.js          # Mock data for Routing/Morphing demo
├── layouts/
│   └── RootLayout.astro    # Includes <ClientRouter /> globally
├── pages/
│   ├── demos/
│   │   ├── 1-basics.astro      # Static HTML / Zero JS foundation
│   │   ├── 2-routing/          # View Transitions & Persistence (Planetary Archive)
│   │   ├── 3-islands.astro     # Multi-Framework Islands & Hydration Directives
│   │   ├── 4-server.astro      # Server Islands (Defer) & Actions
│   │   ├── 5-content.astro     # Content Collections (Type-safe Markdown)
│   │   └── 6-prefetch.astro    # Prefetch Strategies (Hover, Tap, Viewport)
│   └── index.astro         # Main Dashboard
└── styles/
    ├── global.css          # CSS Variables (--color-bg, --color-text, etc.)
    └── style-reset.css     # CSS Reset
```

---

## ✅ Completed Features & Demos

### 1. **Routing & View Transitions (`/demos/2-routing`)**
*   **Concept**: A "Planetary Archive" that demonstrates seamless navigation.
*   **Key Features**:
    *   **Morphing**: Hero images (`transition:name`) scale smoothly from list view to detail view.
    *   **Persistence**: A **Video Player** (`VideoPlayer.astro`) that continues playing uninterrupted across page loads.
    *   **Custom Animations**: Stats slide in, text fades in.
*   **Technical Note**: `VideoPlayer.astro` uses `<style is:global>` to target the preserved element (`div[data-astro-transition-persist="video-player"]`) to prevent style loss caused by Astro's scoped CSS hashing changing between pages.

### 2. **Islands Architecture (`/demos/3-islands`)**
*   **Concept**: A control panel showing different hydration strategies.
*   **Key Features**:
    *   **Multi-Framework**: Renders React, Vue, Svelte, and SolidJS components side-by-side.
    *   **Hydration Directives**: 
        *   `client:load`: Vue (Immediate)
        *   `client:idle`: Svelte (When CPU is free)
        *   `client:visible`: Solid (Scroll into view)
        *   `client:only`: React/Svelte (Browser-only APIs)
*   **Fixes Implemented**: 
    *   Resolved React/Solid JSX conflicts in `astro.config.mjs` using `include` patterns.
    *   Standardized "Card" layout across all frameworks.

### 3. **Server Power (`/demos/4-server`)**
*   **Concept**: A mission status dashboard.
*   **Key Features**:
    *   **Server Islands**: Uses `server:defer` to stream slow-loading components (simulated database delay) without blocking the main page load.
    *   **Astro Actions**: Type-safe server-side functions called directly from client forms (no API routes manually configured).

### 4. **Prefetching (`/demos/6-prefetch`)**
*   **Concept**: A speed test for navigation.
*   **Key Features**: Demonstrates `data-astro-prefetch` attributes (`hover`, `tap`, `viewport`, `load`) to pre-load pages before the user clicks.

### 5. **Shared Architecture**
*   **Navbar**: Implemented using the native **HTML Popover API** for a "Zero JS" interactive menu.
*   **RootLayout**: Globally enables `<ClientRouter />` for SPA-like navigation in an MPA.

---

## 🚧 Pending Tasks / Next Steps

1.  **Review `1-basics.astro`**: Confirm it adequately demonstrates the "Zero JS by default" baseline effectively.
2.  **Content Refinement**:
    *   Add actual video/media content to the Persistence demo (currently placeholders).
    *   Expand `5-content` logs if needed for the talk narrative.
3.  **Visual Polish**:
    *   Ensure "Space Ducks" theme is consistent (Check for any default blue/white styles leaking through).
    *   Verify mobile responsiveness for the Navbar and Grid layouts.
4.  **Dry Run**: Walk through the presentation flow to ensure demos connect logically.

---

## 💻 Development Commands

*   **Start Dev Server**: `npm run dev`
*   **Build**: `npm run build` (Builds for Node.js adapter)
*   **Preview**: `npm run preview`
*   **Format Code**: `npm run format` (Biome)

---

## ⚠️ Known Implementation Details vs Standard Docs

1.  **Global Styles for Persistence**: When using `transition:persist`, avoid scoped styles in the component. Use global class selectors or `style is:global` to ensure the element retains styling when moved to a new page context with different scoped hashes.
2.  **JSX Config**: React and SolidJS are configured to only run on specific folders in `astro.config.mjs` to avoid compiler conflicts in `.tsx` files.
