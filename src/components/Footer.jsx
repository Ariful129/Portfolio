import { Link } from "react-router-dom";




const Footer = () => {
    return (
        <footer className="footer p-10 mt-4 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-[#6f9196] text-white  font-extralight rounded-b-2xl">
            <div>
                <h1 className="text-2xl font-bold">Ariful Islam</h1>
                <p className=" text-xm">  A freelance web designer and developer from Dhaka, Bangladesh.
            I always make websites that have unique designs and also has a good
            performance rate.</p>
                
                
            </div>
            <div className=" lg:ml-8">
                <span className="footer-title">Important Links</span>
                 <Link to='/'>Home</Link>
                 <Link to='/myprojects'>Projects</Link>
                 <Link to='/contact'>Contact</Link>
            </div>
            <div>
                <span className="footer-title">Contac Info</span>
                <a className="link link-hover">+8801908779743</a>
                <a className="link link-hover">arif.cuet129@gmail.com</a>
                <a className="link link-hover">Dhaka, Bangladesh</a>
            </div>
            <div>
                <span className="footer-title">Socials Links</span>
                <a href="https://www.linkedin.com/in/ariful-islam-091a80264/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
