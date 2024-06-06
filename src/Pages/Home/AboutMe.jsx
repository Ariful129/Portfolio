import { CiCalendar, CiCircleChevDown, CiHome, CiPhone } from "react-icons/ci";
import { FaAddressBook, FaCircleHalfStroke, FaFigma } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { FaDotCircle, FaGraduationCap, FaUniversity } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";

//import developer from '../../../assets/hero/developer.png'
import developer from '../../../assets/about/Final4.png'
import shape from '../../../assets/hero/shape-2-light.svg'
import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { TbBrandVscode } from "react-icons/tb";
import { SiNotion } from "react-icons/si";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const AboutMe = () => {

    const[about,setAbout]=useState(1);

    const handleBtn = (id1,id2,id3)=>{
      const btn1 = document.getElementById(id1);
      const btn2 = document.getElementById(id2);
      const btn3 = document.getElementById(id3);
      console.log(btn1);
      const list1 = btn1.classList;//clicked..

      const list2 = btn2.classList;
      const list3 = btn3.classList;
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
      // list1.removeClass('bg-red-500');

       
    }


    return (
    
        <div className="flex flex-col items-center " data-aos-offset="200" data-aos="fade-up" data-aos-duration="1000">

            <div className="text-xl">
                <CiCircleChevDown color="red"></CiCircleChevDown>
            </div>
            <div className="flex items-center flex-row gap-1 mt-20 md:mb-10">
                <FaCircleHalfStroke color="red"></FaCircleHalfStroke>
                <h3 className="font-bold text-xl  " >About Me</h3>
            </div>


            <div>
                <div className="hero ">
                    <div className="hero-content flex-col md:gap-20 lg:gap-48 lg:flex-row">
                        <div className="relative   lg:w-1/2">
                          {/* <img src={shape}  alt="" />   */}
                          <img src={developer} className="
                           h-[550px] w-[600px]
                          
                        
                          "
                           />
                        </div>
                      
                        <div className=" flex flex-col lg:items-start lg:w-[600px]  ">
{/* 
                          <div className="rounded-full w-full mt-8 mb-8  ">
                             <input onClick={()=>setAbout(1)} className="bg-orange-500 active:rounded-full  text-white active:bg-red-700 btn w-[30%] " type="radio" name="options" aria-label="Personal Info" />
                             <input onClick={()=>setAbout(2)} className=" btn w-[30%]" type="radio" name="options" aria-label="Qualifications" />
                             <input onClick={()=>setAbout(3)} className=" btn w-[30%]" type="radio" name="options" aria-label="Skills" />
                          </div> */}

                          <div className="w-full mt-8 mb-8 border-2 rounded-full bg-white">
                            <button id="b1" onClick={()=>{handleBtn("b1","b2","b3");setAbout(1)}} className=" w-40 rounded-full text-white font-bold px-[16px] py-4 inline bg-red-500">Personal Info</button>
                            <button id="b2" onClick={()=>{handleBtn("b2","b1","b3");setAbout(2)}} className="w-40 rounded-full text-black font-bold px-[16px] py-4 inline bg-white">Qualifications</button>
                            <button id="b3" onClick={()=>{handleBtn("b3","b2","b1");setAbout(3)}} className="w-40 rounded-full text-black font-bold px-[16px] py-4 inline bg-white">Skills</button>
                          </div>
                        {
                            about==1 &&
                            <div className="text-left">
                            <h1 className="font-bold text-xl">Unmatched Service Quality for Over 3 Years</h1>
                            <p className="mt-4">I specialize in crafting intutive websites with cutting-edge technology<br></br>
                            Delivering dynamic and engaging experience</p>

                            <div className="grid grid-cols-2 mt-8">
                                <div className="space-y-3">
                                    <p><RxAvatar className="inline mr-2"></RxAvatar>Ariful Islam</p>
                                    <p><MdEmail className="inline mr-2"></MdEmail>arif.cuet129@gmail.com</p>
                                    <p><FaGraduationCap className="inline mr-2"></FaGraduationCap>B.S.C in Computer Science</p>
 
                                </div>
                                <div className="space-y-3">
                                    <p><CiPhone className="inline mr-2"></CiPhone>01908779743</p>
                                    <p><CiCalendar className="inline mr-2"></CiCalendar> Born on 28 Oct,2000</p>
                                    <p><CiHome className="inline mr-2"></CiHome>Narsingdi,Dahka</p>

                                </div>

                                <div className="md:mt-10">
                                    <h3 className="text-red-600">Language Skills</h3>
                                    <hr className="w-full py-1 mt-1"></hr>
                                    <p>Bengali,English</p>
                                </div>
                            </div>
                          </div>
                        }
                        {
                            about==2 &&
                            <div className=" text-left">
                                <h1 className="font-bold text-2xl mb-5 text-left">My Awesome Journey</h1>

                               <div className="flex flex-row gap-10 ">
                                <div className="text-left">
                                  
                                  <div className="flex flex-row gap-4 items-baseline">
                                    <FiShoppingBag></FiShoppingBag>
                                    <p className="text-red-600 mb-4 font-semibold">Experience</p>
                                  </div>

                                   <div className="flex flex-row items-baseline gap-4">
                                    <FaRegCircleDot className="text-sm "></FaRegCircleDot>
                                    <div>
                                      <h2 className="font-bold text-xl mt-2">Code Zone, Bangladesh.</h2>
                                      <p className="mb-1">Front End developer</p>
                                      <p className="text-red-600  font-semibold">Feb’2023– Aug’2023</p>
                                    </div>
                                   </div>

                                   <div className="flex flex-row items-baseline gap-4">
                                   <FaRegCircleDot className="text-sm "></FaRegCircleDot>

                                     <div>
                                      <h2 className="font-bold text-xl mt-2"> CSE Dept. Project, CUET.</h2>
                                      <p className="mb-1">Full Stack developer</p>
                                      <p className="text-red-600  font-semibold" >Nov’2023 –Mar’2024</p>
                                     </div>
                                   </div>

                                   <div className="flex flex-row items-baseline gap-4">
                                    {/* <FaRegCircleDot className="text-sm "></FaRegCircleDot> */}
                                    
                                    {/* <div>
                                     <h2 className="font-bold text-xl mt-2">ABC Inc.</h2>
                                     <p className="mb-1">Software Engineer</p>
                                     <p className="text-red-600  font-semibold">2022-2023</p>
                                    </div> */}

                                   </div>


                                </div>    

                                <div className="text-left">
                                   <div className="flex flex-row gap-4 items-baseline">
                                     <FaGraduationCap></FaGraduationCap>
                                     <p className="text-red-600 mb-4 font-semibold">Education</p>
                                   </div>


                                   <div className="flex flex-row items-baseline gap-4">
                                    <FaUniversity className="text-sm"></FaUniversity>
                                    
                                    <div>
                                     <h2 className="font-bold text-xl mt-2">Charmodhua Adarsha High School</h2>
                                     <p className="mb-1">S.S.C</p>
                                     <p className="text-red-600  font-semibold">2017</p>
                                    </div>

                                   </div>
                                   <div className="flex flex-row items-baseline gap-4">
                                    <FaUniversity className="text-sm"></FaUniversity>
                                    
                                    <div>
                                     <h2 className="font-bold text-xl mt-2">Haji Abed ALi College</h2>
                                     <p className="mb-1">H.S.C</p>
                                     <p className="text-red-600  font-semibold">2019</p>
                                    </div>

                                   </div>
                                   <div className="flex flex-row items-baseline gap-4">
                                    <FaUniversity className="text-sm"></FaUniversity>
                                    
                                    <div>
                                     <h2 className="font-bold text-xl mt-2">CUET</h2>
                                     <p className="mb-1">B.S.C in Computer Science</p>
                                     <p className="text-red-600  font-semibold">Persuing</p>
                                    </div>

                                   </div>

                                </div>
                               </div> 
                            </div>
                          
                        }
                        {
                            about==3 &&
                            <div className="text-left ">
                                <h1 className="font-bold text-3xl">Tools I Use Everyday</h1>
                                <p className="mt-4 font-bold">Skills</p>
                                <hr></hr>
                                <p className="font-semibold mt-2">HTML,CSS3,Tailwind CSS</p>
                                <p className="font-semibold mt-2">React.js,Next.js, Firebase</p>
                                <p className="font-semibold mt-2">Node.js,Express.js,Mongodb</p>
                                <p className="font-semibold mt-2">C, C++, Python, MySQL, Framer Motion </p>


                                <div className="lg:mt-12 font-bold">
                                    <h1 className="">Tools</h1>
                                    <hr className="mb-4"></hr>
                                    <div className="flex flex-row gap-4 text-5xl">
                                      <TbBrandVscode color="red"></TbBrandVscode>
                                      <FaFigma color="red"></FaFigma>
                                      <SiNotion color="red"></SiNotion>
                                    </div>
                                </div>
                            
                            </div>
                        }

                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
       
    );
};

export default AboutMe;