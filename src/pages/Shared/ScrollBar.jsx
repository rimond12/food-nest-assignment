import React from 'react';
import { useEffect, useState } from "react";


const ScrollBar = () => {
   const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const winScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
      <div
        className="h-full bg-amber-400 transition-all duration-75"
        style={{ width: `${scrollTop}%` }}
      />
    </div>
  );
};

export default ScrollBar;