import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router";
import Loader from "../Loader/Loader";

const AvailableFoods = () => {
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [twoColumn, setTwoColumn] = useState(false);

  const { data = [], isLoading } = useQuery({
    queryKey: ["availableFoods"],
    queryFn: () =>
      fetch("http://localhost:3000/availableFoods").then((res) => res.json()),
    select: (foods) => foods.filter((f) => f.status === "available"),
  });

  if (isLoading) return <Loader></Loader>;

  const searched = data.filter((f) =>
    f.food_name.toLowerCase().includes(searchText.toLowerCase())
  );

  const sorted = [...searched].sort((a, b) => {
    const d1 = new Date(a.date_time);
    const d2 = new Date(b.date_time);
    return sortOrder === "asc" ? d1 - d2 : d2 - d1;
  });

  return (
    <div>
      <div
        className="relative bg-[url('https://www.transparenttextures.com/patterns/argyle.png')] 
       w-full h-[400px]  bg-gradient-to-br from-green-950 via-green-800 to-green-600 "
      >
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 opacity-80"></div>
        <div className="flex flex-col max-w-7xl mx-auto pl-5 lg:pl-0  gap-3 pt-35">
          <h2 className="relative text-5xl z-10 font-bold text-white">
            Available Foods
          </h2>
          <div className="flex gap-5">
            <Link to="/" className="relative text-xl z-10 font-bold text-white">
              Home
            </Link>
            <p className="relative text-xl z-10  text-white">➢</p>
            <p className="relative text-xl z-10 font-bold text-white">
              Available Foods
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-11/12 mx-auto mt-20">
        <h2 className="text-4xl font-bold text-center my-10">
          All Available Foods
        </h2>

        {/* Modern Filter Controls */}
        <div className=" md:mx-0 flex flex-col md:flex-row md:items-center gap-4 mb-8 justify-between  p-4 rounded-full bg-gradient-to-b from-[#f7f5f2] to-[#ece9e6] text-gray-600 ">
          <input
            type="text"
            placeholder="🔍 Search food by name"
            className="input input-bordered w-full rounded-full md:max-w-xs text-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <div className="flex flex-row gap-2 items-center">
            <label className="font-semibold md:w-30 text-gray-600">
              Sort by:
            </label>
            <select
              className="select select-bordered rounded-full"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Expire Date ↑</option>
              <option value="desc">Expire Date ↓</option>
            </select>
          </div>

          <button
            className="btn btn-outline rounded-full bg-gray-50"
            onClick={() => setTwoColumn(!twoColumn)}
          >
            {twoColumn ? "🧱 3 Column View" : "📦 2 Column View"}
          </button>
        </div>

        {/* Card Grid */}
        <div
          className={`grid grid-cols-1 ${
            twoColumn ? "md:grid-cols-2" : "md:grid-cols-3"
          } gap-10`}
        >
          {sorted.map((f) => {
            const formattedDate = new Date(f.date_time).toLocaleString(
              "en-GB",
              {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            );

            return (
              <div
                key={f._id}
                className="bg-gradient-to-b from-[#f7f5f2] to-[#ece9e6] text-white shadow-md hover:shadow-lg hover:shadow-emerald-800 transition duration-300 max-w-xl mx-auto rounded-2xl"
              >
                <figure className="px-10 pt-10">
                  <img
                    src={f.food_photo}
                    alt=""
                    className="rounded-4xl w-full h-[350px] object-cover"
                  />
                </figure>

                <div className="card-body items-center text-center">
                  <h2 className="card-title text-2xl font-semibold text-black">
                    {f.food_name}
                  </h2>
                  <p className="text-sm mt-2 text-gray-500">
                    Expires: {formattedDate}
                  </p>
                  <div className="card-actions py-5">
                    <Link to={`/availableFoods/${f._id}`}>
                      <button className="relative flex h-[50px] p-5  items-center justify-center text-xl  overflow-hidden bg-amber-300 rounded-full text-green-700 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-green-600 before:duration-300 before:ease-out cursor-pointer hover:text-white hover:before:h-56 hover:before:w-full">
                        <span class="relative z-10">Details ➺</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
