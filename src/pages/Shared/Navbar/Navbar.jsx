import { Link } from "react-router-dom";
import userLogo from "../../../assets/user/user.png";
import logo from "../../../assets/logo/logo.png";

const Navbar = () => {



   const menuItems = <>
      <li>
         <Link to="/">Home</Link>
         <Link to="/login">Login</Link>
      </li>
   </>;
   return (
      <header className="bg-red-200">
         <div className="navbar  max-w-7xl mx-auto">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     {menuItems}
                  </ul>
               </div>
               <Link to="/">
                  <div className="flex justify-center items-center">
                     <img className="w-24" src={logo} alt="" />
                     <h2 className="text-4xl font-bold relative">Toy-Racer <sup className="text-xs absolute top-1 -right-5">BD</sup> </h2>
                  </div>
               </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {menuItems}
               </ul>
            </div>
            <div className="navbar-end space-x-4">
               <div className="form-control">
                  <input type="text" placeholder="Search" className="input input-bordered" />
               </div>
               <a className="btn">Get started</a>
               <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                     <img src={userLogo} />
                  </div>
               </label>
            </div>
         </div>
      </header>
   );
};

export default Navbar;