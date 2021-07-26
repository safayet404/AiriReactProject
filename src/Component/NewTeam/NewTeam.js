import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import  i1 from '../../assets/image/mem-2.png';
import i2 from '../../assets/image/mem-1.png';
import i3 from '../../assets/image/mem-3.png';
class NewTeam extends Component {
    render() {
        return (
            <Fragment>

                <Container className="text-center">
                    <h1 className="teamHeader subTopMargin">Our Team</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img alt=" " src={i1}/>
                                <h2 className="serviceName">Web Development</h2>
                                <p className="serviceDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>


                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center " >
                                <img alt=" " src={i2}/>
                                <h2 className="serviceName">Mobile Development</h2>
                                <p className="serviceDescription">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img alt=" " src={i3}/>
                                <h2 className="serviceName">Graphics Design</h2>
                                <p  className="serviceDescription">I desing modern user interface and other graphical components for your business and instiution.</p>
                            </div>
                        </Col>


                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default NewTeam;