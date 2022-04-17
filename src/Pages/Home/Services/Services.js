import React from 'react';
import useServices from '../../../hooks/useServices';
import Spinner from '../../../Shared/Spinner/Spinner';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useServices();
    return (
        <div>
            <h1 className='text-center mt-5'>My Services</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            {services.length === 0 && <Spinner />}
        </div>
    );
};

export default Services;