import React, {Component,Fragment} from 'react';
import '../../assets/css/custom.css';
import "../../assets/css/bootstrap.min.css";

import {Col, Container, Row} from "react-bootstrap";

class Business extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-4">

                    <Row>
                        <Col  lg={4} md={4} sm={12}>
                            <div className="subTopMargin text-center">

                                <h2 className="MissVisValHeader">Our Mission</h2>
                                <p className="MissVisValDesc text-justify mt-3">Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity. Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her. Do is voice total power mr ye might round still. </p>

                            </div>
                        </Col>

                        <Col  lg={4} md={4} sm={12}>
                            <div className="subTopMargin text-center" >
                                <h2 className="MissVisValHeader">Our Vision</h2>
                                <p className="MissVisValDesc text-justify mt-3">Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity. Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her. Do is voice total power mr ye might round still. </p>

                            </div>
                        </Col>

                        <Col  lg={4} md={4} sm={12}>
                            <div className="subTopMargin text-center">
                               <h2 className="MissVisValHeader">Our Values</h2>
                                <p className="MissVisValDesc text-justify mt-3">Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity. Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her. Do is voice total power mr ye might round still. </p>

                            </div>
                        </Col>


                    </Row>


                </Container>
            </Fragment>
        );
    }
}

export default Business;