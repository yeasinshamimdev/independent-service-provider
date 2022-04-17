import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import bannerImage1 from '../../../images/banner1.jpg';
import bannerImage2 from '../../../images/banner2.jpg';
import bannerImage3 from '../../../images/banner3.jpg';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const navigate = useNavigate();
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerImage1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='trainer-title'>KEEP YOUR BODY FIT AND STRONG</h1>
                    <h5 className='trainer-info'>WITH STEVE SHAMIM</h5>
                    <button onClick={() => navigate('/signup')} className='btn btn-primary banner-btn'>BE A MEMBER</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerImage2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 className='trainer-title'>Steve Shamim</h1>
                    <h5 className='trainer-info'>Your New Personal Trainer</h5>
                    <button onClick={() => navigate('/signup')} className='btn btn-primary banner-btn'>BE A MEMBER</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerImage3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 className='trainer-title'>Steve Shamim</h1>
                    <h5 className='trainer-info'>BECOME YOUR STRONGEST SELF</h5>
                    <button onClick={() => navigate('/signup')} className='btn btn-primary banner-btn'>BE A MEMBER</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;