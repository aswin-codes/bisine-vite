import React from "react";

const ZeroItem = () => {
  return (
    <div className="flex-1 flex flex-col justify-around items-center pt-20 px-6 md:px-8 py-10 md:py-20">
      <h1 className=" text-xl md:text-3xl font-semibold text-black">
        Sorry! Your cart is empty
      </h1>
      <img src={Illust} className="h-60 object-contain" />
      <h1 className="text-xl md:text-3xl font-semibold text-black">
        But we are ready to deliver your need.
      </h1>
    </div>
  );
};

export default ZeroItem;
