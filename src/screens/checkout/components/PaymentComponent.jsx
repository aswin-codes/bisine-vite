import React from "react";
import { useSelector } from "react-redux";
import { Button, Tooltip } from "@nextui-org/react";
import axiosInstance from "../../../axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
    />
  </svg>
);

const PaymentComponent = ({ setIndex }) => {
  const product_list = useSelector((e) => e.checkout.productList);
  const totalPrice = useSelector((e) => e.checkout.totalPrice);
  const deliveryAddress = useSelector((e) => e.checkout.deliveryAddress);
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    const request_data = {
      customer_id: JSON.parse(localStorage.getItem("user")).id,
      total_cost: totalPrice,
      delivery_address_id: deliveryAddress.id,
      delivery_method: "cod",
      product_list,
    };

    const response = await axiosInstance.post("/order/placeorder",request_data);

    if (response.status == 201) {
        toast.success(response.data.msg);
        navigate("/user/orders");
    } else {
        toast.error(response.data.msg);
        navigate("/");
    }

    console.log(request_data);
  };

  const contentPrice =
    "Delivery charge will be charged, after the shop owners places the orders for delivery. Contact seller for more details";

  return (
    <div>
      <div className="my-2 p-4 bg-white shadow">
        <h1 className="font-semibold text-lg flex items-center gap-2">
          Price Details{" "}
          <span>
            <Tooltip content={contentPrice} color="default">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </Tooltip>
          </span>
        </h1>
        <div className="flex justify-between">
          <p>Price</p>
          <p>₹ {totalPrice}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>Will be charged</p>
        </div>

        <div className="flex font-semibold justify-between">
          <p>Total</p>
          <p>₹ {totalPrice}</p>
        </div>
      </div>
      <div className="p-2 bg-white shadow-md">
        <div className="flex items-center gap-3">
            <CashIcon/>
            <h1 className="text-lg font-semibold">Cash on Delivery</h1>
        </div>
        <div className="p-2">
            <p className="text-md">{contentPrice}</p>
            <Button onClick={() => handlePlaceOrder()} color="primary" className="mt-5 w-full text-lg font-semibold">
                Place Order
            </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentComponent;
