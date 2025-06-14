import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";

const FoodReqModal = ({ food, closeModal }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRequest = (e) => {
    e.preventDefault();
    const form = e.target;

    const requestedFood = {
      food_id: food._id,
      food_name: food.food_name,
      food_photo: food.food_photo,
      quantity: food.quantity,
      donor_name: food.donor_name,
      donor_email: food.donor_email,
      user_email: user.email,
      pickup_location: food.location,
      expire_date: food.date_time,
      request_date: new Date().toISOString(),
      notes: form.notes.value,
      status: "requested",
    };

    axios
      .post("https://food-nest-server.vercel.app/requestedFoods", requestedFood)
      .then((res) => {
        if (res.data.insertedId) {
          return axios.patch(
            `https://food-nest-server.vercel.app/availableFoods/${food._id}`,
            {
              status: "requested",
            }
          );
        }
      })
      .then(() => {
        Swal.fire({
          title: "Food Request Sent Successfully!",
          icon: "success",
        });

        closeModal();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          title: "Failed to request food!",
          icon: "error",
        });
      });
  };

  return (
    <dialog open className="modal">
      <div className="modal-box max-w-xl">
        <h3 className="font-bold text-2xl mb-4 text-center text-emerald-700">
          Confirm Your Food Request
        </h3>
        <form onSubmit={handleRequest} className="space-y-4">
          <div>
            <label className="label">Food Name</label>
            <input
              name="food_name"
              type="text"
              defaultValue={food.food_name}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Food Image URL</label>
            <input
              name="food_photo"
              type="text"
              defaultValue={food.food_photo}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Food ID</label>
            <input
              name="food_id"
              type="text"
              defaultValue={food._id}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Donor Email</label>
            <input
              name="donor_email"
              type="text"
              defaultValue={food.donor_email}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Donor Name</label>
            <input
              name="donor_name"
              type="text"
              defaultValue={food.donor_name}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Your Email</label>
            <input
              name="user_email"
              type="text"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Request Date</label>
            <input
              name="request_date"
              type="text"
              defaultValue={new Date().toISOString()}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Pickup Location</label>
            <input
              name="pickup_location"
              type="text"
              defaultValue={food.location}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Expire Date</label>
            <input
              name="expire_date"
              type="text"
              defaultValue={food.date_time}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Additional Notes</label>
            <textarea
              name="notes"
              placeholder="Any special instruction..."
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          <div className="modal-action justify-end gap-4">
            <button type="submit" className="btn bg-amber-300 rounded-full">
              Request
            </button>
            <button
              onClick={closeModal}
              type="button"
              className="btn btn-outline rounded-full"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default FoodReqModal;
