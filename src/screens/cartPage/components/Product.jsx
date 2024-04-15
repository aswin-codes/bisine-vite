import React from "react";
import toast from "react-hot-toast";
import axiosInstance from "../../../Helper/axiosInstance";
const Product = ({ product,  }) => {
  const {  product_name, price, image, shop_logo_url,shop_name,variant_name, cart_item_id } = product;
  
  const handleRemoveItem = async () => {
    if (localStorage.getItem("user")) {
      axiosInstance
        .delete(`/cart/${cart_item_id}`)
        .then((response) => {
          if (response.status === 200) {
            toast.success(response.data.message)
            location.reload()
          }
        })
        .catch((error) => {
          toast.error(error.response.data.message);

          // Handle the error here (e.g., display an error message)
        });
    } else {
      toast.error("Kindly login to see cart");
      navigate("/user/login");
    }
  }

  return (
    <div className="flex items-center border-b border-gray-500 py-4 text-black cursor-pointer">
      <img
        src={image}
        alt={product_name}
        className="sm:w-24 sm:h-24 w-16 h-16 rounded-lg object-cover mr-4"
      />
      <div className="flex-1">
        <h3 className="sm:text-lg text-sm font-semibold ">{product_name}</h3>
        <div className="flex gap-2 my-2">
          <img src={shop_logo_url} className="h-5 w-5 rounded-full"/>
          <h1>{shop_name}</h1>
        </div>
        <p className="text-gray-600 sm:text-md text-sm">{variant_name}</p>
        
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold">
          ${(price )}
        </p>
        <button
          onClick={() =>{handleRemoveItem()}}
          className="text-white bg-red-500 px-2 rounded py-1 font-semibold mt-2 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Product;
