import React from "react";
import { useLoaderData } from "react-router";
import { useState } from "react";
import FoodReqModal from "./FoodReqModal";
// import RequestModal from "./RequestModal";

const FoodDetails = () => {
  const food = useLoaderData();
  console.log(food);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md">
      <img src={food.food_photo} alt="" className="w-full rounded" />
      <h2 className="text-3xl font-bold mt-4">{food.food_name}</h2>
      <p className="text-gray-600 mt-2">Donated by: {food.donor_name}</p>
      <p className="text-gray-600">Email: {food.donor_email}</p>
      <p className="text-gray-600">Pickup: {food.location}</p>
      {/* s */}
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-primary mt-6"
      >
        Request
      </button>

      {showModal && (
        <FoodReqModal
          food={food}
          closeModal={() => setShowModal(false)}
        ></FoodReqModal>
      )}
    </div>
  );
};

export default FoodDetails;
