import React from "react";
import Logo from "../Logo.png";
import Profile from "./assets/profile.png";

const InfoSlide = () => {
  return (
    <div className=" bg-cyan-200 p-5 rounded-2xl md:flex flex-col hidden md:max-w-sm lg:max-w-md">
      <div className="flex items-center">
        <div>
          <img src={Logo} width={25} height={25} className="drop-shadow-2xl" />
        </div>
        <p className="text-black text-2xl ml-2 font-medium">Bisine</p>
      </div>
      <div className="flex flex-col justify-end flex-1 gap-5">
        <div className="font-semibold text-4xl">
          <p className="text-black">Let us help you run</p>
          <p className="text-blue-600">Business.</p>
        </div>
        <div>
          <p className="text-gray-500">
            Empowering Commerce: Where Buyers and Sellers Thrive Together.
          </p>
        </div>
        <div className="bg-gray-700 rounded-lg p-5 gap-5 flex flex-col mt-10">
          <p className="text-gray-400 ">
            Creating my digital shop was a breeze. I had my products online and
            ready for sale in minutes. It's a user-friendly platform that
            delivers on its promise
          </p>
          <div className="flex items-center gap-5">
            <div>
              <img src={Profile} height={40} width={40} />
            </div>
            <p className="text-white font-semibold">Karthick</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSlide;
