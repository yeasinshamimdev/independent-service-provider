import React, { useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import Spinner from '../../Shared/Spinner/Spinner';
import './Login.css';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);

        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    };

    const navigate = useNavigate();
    let location = useLocation();
    let [user] = useAuthState(auth);

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || emailUser) {
            navigate(from, { replace: true });
        }
        if (emailError?.message === "Firebase: Error (auth/user-not-found).") {
            toast('No account found! Please register');
        }
        if (emailError?.message === "Firebase: Error (auth/wrong-password).") {
            toast('Wrong password');
        }
    }, [user, emailUser, emailError]);

    console.log(emailError?.message);

    const forgetPassword = async (e) => {
        const email = e.target.email?.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please give a valid email!');
        }
    }

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
                    <button onClick={forgetPassword} className='btn btn-link text-start forget-password'>Forget Password?</button>
                </Row>
                <div className='d-flex justify-content-center'>
                    <Button className='px-5' type="submit">Login</Button>
                </div>
                <div className='d-flex justify-content-center'>
                    <p className='new-user'>New in gym with Shamim? <span onClick={() => navigate('/signup')} className='signup-toggle'>Sign up</span></p>
                </div>
                <ToastContainer />
            </Form>
            <SocialLogin />
        </div>
    );
};

export default Login;