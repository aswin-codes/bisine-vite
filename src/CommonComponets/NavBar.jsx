import { useState, useEffect } from "react";
import Logo from "../Logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const NavBar = ({ isSearchVisible }) => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(localStorage.getItem("profileUrl"));
  });

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/user/login");
  };

  return (
    <nav id="navbar" className="w-full z-50 ">
      <div
        className={`${
          isSearchClicked ? "flex" : "hidden"
        } sm:hidden fixed z-50 px-4 bg-blue-400 w-full py-4 gap-5`}
      >
        <button onClick={() => setIsSearchClicked((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <input
          placeholder="Search Products and Shops"
          className="rounded bg-blue-50 px-2 py-1 w-full text-black"
        />
      </div>
      <div
        className={`px-4  sm:px-8 py-4 ${
          isSearchClicked ? "hidden" : "flex"
        }  justify-between z-50 fixed w-full bg-blue-400`}
      >
        <div className="flex gap-2 items-center">
          {/* <button className="hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button> */}
          <div
            className="flex gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={Logo} className="object-fit h-6 ml-2 md:ml-5" />
            <p className="uppercase text-xl font-semibold text-black">Bisine</p>
          </div>
        </div>
        {isSearchVisible && (
          <div className="relative hidden sm:block">
            <input
              placeholder="Search Products and shops "
              className="bg-white text-black  rounded-lg px-8 py-1 w-60 text-sm lg:text-md lg:w-96"
            />
            <div className="absolute top-0 mt-2 ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        )}
        <div className="flex gap-4">
          {isSearchVisible && (
            <button onClick={() => setIsSearchClicked((prev) => !prev)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-black sm:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          )}
          <button onClick={() => navigate("/user/cart")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
          </button>
          <button>
            {image ? (
              <>
                <Dropdown>
                  <DropdownTrigger>
                    <img
                      src={image}
                      className="h-6 rounded-full"
                      referrerpolicy="no-referrer"
                    />
                  </DropdownTrigger>
                  <DropdownMenu className="font-semibold">
                    {JSON.parse(localStorage.getItem("shop")).shopId ? (
                      <DropdownItem onClick={() => navigate("/admin")}>
                        View Shop
                      </DropdownItem>
                    ) : (
                      <DropdownItem onClick={() => navigate("/shop/create")}>
                        Create Shop
                      </DropdownItem>
                    )}

                    <DropdownItem onClick={() => navigate("/user/orders")}>
                      My Orders
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => navigate("/terms-and-condition")}
                    >
                      Terms and Conditions
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        localStorage.clear();
                        navigateToLogin();
                      }}
                      color="primary"
                    >
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </>
            ) : (
              <button
                onClick={() => navigateToLogin()}
                className="bg-blue-700 text-white px-2  py-1 text-sm rounded-md"
              >
                {" "}
                Login
              </button>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
