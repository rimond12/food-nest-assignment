import React from "react";
import Lottie from "lottie-react";

// এখানে লোডারের JSON ফাইল ইম্পোর্ট করো
import loaderAnimation from "../../assets/loader.json"; 

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-40 h-40">
        <Lottie animationData={loaderAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
