import { defineConfig } from 'astro/config'
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://purpuradevelopment.github.io',
  base: '/purpuradevelopment.github.io/',
  outDir: './dist', // Configuración para que el build se genere en la carpeta 'dist'
  integrations: [tailwind(), react()],
})
