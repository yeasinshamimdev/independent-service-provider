import React, { useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const [validated, setValidated] = useState(false);

    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError,] = useCreateUserWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        const termsConditions = event.target.termsConditions.checked;
        console.log(termsConditions);
        if (password !== confirmPassword) {
            setError('Password not match! Try again.');
            console.log(error);
        } else {
            setError('');
        }

        console.log(email, password, confirmPassword);
    };

    const navigate = useNavigate();

    return (
        <div className='form-container'>
            <h2 className='text-center mb-4'>Sign Up</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-4">
                    <Form.Group className='mt-2' as={Row} md="4" controlId="validationCustom01">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Your name"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mt-2' as={Row} md="4" controlId="validationCustom02">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Your email"
                            name="email"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mt-2' as={Row} md="4" controlId="validationCustom03">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="password"
                            name="password"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='mt-2' as={Row} md="4" controlId="validationCustom04">
                        <Form.Label className='w-100'>Confirm Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="confirm password"
                            name="confirmPassword"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                </Row>
                <Form.Group className="mb-3 d-flex justify-content-center">
                    <Form.Check
                        required
                        label="Terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        name="termsConditions"
                    />
                </Form.Group>
                <div className='d-flex justify-content-center'>
                    <Button className='px-5' type="submit">Sign Up</Button>
                </div>
                <div className='d-flex justify-content-center'>
                    <p className='new-user'>Already have an account ? <span onClick={() => navigate('/login')} className='signup-toggle'>Login</span></p>
                </div>
            </Form>
            <SocialLogin />
        </div>
    );
};

export default SignUp;