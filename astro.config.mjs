import { defineConfig } from 'astro/config'
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://purpuradevelopment.github.io',
  base: '/purpuradevelopment.github.io',
  integrations: [tailwind(), react()],
})