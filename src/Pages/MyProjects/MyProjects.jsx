import React from 'react';
import { motion } from "framer-motion"
import { FaTwitter } from 'react-icons/fa';
import { FaCircleHalfStroke } from 'react-icons/fa6';
import { useState } from 'react';
import All from './All';
import ReactProject from './ReactProject';
import Next from './Next';
import FullStack from './FullStack';
import { Link } from 'react-router-dom';



const MyProjects = () => {


    const[about,setAbout]=useState(1);

    const handleBtn = (id1,id2,id3,id4)=>{
      const btn1 = document.getElementById(id1);
      const btn2 = document.getElementById(id2);
      const btn3 = document.getElementById(id3);
      const btn4 = document.getElementById(id4);
      console.log(btn1);
      const list1 = btn1.classList;//clicked..

      const list2 = btn2.classList;
      const list3 = btn3.classList;
      const list4 = btn4.classList;
      console.log(list1);
      
      list1.remove('bg-white');
      list1.add('bg-red-500');
      list1.add('text-white');
      list1.remove('text-black')

      list2.add('bg-white');
      list2.remove('text-white');
      list2.add('text-black');

      list3.add('bg-white');
      list3.remove('text-white');
      list3.add('text-black');

      list4.add('bg-white');
      list4.remove('text-white');
      list4.add('text-black');
      // list1.removeClass('bg-red-500');

       
    }



    return (
        <div className='flex flex-col items-center'>
            
            <div>
                <div className="flex items-center flex-row gap-1 mt-20 md:mb-10">
                    <FaCircleHalfStroke color="red"></FaCircleHalfStroke>
                    <h3 className="font-bold text-xl  " >My Projects</h3>
                </div>
            </div>
            <div className="  mt-8 mb-8 lg:border-2 lg:rounded-full lg:bg-white">
                            <button id="b1"onClick={()=>{handleBtn("b1","b2","b3","b4");setAbout(1)}}  className=" w-40 rounded-full text-white font-bold px-[16px] lg:py-4 inline bg-red-500">All Projects</button>
                            <button id="b2" onClick={()=>{handleBtn("b2","b1","b3","b4");setAbout(2)}} className="w-40 rounded-full text-black font-bold px-[16px] lg:py-4 inline  bg-white">React.js</button>
                            <button id="b3" onClick={()=>{handleBtn("b3","b2","b1","b4");setAbout(3)}} className="w-40 rounded-full text-black font-bold px-[16px] lg:py-4 inline  bg-white">Next.js</button>
                            <button id="b4" onClick={()=>{handleBtn("b4","b2","b1","b3");setAbout(4)}} className="w-40 rounded-full text-black font-bold px-[16px] lg:py-4 inline  bg-white">FullStack</button>
            </div>

            <div className='w-3/4'>
                {
                    about==1 && <All></All>
                  
                }
                {
                    about==2 && <ReactProject></ReactProject>
                }
                {
                    about==3 && <Next></Next>
                }
                {
                    about==4 && <FullStack></FullStack>
                }
            </div>

            <div>
                <h1 className=' text-3xl mt-8 font-semibold   text-black'>My projects Live Link here</h1>

                <div className='mt-8  grid grid-cols-1'>

                <a href="https://qk-hall.web.app/" target="_blank" rel="noopener noreferrer">
                   <button className="btn rounded-full   px-48 bg-[#F5650C] text-white font-semibold mb-4">Hall management </button>
                </a>

                <a href="https://e-commerce-final-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button className="btn rounded-full   px-48 bg-black text-white font-semibold mb-4">E-commerce WebApp</button>
                </a> 
                

                <a href="https://car-doctor-891f6.web.app/" target="_blank" rel="noopener noreferrer">
                <button className="btn rounded-full px-48 bg-[#F5650C] text-white font-semibold mb-4">Car Doctor WebApp </button>
                </a>
                

               
                 

                </div>
            </div>
            
        </div>
       

    );
};

export default MyProjects;