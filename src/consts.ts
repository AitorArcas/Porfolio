// Única fuente de verdad para los datos que se repiten por el sitio.
// Cambia algo aquí y se actualiza en el header, el footer y cualquier
// página que lo use — no hay que tocar componentes individuales.

export const SITE = {
  name: 'Aitor Arcas',
  role: 'Desarrollador en formación (DAM)',
  description:
    'Portfolio de Aitor Arcas — estudiante de DAM, desarrollo full stack y programación asistida por IA.',
  // TODO Aitor: sustituye por tus URLs reales cuando las tengas a mano
  github: 'https://github.com/tu-usuario',
  linkedin: 'https://linkedin.com/in/tu-usuario',
  email: 'tucorreo@ejemplo.com',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' },
] as const;
