import React from 'react';
import { FaDotCircle, FaRegDotCircle } from 'react-icons/fa';
import { FaCircleHalfStroke } from 'react-icons/fa6';
import { IoDiamondOutline } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineWebStories } from "react-icons/md";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const MyServices = () => {
    return (
        <div className='flex flex-col items-center lg:items-center mt-32 ' data-aos-offset="100" data-aos-duration="1500" data-aos="fade-up">
           <div className='flex flex-row items-center mb-8'>
             <FaCircleHalfStroke className='text-xl mr-2' color='red'></FaCircleHalfStroke>
             <h2 className='font-bold text-2xl '>My Services</h2>
           </div>

           <div className='flex flex-col items-center lg:flex-row gap-8'>
              <div>
                <form>
                <fieldset className='border-2 border-gray-300 p-10 rounded-xl w-96'>
                   <legend><MdOutlineWebStories className='text-5xl' color='red'></MdOutlineWebStories></legend>
                   <h1  className='font-bold text-xl my-4'>Web Design</h1>
                   <p>"Let's transform your vision into a stunning reality through intuitive web design."</p>

                </fieldset>
                </form>
              </div>

              <div>
              <form>
                <fieldset className='border-2 border-gray-300 p-10 rounded-xl w-96'>
                   <legend><CgWebsite className='text-5xl' color='red'></CgWebsite></legend>

                   <h1  className='font-bold text-xl my-4'>Web Development</h1>
                   <p>"Elevating your online presence with expertly crafted web solutions tailored to your needs."</p>

                </fieldset>
                </form>

              </div>

              <div>
              <form>
                <fieldset className='border-2 border-gray-300 p-10 rounded-xl w-96'>
                   <legend><IoDiamondOutline className='text-5xl' color="red"></IoDiamondOutline></legend>
                   <h1 className='font-bold text-xl my-4'>App Development</h1>
                   
                   <p>"Empowering innovation through cutting-edge app development solutions that redefine user experiences."</p>

                </fieldset>
                </form>

              </div>

           </div>
            
        </div>
    );
};

export default MyServices;