import { defineConfig } from 'vite';
import astro from '@astrojs/vite-plugin-astro';

export default defineConfig({
  plugins: [astro()],
  server: {
    host: true, // allows external connections
    allowedHosts: ['*'], // allow any subdomain from serveo.net
    port: 4321,
  },
});
