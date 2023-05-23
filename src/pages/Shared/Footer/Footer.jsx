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
               <p>&copy; All rights reserved  || <span>{moment().format("MMMM, YYYY")}</span> </p>
            </div>
            <div>
               <span className="footer-title">Services</span>
               <a className="link link-hover">Branding</a>
               <a className="link link-hover">Design</a>
               <a className="link link-hover">Marketing</a>
               <a className="link link-hover">Advertisement</a>
            </div>
            <div>
               <span className="footer-title">Company</span>
               <Link className="link link-hover">About us</Link>
               <Link className="link link-hover">Home</Link>
               <Link className="link link-hover">Contact</Link>
               <Link className="link link-hover">Blog</Link>
            </div>
            <div>
               <span className="footer-title">Legal</span>
               <Link className="link link-hover">Terms of users</Link>
               <Link className="link link-hover">Privacy policy</Link>
               <Link className="link link-hover">Cookie policy</Link>
            </div>
         </div>
      </footer>
   );
};

export default Footer;