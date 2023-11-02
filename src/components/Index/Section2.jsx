import React from 'react'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Html from '../img/html.svg';
import Css from '../img/css.svg';
import JavaScript from '../img/javascript.svg';
import JavaProgramming from '../img/javaprogramming.svg';
import Sass from '../img/sass.svg';
import Bootstrap from '../img/bootstrap.svg';
import ReactFramework from '../img/react.svg';
import Tailwind from '../img/tailwind.svg';
import Csharp from '../img/Csharp.svg';
import Rails from '../img/rails.svg';
import MySql from '../img/mysql.svg';
import Cisco from '../img/cisco.svg';

const CardComponent = {
    backgroundColor: "#efe5f7", 
    border: "1px",
    maxWidth: "300px",
    height: "350px",
    padding: "24px",
}


const Section2 = () => {
    return (
        <section className='ColorSection secondary-bg p-20' id="Skills">
            <Container>
            <div className='text-center text-white mb-3'>
                    <h2 className='fw-semibold'>My Skills</h2>
                </div>
            <Row className='justify-content-center align-items-center text-center'>
                <Col xs="auto" sm="auto" md="auto" lg="auto mb-3">
                    <Card className='hover-transform mb-8' style={CardComponent}>
                        <Card.Img variant="top" src={Html} alt="html" width={250} height={250} />
                    <Card.Body>
                    <Card.Title className='fw-semibold'>HTML</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs="auto" sm="auto" md="auto" lg="auto mb-3">
                    <Card className='hover-transform mb-8' style={CardComponent}>
                        <Card.Img variant="top" src={Css} alt="css" width={250} height={250}/>
                    <Card.Body>
                    <Card.Title className='fw-semibold'>CSS</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs="auto" sm="auto" md="auto" lg="auto mb-3">
                    <Card className='hover-transform mb-8' style={CardComponent}>
                        <Card.Img variant="top" src={JavaScript} alt="javascript" width={250} height={250} />
                    <Card.Body>
                    <Card.Title className='fw-semibold'>JavaScript</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs="auto" sm="auto" md="auto" lg="auto mb-3">
                    <Card className='hover-transform mb-8' style={CardComponent}>
                        <Card.Img variant="top" src={Tailwind} alt="tailwind" width={250} height={250} />
                    <Card.Body>
                    <Card.Title className='fw-semibold'>Tailwind</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs="auto" sm="auto" md="auto" lg="auto mb-3">
                    <Card className='hover-transform mb-8' style={CardComponent}>
                        <Card.Img variant="top" src={Bootstrap} alt="bootstrap" width={250} height={250} />
                    <Card.Body>
                    <Card.Title className='fw-semibold'>Bootstrap</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs="auto" sm="auto" md="auto" lg="auto mb-3">
                    <Card className='hover-transform mb-8' style={CardComponent}>
                        <Card.Img variant="top" src={Sass} alt="sass" width={250} height={250} />
                    <Card.Body>
                    <Card.Title className='fw-semibold'>Sass</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs="auto" sm="auto" md="auto" lg="auto mb-3">
                    <Card className='hover-transform mb-8' style={CardComponent}>
                        <Card.Img variant="top" src={ReactFramework} alt="React" width={250} height={250} />
                    <Card.Body>
                    <Card.Title className='fw-semibold'>React</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs="auto" sm="auto" md="auto" lg="auto mb-3">
                    <Card className='hover-transform mb-8' style={CardComponent}>
                        <Card.Img variant="top" src={Rails} alt="Rails" width={250} height={250} />
                    <Card.Body>
                    <Card.Title className='fw-semibold'>Rails</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs="auto" sm="auto" md="auto" lg="auto mb-3">
                    <Card className='hover-transform mb-8' style={CardComponent}>
                        <Card.Img variant="top" src={JavaProgramming} alt="Java" width={250} height={250} />
                    <Card.Body>
                    <Card.Title className='fw-semibold'>Java</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs="auto" sm="auto" md="auto" lg="auto mb-3">
                    <Card className='hover-transform mb-8' style={CardComponent}>
                        <Card.Img variant="top" src={Csharp} alt="csharp" width={250} height={250} />
                    <Card.Body>
                    <Card.Title className='fw-semibold'>C#</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs="auto" sm="auto" md="auto" lg="auto mb-3">
                    <Card className='hover-transform mb-8' style={CardComponent}>
                        <Card.Img variant="top" src={MySql} alt="mysql" width={250} height={250} />
                    <Card.Body>
                    <Card.Title className='fw-semibold'>MySQL</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>

                <Col xs="auto" sm="auto" md="auto" lg="auto mb-3">
                    <Card className='hover-transform mb-8' style={CardComponent}>
                        <Card.Img variant="top" src={Cisco} alt="cisco" width={250} height={250}/>
                    <Card.Body>
                    <Card.Title className='fw-semibold'>Cisco</Card.Title>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </section>
    )
}

export default Section2