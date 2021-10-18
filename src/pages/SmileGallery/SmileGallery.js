import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sml1 from "../../images/smile/smiling1.jpg"
import sml2 from "../../images/smile/smiling2.jpg"
import sml3 from "../../images/smile/smiling3.jpg"
import sml4 from "../../images/smile/smiling4.jpg"
import sml5 from "../../images/smile/smiling5.jpg"
import sml6 from "../../images/smile/smiling6.jpg"
import "./SmileGallery.css"
const SmileGallery = () => {
    return (
        <Container>

            <Row className="row-container">
                <Col className="img-size " sm> <img className=" img-fluid w-100" src={sml1} alt="" /></Col>
                <Col sm><img className=" img-fluid w-100" src={sml2} alt="" /></Col>
                <Col sm><img className=" img-fluid w-100" src={sml3} alt="" /></Col>
            </Row>
            <Row>
                <Col sm><img className=" img-fluid w-100" src={sml4} alt="" /></Col>
                <Col sm><img className=" img-fluid w-100" src={sml5} alt="" /></Col>
                
            </Row>
        </Container>
    );
};

export default SmileGallery;