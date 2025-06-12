import React, { use } from "react";
import { AuthContext } from "./../../Context/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { toast } from "react-hot-toast";

const AddFood = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const foodData = Object.fromEntries(formData.entries());
    console.log(foodData);

    // send food data to the db

    axios
      .post("http://localhost:3000/foods", foodData, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Your Food Added Succesfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div>
      <div
        className="relative 
       w-full h-[400px] bg-[linear-gradient(to_right,rgba(0,63,48,0.9),rgba(0,63,48,0.7)),url('https://www.transparenttextures.com/patterns/argyle.png')] "
      >
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 opacity-80"></div>
        <div className="flex flex-col max-w-7xl mx-auto pl-5 lg:pl-0  gap-3 pt-35">
          <h2 className="relative text-5xl z-10 font-bold text-white">
            Add A Food
          </h2>
          <div className="flex gap-5">
            <Link to="/" className="relative text-xl z-10 font-bold text-white">
              Home
            </Link>
            <p className="relative text-xl z-10  text-white">➢</p>
            <p className="relative text-xl z-10 font-bold text-white">
              Add A Food
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg border border-amber-300">
        <h2 className="text-4xl font-extrabold mb-8 text-emerald-700 text-center">
          Add your Food
        </h2>

        <form
          onSubmit={handleAddFood}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Food Name */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-emerald-600">
                Food Name
              </span>
            </label>
            <input
              type="text"
              name="food_name"
              placeholder="Enter food name"
              required
              className="input input-bordered w-full border-amber-400 focus:border-orange-500 focus:ring-2 focus:ring-amber-300"
            />
          </div>

          {/* Food Image */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-emerald-600">
                Food Image URL
              </span>
            </label>
            <input
              type="text"
              name="food_photo"
              placeholder="Enter image URL"
              required
              className="input input-bordered w-full border-amber-400 focus:border-orange-500 focus:ring-2 focus:ring-amber-300"
            />
          </div>

          {/* Food Quantity */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-emerald-600">
                Food Quantity
              </span>
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              required
              className="input input-bordered w-full border-amber-400 focus:border-orange-500 focus:ring-2 focus:ring-amber-300"
            />
          </div>

          {/* Pickup Location */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-emerald-600">
                Pickup Location
              </span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter pickup location"
              required
              className="input input-bordered w-full border-amber-400 focus:border-orange-500 focus:ring-2 focus:ring-amber-300"
            />
          </div>

          {/* Expired Date/Time */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-emerald-600">
                Expired Date/Time
              </span>
            </label>
            <input
              type="datetime-local"
              name="date_time"
              required
              className="input input-bordered w-full border-amber-400 focus:border-orange-500 focus:ring-2 focus:ring-amber-300"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-emerald-600">
                Additional Notes
              </span>
            </label>
            <textarea
              name="notes"
              placeholder="Write any notes…"
              rows="3"
              required
              className="textarea textarea-bordered w-full border-amber-400 focus:border-orange-500 focus:ring-2 focus:ring-amber-300"
            />
          </div>

          {/* Donor Info - ReadOnly */}
          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text font-semibold text-emerald-600">
                Donor Info
              </span>
            </label>

            <div className="flex items-center space-x-4 mb-4">
              <div className="avatar">
                <div className="w-14 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} alt="Donor" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-amber-700">
                  {user?.displayName}
                </p>
                <p className="text-sm text-amber-500">{user?.email}</p>
              </div>
            </div>

            <label className="label">
              <span className="label-text font-semibold text-emerald-600">
                Donor Name
              </span>
            </label>
            <input
              type="text"
              name="donor_name"
              value={user?.displayName}
              readOnly
              className="input input-bordered w-full border-amber-400 my-2"
            />
            <label className="label">
              <span className="label-text font-semibold text-emerald-600">
                Donor Email
              </span>
            </label>
            <input
              type="email"
              name="donor_email"
              value={user?.email}
              readOnly
              className="input input-bordered w-full border-amber-400 my-2"
            />
            <label className="label">
              <span className="label-text font-semibold text-emerald-600">
                Donor Photo URL
              </span>
            </label>
            <input
              type="text"
              name="donor_photo"
              value={user?.photoURL}
              readOnly
              className="input input-bordered w-full border-amber-400 my-2"
            />
          </div>

          {/* Food Status */}
          <div className="md:col-span-2">
            <label className="label">
              <span className="label-text font-semibold text-emerald-600">
                Food Status
              </span>
            </label>
            <input
              type="text"
              name="status"
              value="available"
              readOnly
              className="input input-bordered w-full bg-amber-100 text-amber-800 border-amber-400"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className=" w-full relative flex h-[50px]   items-center justify-center text-xl overflow-hidden bg-amber-300 rounded-full text-emerald-800 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-300 before:ease-out cursor-pointer hover:text-white hover:before:h-56 hover:before:w-full"
            >
              <span class="relative z-10"> Add Food ➺</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFood;
