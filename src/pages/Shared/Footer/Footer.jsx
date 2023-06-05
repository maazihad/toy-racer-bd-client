import logo from "../../../assets/logo/logo.png";
import { Link } from 'react-router-dom';
import moment from 'moment';

const Footer = () => {
   return (
      <footer className="  bg-green-200 ">
         <div className='footer p-10 text-base-content max-w-7xl mx-auto'>
            <div>
               <Link to="/">
                  <img className='w-20' src={logo} alt="" />
               </Link>
               <p>Toy-Racer BD<br />A Bangladeshi Toy Marketplace. || Since 2023.</p>
               <p>Copyright &copy; <span>{moment().format("MMMM, YYYY")}</span> || All rights reserved by authority.</p>
            </div>
            <div>
               <span className="footer-title">Services</span>
               <Link to="/footer/marketing" className="link link-hover">Marketing</Link>
               <Link to="/" className="link link-hover">Branding</Link>
               <Link to="/" className="link link-hover">Advertisement</Link>
            </div>
            <div>
               <span className="footer-title">Company</span>
               <Link to="/footer/aboutus" className="link link-hover">About us</Link>
               <Link to="/" className="link link-hover">Home</Link>
               <Link to="/footer/contact" className="link link-hover">Contact</Link>
               <Link to="/blog" className="link link-hover">Blog</Link>
            </div>
            <div>
               <span className="footer-title">Legal</span>
               <Link to="/footer/terms" className="link link-hover">Terms & Conditions</Link>
               <Link to="/footer/policy" className="link link-hover">Privacy policy</Link>
               <Link to="/" className="link link-hover">Cookie policy</Link>
            </div>
         </div>
      </footer>
   );
};

export default Footer;