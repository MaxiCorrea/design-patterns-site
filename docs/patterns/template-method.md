---
title: Template Method
sidebar_position: 13
---

**Template Method** define un flujo de negocio invariante y explícito, delegando únicamente los puntos de variación controlados, sin permitir que el algoritmo completo sea alterado.

🔑 No es herencia “porque sí”.

🔑 Es protección del proceso, no reutilización de código.

## ¿Se usa hoy en arquitectura hexagonal?

✅ Sí, pero con uso quirúrgico

Se usa principalmente en la capa Application, cuando:

    - Hay varios casos de uso con el mismo proceso
    - El orden de pasos es una regla
    - El negocio no permite reordenar ni omitir etapas

❌ NO se usa:

    - En Domain (salvo casos rarísimos)
    - Para lógica algorítmica intercambiable
    - Para reemplazar Strategy

👉 Hoy se usa menos, pero mejor.

## Cómo se implementa hoy (vs GoF)

GoF clásico

    - Herencia profunda
    - Métodos protected por todos lados
    - Difícil de testear
    - Mucha rigidez

Implementación moderna (SR/Staff)

    ✔ templateMethod() final

    ✔ Pocos métodos abstractos
    
    ✔ Hooks explícitos y nombrados
    
    ✔ Dependencias inyectadas
    
    ✔ Tests por contrato

👉 Herencia mínima, intención máxima.

## Anti-ejemplo típico (muy común)

```
public abstract class Process {

    public void execute() {
        step1();
        step2();
        step3();
    }

    protected abstract void step1();
    protected abstract void step2();
    protected abstract void step3();
}
```
❌ Todo es abstracto

❌ No hay invariantes

❌ Subclases pueden romper el proceso

❌ “Template Method” solo de nombre

👉 Esto no protege nada.

## Reemplazo (si existe)

🎯 El reemplazo más común: Strategy

    Usás Strategy cuando:

        - El flujo puede variar
        - No hay orden obligatorio
        - Las variantes son intercambiables

📌 Regla:

Si el flujo es fijo → Template

Si el algoritmo es intercambiable → Strategy

## Ejemplo

Caso: Procesar órdenes

Flujo fijo:

    - Validar
    - Calcular total
    - Persistir
    - Notificar

Variantes:

    - Regular
    - Express

👉 Ver implementación completa en GitHub: https://github.com/MaxiCorrea/java-template-method

## Regla de oro

Si una subclase puede romper el proceso, no estás usando **Template Method**: estás usando herencia mal aplicada.

🔥 Esa frase define todo.

## Frase final

**Template Method** no existe para reutilizar código, existe para proteger procesos de negocio.

**Si no hay un proceso que proteger → no lo uses.**

## Ver video

[![Template Method en Java](https://img.youtube.com/vi/NYaXD2wXsDY/0.jpg)](https://www.youtube.com/watch?v=NYaXD2wXsDY)