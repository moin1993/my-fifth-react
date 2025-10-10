import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApp from "../Hooks/useApps";
import { ToastContainer, toast } from "react-toastify";
import LoadingSpinner from "../Components/LoadingSpinner";
import { HiDownload } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApp();
  const [isInstalled, setIsInstalled] = useState(false);

  // find the current app
  const app = apps.find((a) => String(a.id) === id);

  // check if already installed
  useEffect(() => {
    const existingApp = JSON.parse(localStorage.getItem("install")) || [];
    const alreadyInstalled = existingApp.some((a) => String(a.id) === id);
    setIsInstalled(alreadyInstalled);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <img src="/public/assets/error-404.png" alt="" />
      </div>
      // <p className="text-center text-red-500 text-xl mt-20">
      //   Failed to load app data
      // </p>
    );
  }

  if (!app) {
    return (
      <p className="text-center font-extrabold  text-red-500 text-5xl mt-20 p-40">
        App not found{" "}
      </p>
    );
  }

  const handleInstall = () => {
    const existingApp = JSON.parse(localStorage.getItem("install")) || [];

    const isDuplicate = existingApp.some((a) => a.id === app.id);
    if (isDuplicate) {
      toast.warn("This app is already installed!");
      setIsInstalled(true);
      return;
    }

    const updatedList = [...existingApp, app];
    localStorage.setItem("install", JSON.stringify(updatedList));
    toast.success("App installed successfully!");
    setIsInstalled(true);
  };

  return (
    <div className="flex justify-center items-center flex-col p-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <figure className="h-80 w-80 overflow-hidden rounded-xl shadow-md">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="text-center md:text-left max-w-md">
          <h2 className="font-bold text-4xl mb-3">{app.title}</h2>
          <p className="text-gray-600 mb-5">
            A card component has a figure, a body, and inside the body there are
            title and action parts.
          </p>

          <div className="flex justify-around text-center mb-5">
            <div>
              <HiDownload className="size-[30px]" />
              <p>Downloads</p>
              <p className="font-bold text-4xl text-green-600">
                {app.downloads}
              </p>
            </div>
            <div>
              <FaStar />
              <p>Average Ratings</p>
              <p className="font-bold text-4xl text-yellow-500">
                {app.ratingAvg}
              </p>
            </div>
            <div>
              <p>Total Reviews</p>
              <p className="font-bold text-4xl text-purple-600">
                {app.reviews}
              </p>
            </div>
          </div>

          <div className="text-center">
            {isInstalled ? (
              <button
                disabled
                className=" bg-green-400 text-white text-2xl p-6 rounded-2xl "
              >
                Installed
              </button>
            ) : (
              <button
                onClick={handleInstall}
                className="btn bg-green-700 text-white text-2xl p-7 rounded-2xl"
              >
                Install now
              </button>
            )}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppsDetails;
