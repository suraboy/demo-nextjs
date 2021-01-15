import {Card, Col, ListGroup, Row} from "react-bootstrap";
import services from "../../../styles/Sevice.module.css";
import React from "react";

const Other = () => (
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
)

export default Other;