---
title: Factory Method
sidebar_position: 1
---

**Factory Method** encapsula una decisión del negocio sobre qué variante de un concepto del dominio crear, evitando acoplar al consumidor a implementaciones concretas.

👉 No se trata de “crear objetos”, sino de expresar una decisión.


## ¿Se usa hoy en arquitectura hexagonal?

❌ NO se usa para:

    - Crear gateways
    - Repositories
    - APIs externas
    - Infraestructura en general

Eso lo resuelve Dependency Injection.

✅ SÍ se usa para:

    - Variantes del dominio
    - Comportamientos según reglas de negocio
    - Decidir qué objeto del dominio existe

## Cómo se implementa hoy (vs GoF)

    - Factories simples
    - Sin jerarquías
    - Sin herencia
    - Sin framework
    - Decisión explícita por reglas de negocio

👉 No “se siente” como patrón.

## Anti-ejemplo típico

Usar Factory Method para decidir:

    - Stripe vs MercadoPago
    - MySQL vs Oracle
    - REST vs SOAP

❌ Eso es infraestructura, no dominio.

## Reemplazo

    - Infraestructura → Dependency Injection
    - Variaciones simples → Strategy / Map / Polimorfismo

## Ejemplo

Autorización de compras según reglas del dominio:

    - Cliente VIP → aprobación inmediata
    - Cliente Riesgo alto → revisión manual
    - Cliente Estándar → aprobación con validación

👉 Todas son variantes del mismo concepto del dominio.

👉 Ver implementación completa en GitHub:
https://github.com/MaxiCorrea/java-factory-method


## Regla de oro

    - Si la decisión es del negocio → Factory válida
    - Si es técnica → Factory mal usada

## Frase final

**Factory Method sigue vivo cuando deja de crear infraestructura
y empieza a modelar decisiones del dominio.**



## Ver video

[![Factory Method en Java](https://img.youtube.com/vi/4ChZfTRjPS0/0.jpg)](https://www.youtube.com/watch?v=4ChZfTRjPS0)
