// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://OneWayCabbie.github.io',
    base: '/',
    integrations: [tailwind(), react()],
    vite: {
    server: {
      host: true,
      allowedHosts: ['.serveo.net', 'serveo.net'],
      port: 4321,
    },
  },
});

