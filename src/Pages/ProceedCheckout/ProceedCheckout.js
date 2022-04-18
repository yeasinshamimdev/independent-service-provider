import React from 'react';
import enrolled from '../../images/enrolled.gif';

const ProceedCheckout = () => {
    return (
        <div>
            <h1 className='text-center text-success mt-5'>Enrolled Successful</h1>
            <div className='d-flex justify-content-center'>
                <img src={enrolled} alt="" />
            </div>
        </div>
    );
};

export default ProceedCheckout;