import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

const UpdatedFood = () => {
  const { user } = use(AuthContext);
  const { date_time, food_name, food_photo, location, notes, quantity, _id } =
    useLoaderData();
  const nav_location = useLocation();
  const navigate = useNavigate();
  const handleUpdateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateFood = Object.fromEntries(formData.entries());

    axios
      .put(`https://food-nest-server.vercel.app/allFoods/${_id}`, updateFood, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Your Food has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate(`${nav_location.state ? nav_location.state : "/"}`);
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg border border-amber-300">
      <h2 className="text-4xl font-extrabold mb-8 text-emerald-700 text-center">
        Updated Food
      </h2>

      <form
        onSubmit={handleUpdateGroup}
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
            defaultValue={food_name}
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
            defaultValue={food_photo}
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
            defaultValue={quantity}
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
            defaultValue={location}
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
            defaultValue={date_time}
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
            defaultValue={notes}
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
            className="btn w-full bg-emerald-600 hover:bg-emerald-700 border-0 text-white shadow-lg"
          >
            Updated Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatedFood;
