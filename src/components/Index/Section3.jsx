import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Questions from '../img/questions.svg'

const SectionComponent = {
    padding:"80px",
}

const Section3 = () => {
    return (
        <section className='LightSection secondary-bg' id='Contacts' style={SectionComponent}>
            <Container>
                <Row className='justify-content-center align-items-center justify-content-between'>
                    <div className='text-center mb-5'>
                        <h2 className='fw-semibold'>
                            Interested? Send me a message!
                        </h2>
                    </div>
                    <Col lg="5">
                        <Form className='mb-sm-4 mb-md-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='fw-semibold'>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className='fw-semibold'>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                                <div className="d-grid mt-3">
                                    <Button variant="primary" size="md">
                                        Send
                                    </Button>
                                </div>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col lg="5">
                        <img src={Questions} alt="questions" className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section3