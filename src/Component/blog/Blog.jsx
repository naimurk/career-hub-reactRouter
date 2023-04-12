import React from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';

const Blog = () => {
    return (

        <div>
            <CommonBanner>Blog</CommonBanner>
            <div className='lg:w-1/2 mx-auto mt-12'>
            
            <div className='bg-slate-300  p-7' >
                <h1 className='text-xl font-bold'> 1. When should you use context API?</h1>
                <p className='mt-2'>answer: Use Context API when you need to pass data/state down multiple levels of components.</p>
            </div>
            <div className='bg-slate-300 p-7' >
                <h1 className='text-xl font-bold'> 2. What is a custom hook?</h1>
                <p className='mt-2'>answer: Custom hook is a reusable function that encapsulates stateful logic and can be shared between different components.</p>
            </div>
            <div className='bg-slate-300 p-7' >
                <h1 className='text-xl font-bold'> 3. what is useRef?</h1>
                <p className='mt-2'>answer: useRef is a hook that creates a mutable object that persists across renders.</p>
            </div>
            <div className='bg-slate-300 p-7' >
                <h1 className='text-xl font-bold'> 4. What is useMemo?</h1>
                <p className='mt-2'>answer: useMemo is a hook that memoizes the result of a function so that it is only recomputed when its dependencies change.</p>
            </div>
        </div>
        </div>
    );
};

export default Blog;