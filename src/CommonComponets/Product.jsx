import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product, shopName, shopLogo, shopId }) => {
  const navigate = useNavigate();

  const navigateToShop = (shop_id) => {
    navigate(`/${shopId}`);
  };

  const navigateToProduct = () =>{
      navigate(`/product/${product.product_id}`)
  }
  return (
    <div className="w-full overflow-hidden mx-auto rounded-lg bg-blue-100 shadow-lg">
      <div className="relative w-full">
        <img onClick={()=> navigateToProduct()}
          src={product.product_image_urls[0]}
          alt={product.product_name}
          className="w-full max-h-52 object-cover "
        />
        <p className="absolute bottom-2 text-white right-2 bg-gray-700 text-sm px-1 py-0.5 rounded-md">
          ₹ {product.variants[0].price}
        </p>
      </div>
      <div className="px-2 pt-2 pb-1 flex items-center">
        <img
          onClick={() => navigateToShop()}
          src={shopLogo}
          alt={shopName}
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <p className="block  text-md font-semibold text-gray-900  cursor-pointer ">
            {product.product_name}
          </p>
          <p
            onClick={() => navigateToShop()}
            className="text-sm font-medium text-gray-700 cursor-pointer"
          >
            {shopName}
          </p>
        </div>
      </div>
      <div className="flex w-full justify-end pb-2 pr-2">
        <button onClick={()=>navigateToProduct()} className="text-black font-semibold text-md rounded-lg px-4 py-1 bg-cyan-400">
          View
        </button>
      </div>
    </div>
  );
};

export default Product;
