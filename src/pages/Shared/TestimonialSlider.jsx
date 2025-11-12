import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Haney Cooper",
    role: "CEO",
    text: "FoodNest made our food donations smooth and quick. The platform's simplicity and speed exceeded our expectations!",
    rating: 4,
    image: "https://i.ibb.co/3YRwkWZC/portrait-interesting-young-man-winter-clothes-1.jpg",
  },
  {
    name: "Alisha Morgan",
    role: "Nutritionist",
    text: "A brilliant platform to fight food waste and connect with local communities. I love the eco-friendly concept!",
    rating: 5,
    image: "https://i.ibb.co/BKHyjPLS/2148204587.jpg",
  },
  {
    name: "David Li",
    role: "Chef Partner",
    text: "Thanks to FoodNest, surplus meals from our restaurant now reach those in need. Truly impactful!",
    rating: 5,
    image: "https://i.ibb.co/jZHLfxVt/47329.jpg",
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" mt-20  p-10 bg-[#005730] bg-[url('https://www.transparenttextures.com/patterns/skulls.png')]  shadow-md overflow-hidden">
     <div className="flex flex-col md:flex-row gap-5 justify-between items-center max-w-11/12 mx-auto">
       {/* Left Image */}
      <img
        src="/images/5.webp"
        alt="Grocery bag"
        className="w-full md:w-1/3 rounded-xl object-cover"
      />

      {/* Right Testimonial */}
      <div className="w-full md:w-2/3">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <Quote className="text-green-500 mb-3" size={30} />
            <p className="text-gray-700 text-lg mb-4">
              {testimonials[index].text}
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold text-[#1a3b2c]">
                  {testimonials[index].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[index].role}
                </p>
              </div>
            </div>
            {/* Rating */}
            <div className="flex mt-4 text-yellow-500">
              {[...Array(testimonials[index].rating)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
              {[...Array(5 - testimonials[index].rating)].map((_, i) => (
                <Star key={i} size={18} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
     </div>
    </div>
  );
};

export default TestimonialSlider;
