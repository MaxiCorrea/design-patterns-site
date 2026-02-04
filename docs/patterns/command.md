---
title: Command
sidebar_position: 17
---

**Command** encapsula una intención de negocio como un objeto para poder:

    - desacoplar quién pide de quién ejecuta,
    - aplicar cross-cutting (retry, async, logging, métricas, seguridad),
    - y cambiar cómo se ejecuta sin tocar el caso de uso.

👉 No encapsula lógica compleja, encapsula la ejecución.

## ¿Se usa hoy en arquitectura hexagonal?

Sí, pero no como en GoF

En hexagonal moderna:

    - Command vive en Application
    - Es un input message del sistema
    - Se combina con:
        - CommandBus
        - Middlewares
        - Infra async (Kafka, SQS, DB queue)

👉 No es obligatorio, es una herramienta táctica, no un dogma.

## Cómo se implementa hoy (vs GoF)

GoF clásico

    - Invoker
    - Receiver
    - Command
    - Undo / history

Hoy (realidad 2026)

    - Command = DTO inmutable
    - CommandHandler = Application Service
    - CommandBus = pipeline de ejecución
    - Decoradores / middlewares para cross-cutting

👉 Sin undo, sin invoker explícito, sin sobreingeniería.

## Anti-ejemplo típico ❌

```
class CreateOrderCommand {
  void execute() {
    repo.save(...)
    email.send(...)
    log.info(...)
  }
}

```
❌ Command con lógica

❌ Infra mezclada

❌ Difícil de testear

❌ Violación total de hexagonal

👉 Eso es un UseCase mal disfrazado.

## Reemplazo (si existe)

No hay reemplazo directo, hay alternativas según el problema:

| Necesidad     | Mejor opción        |
| ------------- | ------------------- |
| Caso simple   | UseCase directo     |
| Async / retry | Command + Bus       |
| Orquestación  | Application Service |
| Eventos       | Domain Events       |
| Pipelines     | Chain / Middleware  |

👉 Command no reemplaza al UseCase, lo envuelve cuando hace falta.

## Ejemplo

👉 Ver implementación completa en GitHub: https://github.com/MaxiCorrea/java-command

## Regla de oro

**Si no necesitás cambiar cómo se ejecuta, no uses Command**

UseCase directo > Command innecesario

## Frase final

Command no es arquitectura, es palanca.
Usala cuando necesitás fuerza, no por costumbre.

## Ver video

[![Command in Java](https://img.youtube.com/vi/f7qozMI3YvU/0.jpg)](https://www.youtube.com/watch?v=f7qozMI3YvU)