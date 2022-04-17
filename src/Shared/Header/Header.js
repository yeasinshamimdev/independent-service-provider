import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
            <Container>
                <h1 onClick={() => navigate('/')} className='header-title'>GYM WITH SHAMIM</h1>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        <CustomLink to='/home'>Home</CustomLink>
                        <CustomLink to="/checkout">Checkout</CustomLink>
                        <CustomLink to="/blogs">Blogs</CustomLink>
                        <CustomLink to="/about">About</CustomLink>
                    </Nav>
                    <Nav>
                        <CustomLink to="/signup">Sign Up</CustomLink>
                        <CustomLink to="login">{user ?
                            <button onClick={() => signOut(auth)} className='btn btn-dark'>Sign out</button> :
                            <button className='btn btn-dark'>Login</button>}
                        </CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;