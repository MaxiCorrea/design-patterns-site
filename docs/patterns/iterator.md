---
title: Iterator
sidebar_position: 16
---

**Iterator** encapsula la forma de recorrer una fuente de datos sin exponer su estructura interna ni forzar su carga completa en memoria.

🔑 Clave:

- No es “recorrer una colección”
- Es controlar el flujo de consumo de datos
- Especialmente relevante cuando:
    - hay grandes volúmenes
    - el origen no es una colección
    - el acceso es costoso (DB, API, file, stream)

## ¿Se usa hoy en arquitectura hexagonal?

✅ SÍ, pero no como patrón explícito GoF

En hexagonal se usa cuando:

✔️ Hay casos de uso batch / stream

✔️ El dominio consume datos progresivamente

✔️ El origen es externo (DB, SP, API, archivo)

📌 No se suele llamar “Iterator”, pero el concepto está ahí.

## ¿Cómo se implementa hoy (vs GoF)?

Implementación moderna 

Hoy se expresa como:

- ResultSet
- Stream
- Spliterator
- Iterable
- Flux (reactivo)
- Reader / Scanner
- Kafka Consumer

👉 El patrón vive en el lenguaje y las APIs.

## Anti-ejemplo típico (muy común)

```
List<Order> orders = repository.findAll();
orders.forEach(this::process);
```

❌ Carga todo

❌ No escala

❌ GC pressure

❌ Batch frágil

❌ Oculta el costo real

📌 Este código miente sobre su complejidad.

👉 Ver implementación completa en GitHub: https://github.com/MaxiCorrea/java-iterator

## ¿Tiene reemplazo?

❌ No tiene “reemplazo”, tiene evoluciones

Según el contexto:

| Contexto    | Alternativa       |
| ----------- | ----------------- |
| Batch       | Iterator / Stream |
| Streaming   | Reactive Streams  |
| Eventos     | Kafka Consumer    |
| IO          | Reader / Scanner  |
| Paralelismo | Spliterator       |

## Regla de oro 

Si recorrer datos puede romper memoria, el caso de uso no debe recibir una colección.

📌 Cuando hay duda → Iterator primero.

## Frase final 

“Iterator no es un patrón de colecciones,
es un patrón de control del flujo de datos.”

## Ver video
[![Iterator in Java](https://img.youtube.com/vi/0kJeyTgKm1Q/0.jpg)](https://www.youtube.com/watch?v=0kJeyTgKm1Q)