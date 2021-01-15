import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import services from "../../../styles/Sevice.module.css";

const Work = () => (
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
)


export default Work;