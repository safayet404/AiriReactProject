import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import  i1 from '../../assets/image/mem-2.png';
import i2 from '../../assets/image/mem-1.png';
import i3 from '../../assets/image/mem-3.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter,faGooglePlus} from "@fortawesome/free-brands-svg-icons";

class OurTeam extends Component {
    render() {
        return (
            <Fragment>

                <Container className="teamMargin2">
                    <h1 className="teamHeader commonMargin">Our Team</h1>
                    <p className="teamSubHeader">Let meet our creative and talented human resource</p>
                    <Row>
                        <Col   lg={4} md={4} sm={12}>
                            <div className="teamCard">
                                <img className="teamMemberImage" alt=" " src={i1} />
                                <h2 className="iconMargin serviceHeader">Belle Hogan</h2>
                                <h4 className="teamMemberPost">web developer</h4>
                                <a className="socialIconCss" href="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a className="socialIconCss" href="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a className="socialIconCss" href="_blank"><FontAwesomeIcon icon={faGooglePlus} /></a>



                            </div>
                        </Col>

                        <Col  lg={4} md={4} sm={12}>
                            <div className="teamCard " >
                                <img className="teamMemberImage" alt=" " src={i2} />
                                <h2 className="iconMargin serviceHeader">Lottie Vargas</h2>
                                <h4 className="teamMemberPost">ceo founder of airi</h4>
                                <a className="socialIconCss" href="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a className="socialIconCss" href="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a className="socialIconCss" href="_blank"><FontAwesomeIcon icon={faGooglePlus} /></a>

                            </div>
                        </Col>

                        <Col  lg={4} md={4} sm={12}>
                            <div className="teamCard">
                                <img className="teamMemberImage" alt=" " src={i3} />
                                <h2 className="iconMargin serviceHeader">Cody Stanley</h2>
                                <h4 className="teamMemberPost">ui/ux designer</h4>
                                <a className="socialIconCss" href="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a className="socialIconCss" href="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a className="socialIconCss" href="_blank"><FontAwesomeIcon icon={faGooglePlus} /></a>

                            </div>
                        </Col>


                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default OurTeam;