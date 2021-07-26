import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class BlogTop extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="contactFixedBanner p-0">
                    <div className="contactFixedBannerOverlay">
                        <Container >
                            <Row>
                                <Col>
                                    <h1 className="contactHeader">Blog Page</h1>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

            </Fragment>
        );
    }
}

export default BlogTop;