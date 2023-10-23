import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
    <section className='Header fluid primary-bg pt-12 pb-12'>
        <Container>
            <Navbar data-bs-theme="dark" expand="lg">
                <Navbar.Brand className='text-white' href="#HeroSection"><b>Angeliko Dev</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link className='text-white' href="#HeroSection">Home</Nav.Link>
                <Nav.Link className='text-white' href="#About">About Me</Nav.Link>
                <Nav.Link className='text-white' href="#Skills">Skills</Nav.Link>
                <Nav.Link className='text-white' href="#Contacts">Contact</Nav.Link>
            </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </section>
    );
}

export default Header