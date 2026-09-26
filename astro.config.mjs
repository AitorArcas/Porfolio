import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Cambia esta URL cuando despliegues el sitio (mejora el SEO y los sitemaps)
export default defineConfig({
  site: 'https://aitorarcas.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
