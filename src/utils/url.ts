// GitHub Pages publica el sitio en una subcarpeta (tu-usuario.github.io/tu-repo/),
// no en la raíz del dominio. Astro gestiona esto con la opción "base" de
// astro.config.mjs, pero cualquier enlace interno escrito a mano (href="/proyectos")
// se rompería porque ignoraría ese prefijo.
//
// Esta función centraliza el problema: en vez de escribir href="/proyectos" por
// todo el sitio, escribimos href={withBase('/proyectos')}. En local (sin base
// configurado) no cambia nada; en producción añade el prefijo automáticamente.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // p.ej. '/' en local, '/PorfolioDAM/' en producción
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}` || '/';
}
