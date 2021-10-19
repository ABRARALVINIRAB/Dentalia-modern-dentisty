import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sideimg from "../../images/side1.jpg"
import "./About.css"

const About = () => {
    return (
        <Container>
            <Row>
                <Col sm>
                    <h1>We Are Dentalia</h1>
                    <h3>A modern dental clinic, specialised in advanced diagnostics and treatment of dental disorders. We guarantee comprehensive diagnostics and offer various forms of dental care, surgical procedures, and cosmetic dental services.</h3>
                </Col>


                <Col sm>
                    <img className='side-img img-fluid ' src={sideimg} alt="" />
                </Col>


            </Row>
            <Row>
                <Col sm>
                    <h1><i class="fas fa-map-marked-alt"></i> Bajitpur,Dhaka</h1>
                    <p>Bangladesh</p>
                </Col>
                <Col sm>
                    <h1><i class="fas fa-headset"></i> <br /> 01246</h1>
                    <p>Call Us Today</p>
                </Col>
                <Col sm>
                    <h1><i class="fas fa-clock"></i> <br /> Opening Hour</h1>
                    <p>Sat-Fri 2.00-10.00pm</p>
                </Col>
                <Col sm>
                    <h1><i class="far fa-calendar-check"></i><br /> Appointment</h1>
                    <Link className="mt-5" to="appointment"><Button>Make Appointment</Button></Link>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
