import React from "react";
import axiosInstance from "../../../../Helper/axiosInstance";
import toast from "react-hot-toast";

const UserOrderCard = ({ orderData }) => {

  const handleCancelOrder = async () => {
    const response = await axiosInstance.delete(`/order/cancel-order-item/${orderData.order_item_id}`)
    if (response.status == 200) {
      toast.success(response.data.message)
      location.reload()
    }
  }

  return (
    <div className="rounded-lg w-full  lg:max-w-4xl overflow-hidden bg-white shadow-md pb-5 my-2">
      <div className="px-4 py-2 bg-blue-200 flex justify-between">
        <p className="font-semibold">Order Id : O{orderData.order_id}P{orderData.order_item_id} </p>
        <p className="font-semibold">{orderData.order_date}</p>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="flex p-4 gap-2 sm:gap-5 w-72 ">
          <div className="">
            <div
              className="h-32 w-32 rounded-md"
              style={{
                backgroundImage: `url(${orderData.product_image_urls[0]})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div>
            <p className="font-semibold text-lg">{orderData.product_name}</p>
            <p className="text-sm">{orderData.shop_name}</p>
            <p className="flex items-center">
              <span className="text-xl">&#8377;</span>
              <span className="font-bold">{orderData.total_price}</span>
            </p>
          </div>
        </div>
        <div className="p-4 w-96">
          <p className="text-lg text-green-500 font-medium">
            {orderData.status}
          </p>
        </div>
        <div className="flex-1 gap-2 flex flex-col justify-center items-center px-10">
          <a className="w-full " href={`tel:+91${orderData.shop_contact_number}`}>
          <button className="bg-blue-500 py-2 px-5 w-full text-white font-semibold text-lg rounded ">
            Call Seller
          </button>
          </a>
          <button onClick={() => handleCancelOrder()} className="bg-red-500 py-2 px-5 w-full text-white font-semibold text-lg rounded ">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserOrderCard;
