import React from "react";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <>
      <div className=" p-4">
        <Link
          to={`/Apps/${app.id}`}
          className="border-gray-500 border-2 card bg-base-100 w-55 p-4 gap-5 shadow-sm hover:scale-110 transition ease-in-out"
        >
          <figure className=" h-48 overflow-hidden">
            <img src={app.image} alt="Shoes" className="w-full object-cover " />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{app.title}</h2>

            <div className="flex justify-between ">
              <div>
                <p className="text-green-600 bg-gray-300 font-bold p-2 rounded-2xl">
                  {app.ratingAvg}
                </p>
              </div>
              <div>
                <p className="text-purple-800 bg-gray-300 font-bold p-2 rounded-2xl">
                  {app.downloads}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default AppCard;
