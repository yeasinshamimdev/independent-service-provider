import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
            <Container>
                <h1 onClick={() => navigate('/')} className='header-title'>GYM WITH SHAMIM</h1>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        <CustomLink to='/home'>Home</CustomLink>
                        <CustomLink to="/services">Service</CustomLink>
                        <CustomLink to="/blogs">Blogs</CustomLink>
                        <CustomLink to="/about">About</CustomLink>
                    </Nav>
                    <Nav>
                        <CustomLink to="/signup">Sign Up</CustomLink>
                        <CustomLink to="login">Login</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;