import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <h1 className='header-title'>GYM WITH SHAMIM</h1>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;