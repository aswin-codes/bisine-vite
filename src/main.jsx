import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./screens/login/page.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import ProductPage from "./screens/productPage/ProductPage.jsx";
import ProfileCreatePage from "./screens/profileCreate/page.jsx";
import HomePage from "./screens/homePage/HomePage";
import ShopCreate from "./screens/shopCreate/ShopCreate";
import CartPage from "./screens/cartPage/CartPage";
import ProductAdditionScreen from "./screens/addProduct/AddProduct";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ShopScreen from "./screens/shop/ShopScreen.jsx";
import UserOrdersPage from "./screens/user/orders/UserOrdersPage.jsx";
import { Toaster } from "react-hot-toast";
import CheckoutPage from "./screens/checkout/CheckoutPage.jsx";
import { NextUIProvider } from "@nextui-org/react";
import ProductEditScreen from "./screens/editProduct/EditProduct.jsx";
import AdminPage from "./screens/admin/AdminPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <GoogleOAuthProvider clientId="293664570886-350a4i1e7tp70pvc1t9je1tttgmt4o0e.apps.googleusercontent.com">
      <React.StrictMode>
        <Provider store={store}>
          <Toaster position="top-right" />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user/login" element={<LoginPage />} />
              <Route path="/user/register" element={<ProfileCreatePage />} />
              <Route path="/user/orders" element={<UserOrdersPage />} />
              <Route path="/shop/create" element={<ShopCreate />} />
              <Route path="/product/add" element={<ProductAdditionScreen />} />
              <Route path="/user/cart" element={<CartPage/>}/>
              <Route path="/admin" element={<AdminPage/>}/>
              <Route path="/admin/product/edit" element={<ProductEditScreen/>}/>
{/* <Route path="/" element={<h1>hi</h1>}/> */}
              <Route path="/:shop_id" element={<ShopScreen />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/product/:product_id" element={<ProductPage />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    </GoogleOAuthProvider>
  </NextUIProvider>
);
