import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <>
      <div className=" p-4">
        <Link
          to={`/Apps/${app.id}`}
          className="border-gray-300 border-2 card bg-base-100 w-70 p-4 gap-5 shadow-sm hover:scale-110 transition ease-in-out"
        >
          <figure className=" h-48 overflow-hidden">
            <img src={app.image} alt="Shoes" className="w-full object-cover " />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{app.title}</h2>

            <div className="flex justify-between items-center ">
              <div className="flex justify-center items-center bg-yellow-100 h-fit p-2 rounded-2xl">
                <img
                  className="h-5"
                  src="/public/assets/icon-ratings.png"
                  alt=""
                />
                <p className="text-green-600 font-bold p-2 rounded-2xl">
                  {app.ratingAvg}
                </p>
              </div>
              <div className="flex justify-center items-center bg-gray-300 p-2 rounded-2xl h-fit">
                <img className="h-5" src="/assets/icon-downloads.png" alt="" />
                <p className="text-purple-800 font-bold ">{app.downloads}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default AppCard;
