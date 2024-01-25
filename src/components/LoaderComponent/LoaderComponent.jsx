import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoaderComponent = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Spinner animation="border" role="status" className='loader'>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
};

export default LoaderComponent;

