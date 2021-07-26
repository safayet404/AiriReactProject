import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutTop extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="contactFixedBanner p-0">
                    <div className="contactFixedBannerOverlay">
                        <Container >
                            <Row>
                                <Col>
                                    <h1 className="contactHeader">About Us</h1>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

            </Fragment>
        );
    }
}

export default AboutTop;