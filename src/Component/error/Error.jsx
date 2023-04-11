import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const { error, status } = useRouteError()
    // console.log(error.message,status);
    return (
        <div className=' mt-7 flex justify-center items-center'>
            <div className='lg:w-1/2 lg:p-12 p-5 bg-red-500 text-white'>
                <p>{error?.message}</p>
                <p>{status ? status : '404'}</p>
                <h1 className='text-3xl'>page not found</h1>
            </div>
        </div>
    );
};

export default Error;