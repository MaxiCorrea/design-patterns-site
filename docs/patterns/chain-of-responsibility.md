---
title: Chan Of Responsibility
sidebar_position: 15
---

**Chain of Responsibility** permite encadenar pasos independientes que procesan una solicitud en orden, donde cada paso decide continuar o cortar, sin que el emisor conozca quién ejecuta cada parte.

👉 No modela el negocio.

👉 Modela la política de ejecución del negocio.

## ¿Se usa hoy en arquitectura hexagonal?

Sí, pero no en el Domain.

✔ Vive en:
    - application
    - use cases
    - pipelines
    - flows

❌ No vive en:
    - Entidades
    - Value Objects
    - Agregados

En Hexagonal:

    El Chain orquesta reglas del dominio, no las contiene.

## Cómo se implementa hoy (vs GoF)

GoF (clásico)
    - Cada handler conoce al siguiente
    - Lógica + control de flujo mezclados
    - Orientado a OO puro

Hoy (industria real)
    - Chain como pipeline
    - Handlers pequeños y sin lógica de negocio
    - Reglas delegadas al dominio
    - Ensamblado externo (factory / config)

Nombres tipo:
    - Step
    - Filter
    - Middleware

👉 El patrón se usa, pero no se nombra.

## Anti-ejemplo típico
```
if (validateStock(order)) {
    if (checkFraud(order)) {
        if (applyDiscount(order)) {
            confirm(order);
        }
    }
}
```

❌ Flujo rígido

❌ No extensible

❌ Cambiar el orden rompe todo

❌ No es testeable por partes

## Reemplazo (si existe)

No tiene un “reemplazo directo”, pero alternativas según el problema:

| Necesidad               | Mejor opción    |
| ----------------------- | --------------- |
| Solo reglas             | Specification   |
| Algoritmos distintos    | Strategy        |
| Flujo fijo              | Template Method |
| Muchas reglas dinámicas | Rule Engine     |
| Estado complejo         | State Machine   |

👉 Chain se usa cuando el orden importa y puede cambiar.

## Ejemplo (resumido)
Order Processing Chain

 → Stock Policy
 
 → Fraud Policy

 → VIP Discount
 
 → Confirm Order


Cada paso ejecuta o falla

- El dominio decide qué es válido
- El Chain decide cuándo se aplica

👉 Ver implementación completa en GitHub: https://github.com/MaxiCorrea/java-chain-of-responsibility

## Regla de oro
Si necesitás flags para saltear pasos, necesitás otra Chain.

Y otra más:

Si el Chain tiene lógica de negocio, está mal ubicado.

## Frase final

Chain of Responsibility no es un patrón de dominio.
Es una herramienta para diseñar flujos que cambian sin romper el sistema.

## Ver video

[![Chain of responsibility in Java](https://img.youtube.com/vi/hwH0LFyAr2U/0.jpg)](https://www.youtube.com/watch?v=hwH0LFyAr2U)

