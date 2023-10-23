import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Portfolio from '../img/portfolio.webp'
import Button from 'react-bootstrap/Button';

const SectionComponent = {
    padding:"80px 80px 0 80px  ",
}

const HeroSection = () => {
    return (
        <section className='ColorSection primary-bg' id='HeroSection' style={SectionComponent}>
            <Container>
                <Row className='align-items-center justify-content-between' >
                    <Col lg="6">
                        <div className='text-white mb-3'>
                            <div>
                                <h1 className='fw-semibold display-3'>
                                Hi I'm Angeliko "Ge" Centeno
                                </h1>
                            </div>
                            <div>
                                <p>
                                And I want to  be a front-end developer
                                </p>
                            </div>
                        </div>
                        <div>
                            <Button href="#Services">Services</Button>
                        </div>
                    </Col>
                    <Col lg="4">
                        <img src={Portfolio} alt="ageliko"  className='img-fluid'/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HeroSection