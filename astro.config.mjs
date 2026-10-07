import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages sirve el repo "PorfolioDAM" bajo esa subcarpeta, no en la
// raíz del dominio. process.env.GITHUB_ACTIONS solo existe cuando el build
// corre en GitHub Actions, así que en local (npm run dev / npm run build)
// el sitio sigue viviendo en "/", sin cambios.
export default defineConfig({
  site: 'https://aitorarcas.github.io',
  base: process.env.GITHUB_ACTIONS ? '/PorfolioDAM' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
