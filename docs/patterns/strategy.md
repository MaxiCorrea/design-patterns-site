---
title: Strategy
sidebar_position: 19
---

**Strategy** encapsula variaciones de comportamiento del dominio, permitiendo cambiar cómo se ejecuta una acción sin modificar al consumidor.

👉 No modela objetos

👉 No selecciona tecnología

👉 Modela reglas de negocio intercambiables

## ¿Se usa hoy en arquitectura hexagonal?

✅ Sí, y mucho, cuando está bien aplicado.

Se usa cuando:
    - El negocio define múltiples formas válidas de hacer lo mismo
    - Las reglas cambian según contexto
    - Querés eliminar if / else de negocio
    - Querés proteger el Use Case

📌 Vive en Domain o Application,

📌 Nunca en infraestructura.

## Cómo se implementa hoy (vs GoF)

GoF clásico:

    - Context con setStrategy()
    - Jerarquías forzadas
    - Enfoque académico

Implementación moderna:

    - Interface + implementaciones simples
    - Selección explícita por reglas
    - Sin herencia innecesaria
    - Sin frameworks en el dominio
    - Composición sobre herencia

👉 Muchas veces no se siente como un patrón,

👉 se siente como buen diseño del dominio.

## Anti-ejemplo típico

Usar Strategy para decidir:

    - Stripe vs MercadoPago
    - MySQL vs Oracle
    - REST vs SOAP
    - Kafka vs RabbitMQ

❌ Eso es infraestructura

❌ El negocio no decide eso

❌ Strategy mal aplicado

## Reemplazo

Strategy no se reemplaza, se confunde.

Pero a veces no es la mejor opción:

    - Variación técnica → Dependency Injection
    - Flujo secuencial → Chain of Responsibility
    - Regla simple → Polimorfismo directo / Map
    - Condiciones compuestas → Specification

## Ejemplo

Cálculo de envío según tipo de cliente:

    - REGULAR → costo fijo
    - PREMIUM → porcentaje
    - VIP → envío gratis

👉 Mismo concepto del dominio

👉 Mismo objetivo

👉 Diferente comportamiento según reglas

Eso es Strategy bien aplicado.

👉 Ver implementación completa en GitHub: https://github.com/MaxiCorrea/java-strategy

## Regla de oro

Si cambia el “cómo” del negocio → Strategy válida

Si cambia la tecnología → Strategy mal usada

## Frase final

**Strategy** sigue vigente cuando deja de ser un patrón GoF
y pasa a ser una forma explícita de modelar reglas del dominio.

## Ver video

[![Strategy en Java](https://img.youtube.com/vi/seF1SZtIzNo/0.jpg)](https://www.youtube.com/watch?v=seF1SZtIzNo)
