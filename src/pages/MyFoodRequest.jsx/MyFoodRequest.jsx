import React, { use, useEffect, useState } from "react";
import { data, useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";


const MyFoodRequest = () => {
  const { user } = use(AuthContext);
  const [reqFoods, setReqFoods] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/requestedFoods/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          setReqFoods(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user?.email]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">My Food Requests</h2>

      {reqFoods.length === 0 ? (
        <div className="text-center mt-20">
          <h3 className="text-xl text-gray-600 font-semibold">
            🍽️ You have not requested any food yet!
          </h3>
          <p className="text-gray-500 mt-2">
            Browse foods and request what you need.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr className="text-left">
                <th className="p-4"></th>
                <th className="p-4">Product</th>
                <th className="p-4">Donor</th>
                <th className="p-4">Pickup</th>
                <th className="p-4">Expire Date</th>
                <th className="p-4">Request Date</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {reqFoods.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="p-4 text-red-500 font-bold">
                    {index + 1}
                  </td>
                  <td className="p-4 flex md:flex-row flex-col items-center gap-3">
                    <img
                      src={item.food_photo}
                      alt={item.food_name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <p className="font-semibold">{item.food_name}</p>
                  </td>
                  <td className="p-4">{item.donor_name}</td>
                  <td className="p-4">{item.pickup_location}</td>
                  <td className="p-4">{item.expire_date?.slice(0, 10)}</td>
                  <td className="p-4">
                    {new Date(item.request_date).toLocaleDateString()}
                  </td>
                  <td className="p-4">{item.quantity}</td>
                  <td className="p-4 capitalize">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyFoodRequest;
