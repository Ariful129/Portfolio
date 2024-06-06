import React from 'react';

import one from '../../../assets/work/1.png'
import two from '../../../assets/work/2.png'
import six from '../../../assets/work/6.png'


const ReactProject = () => {
    return (
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={six} alt="" />
       
       
            
        </div>
    );
};

export default ReactProject;