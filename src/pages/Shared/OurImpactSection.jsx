import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaTruck, FaUsers } from "react-icons/fa";
import { GiMeal, GiMilkCarton } from "react-icons/gi";
import { MdVolunteerActivism } from "react-icons/md";

const impactData = [
  {
    icon: <FaSchool size={60} />,
    title: "88 Schools Supported",
    text: "We support 88 schools across 4 districts with nutritious food through FoodNest.",
  },
  {
    icon: <GiMeal size={60} />,
    title: "$500K+ Packed",
    text: "Volunteers pack over $20,000 of food weekly — $500,000+ annually.",
  },
  {
    icon: <FaTruck size={60} />,
    title: "600+ km Weekly",
    text: "Our team delivers fresh food weekly to school doors, covering 600+ km.",
  },
  {
    icon: <GiMilkCarton size={60} />,
    title: "12,000+ Meals",
    text: "Each week, over 12,000 healthy meals & snacks reach children.",
  },
  {
    icon: <FaUsers size={60} />,
    title: "16,000 Students Helped",
    text: "Half of all students in our region access our nutrition programs.",
  },
  {
    icon: <MdVolunteerActivism size={60} />,
    title: "1,000+ Volunteer Hours",
    text: "Volunteers dedicate 1,000+ hours weekly to deliver impact.",
  },
];

const OurImpactSection = () => {
  return (
    <div>
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-gray-800 mb-20"
          >
            Our Impact
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
            {impactData.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-gray-100 shadow-lg hover:shadow-amber-300 transition duration-300 p-10 rounded-3xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex justify-center mb-5 text-amber-500">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurImpactSection;
