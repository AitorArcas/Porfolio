---
title: "Asistente conversacional con IA"
description: "Prototipo de chatbot que usa un LLM para responder preguntas frecuentes de una tienda ficticia, con prompts adaptados al contexto del negocio."
date: 2026-02-01
tags: ["Python", "LLMs", "APIs"]
demoUrl: "https://example.com"
---

## El problema

Quería entender de verdad cómo se construye algo útil encima de un LLM,
más allá de escribirle prompts sueltos en un chat.

## Cómo lo resolví

Un pequeño servicio en Python que recibe la pregunta del usuario, la
combina con contexto del catálogo de la tienda (precios, horarios, política
de devoluciones) y se la pasa al modelo con un prompt diseñado para que
responda solo con esa información, evitando que se invente datos.

## Qué aprendí

Que la parte difícil no es "hablar con la IA", es diseñar bien el contexto
que le das y los límites de lo que puede responder. Ahí está el verdadero
trabajo de ingeniería.

*(Sustituye este contenido por el proyecto real cuando lo tengas listo —
esto es solo una plantilla de ejemplo.)*
