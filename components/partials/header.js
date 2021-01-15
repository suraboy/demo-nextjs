import styles from "../../styles/Home.module.css";
import React, {Component} from 'react';
import {Nav, Navbar, NavLink} from "react-bootstrap";

class MainSideBar extends Component {
    render() {
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
}

export default MainSideBar;
