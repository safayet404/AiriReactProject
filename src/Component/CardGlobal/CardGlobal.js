import React, {Component,Fragment} from 'react';
import '../../assets/css/responsive.css';
import {Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressCard,faUsersCog,faBolt} from '@fortawesome/free-solid-svg-icons'



class CardGlobal extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="cardFixedBanner commonMargin p-0">
                    <div className="cardFixedBannerOverlay">
                        <p className="globalBusinessSubTitle">Business Global</p>
                        <h1 className="globalBusinessTitle">At Airi is the heart of our business, and <br/> our consultants are the heartbeat</h1>
                        <Container className="cardMargin">

                            <Row>
                                <Col  lg={4} md={6} sm={12}>
                                    <div className="globalCardHeightWidth text-center">
                                        <p className="iconCSS1"><FontAwesomeIcon  icon={faAddressCard} /></p>
                                        <h2 className="cardHeader">Professional</h2>
                                        <p className="cardSubHeader">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>


                                    </div>
                                </Col>

                                <Col  lg={4} md={6} sm={12}>
                                    <div className="globalCardHeightWidth text-center">
                                        <p className="iconCSS1"><FontAwesomeIcon  icon={faUsersCog} /></p>
                                        <h2 className="cardHeader">Expert Advisor</h2>
                                        <p className="cardSubHeader">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                    </div>
                                </Col>

                                <Col lg={4} md={6} sm={12}>
                                    <div className="globalCardHeightWidth text-center">

                                        <p className="iconCSS1"><FontAwesomeIcon  icon={faBolt} /></p>
                                        <h2 className="cardHeader">Fast & Secure</h2>
                                        <p className="cardSubHeader">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                    </div>
                                </Col>


                            </Row>

                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default CardGlobal;