---
title: "Asistente de entrenamiento con MCP y LM Studio Bionic"
description: "Conecté el servidor MCP de Intervals.icu a LM Studio Bionic para poder preguntarle en lenguaje natural a un modelo local por mi carga de entrenamiento y mis datos de ciclismo reales."
date: 2026-10-07
tags: ["MCP", "LM Studio Bionic", "Python", "IA aplicada"]
---

## El problema

Tenía todos mis datos de entrenamiento (carga, recuperación, métricas de las
salidas) en Intervals.icu, pero consultarlos significaba entrar a la web,
mirar gráficas y sacar yo mismo las conclusiones o si
queria preguntar a la IA tenia que descargarlos y pasar uno a uno. 
Quería poder simplemente preguntar — "¿llevo una buena carga de entrenamiento?", "¿qué debería hacer
mañana?" — y que un modelo respondiera con mis datos reales delante, no con
generalidades.

## Cómo lo resolví

Usé MCP (Model Context Protocol) para conectar esos dos mundos. En
concreto:

- Configuré el servidor MCP de Intervals.icu con mi API key y mi ID de
  atleta, y lo dejé corriendo como un servidor local en Python.
- Conecté ese servidor a **LM Studio Bionic** (la app de agentes de LM
  Studio para modelos locales, con soporte nativo para MCP), añadiendo la
  ruta del servidor en su configuración.
- Con eso, el modelo local pasa a tener acceso directo a mis datos de
  Intervals.icu como una herramienta más: puede consultarlos en tiempo real
  para responder a lo que le pregunto, en vez de inventarse una respuesta
  genérica.

## Qué aprendí

Que la diferencia entre "hablar con un chatbot generico" y tener un asistente útil
de verdad está en darle acceso a datos y herramientas reales — ahí es donde
entra MCP. También fue mi primera vez montando toda la cadena de principio
a fin: desde levantar un servidor local hasta conectarlo a un cliente MCP,
pasando por entender qué partes de la configuración son del lado del
servidor y cuáles del cliente (Bionic). Es una base que pienso reutilizar
para conectar otras fuentes de datos a modelos locales más adelante.
