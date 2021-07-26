import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="footerHeader">Quick Connect</h1>

                            <Form>
                                <Form.Group controlId="formBasicEmail">

                                    <p className="contactNameEmail"> Name</p>
                                    <Form.Control type="text" placeholder="Enter Your Name" />

                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">

                                    <p className="contactNameEmail"> Email</p>
                                    <Form.Control type="email" placeholder="Enter email" />

                                </Form.Group>



                                <Form.Group>
                                    <p className="contactNameEmail">Message</p>
                                    <Form.Control  as="textarea" rows="3" />
                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>



                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Contact;