import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Facebook from '../components/img/facebook.svg'
import Twitter from '../components/img/twitter.svg'
import Instagram from '../components/img/instagram.svg'
import LinkedIn from '../components/img/linkedin.svg'
import Email from '../components/img/email.svg'
import Contact from '../components/img/contact.svg'
import Address from '../components/img/address.svg'
import Stack from 'react-bootstrap/Stack';




const Footer = () => {
    return (
        <section className='Footer fluid py-20'>
            <Container>
                <Stack direction="horizontal" gap={3}>
                    <Stack gap={3}>
                        <div className="p-2 text-white">
                            <img src={Email} alt="email" className='img-fluid' />
                            angeliko.digiteeracademy@gmail.com
                        </div>
                        <div className="p-2 text-white">
                            <img src={Contact} alt="contact" className='img-fluid' />
                            +63 9203487694
                        </div>
                        <div className="p-2 text-white">
                            <img src={Address} alt="address" className='img-fluid' />
                            Binan, Laguna
                        </div>
                    </Stack>
                    <Link to="/" className="ms-auto">
                        <img src={Facebook} alt="facebook" className='img-fluid' />
                    </Link>
                    <Link to="/" >
                        <img src={Twitter} alt="twitter" className='img-fluid' />
                    </Link>
                    <Link to="/">
                        <img src={Instagram} alt="instagram" className='img-fluid' />
                    </Link>
                    <Link to="/">
                        <img src={LinkedIn} alt="linkedin" className='img-fluid' />
                    </Link>
                </Stack>
            </Container>
        </section>
    )
}

export default Footer

