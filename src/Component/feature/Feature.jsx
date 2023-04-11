import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import SingleFeature from './SingleFeature';


const Feature = () => {
    const [Feature, setfeature] = useState([])
    const [filter, setfilter] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        fetch('/feature.json')
            .then(res => res.json())
            .then(data => {
                setfeature(data)
                setfilter(data.slice(0, 4))
            })
    }, [])



    console.log(Feature, filter);

    // console.log(Feature);
    // const sayem = useContext(Contex)

    return (
        <div className='py-12'>
            <div className='py-28 text-center'>
                <h1 className='text-4xl font-bold'>Featured Jobs</h1>
                <p className='mt-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 justify-center gap-12'>
                {
                    isOpen ? Feature.map(sF => <SingleFeature
                        key={sF.id}
                        sF={sF}
                    ></SingleFeature>) : filter.map(sF => <SingleFeature
                        key={sF.id}
                        sF={sF}
                    ></SingleFeature>)
                }
            </div>
            <div className='flex flex-col justify-center mt-12'>
                <button onClick={() => setIsOpen(!isOpen)} className='w-1/6 px-7 text-white py-4 rounded-lg mx-auto bg-purple-500' >{isOpen ? 'see less' : "see all"}</button>
            </div>
        </div>
    );
};

export default Feature;