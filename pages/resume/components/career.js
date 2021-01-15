import {Card, Col, Row} from "react-bootstrap";
import services from "../../../styles/Sevice.module.css";
import React from "react";


const Career = () => (
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
)

export default Career;