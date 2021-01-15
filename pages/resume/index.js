import Header from '../../components/partials/header'
import Footer from '../../components/partials/footer'
import styles from '../../styles/Home.module.css'
import React from 'react'
import {Container, Row, Col, Card, ListGroup, Nav} from 'react-bootstrap'
import resume from '../../styles/Resume.module.css'
import services from '../../styles/Sevice.module.css'
import Personal from '../resume/components/personal';
import Images from '../resume/components/images';

const Resume = () => (
    <div className={styles.container}>
        <Header/>
        <main className={resume.main}>
            <Container>
                <Row>
                    <Col md={8}>
                        <Personal/>
                    </Col>
                    <Col xs={6} md={4} className={resume.alignRight}>
                        <Images/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={services.margin10}>
                            <Card className={services.routeMap}>
                                <Card.Header>
                                    <strong>Education</strong>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col md={8}>
                                            Prince of Songkla University Trang Campus
                                            Faculty of Commerce and Management (Information and Computer
                                            Management) <br/>
                                            Grade point average 2.93
                                        </Col>
                                        <Col className={services.alignRight}>
                                            2013 – 2017
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className={services.margin10}>
                            <Card className={services.routeMap}>
                                <Card.Header>
                                    <strong>Work Experience</strong>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col md={9}>
                                            <Card.Title>Programmer at Ascend corp (Thailand)</Card.Title>
                                            <Card.Text>
                                                Have an experience in development micro service in Horeca Platform<br/>
                                                <div style={{margin: '15px'}}>
                                                    <b>PHP Framework</b> : Lumen Framework (2 Year) , Laravel (3
                                                    Year)<br/>
                                                    <b>JS Framework</b> : Expressjs (2 Year) , Nestjs (Begining)<br/>
                                                    <b>SQL</b> : MySQL , MariaDB<br/>
                                                    <b>NoSQL</b> : Redis<br/>
                                                </div>
                                                Have an experience in AWS Service And Google Cloud Service<br/>
                                                Have an experience in Payment Gateway e.g., True Money and SCB Promptpay
                                            </Card.Text>
                                        </Col>
                                        <Col className={services.alignRight}>
                                            Sep 2018 - Present
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body>
                                    <Row>
                                        <Col md={8}>
                                            <Card.Title>Web Development at Nilecon (Thailand)</Card.Title>
                                            <Card.Text>
                                                Have an experience in development<br/>
                                                <div style={{margin: '15px'}}>
                                                    Project Todobox (AngularJs + Laravel)<br/>
                                                    Baby Best Buy (Laravel)<br/>
                                                    Beauty24 (html + ajax , jquery).
                                                </div>
                                            </Card.Text>
                                        </Col>
                                        <Col className={services.alignRight}>
                                            2013 – 2017
                                        </Col>
                                    </Row>
                                </Card.Body>

                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className={services.margin10}>
                            <Card className={services.routeMap}>
                                <Card.Header>
                                    <strong>Career Qualifications</strong>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <div style={{margin: '15px'}}>
                                                <i className="fa fa-lg fa-caret-right"/> Internship experiences in
                                                computer and network to a great extent<br/>
                                                <i className="fa fa-lg fa-caret-right"/> Able to analyze and solve
                                                problems arising in work as well<br/>
                                                <i className="fa fa-lg fa-caret-right"/> Ability to work effectively
                                                under pressure and to achieve
                                                the objectives of the organization <br/>
                                                <i className="fa fa-lg fa-caret-right"/> Communication,
                                                coordination and management skills<br/>
                                                <i className="fa fa-lg fa-caret-right"/> Able to work as a team and
                                                collaborate with others<br/>
                                                <i className="fa fa-lg fa-caret-right"/> High responsibility with good
                                                human relations<br/>
                                                <i className="fa fa-lg fa-caret-right"/> Like to learn new things and is
                                                always self-development. And like a
                                                challenge<br/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className={services.margin10}>
                            <Card className={services.routeMap}>
                                <Card.Header>
                                    <strong>Other Skills</strong>
                                </Card.Header>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card style={{width: '100%'}}>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>
                                                        <Card.Title>Languages</Card.Title>
                                                        <Card.Text>
                                                            HTML / CSS , Ajax , JQuery ,
                                                            JavaScript , PHP , GoLang
                                                        </Card.Text>
                                                    </ListGroup.Item>

                                                    <ListGroup.Item>
                                                        <Card.Title>PHP Framework</Card.Title>
                                                        <Card.Text>
                                                            Laravel , PHP Codeigniter , Lumen , Apiato
                                                        </Card.Text>
                                                    </ListGroup.Item>

                                                    <ListGroup.Item>
                                                        <Card.Title>JavaScript Framework</Card.Title>
                                                        <Card.Text>
                                                            Nodejs , ExpressJS , AngularJS , ReactJS , VueJS , NestJS
                                                        </Card.Text>
                                                    </ListGroup.Item>

                                                    <ListGroup.Item>
                                                        <Card.Title>Tools</Card.Title>
                                                        <Card.Text>
                                                            Docker, MySQL, Redis , GrayLog , SonarQube
                                                        </Card.Text>
                                                    </ListGroup.Item>

                                                    <ListGroup.Item>
                                                        <Card.Title>GitHub</Card.Title>
                                                        <Card.Text>
                                                            <a href="https://github.com/suraboy" target="_blank">
                                                                https://github.com/suraboy
                                                            </a>
                                                        </Card.Text>
                                                    </ListGroup.Item>

                                                </ListGroup>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>

            </Container>
        </main>
        <Footer/>
    </div>
);

export default Resume;