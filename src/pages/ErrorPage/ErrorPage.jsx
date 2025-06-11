import React from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className="">
          <img
            src="https://i.ibb.co.com/6ccHtnBG/5203299.jpg"
            alt=""
            className="w-2xl mx-auto"
          />
        </div>
        <p className="text-5xl font-bold text-center py-5 text-yellow-500">
          {error?.status && "404 - Page Not Found"}
        </p>
        <p className="text-3xl font-bold text-center">
          {error?.error?.message || "something went wrong"}
        </p>
        <div className="text-center mt-5">
          <Link to="/">
            <button className="btn bg-yellow-400 hover:bg-yellow-300 text-black rounded-xl ">
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
