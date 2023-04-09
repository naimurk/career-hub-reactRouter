import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div  className='flex py-8  justify-between items-center'>
            <div><h1 className='text-3xl font-bold'>ATS-job</h1></div>
            <ul className='flex gap-x-8 items-center'>
                <Link><li>Statistics</li></Link>
                <Link><li>Applied job</li></Link>
                <Link><li>Blog</li></Link>
            </ul>
            <button className='btn px-5 py-3 rounded-md text-white bg-purple-500'>Start Applying</button>
            
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;