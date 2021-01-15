import Header from '../../components/partials/header'
import Footer from '../../components/partials/footer'
import styles from '../../styles/Home.module.css';
import services from '../../styles/Sevice.module.css';
import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import {callDoScg, callXYZ, callABC, callMap} from '../../api/doscgService'
import {Container, Row, Col, Card} from "react-bootstrap";

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            doScg: [],
            question: [],
            answer: {},
            googleMap: [],
            output: {}
        }
    }

    componentDidMount = async () => {
        await this.getDoScg();
    }

    getDoScg = async () => {
        return await callDoScg()
            .then((res) => {
                this.setState({doScg: res})
            })
    }

    getXYZ = async () => {
        return await callXYZ()
            .then((res) => {
                this.setState({
                    question: res.question,
                    answer: res.response
                })
            })
    }

    getABC = async () => {
        return await callABC()
            .then((res) => {
                this.setState({
                    question: res.question,
                    answer: res.response
                })
            })
    }

    getGooGleMap = async () => {
        return await callMap()
            .then(async (res) => {
                await this.handleGooGleMap(res.routes[0].legs[0]);
                this.setState({
                    googleMap: res.routes[0].legs[0].steps
                })
            })
    }

    handleSelect = async (key) => {
        switch (key) {
            case "1":
                return await this.getDoScg();
            case '2':
                return await this.getXYZ();
            case '3':
                return await this.getABC();
            case '4':
                return await this.getGooGleMap();
            default:
                console.log('Errors!')
        }
    }

    handleGooGleMap = async (key) => {
        this.setState({
            output: {
                distance: key.distance.text,
                duration: key.duration.text,
            }
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <Header/>
                <main className={services.main}>
                    <div className={services.body}>
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example" onSelect={this.handleSelect}>
                            <Tab eventKey={1} title="Call DOSCG">
                                <div className={services.doScg}>
                                    <h1 className={styles.title}>
                                        {this.state.doScg}
                                    </h1>
                                </div>
                            </Tab>
                            <Tab eventKey={2} title="Find XYZ">
                                <div className={services.doScg}>
                                    <Container>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto">
                                                <h5>Question :
                                                    <span className={services.font17}> {this.state.question} </span>
                                                </h5>
                                                <h5>Answer :
                                                    <span className={services.font17}>
                                                          X = {this.state.answer.x} ,
                                                          Y = {this.state.answer.y} ,
                                                          Z = {this.state.answer.z}
                                                    </span>
                                                </h5>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Tab>
                            <Tab eventKey={3} title="Find ABC">
                                <div className={services.doScg}>
                                    <Container>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto">
                                                <h5>Question :
                                                    <span className={services.font17}> {this.state.question} </span>
                                                </h5>
                                                <h5>Answer :
                                                    <span className={services.font17}>
                                                        A = {this.state.answer.A} ,
                                                        B = {this.state.answer.B} ,
                                                        C = {this.state.answer.C}
                                                    </span>
                                                </h5>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Tab>
                            <Tab eventKey={4} title="Map">
                                <Container>
                                    <Row>
                                        <Col md="auto" className={services.titleMap}>
                                            <h5>
                                                Central World - SCG
                                                Bangsue {'  '} ({this.state.output.distance}{' , '}{this.state.output.duration})
                                            </h5>
                                        </Col>
                                    </Row>
                                    <Col md="auto">
                                        <div className={services.margin10}>
                                            {
                                                this.state.googleMap.map((item) => {
                                                    return (
                                                        <Card className={services.routeMap}>
                                                            <Card.Header>
                                                                <Row>
                                                                    <Col>
                                                                        <span
                                                                            dangerouslySetInnerHTML={{__html: item.html_instructions}}/>
                                                                    </Col>
                                                                    <Col
                                                                        className={services.alignRight}>{item.duration.text} ( {item.distance.text} )</Col>
                                                                </Row>
                                                            </Card.Header>
                                                        </Card>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Col>
                                </Container>
                            </Tab>
                        </Tabs>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Services;