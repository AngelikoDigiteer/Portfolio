import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Portfolio from '../img/portfolio.webp'
import Button from 'react-bootstrap/Button';
import { motion } from "framer-motion"



const HeroSection = () => {
    return (
        <section className='ColorSection primary-bg pt-20 px-20' id='HeroSection'>
            <Container>
                <Row className='align-items-center justify-content-between' >
                    <Col lg="6">
                        <motion.div 
                        initial={{ x: '-100vw'}}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', delay: 0.5 }} className='text-white mb-3'>
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
                        </motion.div>
                        <motion.div 
                        initial={{ x: '-100vw'}}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', delay: 0.5 }}>
                            <Button size='lg' href="#Services">Services</Button>
                        </motion.div>
                    </Col>
                    <Col lg="4">
                        <motion.div 
                        initial={{ x: '100vw'}}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', delay: 0.5 }}>
                            <img src={Portfolio} alt="ageliko"  className='img-fluid'width={600} height={800}/>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default HeroSection