import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Facebook from '../components/img/facebook.svg'
import Twitter from '../components/img/twitter.svg'
import Instagram from '../components/img/instagram.svg'
import LinkedIn from '../components/img/linkedin.svg'
import Contact from '../components/img/contact.svg'
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';



const Footer = () => {
    return (
        <section className='Footer fluid py-20'>
            <Container>
                <Row className='text-white text-center'>
                    <h2>Angeliko Centeno</h2>
                    <h1>angeliko.digiteeracademy@gmail.com</h1>
                    <h3>Golden City, Binan City, Laguna</h3>
                </Row>
                <Stack direction="horizontal" gap={3}>
                    <div className='text-white'>
                        <img src={Contact} alt="contact" className='img-fluid' />
                            +63 9203487694
                    </div>
                    <Link target='blank' to="https://www.facebook.com/aintgeliko" className="ms-auto">
                        <img src={Facebook} alt="facebook" className='img-fluid' />
                    </Link>
                    <Link target='blank' to="https://twitter.com/aintgeliko">
                        <img src={Twitter} alt="twitter" className='img-fluid' />
                    </Link>
                    <Link target='blank' to="https://www.instagram.com/aintgeliko/">
                        <img src={Instagram} alt="instagram" className='img-fluid' />
                    </Link>
                    <Link target='blank' to="https://www.linkedin.com/in/angeliko-roland-j-centeno-77857a267/">
                        <img src={LinkedIn} alt="linkedin" className='img-fluid' />
                    </Link>
                </Stack>
            </Container>
        </section>
    )
}

export default Footer

