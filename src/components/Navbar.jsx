import React, { useState } from 'react';
import { Link ,NavLink} from 'react-router-dom';
import { CiLight } from "react-icons/ci";
import '../styles/nav.css'

const Navbar = () => {
    const list = <>
        <div className='flex flex-row gap-6 items-center  text-xl'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/myprojects">My Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <CiLight className='text-2xl'></CiLight>
        </div>
    </>
    
    
    const[fix,setFix] = useState(true);

    const setFixed = ()=>{
      // if(window.scrollY>=392){
      //   setFix(true);
      
      // }
      // else{
      //   setFix(false);
      // }
     


    }
    // console.log(fix);

    window.addEventListener('scroll', setFixed);

    return (
        <div>
<div className={`normalnav`}>
  <div className="">
    {/* <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {
            list
         }
      </ul>
    </div> */}
    <a className="text-2xl  font-bold">Portfolio</a>
  </div>
  <div className=" hidden lg:flex">
    <ul className="font-semibold px-1">
       {list}
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;