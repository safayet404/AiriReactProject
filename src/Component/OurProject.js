import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class OurProject extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="projectBackground p-0" >
                    <div>
                        <Container >
                            <Row>
                                <Col className="text-center">
                                    <h1 className="projectHeader">Let’s Talk About Your Project</h1>
                                    <h5 className="projectSubHeader">We stay on top of our industry by being experts in yours.</h5>

                                    <Button className="projectButton mt-5"  >get a quote</Button>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </Container>

            </Fragment>
        );
    }
}

export default OurProject;