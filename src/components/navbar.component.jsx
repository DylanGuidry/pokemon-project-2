import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Pokeball from './images/NicePng_master-ball-png_8912776.png'
import './navbar.css'

function NavbarPokemon() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="shadow-lg p-3 mb-5 nav-font">
            <Container>
                <img src={Pokeball} width='30px' className="m-4"/>
                <Navbar.Brand className="text-center" href="/">Pokédex</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
);
}

export default NavbarPokemon;
