import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col justify-around items-center ">
        <div className="flex flex-col items-center p-3">
          <h1 className="font-bold text-5xl text-center">
            We Build <br />{" "}
            <span className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              productive
            </span>{" "}
            app
          </h1>
          <p className="p-3 text-center">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br /> Our goal is to turn your
            ideas into digital experiences that truly make an impact.
          </p>
        </div>
        <div className="p-3 space-x-4 text-2xl font-bold">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">Google Play</button>
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">App Store</button>
          </a>
        </div>
        <div>
          <img src="/public/assets/hero.png" alt="" />
        </div>
      </div>
      <div className=" bg-purple-600 flex flex-col justify-center items-center text-white ">
        <div>
          <h1 className="p-5 text-4xl font-bold mt-7">
            Trusted by Millions, Built for You
          </h1>
        </div>
        <div className="flex justify-between gap-10 p-10 mb">
          <div className="text-center">
            <p>Total Downloads</p>
            <h1 className="font-bold text-3xl p-2">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div className="text-center">
            <p>Total Downloads</p>
            <h1 className="font-bold text-3xl p-2">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div className="text-center">
            <p>Total Downloads</p>
            <h1 className="font-bold text-3xl p-2">29.6M</h1>
            <p>21% more than last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
