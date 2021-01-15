import {Col, Row} from "react-bootstrap";
import Personal from "./personal";
import resume from "../../../styles/Resume.module.css";
import Images from "./images";
import React from "react";

const Profile = () => (
    <Row>
        <Col md={8}>
            <Personal/>
        </Col>
        <Col xs={6} md={4} className={resume.alignRight}>
            <Images/>
        </Col>
    </Row>
)

export default Profile