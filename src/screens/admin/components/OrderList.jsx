import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Helper/axiosInstance";
import ProductTile from "./ProductTile";
import { CircularProgress } from "@nextui-org/react";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get(
          `/admin/orders/${JSON.parse(localStorage.getItem("shop")).shopId}`
        );
        setIsLoading(false);
        if (response.status === 200) {
          setOrderList(response.data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchAllOrders();
  }, []);

  const handleStatusUpdate = async (orderId, newStatus) => {
    try {
      const response = await axiosInstance.put(`/admin/orders/${orderId}`, {
        status: newStatus,
      });
      if (response.status === 200) {
        // Update the order list with the updated status
        const updatedOrderList = orderList.map((order) => {
          if (order.order_item_id === orderId) {
            return { ...order, status: newStatus };
          }
          return order;
        });
        setOrderList(updatedOrderList);
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold">Orders ({orderList.length})</h1>
      {isLoading ? (
        <>
          <div className="h-48 w-full flex justify-center items-center">
            <CircularProgress />
          </div>
        </>
      ) : (
        <div className="mt-5">
          {orderList.map((order, index) => (
            <ProductTile order={order} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderList;
