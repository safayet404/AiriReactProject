import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton} from 'video-react';
import sign from '../../assets/image/signature.png';
class ProcessVideo extends Component {



    constructor(){
        super();
        this.state={
            show:false
        }
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})
    render() {
        return (
            <Fragment>


                <Container className="text-center whoWeAreMargin">

                    <Row>

                        <Col  lg={6} md={6} sm={12}>

                            <h1 className="whoWeAre">Who we are</h1>
                            <p className="whoWeAreDesc text-justify">
                                Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity. Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her. Do is voice total power mr ye might round still.
                                <br/> <br/>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left.
                            </p>

                            <Row>

                                <img className="imageSignature text-justify" alt="signature" src={sign}/>

                            </Row>

                        </Col>



                        <Col lg={6} md={6} sm={12}>

                            <Card className="cardCSS">
                                <p className="videoPlayButton"> <FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle} /></p>

                            </Card>

                        </Col>


                        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                            <Modal.Body>

                                <Player>
                                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                    <BigPlayButton position="center"/>
                                </Player>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={this.modalClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>




                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default ProcessVideo;