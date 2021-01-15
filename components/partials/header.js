import styles from "../../styles/Home.module.css";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";

export default function MainSideBar() {
    return (
        <header className={styles.header}>
            <title>DoSCG</title>
            <div className={styles.navBar}>
                <Navbar className={styles.header}>
                    <Navbar.Brand href="/">DoSCG</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/dashboard">Call DoScg</Nav.Link>
                            <Nav.Link href="/services">My API</Nav.Link>
                            <Nav.Link href="/resume">My CV</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="https://github.com/suraboy" target="_blank">
                                <i className="fa fa-2x fa-github"/>
                            </Nav.Link>
                            <Nav.Link href="https://www.facebook.com/sirichai.janpan/" target="_blank">
                                <i className="fa fa-2x fa-facebook-square"/>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
}
