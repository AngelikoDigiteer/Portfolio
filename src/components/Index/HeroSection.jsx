import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Portfolio from '../img/portfolio.webp'
import Button from 'react-bootstrap/Button';

const HeroSection = () => {
    return (
        <section className='ColorSection px-20 pt-20 primary-bg' id='HeroSection'>
            <Container>
                <Row className='align-items-center' >
                    <Col lg="6">
                        <div className='text-white'>
                            <h2 className='fw-semibold'>
                            Hi I'm Angeliko "Ge" Centeno
                            </h2>
                            <p>
                                And I want to  be a front-end developer
                            </p>
                        </div>
                        <div>
                            <Button href="#Services">Services</Button>
                        </div>
                    </Col>
                    <Col lg="6">
                        <img src={Portfolio} alt="ageliko"  className='img-fluid'/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HeroSection