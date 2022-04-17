import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header-container">
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <h1 onClick={() => navigate('/')} className='header-title'>GYM WITH SHAMIM</h1>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <Link to='/home'>Home</Link>
                            <Link to="/services">Service</Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link to="/about">About</Link>
                        </Nav>
                        <Nav>
                            <Link to="/signup">Sign Up</Link>
                            <Link to="login">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;