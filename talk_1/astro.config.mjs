// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

import solidJs from '@astrojs/solid-js';

import vue from '@astrojs/vue';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    react({
      include: ['**/react-components/**'],
    }),
    solidJs({
      include: ['**/solid-components/**'],
    }),
    vue(),
    svelte(),
  ],
  devToolbar: {
    enabled: false,
  },
});
