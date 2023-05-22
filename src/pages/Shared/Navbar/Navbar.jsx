import { Link, NavLink } from "react-router-dom";
import userLogo from "../../../assets/user/user.png";
import logo from "../../../assets/logo/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from 'axios';

const Navbar = () => {
   const { user, logOut } = useContext(AuthContext);
   const [isHovered, setIsHovered] = useState(false);


   const handleMouseEnter = () => {
      setIsHovered(true);
   };

   const handleMouseLeave = () => {
      setIsHovered(false);
   };


   const handleLogOut = () => {
      logOut()
         .then()
         .catch(error => console.log(error.message));
   };

   const menuItems = <>
      <li>
         <NavLink to="/" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
            Home
         </NavLink>
      </li>
      <li>
         <NavLink to="/blog" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
            Blog
         </NavLink>
      </li>
      <li>
         <NavLink to="/allToys" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
            All Toys
         </NavLink>
      </li>
      {
         user &&
         <li>
            <NavLink to="/addAToy" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
               Add a Toy
            </NavLink>
         </li>
      }
      {
         user &&
         <li>
            <NavLink to="/myToys" className={({ isActive }) => isActive ? "bg-red-300 text-black " : ""}>
               My Toys
            </NavLink>
         </li>
      }
      <li>
         {
            user
               ? <button onClick={handleLogOut}>Logout</button>
               : <Link to="/login">Login</Link>
         }
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


               <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
               >
                  {
                     user &&
                     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                           <img src={user.photoURL ? user.photoURL : userLogo} />
                        </div>
                     </label>
                  }
                  {
                     isHovered && (
                        <div className="absolute right-2 mt-1 py-2 w-48 bg-red-100 rounded-md shadow-xl  z-50">
                           <div className="px-4 py-3">
                              <p className="text-sm font-medium text-gray-900">
                                 {user?.displayName}
                              </p>
                           </div>
                        </div>
                     )
                  }
               </div>
            </div>
         </div>
      </header>
   );
};

export default Navbar;