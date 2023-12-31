import React from 'react';

const Banner = () => {
    return (
        <div className='lg:flex py-5 lg:py-0 lg:items-center'>
            <div className='lg:w-1/2 lg:pr-32'>
                <h1 className=' text-3xl lg:text-7xl font-bold'>One Step Closer To Your <span className='text-purple-400' >Dream Job</span></h1>
                <p className='my-5'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn px-5 py-3 rounded-md text-white bg-purple-500'>Get Started</button>
            </div>
            <div className='lg:w-1/2'>
                 <img src="https://img.freepik.com/free-photo/elegant-man-with-arms-crossed_1149-1347.jpg?w=740&t=st=1681062878~exp=1681063478~hmac=1b0f8f90bde3344a7bd2ad98a6aac5553478262526c4373e0c2d1c958f73b9d3" alt="" />

            </div>
        </div>
    );
};

export default Banner;