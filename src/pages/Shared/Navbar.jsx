import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import logo from '../../assets/mainLogo.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll = () =>{
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])

    const links = <>
     <li className="text-orange-400 font-extrabold text-xl hover:text-amber-600 ">
            <NavLink to='/'>Home</NavLink>
          </li>
     <li className="text-orange-400 font-extrabold text-xl hover:text-amber-600">
            <NavLink to='/'>Home</NavLink>
          </li>
        
    </>


  return (
    <div className={`navbar md:px-15 lg:px-20 px-8  sticky top-0 z-50  py-5 transition-all duration-300 ease-in-out  ${scrolled ? 'bg-[#065f46] shadow-md': 'bg-transparent backdrop-blur-none '}`}>
     
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100   rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           {links}
          </ul>
        </div>
        <img src={logo} alt="" className="w-15"/>
        <a className=" ml-5 text-2xl text-emerald-600 font-extrabold">Food <span className="text-amber-600 font-extrabold">Nest</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-4 menu-horizontal text-white  px-1">
         {links}
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink className='btn' to='/register'>Register</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
