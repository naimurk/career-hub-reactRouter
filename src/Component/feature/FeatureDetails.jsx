import React, { useContext, useEffect, useState } from 'react';
import { Contex } from '../Header/Header';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDollarSign,faBriefcase,faPhone,faEnvelope,faLocation } from '@fortawesome/free-solid-svg-icons'
import CommonBanner from '../CommonBanner/CommonBanner';




const FeatureDetails =  () => {

    const [mainData, setMainData] = useState([]);
    
    const {id,addtoCart} = useContext(Contex) 
    const {featureId} = useParams()
    console.log(featureId);
    // console.log(id);

     useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('/feature.json');
          const data = await response.json();
          setMainData(data);
        };
        fetchData();
      }, []);
    
      if (!mainData) {
        return <div>Loading...</div>;
      }
    
     
     const loader = mainData.find(singleFe => singleFe.id == featureId)
     console.log(loader);
    
    
    return (
       <div>
        <CommonBanner>Details Job</CommonBanner>
         <div className='lg:flex pb-5 mt-5 gap-x-11'>
            <div className='lg:w-3/4'>
                <p className='my-8'><span className='text-lg font-bold'>Job Description:</span>  {loader?.jobDescription}</p>
                <p className='my-8'><span className='text-lg font-bold'>Job Responsibility:</span>  {loader?.jobResponsibilities}</p>
                <p className='my-8'><span className='text-lg font-bold'>Educational Requirement:</span>  {loader?.educationalRequirement}</p>
                <p className='my-8'><span className='text-lg font-bold'>Experiences:</span>  {loader?.experience}</p>
            </div>
            <div className='cart-container lg:w-3/12 p-7 bg-purple-100 rounded-lg'>
               <h1 className='text-xl border-b-2 pb-3 font-bold'>job details</h1>
               <p className='my-3'><FontAwesomeIcon  className='text-purple-400' icon={faDollarSign} /> <span className='text-lg font-semibold'>salary:</span> {loader?.salary} (per month)</p>
               <p className='my-3'> <FontAwesomeIcon className='text-purple-400'  icon={faBriefcase} /> <span className='text-lg font-semibold'>job title:</span>{loader?.jobTitle}</p>
               <h1 className='text-xl border-b-2 pb-3 font-bold'>Contact information</h1>
               <p className='my-3'><FontAwesomeIcon  className='text-purple-400' icon={faPhone} />  <span className='text-lg font-semibold'>Phone:</span> {loader?.phoneNumber}</p>
               <p className='my-3'> <FontAwesomeIcon className='text-purple-400'  icon={faEnvelope} /> <span className='text-lg font-semibold'>email:</span> {loader?.email}</p>
               <p className='my-3'><FontAwesomeIcon  className='text-purple-400' icon={faLocation} /> <span className='text-lg font-semibold'>address:</span> {loader?.location}</p>
               <Link>
                 <button onClick={()=>addtoCart(loader.id)} className=' mt-5 w-full btn px-5 py-3 rounded-md text-white bg-purple-500'>Apply Now </button>
               </Link>



            </div>
        </div>
       </div>
    );
};

export default FeatureDetails;