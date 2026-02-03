---
title: Observer
sidebar_position: 14
---

**Observer** es un patrón para modelar reacciones a hechos, permitiendo que múltiples comportamientos respondan a un cambio sin acoplar al productor con los consumidores.

👉 No es “notificar objetos”,

👉 es propagar cambios de estado del dominio sin violar el diseño.

## ¿Se usa hoy en arquitectura hexagonal?

Sí, pero no como en GoF.

    En hexagonal:

    - Se usa como Domain Events + Listeners
    - Vive principalmente en Domain / Application
    - Infrastructure solo consume los eventos

⚠️ Si tu Observer depende de Spring, Kafka o Mail → está mal ubicado.

## Cómo se implementa hoy (vs GoF)

GoF clásico

    - Observable
    - Observer
    - addObserver()
    - notifyObservers()

Hoy 

    - DomainEvent
    - EventPublisher
    - EventListener
    - Registro explícito en el wiring

👉 Más explícito

👉 Más testeable

👉 Sin herencia forzada

👉 Sin magia

## Anti-ejemplo típico

“Cuando se aprueba algo, llamo directamente a emailService, auditService y metricsService”

Por qué está mal:

    - Alto acoplamiento
    - Violación SRP
    - Dominio dependiente de infraestructura
    - Cambios triviales rompen todo

Otro clásico:

    Usar ApplicationEventPublisher dentro del dominio

## Reemplazo

No se reemplaza, se refina.

Según el contexto:

    - Domain Events → mismo concepto, mejor nombre
    - EventBus → Observer a escala
    - Messaging (Kafka/Rabbit) → Observer distribuido

⚠️ No reemplaces Observer con:

    - if/else
    - switch
    - @TransactionalEventListener en el dominio


## Ejemplo

Evento: AuthorizationApproved

Observers:

    - Notificación al paciente
    - Auditoría
    - Métricas

El dominio:

    - Publica el evento
    - No sabe quién escucha
    - No le importa cómo reaccionan

👉 Eso es Observer bien aplicado.

👉 Ver implementación completa en GitHub: https://github.com/MaxiCorrea/java-observer

## Regla de oro

**El que produce el evento no debe conocer jamás a los que reaccionan.**

Si los conoce:

    - No es Observer
    - Es acoplamiento disfrazado


## Frase final

**Observer no es un patrón de notificación, es un patrón de desacacople.**

Si lo usás para “avisar cosas”, sos JR.

Usalo para proteger el dominio.

## Ver video

[![Observer in Java](https://img.youtube.com/vi/ouskqjes6f4/0.jpg)](https://www.youtube.com/watch?v=ouskqjes6f4)