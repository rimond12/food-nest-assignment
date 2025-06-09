import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const ManageMyFoods = () => {
  const { user } = use(AuthContext);
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/allFoods/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyFoods(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user?.email]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-500">
        Manage My Foods
      </h2>
      {myFoods.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven't added any foods yet.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-orange-50">
              <tr className="text-left text-orange-700 uppercase font-semibold">
                <th className="px-4 py-3"></th>
                <th className="px-4 py-3">Photo</th>
                <th className="px-4 py-3">Food Name</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {myFoods.map((food, index) => (
                <tr key={food._id} className="hover:bg-orange-50 transition">
                  <td className="px-4 py-3 font-medium text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3">
                    <img
                      src={food.food_photo}
                      alt="Food"
                      className="w-14 h-14 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-3 text-gray-800 font-semibold">
                    {food.food_name}
                  </td>
                  <td className="px-4 py-3">12</td>
                  <td className="px-4 py-3 capitalize">{food.status}</td>
                  <td className="px-4 py-3 flex gap-2">
                    <button className="bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600 transition">
                      Update
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageMyFoods;
