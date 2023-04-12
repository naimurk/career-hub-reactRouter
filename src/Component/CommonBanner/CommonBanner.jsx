import React from 'react';

const CommonBanner = ({children}) => {
    return (
        <div>
            <div className='bg-slate-200 relative h-52'>
                    <img src="/src/assets/13972-removebg-preview (1).png" className='w-32  absolute top-0 right-0' alt="" />
                     <div className='pt-24'>
                        <h1 className='text-center text-3xl font-bold'>{children}</h1>
                     </div>

                    <img src="/src/assets/13972-removebg-preview (1).png" className='w-32 absolute bottom-0 left-0' alt="" />
                    
            </div>
        </div>
    );
};

export default CommonBanner;