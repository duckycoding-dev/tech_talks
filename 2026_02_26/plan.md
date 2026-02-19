# Tech Talk: Astro - Zero JS by Default, Interactive by Choice

**Target Duration:** 45 minutes
**Goal:** Demonstrate how Astro solves modern web performance issues through a "HTML-first" approach, focusing on tangible examples over marketing hype.

---

## 1. Schedule (45 minutes)

| Time | Topic | Description |
| ---: | :--- | :--- |
| **0-5** | **The Problem** | Context: SPA fatigue, hydration costs, and the return to HTML. |
| **5-10** | **Astro 101** | Key concepts: Zero JS, Islands Architecture. |
| **10-30** | **Live Demos** | 5 specific micro-demos covering the core features. |
| **30-35** | **Content Layer** | Type-safe content management (Content Collections). |
| **35-40** | **Real World** | Briefly showing a real blog/site (Lighthouse scores, code structure). |
| **40-45** | **Q&A** | Wrap up and questions. |

---

## 2. The Demos (The Core)

**Rule:** One demo = One concept. No giant monolithic apps.

### Demo 1: The Basics (Filesystem Routing & Isolation)
*   **Goal:** Show where code runs (Server vs Client).
*   **Content:**
    *   Frontmatter (Server-side JS).
    *   Simple HTML output.
    *   `<script>` tag (Client-side JS).
    *   `<style>` tag (Scoped CSS).

### Demo 2: Routing & Navigation
*   **Goal:** "MPA performance with SPA feel."
*   **Content:**
    *   Standard `<a>` links.
    *   `data-astro-prefetch` for instant loading.
    *   View Transitions (via `<ClientRouter />`) for smooth animations between pages.

### Demo 3: Client Islands (Interactive UI)
*   **Goal:** "Hydrate only what's needed."
*   **Content:**
    *   A React Component (e.g., "Mission Control Counter").
    *   Comparison: Rendering static vs `client:visible`.
    *   Show browser network tab: JS enters only when needed.

### Demo 4: Server Islands & Actions (Dynamic & Safe)
*   **Goal:** "Personalized content without blocking."
*   **Content:**
    *   **Server Islands (`server:defer`)**: Load slow content (e.g., "Mission Status") independently so the page shell acts immediately.
    *   **Actions (`astro:actions`)**: Type-safe backend interaction (e.g., "Launch Rocket" form) without setting up API routes manually.

### Demo 5: Content Collections (Type Safety)
*   **Goal:** "Treat content like data."
*   **Content:**
    *   Define a Zod schema for "Space Logs".
    *   Show TS error when data is invalid (in editor).
    *   Render the list of logs.

---

## 3. Abstract

**Title:** Astro: HTML first, JavaScript when strictly necessary

**Summary:**
In recent years, frontend development has shifted heavily towards client-side logic, often at the cost of performance. Astro proposes a different approach: HTML as the primary output, optional/targeted JavaScript, and a clear separation between content and interaction.

In this talk, we'll explore how Astro allows building extremely performant sites by leveraging native browser capabilities, Islands Architecture, and type-safe Content Collections. We will walk through 5 live demos showing exactly how to build a modern, high-performance web application that feels like an SPA but delivers the performance of a static site.
