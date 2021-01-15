import Header from '../../components/partials/header'
import Footer from '../../components/partials/footer'
import styles from "../../styles/Home.module.css";
import React from "react";

const Services = () => (
    <div className={styles.container}>
        <Header/>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Resume
            </h1>
        </main>
        <Footer/>
    </div>
);

export default Services;