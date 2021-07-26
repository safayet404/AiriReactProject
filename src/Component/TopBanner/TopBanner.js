import React, {Component,Fragment} from 'react';
import '../../assets/css/custom.css';
import '../../assets/css/bootstrap.min.css';
import {Button, Col, Container, Row} from "react-bootstrap";

class TopBanner extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topFixedBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col>
                                    <h1 className="topTitle">Create a website <br/>for your business</h1>
                                    <h5 className="topSubtitle subTopMargin">Create a website for your business</h5>
                                    <Button className="subTopMargin buttonCSS" variant="primary">GET A QUOTE</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

            </Fragment>
        );
    }
}

export default TopBanner;