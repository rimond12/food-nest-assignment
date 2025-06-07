import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router";

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

  if (isLoading) return <p className="text-center text-xl">Loading...</p>;

  const searched = data.filter((f) =>
    f.food_name.toLowerCase().includes(searchText.toLowerCase())
  );

  const sorted = [...searched].sort((a, b) => {
    const d1 = new Date(a.date_time);
    const d2 = new Date(b.date_time);
    return sortOrder === "asc" ? d1 - d2 : d2 - d1;
  });

  return (
    <div className="max-w-11/12 mx-auto">
      <h2 className="text-4xl font-bold text-center my-10">
        All Available Foods
      </h2>

      {/* Modern Filter Controls */}
      <div className="mx-10 md:mx-30 flex flex-col md:flex-row md:items-center gap-4 mb-8 justify-between  p-4 rounded-t-2xl shadow-sm bg-emerald-800">
        <input
          type="text"
          placeholder="🔍 Search food by name"
          className="input input-bordered w-full md:max-w-xs"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <div className="flex flex-row gap-2 items-center">
          <label className="font-semibold md:w-30 text-white">Sort by:</label>
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Expire Date ↑</option>
            <option value="desc">Expire Date ↓</option>
          </select>
        </div>

        <button
          className="btn btn-outline bg-gray-50"
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
          const formattedDate = new Date(f.date_time).toLocaleString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div
              key={f._id}
              className="bg-amber-500 text-white shadow-md hover:shadow-lg hover:shadow-emerald-800 transition duration-300 max-w-xl mx-auto rounded-2xl"
            >
              <figure className="px-10 pt-10">
                <img
                  src={f.food_photo}
                  alt={f.food_name}
                  className="rounded-xl w-full h-[350px] object-cover"
                />
              </figure>

              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-semibold">
                  {f.food_name}
                </h2>
                <p className="text-sm mt-2">Expires: {formattedDate}</p>
                <div className="card-actions py-5">
                  <Link to={`/availableFoods/${f._id}`}>
                    <button className="px-10 py-3 rounded-full text-xl font-bold shadow-sm bg-green-500 hover:bg-emerald-800 cursor-pointer">
                      Details ➟
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableFoods;
