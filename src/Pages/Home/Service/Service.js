import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, price, id, description } = service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <div className='service-info'>
                <h4>{name}</h4>
                <h6>Price: ${price}</h6>
                <p>{description.length > 300 ? description.slice(0, 290) + '...' : description}</p>
            </div>
            <div className='d-flex justify-content-center py-3 service-btn'>
                <button className='btn btn-primary w-75'>Check out</button>
            </div>
        </div>
    );
};

export default Service;