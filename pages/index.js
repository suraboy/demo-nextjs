import styles from '../styles/Home.module.css'
import Header from '../components/partials/header'
import Footer from '../components/partials/footer'
import React from "react";
export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
        <div className={styles.grid}>
          <a href="/dashboard" className={styles.card}>
            <h3>Dashboard &rarr;</h3>
            <p>Action call "DOSCG".</p>
          </a>

          <a href="/services" className={styles.card}>
            <h3>My API &rarr;</h3>
            <p>Api from Assignment BackEnd.</p>
          </a>

          <a
            href="/resume"
            className={styles.card}
          >
            <h3>My CV &rarr;</h3>
            <p>Let me introduce myself.</p>
          </a>

          <a
            href="https://github.com/suraboy"
            className={styles.card} target="_blank"
          >
            <h3>My Github &rarr;</h3>
            <p>
              My project for Learning.
            </p>
          </a>
        </div>
      </main>

      <Footer/>
    </div>
  )
}
