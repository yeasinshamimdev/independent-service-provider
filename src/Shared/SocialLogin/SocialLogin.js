import React, { useEffect } from 'react';
import googleSignInIcon from '../../images/social icon/google.png';
import githubSignInIcon from '../../images/social icon/github.png';
import facebookSignInIcon from '../../images/social icon/facebook.png';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SocialLogin.css';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (googleError || githubError || facebookError) {
            if (googleError?.message === "Firebase: Error (auth/popup-closed-by-user)." || githubError?.message === "Firebase: Error (auth/popup-closed-by-user)." || facebookError?.message === "Firebase: Error (auth/popup-closed-by-user).") {
                toast('popup canceled! user login failed')
            }
            else {
                toast(googleError?.message || githubError?.message || facebookError?.message);
            }
        }

        if (googleUser || githubUser || facebookUser) {
            navigate('/home');
        }
    }, [googleError, githubError, facebookError]);

    if (googleLoading || githubLoading || facebookLoading) {
        return <Spinner />
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center mt-4'>
                <div style={{ width: '48%', borderBottom: '1px solid white' }}></div>
                <div>
                    <p style={{ paddingLeft: '10px', paddingRight: '10px', marginBottom: '0' }}>Or</p>
                </div>
                <div style={{ width: '48%', borderBottom: '1px solid white' }}></div>
            </div>
            <div className='social-login-container d-flex justify-content-center align-items-center'>
                <div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-primary d-block w-100 mt-3'><span><img style={{ width: '30px' }} src={googleSignInIcon} alt="" /></span> Sign In With Google</button>

                    <button onClick={() => signInWithGithub()} className='btn btn-primary d-block w-100 mt-3'><span><img style={{ width: '30px' }} src={githubSignInIcon} alt="" /></span> Sign In With Github</button>

                    <button onClick={() => signInWithFacebook()} className='btn btn-primary d-block w-100 mt-3' > <span><img style={{ width: '28px' }} src={facebookSignInIcon} alt="" /></span> Sign In With Facebook</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SocialLogin;