import React, { useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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
                <Form.Group className="mb-3 d-flex justify-content-center">
                    <Form.Check
                        required
                        label="Terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <div className='d-flex justify-content-center'>
                    <Button className='px-5' type="submit">Login</Button>
                </div>
                <div className='d-flex justify-content-center'>
                    <p className='new-user'>New in gym with Shamim? <span onClick={() => navigate('/signup')} className='signup-toggle'>Sign up</span></p>
                </div>
            </Form>
        </div>
    );
};

export default Login;