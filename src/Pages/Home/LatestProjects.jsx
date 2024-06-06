import React from 'react';
import { FaCircleHalfStroke } from 'react-icons/fa6';
import one from '../../../assets/work/1.png'
import two from '../../../assets/work/2.png'
import five from '../../../assets/work/5.png'
import six from '../../../assets/work/6.png'
import ecom from '../../../assets/work/e-commerce.png'

import { Link } from 'react-router-dom';
import { FiGithub } from "react-icons/fi";
import { IoMdLink } from "react-icons/io";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const LatestProjects = () => {

    const show = e =>{
        const div = document.getElementById('1');
       console.log(div);

        console.log(div.children[1]);
        const block = div.children[1];
        const list = block.classList;
        list.remove('opacity-0');
        list.add('opacity-100');


    }
    const hide = e =>{
        const div = document.getElementById('1');
       console.log(div);

        console.log(div.children[1]);
        const block = div.children[1];
        const list = block.classList;
        list.add('opacity-0');
        list.remove('opacity-100');


    }
    return (
        <div data-aos="fade-right" data-aos-duration="1500" className='flex items-center flex-col lg:flex-row lg:justify-between gap-4 mt-32'>

            <div className=' rounded-xl text-left flex flex-col items-start mt-16'>
              <div className='flex flex-row items-center mb-1'>
                <FaCircleHalfStroke className='text-xl mr-2' color='red'></FaCircleHalfStroke>
                <h2 className='font-bold text-2xl '>My Projects</h2>
              </div>
              <p className='mb-6'>
               "Pushing the boundaries of technology to create seamless user
                interactions and elevate digital experiences."</p>
              <Link to="/myprojects">   <button className="btn rounded-full px-8 bg-[#F5650C] text-white font-semibold mb-8">All Projects</button></Link>


            </div>

            <div className='w-3/4'>

            <div className="carousel hidden lg:flex carousel-center rounded-box h-80 ">

                <div  onMouseEnter={show} onMouseLeave={hide}  id="1"   className="carousel-item relative  flex flex-col h-full lg:h-[300px] border-2 m-4 rounded-xl ">
                    <img  src={one} alt="Pizza" className='mx-16  h-full' />
                   <div className='text-white  opacity-0 '>
                     <FiGithub className=' absolute text-3xl p-1 bg-gray-900 rounded-full top-[48%] left-[48%]'></FiGithub>
                     <IoMdLink className=' absolute text-3xl p-1 bg-gray-900 rounded-full top-[48%] left-[38%]'></IoMdLink>
                   </div>
                    <div className='w-full bg-white text-left  text-black mb-10 px-10 py-4 rounded-xl border-b-2'>
                        <h2 className='font-bold text-lg'>Skill Share Website</h2>
                    </div>
                    
                </div> 

                <div className="carousel-item flex flex-col  h-full lg:h-[300px] border-2 m-4 rounded-xl ">
                    <img src={two} alt="Pizza" className='mx-16 h-full' />
                    <div className='w-full bg-white text-left mb-10 px-10 py-4 rounded-xl border-b-2'>
                        <h2 className='font-bold text-lg'>Car Doctor Website</h2>
                        
                    </div>
                    
                </div> 
                <div className="carousel-item flex flex-col  h-full lg:h-[300px]  border-2 m-4 rounded-xl ">
                    <img src={five} alt="Pizza" className='mx-16 h-full' />
                    <div className='w-full bg-white text-left mb-10 px-10 py-4 rounded-xl border-b-2'>
                        <h2 className='font-bold text-lg'>Fruit Brust Website</h2>
                  
                    </div>
                    
                </div> 
                <div className="carousel-item flex flex-col  h-full lg:h-[300px]  border-2 m-4 rounded-xl ">
                    <img src={six} alt="Pizza" className='mx-16 h-full' />
                    <div className='w-full bg-white text-left mb-10 px-10 py-4 rounded-xl border-b-2'>
                        <h2 className='font-bold text-lg'>Hall Management Website</h2>
                  
                    </div>
                    
                </div> 
                
                <div className="carousel-item flex flex-col  h-full lg:h-[300px]  border-2 m-4 rounded-xl ">
                    <img src={ecom} alt="Pizza" className='mx-16 h-full' />
                    <div className='w-full bg-white text-left mb-10 px-10 py-4 rounded-xl border-b-2'>
                        <h2 className='font-bold text-lg'>E-commerce Website</h2>
                  
                    </div>
                    
                </div> 
            
             
            
             </div>
            <div className="carousel-vertical flex lg:hidden carousel-center rounded-box h-72 ">

                <div className="carousel-item flex flex-col h-full lg:h-[300px] border-2 m-4 rounded-xl ">
                    <img src={one} alt="Pizza" className='mx-16 ' />
                    <div className='w-full bg-white text-left mb-10 px-10 py-4 rounded-xl border-b-2'>
                        <h2 className='font-bold text-lg'>Nexa Website</h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    
                </div> 

                <div className="carousel-item flex flex-col  h-full lg:h-[300px] border-2 m-4 rounded-xl ">
                    <img src={two} alt="Pizza" className='mx-16 ' />
                    <div className='w-full bg-white text-left mb-10 px-10 py-4 rounded-xl border-b-2'>
                        <h2 className='font-bold text-lg'>Nexa Website</h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    
                </div> 
                <div className="carousel-item flex flex-col  h-full lg:h-[300px]  border-2 m-4 rounded-xl ">
                    <img src={one} alt="Pizza" className='mx-16 ' />
                    <div className='w-full bg-white text-left mb-10 px-10 py-4 rounded-xl border-b-2'>
                        <h2 className='font-bold text-lg'>Nexa Website</h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    
                </div> 
                <div className="carousel-item flex flex-col  h-full lg:h-[300px]  border-2 m-4 rounded-xl ">
                    <img src={two} alt="Pizza" className='mx-16 ' />
                    <div className='w-full bg-white text-left mb-10 px-10 py-4 rounded-xl border-b-2'>
                        <h2 className='font-bold text-lg'>Nexa Website</h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    
                </div> 
                
             
            
             </div>

            </div>
        </div>
    );
};

export default LatestProjects;