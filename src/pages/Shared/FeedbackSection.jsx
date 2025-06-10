import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const FeedbackSection = () => {
  return (
    <div className="bg-[#fdf2dc] py-16 px-4 md:px-20 relative overflow-hidden">
      {/* Decorative elements can be added here using absolute images if needed */}

      <motion.h3
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-2xl font-bold text-[#1e1e1e]"
      >
        Best Chicken Fry
      </motion.h3>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center mt-4 max-w-3xl mx-auto text-[#555] text-lg"
      >
        <p>
          "Thanks to your web agency team for their professional work. The
          website they created for my business exceeded my expectations, and my
          clients have given positive feedback about its design and
          user-friendliness."
        </p>
      </motion.div>

      <div className="flex justify-center mt-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Images section */}
      <div className="flex justify-center mt-8 space-x-4">
        <motion.img
          initial={{ rotate: -10, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/your-chicken-image.jpg"
          alt="Dish"
          className="w-32 h-32 object-cover rounded shadow-lg"
        />
        <motion.img
          initial={{ rotate: 10, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          src="/your-client-image.jpg"
          alt="Client"
          className="w-32 h-32 object-cover rounded shadow-lg"
        />
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="w-3 h-3 bg-gray-600 rounded-full inline-block"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full inline-block"></span>
      </div>
    </div>
  );
};

export default FeedbackSection;
