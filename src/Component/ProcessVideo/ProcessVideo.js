import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css';
import {Player,BigPlayButton} from 'video-react';
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


                <Container className="text-center commonMargin">

                    <Row>

                        <Col  lg={6} md={6} sm={12}>

                            <p className="processHeader">The primary goals of business process improvement</p>
                            <p className="processMargin processDescription" ><FontAwesomeIcon className="checkIcon" icon={faCheck}/>  Reducing process completion time</p>
                            <p className="processMargin processDescription" ><FontAwesomeIcon className="checkIcon" icon={faCheck}/>  Identifying wasted efforts</p>
                            <p className="processMargin processDescription" ><FontAwesomeIcon className="checkIcon" icon={faCheck}/>  Improving the quality of work output</p>
                            <p className="processMargin processDescription" ><FontAwesomeIcon className="checkIcon" icon={faCheck}/>  Achieving regulatory compliance</p>
                            <p className="processMargin processDescription" ><FontAwesomeIcon className="checkIcon" icon={faCheck}/>  Reducing friction in the process</p>
                            <Button className="subTopMargin processButtonCSS" variant="primary">CONTACT US</Button>

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