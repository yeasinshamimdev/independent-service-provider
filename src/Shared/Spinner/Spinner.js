import React from 'react';

const Spinner = () => {
    return (
        <div className="spinner-border text-primary d-flex justify-content-center" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default Spinner;