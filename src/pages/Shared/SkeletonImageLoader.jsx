// SkeletonImageLoader.js
import React from "react";
import { motion } from "framer-motion";

const SkeletonImageLoader = ({ className }) => (
  <div
    className={`relative overflow-hidden rounded-xl bg-gray-300 ${className}`}
  >
    <motion.div
      className="absolute inset-0"
      initial={{ left: "-200%" }}
      animate={{ left: "200%" }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1],
      }}
      // This gradient creates the "shimmer" effect
      style={{
        background:
          "linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)",
      }}
    />
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      {/* <div className="h-8 w-3/4 mb-2 bg-gray-400 rounded-lg"></div>
      <div className="absolute bottom-6 right-6 h-6 w-6 bg-gray-400 rounded-full"></div> */}
    </div>
  </div>
);

export default SkeletonImageLoader;
