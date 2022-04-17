import React from 'react';

const Review = ({ review }) => {
    const { name, img, profession, rating, description } = review;
    return (
        <div>
            <img src={img} alt="" />
            <div className='review-info'>
                <h4>{name}</h4>
                <p>{profession}</p>
                <p>Rating: {rating} start</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Review;