# MUG Talk about Astro


- [setting up biome](https://astro-tips.dev/tips/biome/)
- [setting up husky](https://typicode.github.io/husky/get-started.html) for running scripts during git commit
  - `npm install --save-dev husky`
  - `npx husky init`
- [setting up lint-staged](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#installation-and-setup)
  - `npm install --save-dev lint-staged`

- `npx astro add react`
- `npx astro add svelte`
- `npx astro add vue`
- `npx astro add solid`


- Fixed astro.config.mjs: Configured the integrations to only run on their specific folders (e.g., React only touches react-components).

- Cleaned tsconfig.json: Removed the global "jsxImportSource": "solid-js" that was added when installing the solid-js package: setting that was forcing React files to use Solid's JSX runtime.

- Added File Pragmas: Explicitly added /** @jsxImportSource ... */ to the top of React and Solid components to ensure they use the correct compiler.