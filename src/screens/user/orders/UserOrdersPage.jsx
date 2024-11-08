import React, { useEffect, useState } from "react";
import NavBar from "../../../CommonComponets/NavBar";
import UserOrderCard from "./components/UserOrderCard";
import axiosInstance from "../../../Helper/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { setOrderedProducts } from "../../../redux/features/orderedItems";
import Loading from "../../../CommonComponets/Loading";

const UserOrdersPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const orderedList = useSelector((e) => e.orderedItems.orderedProducts);
  const dispatch = useDispatch();

  const fetchOrderedItems = async () => {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    setIsLoading(true);
    const response = await axiosInstance.get(`/order/orders/${userId}`);
    setIsLoading(false);
    if (response.status == 200) {
      dispatch(setOrderedProducts(response.data));
    }
  };

  useEffect(() => {
    fetchOrderedItems();
  }, []);

  return (
    <section className="min-h-screen bg-blue-50 flex flex-col items-center">
      <NavBar isSearchVisible={true} />
      <div className="h-full px-8 py-20 w-full lg:max-w-4xl">
        <h1 className="font-semibold text-2xl mt-5">Your Orders</h1>
        <div className="mt-5 flex flex-col items-center">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {orderedList.map((data) => (
                <UserOrderCard orderData={data} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserOrdersPage;
