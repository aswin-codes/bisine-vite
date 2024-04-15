import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../CommonComponets/NavBar";
import ProductList from "./components/ProductList";
import axiosInstance from "../../axios";
import ReviewSection from "./components/ReviewSection";
import OrderList from "./components/OrderList";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
function AdminPage() {
  const [shopLogoUrl, setShopLogoUrl] = useState("");
  const [shopBannerUrl, setShopBannerUrl] = useState("");
  const [activeNavItem, setActiveNavItem] = useState("Inventory");
  const navigate = useNavigate();

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  const renderPageContent = () => {
    switch (activeNavItem) {
      case "Inventory":
        return <ProductList />;
      case "Reviews":
        return <ReviewSection/>;
      case "Orders":
        return <OrderList/>
      // Add cases for other nav items as needed
      default:
        return null;
    }
  };

  const fetchShopImages = async () => {
    const response = await axiosInstance.get(
      `/admin/shop/${JSON.parse(localStorage.getItem("shop")).shopId}`
    );
    if (response.status == 200) {
      setShopLogoUrl(response.data.shop_logo_url);
      setShopBannerUrl(response.data.shop_banner_url);
    }
  };

  useEffect(() => {
    fetchShopImages();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50">
      <Navbar isSearchVisible={true} />
      <div className="p-2 pt-20 flex flex-col lg:flex-row">
        <aside className="w-full h-screen left-0 lg:w-1/4 p-4 bg-gray-100 flex flex-col items-start">
          <div
            className={`mb-4 bg-[url(${shopBannerUrl})] bg-cover justify-center w-full flex flex-col items-center space-y-2`}
          >
            <span className="relative flex h-28 w-28 shrink-0 overflow-hidden rounded-full">
              <img
                className="aspect-square h-full w-full"
                alt="Creator Insider"
                src={shopLogoUrl}
              />
            </span>
          </div>
          <span className="font-semibold text-[18px]">Your Shop</span>
          <Button onClick={()=> navigate(`/${JSON.parse(localStorage.getItem("shop")).shopId}`)} className="my-2 mx-auto">Check your Shop</Button>
          <div className="space-y-2 flex flex-col w-full">
            <li
              className={`inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start cursor-pointer text-base ${
                activeNavItem === "Inventory" ? "text-red-600" : ""
              }`}
              onClick={() => handleNavItemClick("Inventory")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <rect width={7} height={9} x={3} y={3} rx={1} />
                <rect width={7} height={5} x={14} y={3} rx={1} />
                <rect width={7} height={9} x={14} y={12} rx={1} />
                <rect width={7} height={5} x={3} y={16} rx={1} />
              </svg>
              Inventory
            </li>
            <li
              className={`inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start cursor-pointer text-base ${
                activeNavItem === "Reviews" ? "text-red-600" : ""
              }`}
              onClick={() => handleNavItemClick("Reviews")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              Reviews
            </li>
            <li
              className={`inline-flex items-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start cursor-pointer text-base ${
                activeNavItem === "Orders" ? "text-red-600" : ""
              }`}
              onClick={() => handleNavItemClick("Orders")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M21 15V6" />
                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                <path d="M12 12H3" />
                <path d="M16 6H3" />
                <path d="M12 18H3" />
              </svg>
              Orders
            </li>
          </div>
        </aside>
        <main className="w-full lg:w-3/4 pl-4">
          <section>{renderPageContent()}</section>
        </main>
      </div>
    </div>
  );
}

export default AdminPage;
