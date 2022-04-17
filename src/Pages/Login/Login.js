import React, { useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const navigate = useNavigate();
    let location = useLocation();
    let [user] = useAuthState(auth);

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user]);

    return (
        <div className='form-container'>
            <h2 className='text-center mb-5'>Please Login</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-4">
                    <Form.Group className='mt-2' as={Row} md="4" controlId="validationCustom01">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Your email"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mt-2' as={Row} md="4" controlId="validationCustom03">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="password"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <p className='forget-password'>Forget Password?</p>
                </Row>
                <div className='d-flex justify-content-center'>
                    <Button className='px-5' type="submit">Login</Button>
                </div>
                <div className='d-flex justify-content-center'>
                    <p className='new-user'>New in gym with Shamim? <span onClick={() => navigate('/signup')} className='signup-toggle'>Sign up</span></p>
                </div>
            </Form>
            <SocialLogin />
        </div>
    );
};

export default Login;