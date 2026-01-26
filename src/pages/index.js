import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout
      title="Design Patterns en Java"
      description="Patrones de diseño aplicados con Java y Arquitectura Hexagonal"
    >
      <header className={styles.hero}>
        <img
          src="/img/avatar.jpeg"
          alt="Maxi Correa"
          className={styles.avatar}
        />
        <p className={styles.author}>
          by <strong>Maximiliano Correa</strong> · Java Engineer
        </p>
        <h1 className={styles.title}>
          <span>Design Patterns</span> <span>en Java</span>
        </h1>
        <p className={styles.subtitle}>
          Implementaciones reales, criterio moderno y Arquitectura Hexagonal
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryButton} to="/docs/intro">
            Explorar patrones
          </Link>
          <Link
            className={styles.secondaryButton}
            to="https://github.com/maxicorrea"
          >
            GitHub
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>¿Qué vas a encontrar?</h2>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>🧠 Patrones GoF</h3>
              <p>
                Explicados desde una mirada actual: cuándo usarlos, cuándo NO y
                qué alternativas existen hoy.
              </p>
            </div>

            <div className={styles.card}>
              <h3>🏗 Arquitectura Hexagonal</h3>
              <p>
                Casos reales con puertos, adaptadores, casos de uso y decisiones
                de diseño justificadas.
              </p>
            </div>

            <div className={styles.card}>
              <h3>☕ Java Profesional</h3>
              <p>
                Código limpio, testeado, con foco en SR/Staff mindset, no
                ejemplos académicos.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Filosofía del contenido</h2>
          <ul className={styles.list}>
            <li>❌ No “pattern por pattern” sin contexto</li>
            <li>✅ Decisiones arquitectónicas explicadas</li>
            <li>✅ Código listo para producción</li>
            <li>✅ Enfoque moderno (Policies, Ports & Adapters)</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
