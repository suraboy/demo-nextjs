import resume from "../../../styles/Resume.module.css";
import {Col, Row} from "react-bootstrap";
import services from "../../../styles/Sevice.module.css";
import React from "react";

const Personal = () => (
    <div className={services.body}>
        <Row>
            <Col>
                <b>Name</b> : Mr.Sirichai Janpan
            </Col>
            <Col>
                <b>Nick Name</b> : Boy
            </Col>
        </Row>
        <Row className={resume.colPaddingTop}>
            <Col>
                <b>Mobile</b> : 097-2418913
            </Col>
            <Col>
                <b>Email</b> : 13_oy@hotmail.co.th
            </Col>
        </Row>

        <Row className={resume.colPaddingTop}>
            <Col>
                <b>Gender</b> : Male
            </Col>
            <Col>
                <b>Nationality</b> : Thai
            </Col>
        </Row>
        <Row className={resume.colPaddingTop}>
            <Col>
                <b>Date of Birth</b> : February 18th, 1995
            </Col>
            <Col>
                <b>Marital</b> : Single
            </Col>
        </Row>
        <Row className={resume.colPaddingTop}>
            <Col>
                <b>Age</b> : 25
            </Col>
            <Col>
                <b>Military Status</b> : Exempted
            </Col>
        </Row>

        <Row className={resume.colPaddingTop}>
            <Col md={2}><b>Address</b> :</Col>
            <Col>
                57/1 Ban Pradipat Soy Pradipat 25 Phayathai, Phayathai, Bangkok 10400
            </Col>
        </Row>
    </div>
);

export default Personal;