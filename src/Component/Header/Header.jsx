import React, { createContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
export const Contex = createContext(0)
const Header = () => {
    const [id , setid]= useState(0)
    const featureDe = (id) => {
        setid(id)
    }

    const contexValue = {
        id,featureDe
    }
    return (
        <Contex.Provider value={contexValue}>
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
        </Contex.Provider>
    );
};

export default Header;