---
title: Decorator
sidebar_position: 6
---
**Decorator** permite componer comportamiento de forma incremental, envolviendo un objeto con otros que implementan la misma abstracción, para extender su comportamiento sin modificarlo ni heredar.

👉 No es un patrón “técnico”: es una herramienta de modelado.

## ¿Se usa hoy en arquitectura hexagonal?

Sí, mucho — pero en dos niveles distintos:
    - En Domain → cuando agrega reglas de negocio
    - En Infrastructure → cuando agrega concerns técnicos

📌 El patrón es el mismo.

📌 La capa depende del significado, no del nombre.

## Cómo se implementa hoy (vs GoF)

GoF clásico

    - Clases abstractas
    - Herencia pesada
    - Ejemplos UI
    - Poco contexto arquitectónico

Implementación moderna 

    - Interfaces o puertos
    - Composición explícita
    - Decorators pequeños y cohesionados
    - Wiring externo (infra / DI)

Test unitario por decorator

👉 Hoy se usa como mecanismo de composición, no como jerarquía.

## Anti-ejemplo típico

❌ Decorator con lógica que no corresponde a su capa

❌ Decorator con if/else por tipo

❌ Decorator que instancia dependencias

❌ Decorator usado para ordenar procesos

❌ Decorator técnico mezclado con negocio

📌 Eso no es Decorator: es acoplamiento encubierto.

## Reemplazo (si existe)

No tiene reemplazo directo.

Alternativas parciales:

    - Composite → cuando se modela estructura, no comportamiento
    - Strategy → cuando cambia el algoritmo base
    - AOP → cuando aceptás magia y pérdida de control
    - Pipeline / Chain → cuando el orden es parte del negocio

👉 Si necesitás composición explícita y evolutiva, Decorator sigue siendo la mejor opción.

## Ejemplo

```
PriceCalculator calculator =
    new PromotionDiscountDecorator(
        new MarketFeeDecorator(
            new RiskAdjustmentDecorator(
                new BasePriceCalculator()
            )
        )
    );
```
📌 Todos implementan PriceCalculator

📌 Cada decorator agrega una regla clara

📌 El caso de uso no sabe que está decorado

👉 Ver implementación en GitHub: https://github.com/MaxiCorrea/java-decorator

## Regla de oro

Decorator vive en la capa donde vive la razón del cambio del comportamiento que agrega.

Si cambia por negocio → domain

Si cambia por técnica → infrastructure

## Frase final

Decorator no es para “agregar cosas”, es para modelar variaciones sin romper el core.

## Ver video

[![Decorator en Java](https://img.youtube.com/vi/dGUrUx5ATL8/0.jpg)](https://www.youtube.com/watch?v=dGUrUx5ATL8)