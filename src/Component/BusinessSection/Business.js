import React, {Component,Fragment} from 'react';
import '../../assets/css/custom.css';
import "../../assets/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard, faChartPie,faCreditCard,faHeart,faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import {Col, Container, Row} from "react-bootstrap";

class Business extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="commonTitle commonMargin">We Are help you to Grow your Business</h1>
                    <h5 className="serviceSubHeader">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum.</h5>
                    <Row>
                        <Col className="hoverShadow" lg={4} md={4} sm={12}>
                            <div className="subTopMargin1 text-center">
                                <FontAwesomeIcon className="iconCSS" icon={faChartLine} />
                                <h2 className="iconMargin serviceHeader">Financial Planning</h2>
                                <p className="serviceSubHeader">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>


                            </div>
                        </Col>

                        <Col className="hoverShadow" lg={4} md={4} sm={12}>
                            <div className="subTopMargin1 text-center " >
                                <FontAwesomeIcon className="iconCSS" icon={faAddressCard} />
                                <h2 className="iconMargin serviceHeader">Business Loan</h2>
                                <p className="serviceSubHeader">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                            </div>
                        </Col>

                        <Col className="hoverShadow" lg={4} md={4} sm={12}>
                            <div className="subTopMargin1 text-center">
                                <FontAwesomeIcon className="iconCSS" icon={faChartPie} />
                                <h2 className="iconMargin serviceHeader">Consulting</h2>
                                <p  className="serviceSubHeader">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                            </div>
                        </Col>


                    </Row>

                    <Row>
                        <Col className="hoverShadow" lg={4} md={4} sm={12}>
                            <div className="subTopMargin1 text-center">
                                <FontAwesomeIcon className="iconCSS" icon={faCreditCard} />
                                <h2 className="iconMargin serviceHeader">Retirement Plan</h2>
                                <p className="serviceSubHeader">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>


                            </div>
                        </Col>

                        <Col className="hoverShadow" lg={4} md={4} sm={12}>
                            <div className="subTopMargin1 text-center " >
                                <FontAwesomeIcon className="iconCSS" icon={faHeart} />
                                <h2 className="iconMargin serviceHeader">Taxes Planning</h2>
                                <p className="serviceSubHeader">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                            </div>
                        </Col>

                        <Col className="hoverShadow" lg={4} md={4} sm={12}>
                            <div className="subTopMargin1 text-center">
                                <FontAwesomeIcon className="iconCSS" icon={faMoneyBill} />
                                <h2 className="iconMargin serviceHeader">Capital Investments</h2>
                                <p  className="serviceSubHeader">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                            </div>
                        </Col>


                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Business;