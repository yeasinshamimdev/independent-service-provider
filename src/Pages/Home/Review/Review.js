import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Review.css';

const Review = ({ review }) => {
    const { name, img, profession, rating, description } = review;
    return (
        <div className='review-card'>
            <img src={img} alt="" />
            <div className='review-info'>
                <h5>{name}</h5>
                <p>{profession}</p>
                <p>Rating: {rating} start</p>
                <FontAwesomeIcon className='font-icon-svg' icon={faStar} />
                <FontAwesomeIcon className='font-icon-svg' icon={faStar} />
                <FontAwesomeIcon className='font-icon-svg' icon={faStar} />
                <FontAwesomeIcon className='font-icon-svg' icon={faStar} />
                <FontAwesomeIcon className='font-icon-svg' icon={faStar} />
                <p style={{ textAlign: 'justify', marginTop: '10px' }}>{description}</p>
            </div>
        </div>
    );
};

export default Review;