import React, {Component,Fragment} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import {Col, Container, Row} from "react-bootstrap";


class Summary extends Component {
    render() {
        return (
            <Fragment>


                <Container fluid={true} lg={3} md={6} sm={12}  className="summaryFixedBanner p-0">
                    <div className="summaryFixedBannerOverlay">
                        <Container >
                            <Row>
                                <Col >
                                    <Row className="subTopMargin">
                                        <Col  lg={3} md={6} sm={12}>
                                            <h1 className="summaryNumber">
                                                <CountUp start={0} end={90}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="summaryNames">PROJECTS Completed</h4>

                                        </Col>

                                        <Col lg={3} md={6} sm={12}>
                                            <h1 className="summaryNumber">
                                                <CountUp start={0} end={120}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="summaryNames">happy clients</h4>

                                        </Col>


                                        <Col lg={3} md={6} sm={12}>
                                            <h1 className="summaryNumber">
                                                <CountUp start={0} end={50}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="summaryNames">web awards</h4>

                                        </Col>


                                        <Col lg={3} md={6} sm={12}>
                                            <h1 className="summaryNumber">
                                                <CountUp start={0} end={240}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>

                                            </h1>

                                            <h4 className="summaryNames">coffee music</h4>
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

export default Summary;