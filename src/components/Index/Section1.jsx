import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Programming from '../img/programming.svg';
import Accordion from 'react-bootstrap/Accordion';
import Pup from '../img/puplogo.webp'


const Section1 = () => {
    return (
        <section className='LightSection secondary-bg p-20' id='About' >
            <Container>
                <Row className='align-items-center justify-content-between'>
                    <div className='text-center'>
                        <h2 className='fw-semibold'>
                            About Me
                        </h2>
                    </div>
                    <Col lg="6" className='order-lg-last' >
                        <Accordion defaultActiveKey={['0']} alwaysOpen className='mb-sm-4 mb-md-4'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Introduction</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cumque debitis at cupiditate, quas recusandae commodi! Mollitia ducimus impedit incidunt vitae recusandae, quam, possimus optio nulla error itaque nobis veritatis!
                            </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Background</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col lg="4"><img className='img-fluid' variant="middle" src={Pup} alt="pup" /></Col>
                                    <Col>
                                    <p>Graduated from Polytechnic University of the Philippine, Binan Campus</p>
                                    <p>With a degree of Bachelor of Science in Information Technology</p>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col lg="5" className=''>
                        <img src={Programming} alt="education" className='img-fluid' />
                    </Col>
                </Row> 
            </Container>
        </section>
    )
}

export default Section1