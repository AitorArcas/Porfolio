// Única fuente de verdad para los datos que se repiten por el sitio.
// Cambia algo aquí y se actualiza en el header, el footer y cualquier
// página que lo use — no hay que tocar componentes individuales.

export const SITE = {
  name: 'Aitor Arcas',
  description:
    'Portfolio de Aitor Arcas — técnico de sistemas y desarrollador en formación, con IA aplicada al desarrollo.',
  github: 'https://github.com/AitorArcas',
  linkedin: 'https://www.linkedin.com/in/aitorarcas/',
  email: 'aitorarcasaitorarcas@hotmail.com',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' },
] as const;
