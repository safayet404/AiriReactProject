import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import n1 from "../../assets/image/news1.png";
import n2 from "../../assets/image/news2.png";
import n3 from "../../assets/image/news3.png";

class Blog extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="experiment p-0">
                    <div >
                        <Container >
                            <Row>
                                <Col>
                                    <Container  className="latestNewsMargin">

                                        <Row>
                                            <Col  lg={4} md={4} sm={12}>
                                                <div className="padding subTopMargin1 text-center">
                                                    <img className="newsImage" alt=" " src={n1}/>
                                                    <h2 className="newsDateCss">March 8, 2019</h2>
                                                    <p className="newsDescription">63 Businesses to Start for Under $10,000</p>


                                                </div>
                                            </Col>

                                            <Col  lg={4} md={4} sm={12}>
                                                <div className="subTopMargin1 text-center " >
                                                    <img className="newsImage" alt=" " src={n2}/>
                                                    <h2 className="newsDateCss">March 8, 2019</h2>
                                                    <p className="newsDescription">Business Plans: A Step-by-Step Guide</p>

                                                </div>
                                            </Col>

                                            <Col lg={4} md={4} sm={12}>
                                                <div className="subTopMargin1 text-center">
                                                    <img className="newsImage" alt=" " src={n3}/>
                                                    <h2 className="newsDateCss">March 8, 2019</h2>
                                                    <p  className="newsDescription">The 15 Most Profitable Small-Business Industries</p>
                                                </div>
                                            </Col>


                                        </Row>

                                    </Container>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

            </Fragment>
        );
    }
}

export default Blog;