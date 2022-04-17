import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import fitman from '../../../images/fitman.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../../hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const navigate = useNavigate();
    const [reviews] = useReviews();
    return (
        <div>
            <Banner />
            <div className='home-container pt-4'>
                <div>
                    <img className='w-100' src={fitman} alt="" />
                </div>
                <div className='px-5'>
                    <h1 className='mt-5 fs-2'>BECOME YOUR STRONGEST SELF</h1>
                    <p className='text-danger'>EXCERCISE SMARTER, FEEL BETTER, LIVE LONGER</p>
                    <p style={{ textAlign: 'justify' }}>
                        BECOME YOUR STRONGEST SELF
                        EXCERCISE SMARTER, FEEL BETTER, LIVE LONGER.
                        Hi, my name is Shamim and I am a Health and GYM Professional. My training programs will enable you to lose those unwanted pounds, gain muscle tone, and improve your overall health and appearance. You will be completely revitalized by my program!</p>
                    <div>
                        <button onClick={() => navigate('/login')} className='btn btn-primary'>Let's Train Now</button>
                    </div>
                </div>
            </div>
            <div className='service-home-container'>
                <Services />
            </div>
            <div>
                <h1 className='text-center mt-5'>WHAT PEOPLE ARE SAYING</h1>
                <div className='review-container'>
                    {
                        reviews.map(review => <Review key={review.id} review={review} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;