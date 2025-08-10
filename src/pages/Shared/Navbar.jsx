import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/mainLogo.png";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Tooltip } from "react-tooltip";
import toast from "react-hot-toast";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { user, logOutUser } = use(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        toast.success(`Successfully Logged Out`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li className="text-orange-400 font-extrabold hover:text-amber-600 ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-orange-400 font-extrabold hover:text-amber-600">
        <NavLink to="/availableFoods">Available Foods</NavLink>
      </li>
      {user && (
        <>
          <li className="text-orange-400 font-extrabold hover:text-amber-600">
            <NavLink to="/addFood">Add A Food</NavLink>
          </li>
          <li className="text-orange-400 font-extrabold hover:text-amber-600">
            <NavLink to="/foodRequest">My Food Request</NavLink>
          </li>
          <li className="text-orange-400 font-extrabold hover:text-amber-600">
            <NavLink to="/manageMyFoods">Manage My Foods</NavLink>
          </li>
        </>
      )} 
    </>
  );

  return (
    <div
      className={`navbar md:px-25 lg:px-25 px-8 sticky top-0 z-50 py-5 transition-all duration-300 ease-in-out ${scrolled
          ? "bg-[#065f46] shadow-md"
          : "bg-transparent backdrop-blur-none "
        }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost bg-amber-300 rounded-full lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gradient-to-br from-green-100 to-emerald-200 border border-emerald-900  rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
            {user ? (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li className="text-orange-400 font-extrabold  hover:text-amber-600">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="text-orange-400 font-extrabold  hover:text-amber-600">
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        <Link to="/" className="pl-5 md:pl-0">
          <img src={logo} alt="Logo" className="w-15" />
        </Link>

        <a className=" ml-5 text-2xl text-emerald-600 font-extrabold hidden lg:inline">
          Food<span className="text-amber-600 font-extrabold">Nest</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="gap-4 menu-horizontal text-gray-50 px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-2">
        {user && (
          <>
            <img
              className="w-[40px] h-[40px] rounded-full bg-white border border-gray-300"
              src={user?.photoURL || "userIcon"}
              alt="User"
              data-tooltip-id="user-tooltip"
              data-tooltip-content={user?.displayName || "User"}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "user";
              }}
            />
            <Tooltip
              id="user-tooltip"
              place="bottom"
              style={{ fontSize: "0.875rem", zIndex: 9999 }}
            />
          </>
        )}
        <div className="hidden lg:flex gap-2">
          {user ? (
            <button
              onClick={handleLogout}
              className="relative flex h-[50px] w-40 items-center justify-center text-xl  overflow-hidden bg-green-500 rounded-full text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-amber-300 before:duration-500 before:ease-out cursor-pointer hover:text-green-700 hover:before:h-56 hover:before:w-56"
            >
              <span className="relative z-10">Logout ➺</span>
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="relative flex h-[50px] w-40 items-center justify-center text-xl  overflow-hidden bg-green-500 rounded-full text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-amber-300 before:duration-500 before:ease-out cursor-pointer hover:text-green-700 hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10">Login ➺</span>
                </button>
              </Link>
              <Link to="/register">
                <button className="relative flex h-[50px] w-40 items-center justify-center text-xl  overflow-hidden bg-green-500 rounded-full text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-amber-300 before:duration-500 before:ease-out cursor-pointer hover:text-green-700 hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10">Register ➺</span>
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
