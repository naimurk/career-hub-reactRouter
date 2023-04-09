import React from 'react';

const SingleCategory = ({singleC}) => {
    return (
        <div className='border-2 p-12 bg-purple-50'>
             <img src={singleC.img} alt="" />
             <h1>{singleC.jobCategoryTitle}</h1>
             <p> {singleC.jobAvailable} + job available</p>
        </div>
    );
};

export default SingleCategory;