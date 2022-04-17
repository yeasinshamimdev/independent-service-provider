import React, { useEffect } from 'react';
import googleSignInIcon from '../../images/social icon/google.png';
import githubSignInIcon from '../../images/social icon/github.png';
import facebookSignInIcon from '../../images/social icon/facebook.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SocialLogin.css';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    let googleElement;

    useEffect(() => {
        if (googleError) {
            if (googleError?.message === "Firebase: Error (auth/popup-closed-by-user).") {
                toast('User login failed')
            }
            else {
                toast(googleError.message);
            }
        }
    }, [googleError]);

    if (googleLoading) {
        return <Spinner />
    }

    if (googleUser) {
        return (
            <div>
                <p>Signed In User: {googleUser.email}</p>
            </div>
        );
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ width: '48%', borderBottom: '1px solid white' }}></div>
                <div>
                    <p style={{ paddingLeft: '10px', paddingRight: '10px', marginBottom: '0' }}>Or</p>
                </div>
                <div style={{ width: '48%', borderBottom: '1px solid white' }}></div>
            </div>
            <div className='social-login-container d-flex justify-content-center align-items-center'>
                <div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-primary d-block w-100 mt-3'><span><img style={{ width: '30px' }} src={googleSignInIcon} alt="" /></span> Sign In With Google</button>
                    <button className='btn btn-primary d-block w-100 mt-3'><span><img style={{ width: '30px' }} src={githubSignInIcon} alt="" /></span> Sign In With Github</button>
                    <button className='btn btn-primary d-block w-100 mt-3' > <span><img style={{ width: '28px' }} src={facebookSignInIcon} alt="" /></span> Sign In With Facebook</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SocialLogin;