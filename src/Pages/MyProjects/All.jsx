import React from 'react';

import one from '../../../assets/work/1.png'
//import two from '../../../assets/work/2.png'
import five from '../../../assets/work/6.png'
import ecom from '../../../assets/work/e-commerce.png'






const All = () => {
    return (
        <div className='grid gap-8   grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <img src={one} alt="" />
            {/* <img  src={two} alt="" /> */}
            <img  src={five} alt="" />
            <img  className='h-[420px]'  src={ecom} alt="" />
           
              
        </div>
    );
};

export default All;