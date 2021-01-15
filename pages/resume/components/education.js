import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import services from "../../../styles/Sevice.module.css";

const Education = () => (
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
)


export default Education;