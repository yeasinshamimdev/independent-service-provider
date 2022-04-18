import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServices from '../../hooks/useServices';
import Spinner from '../../Shared/Spinner/Spinner';
import './CheckOut.css';

const CheckOut = () => {
    const [user, loading, error] = useAuthState(auth);
    const [services] = useServices();

    const { serviceId } = useParams();


    if (loading) {
        return <Spinner />
    }

    return (
        <div className='checkout-container'>
            <h2 className='text-center text-primary mt-5 mb-2'>Checkout</h2>
            <div className='checkout-filed'>
                <div>
                    <form className="checkout-form">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder='Your name' required />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={user?.email} readOnly />

                        <label htmlFor="phone">Phone Number</label>
                        <input className='w-50' type="number" name="phone" id="phone" placeholder='Your Phone Number' />
                        <div className='my-3 address'>
                            <label htmlFor="address">Address:</label>
                            <input className='w-25' type="text" name='address' placeholder='Town' />
                            <input className='w-25' type="text" name="" id="" placeholder='District' />
                            <input className='w-25' type="text" name="" id="" placeholder='Country' />
                        </div>
                    </form>
                </div>
                <div className='class-container text-center py-3'>

                    <h5>Class No: {services[parseInt(serviceId - 1)]?.id}</h5>
                    <img className='w-50 rounded' src={services[parseInt(serviceId - 1)]?.img} alt="" />
                    <h4 className='my-2 text-primary'>{services[parseInt(serviceId - 1)]?.name}</h4>
                    <h5 className='my-2 text-primary'>Price: ${services[parseInt(serviceId - 1)]?.price}</h5>
                    <Link to='/checkout/proceed' className='btn btn-primary mt-3'>Proceed Checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;