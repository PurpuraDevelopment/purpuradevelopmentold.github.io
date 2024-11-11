import { defineConfig } from 'astro/config'
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://purpuradevelopment.github.io',
  base: '/purpuradevelopment.github.io',
  integrations: [react()],
})