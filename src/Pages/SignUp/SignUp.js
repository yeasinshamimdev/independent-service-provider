import React, { useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [validated, setValidated] = useState(false);
    const [agree, setAgree] = useState(false);

    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let password;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        const email = event.target.email.value;
        password = event.target.password.value;
        const inputConfirmPassword = event.target.confirmPassword.value;
        if (password !== inputConfirmPassword) {
            toast('Password not match! Try again.');
        }
        else if (password.length < 6) {
            toast('Password must be upto 6 character');
        }
        else {
            createUserWithEmailAndPassword(email, password);

        }
    };

    useEffect(() => {
        if (emailUser) {
            navigate('/home')
        }
        if (emailError?.message === "Firebase: Error (auth/invalid-email).") {
            toast('wrong email, Please try again.')
        }
        if (emailError?.message === "Firebase: Error (auth/email-already-in-use).") {
            toast('user already created. Please login!')
        }
        if (emailUser) {
            toast('user created successful')
        }

    }, [emailUser, emailError]);
    console.log(emailError?.message);

    return (
        <div className='form-container'>
            <h2 className='text-center mb-4'>Sign Up</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-4">
                    <Form.Group className='mt-2' as={Row} md="4" controlId="validationCustom01">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
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
                    </Form.Group>
                    <Form.Group className='mt-2' as={Row} md="4" controlId="validationCustom03">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="password"
                            name="password"
                        />
                    </Form.Group>
                    <Form.Group className='mt-2' as={Row} md="4" controlId="validationCustom04">
                        <Form.Label className='w-100'>Confirm Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="confirm password"
                            name="confirmPassword"
                        />
                    </Form.Group>
                </Row>
                <Form.Group className={`mb-3 d-flex justify-content-center ${agree ? '' : 'text-danger'}`}>
                    <Form.Check onClick={() => setAgree(!agree)}
                        required
                        label="Terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                        name="termsConditions"
                    />
                </Form.Group>
                <div className='d-flex justify-content-center'>
                    <Button disabled={!agree} className='px-5' type="submit">Sign Up</Button>
                </div>
                <div className='d-flex justify-content-center'>
                    <p className='new-user'>Already have an account ? <span onClick={() => navigate('/login')} className='signup-toggle'>Login</span></p>
                </div>
                <ToastContainer />
            </Form>
            <SocialLogin />
        </div>
    );
};

export default SignUp;