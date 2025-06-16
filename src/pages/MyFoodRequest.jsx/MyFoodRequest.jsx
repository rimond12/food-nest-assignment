import React, { use, useEffect, useState } from "react";
import { data, Link, useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Loader from "../Loader/Loader";

const MyFoodRequest = () => {
  useEffect(() => {
    document.title = "Requseted Food | FoodNest";
  }, []);

  const { user } = use(AuthContext);
  const [reqFoods, setReqFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://food-nest-server.vercel.app/requestedFoods/${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setReqFoods(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, [user?.email]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div
        className="relative 
       w-full h-[400px] bg-[linear-gradient(to_right,rgba(0,63,48,0.9),rgba(0,63,48,0.7)),url('https://www.transparenttextures.com/patterns/argyle.png')]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 opacity-80"></div>
        <div className="flex flex-col max-w-7xl mx-auto pl-5 lg:pl-0  gap-3 pt-35">
          <h2 className="relative text-5xl z-10 font-bold text-white">
            My Food Requests
          </h2>
          <div className="flex gap-5">
            <Link to="/" className="relative text-xl z-10 font-bold text-white">
              Home
            </Link>
            <p className="relative text-xl z-10  text-white">➢</p>
            <p className="relative text-xl z-10 font-bold text-white">
              My Food Requests
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 mt-20 min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-center">
          My Food Requests
        </h2>

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
                    <td className="p-4 text-red-500 font-bold">{index + 1}</td>
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
                    <td className="p-4 capitalize text-red-600 font-bold">
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyFoodRequest;
