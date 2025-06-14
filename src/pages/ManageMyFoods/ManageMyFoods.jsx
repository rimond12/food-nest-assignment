import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";
import axios from "axios";
import Loader from "../Loader/Loader";

const ManageMyFoods = () => {
  const { user } = use(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://food-nest-server.vercel.app/allFoodsByEmail/${user.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setMyFoods(data);
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://food-nest-server.vercel.app/allFoods/${id}`).then((res) => {
          if (res.data.deletedCount) {
            const remainingFoods = myFoods.filter((food) => food._id !== id);
            setMyFoods(remainingFoods);

            Swal.fire({
              title: "Deleted!",
              text: "Your Food has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div
        className="relative 
       w-full h-[400px] bg-[linear-gradient(to_right,rgba(0,63,48,0.9),rgba(0,63,48,0.7)),url('https://www.transparenttextures.com/patterns/argyle.png')]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 opacity-80"></div>
        <div className="flex flex-col max-w-7xl mx-auto pl-5 lg:pl-0  gap-3 pt-35">
          <h2 className="relative text-5xl z-10 font-bold text-white">
            Manage My Foods
          </h2>
          <div className="flex gap-5">
            <Link to="/" className="relative text-xl z-10 font-bold text-white">
              Home
            </Link>
            <p className="relative text-xl z-10  text-white">➢</p>
            <p className="relative text-xl z-10 font-bold text-white">
              Manage My Foods
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-10 min-h-screen mt-20">
        <h2 className="text-3xl font-bold text-center mb-8 ">
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
                    <td className="px-4 py-3">{food.quantity}</td>
                    <td className="px-4 py-3 capitalize">{food.status}</td>
                    <td className="px-4 py-3 flex gap-2">
                      <Link to={`/UpdatedFood/${food._id}`}>
                        <button className="bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600 transition">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(food._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
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
    </div>
  );
};

export default ManageMyFoods;
