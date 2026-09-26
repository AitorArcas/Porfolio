---
title: "Gestor de tareas con autenticación"
description: "Aplicación full stack para organizar tareas por proyecto, con login de usuarios y una base de datos relacional detrás."
date: 2026-05-10
tags: ["Node.js", "Express", "PostgreSQL"]
repoUrl: "https://github.com/tu-usuario/gestor-tareas"
---

## El problema

Quería practicar un flujo completo de autenticación de usuarios y una API
propia, en lugar de depender siempre de servicios ya hechos.

## Cómo lo resolví

Backend con Express y una base de datos PostgreSQL para guardar usuarios,
proyectos y tareas, con contraseñas cifradas y sesiones mediante JWT.
El frontend consume esa API para mostrar las tareas agrupadas por proyecto
y su estado (pendiente, en curso, terminada).

## Qué aprendí

Lo delicado que es diseñar bien un esquema de base de datos desde el
principio — cambiar las relaciones entre tablas a mitad de proyecto me
costó más tiempo del que esperaba, y me enseñó a pensarlo mejor la próxima
vez.

*(Sustituye este contenido por el proyecto real cuando lo tengas listo —
esto es solo una plantilla de ejemplo.)*
