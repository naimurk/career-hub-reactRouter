import React, { useContext } from 'react';
import { Contex } from '../Header/Header';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'


const SignleAppliedCart = ({ singleD }) => {
    const { id, img, jobTitle, jobType, time, salary, location } = singleD
    const {featureDe} = useContext(Contex)
    return (
        <div className='lg:flex border p-4 rounded-lg lg:w-1/2 lg:mx-auto border-purple-300 lg:p-10 justify-between items-center'>
            <div>
                <div className='flex lg:items-center gap-x-2 lg:gap-x-7'>
                    <img className='lg:w-24 lg:h-20 w-12 h-12' src={img} alt="" />
                    <div>
                        <h1 className='text-xl font-bold'>{jobTitle}</h1>
                        <div className='flex gap-x-4 my-5 items-center'><p className='border-2 border-purple-200 rounded-lg px-4 py-2'>{time}</p><p className='border-2 border-purple-200 rounded-lg px-4 py-2'>{jobType}</p></div>
                        <div className='flex gap-x-4 my-5 items-center'><p><FontAwesomeIcon className='text-purple-400' icon={faDollarSign} />  {salary}</p><p><FontAwesomeIcon className='text-purple-400' icon={faLocationDot} />  {location}</p></div>

                    </div>
                </div>
            </div>

            <div>
            <Link to = {`/feature/${id}`}>
              <button onClick={()=>featureDe(id)} className='btn px-5 py-3 rounded-md text-white bg-purple-500'>View Details</button>
            </Link>
            </div>
        </div>
    );
};

export default SignleAppliedCart;