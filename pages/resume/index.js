import Header from '../../components/partials/header'
import Footer from '../../components/partials/footer'
import styles from '../../styles/Home.module.css'
import React from 'react'
import {Container} from 'react-bootstrap'
import resume from '../../styles/Resume.module.css'
import Profile from '../resume/components/profile'
import Education from '../resume/components/education'
import Work from '../resume/components/work'
import Career from '../resume/components/career'
import Other from '../resume/components/other'

const Resume = () => (
    <div className={styles.container}>
        <Header/>
        <main className={resume.main}>
            <Container>

                <Profile/>

                <Education/>

                <Work/>

                <Career/>

                <Other/>

            </Container>
        </main>
        <Footer/>
    </div>
);

export default Resume;