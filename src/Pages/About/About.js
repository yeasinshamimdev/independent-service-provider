import React from 'react';
import developer from '../../images/developer.jpg';
import './About.css';

const About = () => {
    return (
        <div className='about-container my-5 px-5'>
            <div className='image-container px-4 mx-auto d-flex justify-content-center'>
                <img className='w-75' src={developer} alt="" />
            </div>
            <div >
                <h1 className='text-center mt-3'>Hi there,</h1>
                <h2 className='text-center mb-4'>I am Yeasin Shamim</h2>
                <p className='text-justify'>My goals:- I have big dream to be a full stack web developer. I have already start this journey with programming hero community. My skills is:- HTML, CSS, Bootstrap, tailwind css, javaScript, Regex, React Js, Firebase, Material UI, Figma, React firebase hooks etc. I am very hard working person. I love pain. Because without pain you can't gain anything. So I want to very hard work for be a web developer. </p>
            </div>
        </div>
    );
};

export default About;