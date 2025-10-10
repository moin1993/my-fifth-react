import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import LoadingSpinner from "../../Components/LoadingSpinner";
import useApp from "../../Hooks/useApps";

const Installation = () => {
  const [install, setInstall] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
  const [loading, setLoading] = useState(true);
  const { error } = useApp();

  useEffect(() => {
    const savedApp = JSON.parse(localStorage.getItem("install")) || [];
    if (savedApp) setInstall(savedApp);
    setLoading(false);
  }, []);

  const sortedItem = () => {
    if (sortOrder === "size-asc") {
      return [...install].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...install].sort((a, b) => b.size - a.size);
    } else {
      return install;
    }
  };

  const handleUninstall = (id) => {
    const existingApp = JSON.parse(localStorage.getItem("install")) || [];
    let updatedList = existingApp.filter((a) => a.id !== id);
    setInstall(updatedList);

    localStorage.setItem("install", JSON.stringify(updatedList));
    toast("uninstallled done!");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <Error></Error>;
  }

  return (
    <>
      <div className="flex justify-center items-center text-center flex-col p-4 mx-auto ">
        <h1 className="font-bold text-5xl">Your installed App</h1>
        <br />
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between font-bold text-4xl mx-5">
        <h1>App found:({install.length})</h1>

        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by size</option>
            <option value="size-asc">Low-&gt;High</option>
            <option value="size-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      ;
      <div className="space-y-3 ">
        {sortedItem().map((a) => (
          <div className="card card-side bg-base-500 shadow-sm p-4 ">
            <figure>
              <img className="h-20" src={a.image} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-4xl">{a.title}</h2>
              <div className="">
                <div>
                  <p className="text-green-700 font-bold ">{a.downloads}</p>
                  <p className="text-purple-700 font-bold ">{a.size}</p>
                </div>
              </div>

              <div className="card-actions justify-end">
                <button
                  onClick={() => handleUninstall(a.id)}
                  className="btn bg-green-800 p-4 text-white text-2xl rounded-2xl"
                >
                  Unistall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
};

export default Installation;
