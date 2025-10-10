import React from "react";
import Banner from "../../Components/Banner/Banner";

import AppCard from "../../Components/AppCard";
import { Link } from "react-router";
import useApp from "../../Hooks/useApps";
import LoadingSpinner from "../../Components/LoadingSpinner";

const Home = () => {
  // const apps = useLoaderData();

  const { apps, loading, error } = useApp();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <img src="/assets/error-404.png" alt="Error" className="w-1/3" />
      </div>
    );
  }

  const HomeApps = apps.slice(0, 8);

  return (
    <div>
      <Banner></Banner>
      <div className="flex flex-col justify-center items-center text-center p-4">
        <h1 className="font-bold text-4xl">Trending Apps</h1>
        <p className="text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-4 ">
        {HomeApps.map((app) => (
          <AppCard app={app}></AppCard>
        ))}
      </div>
      <div className="flex justify-center items-center text-center p-5 ">
        <Link
          to="/Apps"
          className="font-bold text-4xl bg-purple-600 p-4 rounded-2xl text-white"
        >
          {" "}
          Show all
        </Link>
      </div>
    </div>
  );
};

export default Home;
