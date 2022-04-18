import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container p-5'>
            <div>
                <h4>What is the difference between authorization and authentication</h4>
                <h6 className='mt-4'>Authentication:</h6>
                <li>Authentication used to process of verifying who is the user is.</li>
                <li>Authentication works with email, google, facebook etc login method. </li>
                <h6 className='mt-4'>Authorization:</h6>
                <li>Authorization used to know what can login user access in this site. </li>
                <li>Authorization always works when authentication is done. </li>
            </div>
            <div>
                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p className='mt-4'>Because of using firebase:
                    <li>It's Incredibly Built-In Analytics</li>
                    <li>It's make App Development Made Easy</li>
                    <li>It's make authentication very easy.</li>
                </p>
                <p>The other options for implement authentication:
                    <li>Amazon</li>
                    <li>Autodesk</li>
                    <li>Apple</li>
                    <li>Basecamp</li>
                    <li>Bitbucket</li>
                </p>
            </div>
            <div>
                <h4>What other services does firebase provide other than authentication</h4>
                <p className='mt-4'>Firebase provide many other services as well as authentication. There is the Firebase services List below:-
                    <li>Emulator suite</li>
                    <li>Realtime Database</li>
                    <li>Cloud Firestore</li>
                    <li>Storage</li>
                    <li>Hosting</li>
                    <li>Cloud Functions</li>
                </p>
            </div>
        </div>
    );
};

export default Blogs;