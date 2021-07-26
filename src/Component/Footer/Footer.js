import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faYoutube} from "@fortawesome/free-brands-svg-icons";
class Footer extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="text-center">
                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="footerHeader">Follow Me</h1>
                            <a className="footerIconName" href="_blank"><FontAwesomeIcon  icon={faFacebook} /> Facebook</a><br/>
                            <a className="footerIconName" href="_blank"><FontAwesomeIcon  icon={faYoutube} /> YouTube</a>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="footerHeader">Address</h1>
                            <p className="footerAddress" >Faidabad   Primary    School Road</p>
                            <p className="footerAddress" >Dakshinkhan, Dhaka, Bangladesh</p>
                            <p className="footerAddress" > <FontAwesomeIcon  icon={faEnvelope} /> hossainsafayet187@gmail.com</p>
                            <p className="footerAddress" > <FontAwesomeIcon  icon={faPhone} /> +8801679175553</p>
                        </Col>

                        <Col lg={4} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="footerHeader" >Airi.</h1>
                            <p  className="footerAddress">Mon - Fri: 9:00AM - 8:00PM
                                Closed on Weekends </p>
                            <p  className="footerAddress">@ Copyright 2019
                                Design with love for you </p>
                            <p  className="footerAddress"> <FontAwesomeIcon  icon={faEnvelope} /> hossainsafayet187@gmail.com</p>
                            <p  className="footerAddress"> <FontAwesomeIcon  icon={faPhone} /> +8801679175553</p>
                        </Col>





                    </Row>
                </Container>


            </Fragment>
        );
    }
}

export default Footer;