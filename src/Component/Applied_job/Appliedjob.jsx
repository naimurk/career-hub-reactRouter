import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SignleAppliedCart from './SignleAppliedCart';
import CommonBanner from '../CommonBanner/CommonBanner';
// import { sayem } from '../../utilities';

const Appliedjob = () => {
   const [main, setmain] = useState([])
   const data = useLoaderData()
   useEffect(() => {
      setmain(data)

   }, [])



   const Remotefilter = () => {

      const filter = main.filter(Sd => Sd.jobType == "Remote")
      setmain(filter)
   }
   const Onsitefilter = () => {

      const filter = main.filter(Sd => Sd.jobType == "Onsite")
      setmain(filter)
   }



   return (
     <div>
      <CommonBanner>Applied Job</CommonBanner>
       <div className='py-12'>
         <div className=' flex justify-end gap-x-5 mb-5'>
            <button onClick={() => Remotefilter()} className='px-5 py-3 rounded-md text-white bg-purple-500'>Remote</button>
            <button onClick={() => Onsitefilter()} className='px-5 py-3 rounded-md text-white bg-purple-500'>Onsite</button>
         </div>
         <div className='flex flex-col gap-y-8'>
            {
               main.map(singleD => <SignleAppliedCart
                  key={singleD.id}
                  singleD={singleD}
               ></SignleAppliedCart>)
            }
         </div>
      </div>
     </div>
   );
};

export default Appliedjob;