import React from 'react';
import shipped from '../../images/shipped.png';
import shield from '../../images/shield.png';
import maintenance from '../../images/maintenance.png';

const ServiceProvide = () => {
    return (
        <div className='container d-lg-flex justify-space-between mt-5 ps-lg-5 pe-lg-5'>
            <div className='text-center w-100'>
                <img width="60px" src={shipped} alt="" />
                <h5 className='mt-1'>Fast national & international delivery</h5>
            </div>
            <div className='text-center w-100'>
                <img width="60px" src={shield} alt="" />
                <h5 className='mt-1'>Secure Checkout our partners</h5>
            </div>
            <div className='text-center w-100'>
                <img width="60px" src={maintenance} alt="" />
                <h5 className='mt-1'>Fast and free Customer support</h5>
            </div>
        </div>
    );
};

export default ServiceProvide;