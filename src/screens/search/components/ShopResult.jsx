import React from "react";
import { useNavigate } from "react-router-dom";

const ShopResult = () => {
  const navigate = useNavigate();
  const shop = {
    shop_logo_url:
      "https://i.pinimg.com/736x/ce/56/99/ce5699233cbc0f142250b520d967dff7.jpg",
    shop_name: "Aswin's Clothing",
    shop_description: "A hand designed and hand made clothing brand in Chennai",
    shop_tags: ["Fashion", "Clothing", "Menswear"],
    shop_id: "aswin-cloth",
  };
  return (
    <>
    <div
      onClick={() => navigate(`/${shop.shop_id}`)}
      className="flex cursor-pointer items-center px-2 sm:px-4 py-2 gap-2 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12  "
    >
      <div className="w-24 min-w-max">
        <img
          src={shop.shop_logo_url}
          className="w-16 h-16 md:h-24 md:w-24 rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-around  overflow-x-auto">
        <h1 className="text-lg font-semibold md:text-xl ">
          {shop.shop_name}
        </h1>
        <p className="text-gray-600 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          {shop.shop_description.substring(0, 50)}...
        </p>
        <div className="flex gap-2">
          {shop.shop_tags.map((e) => (
            <div className="px-2 py-1 rounded bg-blue-300 border text-sm border-blue-500">
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
    <hr className="my-2 sm:my-4" />
  </>
  );
};

export default ShopResult;
