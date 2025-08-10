import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/About.json";
import { Link } from "react-router";

const About = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-16 bg-white text-gray-800">
        
            <div className="md:w-1/2 space-y-8 max-w-xl">
                <h1 className="text-4xl font-semibold tracking-tight border-b-2 border-gray-300 pb-2">
                    About Food Nest
                </h1>

                <p className="text-lg leading-relaxed">
                    Food Nest is a community-driven platform dedicated to reducing food waste and sharing surplus food
                    with those in need. We foster a caring and sustainable environment where fresh, healthy meals are
                    accessible to all.
                </p>

                <p className="text-lg leading-relaxed">
                    Whether you want to share extra food from your kitchen or request meals, Food Nest connects you
                    with your local community to make a positive impact. Join us in nurturing kindness, reducing
                    hunger, and sharing happiness—one meal at a time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                    <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">Our Mission</h3>
                        <p className="text-gray-600 text-sm">
                            To reduce food wastage by connecting donors with those in need.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">Our Vision</h3>
                        <p className="text-gray-600 text-sm">
                            A world with zero food waste and no hunger.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900">Why Choose Us</h3>
                        <p className="text-gray-600 text-sm">
                            Trusted platform with verified food donations.
                        </p>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 max-w-md mt-10 md:mt-0">
                <Lottie animationData={animationData} loop={true} autoplay={true} />
            </div>
        </section>
    );
};

export default About;
