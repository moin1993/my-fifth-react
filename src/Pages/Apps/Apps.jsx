import React, { useState } from "react";
import AppCard from "../../Components/AppCard";
import useApp from "../../Hooks/useApps";
import LoadingSpinner from "../../Components/LoadingSpinner";

const Apps = () => {
  const { apps, loading, error } = useApp();
  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();

  const searchApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

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
      <div className="flex flex-col justify-center items-center text-center p-5 gap-3">
        <h1 className="font-bold text-5xl">Our all Apps</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center font-bold text-4xl mb-4">
        <h1>({searchApps.length}): Apps Found</h1>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search app"
            className=""
          />
        </label>
      </div>

      {searchApps.length === 0 ? (
        <img
          className="flex flex-col justify-center items-center  min-h-screen"
          src="/assets/App-Error.png"
          alt=""
        />
      ) : (
        // <p className="text-center text-red-500 text-5xl p-40 font-bold">
        //   App not found
        // </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {searchApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </>
  );
};

export default Apps;
