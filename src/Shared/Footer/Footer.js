import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import facebookIcon from '../../images/social icon/facebook.png';
import twitterIcon from '../../images/social icon/twitter.png';
import githubIcon from '../../images/social icon/github.png';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    const navigate = useNavigate();
    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-menu'>
                    <Link to='/'>Home</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/login' >Login</Link>
                </div>
                <div></div>
                <div className='social-icon mt-3'>
                    <img style={{ height: '30px' }} src={facebookIcon} alt="" />
                    <img src={twitterIcon} alt="" />
                    <img src={githubIcon} alt="" />
                </div>
                <div></div>
                <div className='get-in-tech'>
                    <h4 className='mt-5'>GET IN TECH</h4>
                    <button className='btn btn-primary mt-4' onClick={() => navigate('/signup')}>Contact</button>

                </div>
            </div>
            <p className='copyright'>copyright © {year} || by Yeasin Shamim</p>
        </footer>
    );
};

export default Footer;