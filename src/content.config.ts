import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada proyecto es un archivo .md en src/content/proyectos/.
// Añadir un proyecto nuevo en el futuro = crear un archivo ahí, con este
// mismo frontmatter. Nada de tocar componentes ni páginas.
const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // resumen corto para las tarjetas del listado
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
  }),
});

export const collections = { proyectos };
