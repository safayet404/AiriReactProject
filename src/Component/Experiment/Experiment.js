import React, {Component,Fragment} from 'react';
import '../../assets/css/responsive.css';
import {Col, Container, Row} from "react-bootstrap";
import p1 from "../../assets/image/Layer-49866.png";
import p2 from "../../assets/image/Layer-49871.png";

class Experiment extends Component {
    render() {
        return (
            <Fragment>


                <Container fluid={true} className="experiment  p-0">
                    <div >
                        <Container >
                            <Row>
                                <Col >
                                    <h1 className="commonTitle testimonialMargin">Our Testimonial</h1>
                                    <Row>
                                        <Col  lg={6} md={6} sm={12}>
                                            <div className="testimonialCard subTopMargin">

                                                <p className="testimonialDescription">“atheme has allowed our department to gain control of software distribution very nicely… it is very easy to use and understand.”​</p>
                                                <Col lg={6} md={12} sm={12} className="p-2">
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <img className=" " alt=" " src={p1} />
                                                        </Col>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <h5 className="testHeader">Anne Marie</h5>
                                                            <p className="testHeader2">Designer</p>

                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </div>


                                        </Col>



                                        <Col  lg={6} md={6} sm={12}>
                                            <div className="testimonialCard subTopMargin">

                                                <p className="testimonialDescription">“atheme has allowed our department to gain control of software distribution very nicely… it is very easy to use and understand.”​</p>
                                                <Col lg={6} md={12} sm={12} className="p-2">
                                                    <Row>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <img className=" " alt=" " src={p2} />
                                                        </Col>
                                                        <Col lg={6} md={6} sm={12}>
                                                            <h5 className="testHeader">John Dee</h5>
                                                            <p className="testHeader2">Web Developer</p>

                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </div>
                                        </Col>


                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>


            </Fragment>
        );
    }
}

export default Experiment;