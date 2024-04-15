import { Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import axiosInstance from "../../../Helper/axiosInstance";
import toast from "react-hot-toast";

const ProductTile = ({ order, index }) => {
  const [currentStatus, setCurrentStatus] = useState(order.status);

  const handleStatusChange = async () => {
    const response = await axiosInstance.put(`/admin/order-items/${order.order_item_id}`,{status: currentStatus})
    if (response.status == 200) {
        toast.success(response.data.message)
    }
    console.log(currentStatus);
  };

  return (
    <div
      key={index}
      className="p-4 bg-white rounded-lg shadow-md md:flex md:items-center mb-4"
    >
      {/* Order details */}
      <div className="md:w-48 mb-4 md:mb-0 md:mr-4">
        <img
          className="w-full max-h-52 h-auto object-cover rounded"
          src={order.product_image_urls[0]} // Displaying the first product image
          alt="Ordered Item"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">{order.product_name}</h2>
        <p className="text-gray-600 mb-2">
          Order Id: O{order.order_id}P{order.order_item_id}
        </p>
        <p className="text-gray-600 mb-2">Variant Name: {order.variant_name}</p>
        <p className="text-gray-600 mb-2">Quantity: {order.quantity}</p>
        <div className="flex flex-col mb-2 gap-2">
          <p className="text-gray-600">Customer Name: {order.customer_name}</p>
          <p className="text-gray-600">
            Customer Phone Number: {order.customer_phone_number}
          </p>
        </div>
        <p className="text-gray-600 mb-2">
          Delivery Address: {order.flat}, {order.area}, {order.city},{" "}
          {order.state} - {order.pincode}
        </p>
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Dropdown to select status */}
          <Select
            defaultSelectedKeys={[currentStatus]}
            onSelectionChange={(e) => setCurrentStatus(e.currentKey)}
          >
            <SelectItem key="Order Received">Order Received</SelectItem>
            <SelectItem key="Processing">Processing</SelectItem>
            <SelectItem key="Shipped">Shipped</SelectItem>
            <SelectItem key="Delivered">Delivered</SelectItem>
          </Select>
          {/* Button to update status */}
          <button
            onClick={() => handleStatusChange()}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
          >
            Update Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
