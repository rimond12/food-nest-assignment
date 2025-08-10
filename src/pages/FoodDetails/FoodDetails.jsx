import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import { useState } from "react";
import FoodReqModal from "./FoodReqModal";


const FoodDetails = () => {
  const food = useLoaderData();

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.title = "Food Details | FoodNest";
  }, []);

  return (
       <div className="min-h-screen mt-20">
      <div className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-2xl border border-gray-200 mt-12">
        <div className="relative overflow-hidden rounded-2xl shadow-lg group">
          <img
            src={food.food_photo}
            alt={food.food_name}
            className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-500 rounded-2xl" />
        </div>

        <div className="mt-8 space-y-5 text-gray-800">
          <h2 className="text-4xl font-extrabold tracking-tight">{food.food_name}</h2>

          <div className="grid sm:grid-cols-2 gap-6 text-gray-700 text-[17px] leading-relaxed">
            <p>
              <span className="font-semibold text-gray-900">Donated by:</span>{" "}
              {food.donor_name}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              {food.donor_email}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Pickup Location:</span>{" "}
              {food.location}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Quantity:</span>{" "}
              {food.quantity}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Date & Time:</span>{" "}
              {new Date(food.date_time).toLocaleString()}
            </p>
            <p>
              <span className="font-semibold text-gray-900">Status:</span>{" "}
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium shadow ${
                  food.status === "available"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {food.status.charAt(0).toUpperCase() + food.status.slice(1)}
              </span>
            </p>
          </div>

          {food.notes && (
            <div className="mt-4 text-gray-600">
              <h3 className="font-semibold text-gray-900 mb-2">Notes:</h3>
              <p>{food.notes}</p>
            </div>
          )}

          {food.donor_photo && (
            <div className="mt-6 flex items-center space-x-4">
              <img
                src={food.donor_photo}
                alt={food.donor_name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <span className="text-gray-700 font-medium">Donor Photo</span>
            </div>
          )}
        </div>

        <div className="mt-10">
          <button
            onClick={() => setShowModal(true)}
            className="relative flex h-[50px] px-8 items-center justify-center text-xl overflow-hidden bg-amber-300 rounded-full text-emerald-800 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-300 before:ease-out cursor-pointer hover:text-white hover:before:h-56 hover:before:w-full"
          >
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span className="relative z-10">Request This Food</span>
          </button>
        </div>

        {showModal && (
          <FoodReqModal food={food} closeModal={() => setShowModal(false)} />
        )}
      </div>
    </div>
  );
};

export default FoodDetails;
