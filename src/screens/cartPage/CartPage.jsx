import React, { useEffect, useState } from "react";
import Cart from "./components/CartList";
import NavBar from "../../CommonComponets/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../../redux/features/cart";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";

const App = () => {
  const productList = useSelector((e) => e.cart.productList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return productList.reduce((total, product) => total + parseInt(product.price), 0);
  };

  useEffect(()=>{
    fetchCartDetails()
  },[])
  const fetchCartDetails = () => {
    if (localStorage.getItem("user")) {
      axiosInstance
        .get(`/cart/product/${JSON.parse(localStorage.getItem("user")).id}`)
        .then((response) => {
          if (response.status === 201) {
            dispatch(setProductList(response.data));
          } else if (response.status === 400) {
            toast.error("Item Already added");
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
  };

  

  return (
    <section className="min-h-screen flex flex-col bg-blue-50 items-center ">
      <NavBar />
      <div className="container max-w-4xl mx-auto py-20 px-8">
        <Cart cart={productList} total={calculateTotal()} />
      </div>
    </section>
  );
};

export default App;
