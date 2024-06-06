import React from 'react';
import one from '../../../assets/work/1.png'
import two from '../../../assets/work/2.png'
import five from '../../../assets/work/5.png'

const FullStack = () => {
    return (
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={five} alt="" />

       </div>
    );
};

export default FullStack;