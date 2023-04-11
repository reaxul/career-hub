import React from 'react';

const Catagory = ({ catagory }) => {
    return (
        <div className='bg-purple-50 p-4'>
            <img className='mb-3' src={catagory.logo} alt="" />
            <h3 className='font-bold'>{catagory.name}</h3>
            <small className='font-light text-gray-500'>{ catagory.jobsAvailable}+ jobs available</small>
        </div>
    );
};

export default Catagory;