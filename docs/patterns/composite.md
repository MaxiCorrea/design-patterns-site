---
title: Composite
sidebar_position: 11
---

**Composite** modela una estructura jerárquica donde un objeto individual y un conjunto de objetos del mismo tipo se tratan de forma uniforme, encapsulando el recorrido y la operación dentro del propio modelo.

👉 No es “una lista de cosas”,

👉 es una unidad de negocio que puede estar compuesta por otras unidades iguales.

## ¿Se usa hoy en arquitectura hexagonal?

Sí, se usa

pero solo cuando la composición es parte del dominio.

❌ No se usa para:

    - Agrupar DTOs
    - Agrupar adapters
    - Orquestar pasos de un caso de uso
    - Reemplazar un for

✅ Sí se usa cuando:

    - Hay jerarquías reales del dominio
    - Las reglas se aplican igual a un elemento y a un grupo
    - La estructura tiene invariantes propias

    
## Cómo se implementa hoy (vs GoF)

GoF clásico

    - Interface común
    - Leaf y Composite
    - Métodos como add/remove públicos
    - Mucho polimorfismo estructural

Implementación moderna 

    - El Composite es un Aggregate Root
    - Las operaciones expuestas son de negocio, no estructurales
    - La recursividad está encapsulada
    - No se expone la colección interna
    - Se respeta invariantes del dominio

👉 El foco no es el patrón, es el modelo

# Anti-ejemplo típico 🚫

```
class Order {
    List<Order> children;
}
```

Usar Composite para:

    - Evitar un stream().map().reduce()
    - Modelar workflows
    - Validaciones técnicas
    - Agrupar cosas “porque sí”

👉 Si no hay una regla de negocio recursiva, NO es Composite.

## Reemplazo (si existe)

Depende del problema real:

| Problema               | Mejor alternativa       |
| ---------------------- | ----------------------- |
| Solo sumar / recorrer  | Stream / Reduce         |
| Flujo de pasos         | Chain of Responsibility |
| Reglas intercambiables | Strategy                |
| Orquestación           | Application Service     |
| Validaciones simples   | Specification           |

👉 Composite no compite, representa.

## Ejemplo

👉 Ver implementación completa en GitHub: https://github.com/MaxiCorrea/java-composite

## Regla de oro

Si el cliente no debería saber si está hablando con uno o con muchos, y esa abstracción tiene valor de negocio, estás frente a un **Composite**.

Si solo simplifica código → ❌

Si protege el modelo → ✅

## Frase final 

Composite no es un patrón para recorrer estructuras; es un patrón para proteger decisiones del dominio frente a su complejidad interna.

## Ver video

[![Composite en Java](https://img.youtube.com/vi/cIQqAgyrRGg/0.jpg)](https://www.youtube.com/watch?v=cIQqAgyrRGg)