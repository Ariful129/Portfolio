//mport developer from '../../../assets/hero/developer.png'
import developer from '../../../assets/about/Final4.png'
import shape from '../../../assets/hero/shape-1.svg'
import pdf2 from '../../../assets/work/Resume-wp-Arif.pdf'
import pdf from '../../../assets/about/CV_Ariful_Islam_Final.pdf'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// ..
AOS.init();


const Banner = () => {
    const bgShape ={
        backgroundImage:`url(${shape})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
    return (
        <div>
            <div className="lg: min-h-screen">
            <div className="  flex flex-col-reverse lg:flex-row md:items-center  lg:justify-between pt-20 lg:pt-20 md:pt-28">
               <div className=' text-left md:text-center lg:text-left '>
                <div data-aos="fade-right"  data-aos-delay="" data-aos-duration="1000">
                  <h1 className="text-4xl md:text-7xl font-bold">Hey,I'm Arif<br></br></h1>
                  <p className="pt-4 pb-8">Breif description insights into myself,my vocational<br></br>Journey,and what i engage in professionally</p>
                 <div className='flex flex-col md:flex-row gap-4 mt-4'>
{/* 
                 <Link to='/contact'>
                    <button className="btn rounded-full px-8 bg-[#F5650C] text-white font-semibold">Contact me <CiLocationArrow1  className='text-2xl font-semibold'></CiLocationArrow1> </button>
                 </Link>  */}

<button className="btn rounded-full px-8 bg-[#F5650C] text-white font-semibold"><a href={pdf2} download="Ressume_Ariful">Download Resume</a> <MdOutlineFileDownload className='text-2xl font-semibold'></MdOutlineFileDownload></button>

                  <button className="btn rounded-full px-8 bg-black text-white font-semibold"><a href={pdf} download="CV_Ariful">Download CV</a> <MdOutlineFileDownload className='text-2xl font-semibold'></MdOutlineFileDownload></button>
                 </div>
                 </div> 


            <motion.div
            
            initial={{y:-160,opacity:'0'}}
            animate={{y:[0,30], opacity:"1"}}
          
            transition={{
                duration:"1",
                delay:"0.3", 
               
             }}
            className='text-2xl'>
                <div className='flex flex-row gap-4'>
                    <FaYoutube></FaYoutube>
                     
                    <a href="https://www.linkedin.com/in/ariful-islam-091a80264/" target="_blank" rel="noopener noreferrer">
                     <FaLinkedin></FaLinkedin>
                    </a>

                    


                    <FaGithub></FaGithub>
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                </div>

            </motion.div>

                </div> 

            <motion.div
            initial={{ opacity: 0.5, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className='mb-10 md:mt-0'
            >

{/* <div style={bgShape}></div> */}
             <div >      
             <img src={developer}className="lg:max-w-lg rounded-full " />

             {/* <img src={imgarif}className="lg:max-w-lg rounded-full " /> */}

                </div>  
            </motion.div>               
              
            </div>
            </div>
        </div>
    );
};

export default Banner;