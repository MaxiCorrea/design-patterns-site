---
title: Introducción
sidebar_position: 1
---

## ¿Qué es este sitio?

Este sitio es una **colección de patrones de diseño**, implementados en **Java**, con foco en:

- Arquitectura Hexagonal (Ports & Adapters)
- Código limpio y testeable
- Casos de uso reales
- Decisiones de diseño explícitas

No es una recopilación académica ni un resumen del GoF.
Es una **mirada moderna**, basada en cómo se construyen sistemas hoy.

---

## Filosofía

### ❌ Lo que NO vas a encontrar
- Ejemplos triviales tipo `Animal`, `Car` o `Shape`
- Patrones aplicados “porque sí”
- Código acoplado a frameworks
- Uso dogmático de GoF

### ✅ Lo que SÍ vas a encontrar
- Contexto real de negocio
- Patrones como **herramientas**, no como objetivos
- Alternativas modernas a patrones clásicos
- Código Java orientado a producción
- Tests que validan comportamiento, no implementación

---

## ¿Por qué otra colección de patrones?

Porque el contexto cambió.

Muchos patrones GoF:
- Hoy se usan menos
- Se usan diferente
- Fueron reemplazados por enfoques más simples
- O viven encapsulados dentro de frameworks

Este sitio responde preguntas como:
- ¿Tiene sentido este patrón en arquitectura hexagonal?
- ¿Lo usaría hoy en un sistema nuevo?
- ¿Qué usaría en su lugar?
- ¿Cómo lo implementa un Senior / Staff Engineer?

---

## Stack y enfoque técnico

- **Lenguaje**: Java
- **Build**: Maven
- **Arquitectura**: Hexagonal / Clean
- **Testing**: Unit + Behavior-focused tests
- **Frameworks**: solo cuando aportan valor
- **Principios**:
  - SOLID
  - Clean Code
  - Explicit Design
  - Low Coupling / High Cohesion

El framework **no define el diseño**.  
El diseño define cómo se usa el framework.

---

## Estructura del contenido

Cada patrón sigue una estructura consistente:

1. Contexto y problema real
2. Solución clásica (cuando aplica)
3. Implementación moderna en Java
4. Encaje (o no) en arquitectura hexagonal
5. Trade-offs reales
6. Alternativas actuales
7. Código completo en GitHub
8. Tests explicativos

---

## Repositorios y código

Cada patrón tiene su propio repositorio con:
- Código productivo
- Tests
- README técnico
- Enlaces cruzados con esta documentación

👉 El sitio explica el **por qué**  
👉 El repositorio muestra el **cómo**

---

## Público objetivo

Este contenido está pensado para:
- Developers SSR que quieren subir de nivel
- Seniors que quieren afinar criterio
- Staff / Tech Leads que toman decisiones de diseño
- Entrevistas técnicas y discusión arquitectónica

Si buscás “recetas rápidas”, este sitio no es para vos.  
Si buscás **criterio**, estás en el lugar correcto.

---

## Cómo usar este sitio

No lo leas en orden.

- Entrá por el patrón que te genere duda
- Compará con tu experiencia
- Cuestioná la implementación
- Adaptá las ideas a tu contexto

Los patrones no son reglas.  
Son **decisiones informadas**.

---

## Sobre el autor

Soy desarrollador Java, con experiencia en sistemas reales,
donde la complejidad no está en el patrón,
sino en **saber cuándo NO usarlo**.

Este sitio es una forma de compartir ese criterio.
