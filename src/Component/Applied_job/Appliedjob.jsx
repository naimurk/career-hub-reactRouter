import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SignleAppliedCart from './SignleAppliedCart';

const Appliedjob = () => {
    const data = useLoaderData()
    
    return (
        <div>
             {
                data.map(singleD => <SignleAppliedCart
                key={singleD.id}
                singleD = {singleD}
                ></SignleAppliedCart>)
             }
        </div>
    );
};

export default Appliedjob;