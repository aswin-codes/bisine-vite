import { useEffect, useState } from "react";
import NavBar from "../../CommonComponets/NavBar";
import HelpTitle from "./components/HelpTitle";
import ProgressBar from "./components/ProgressBar";
import BasicDetails from "./components/BasicDetails";
import LocationDetails from "./components/LocationDetails";
import InfoGraphics from "./components/InfoGraphics";
import ContactInfo from "./components/ContactInfo";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setAreaError,
  setCityError,
  setContactNumberError,
  setEmailIDError,
  setFlatError,
  setPinCodeError,
  setShopDescriptionError,
  setShopIdError,
  setShopNameError,
  setShopTagsError,
  setStateError,
} from "../../redux/features/shopError";
import axiosInstance from "../../axios";
import { useNavigate } from "react-router-dom";

const ShopCreate = () => {
  const shopName = useSelector((e) => e.shop.shopName);
  const shopDescription = useSelector((e) => e.shop.shopDescription);
  const shopTags = useSelector((e) => e.shop.shopTags);
  const shopId = useSelector((e) => e.shop.shopId);
  const pincode = useSelector((e) => e.shop.pincode);
  const flat = useSelector((e) => e.shop.flat);
  const area = useSelector((e) => e.shop.area);
  const landmark = useSelector((e) => e.shop.landmark);
  const city = useSelector((e) => e.shop.city);
  const state = useSelector((e) => e.shop.state);
  const contactNumber = useSelector((e) => e.shop.contactNumber);
  const emailID = useSelector((e) => e.shop.emailID);
  const socialMediaLink = useSelector((e) => e.shop.socialMediaLink);
  const logo = useSelector((e) => e.shop.logo);
  const banner = useSelector((e) => e.shop.banner);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [part, setPart] = useState(1);

  const incrementPart = () => {
    setPart((a) => a + 1);
  };

  const decrementPart = () => {
    setPart((a) => a - 1);
  };

  function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  }

  function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
    return emailRegex.test(email);
  }

  const nextPart = async () => {
    if (part == 1) {
      if (shopName == "") {
        dispatch(setShopNameError("Kindly enter the shop name"));
      } else if (shopDescription == "") {
        dispatch(setShopDescriptionError("Kindly enter the shop description"));
      } else if (shopTags.length == 0) {
        dispatch(setShopTagsError("Kindle enter the shop tags"));
      } else if (shopId == "") {
        dispatch(setShopIdError("Kindly enter a unique shop id."));
      } else {
        //Check the entered unique id is unique or not and give appropriate error message
        try {
          
          const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/shop/checkUniqueId`,
            {
              unique_id: shopId,
            }
          );
          if (response.status === 200) {
            // Unique ID is available, proceed to the next part
            incrementPart();
          } else {
          }
        } catch (error) {
          if (error.response && error.response.status === 409) {
            // Unique ID is already used, display appropriate error message
            dispatch(setShopIdError("The unique shop ID is already used."));
          } else {
            console.error("Error checking unique ID:", error);
            dispatch(
              setShopIdError("Error checking unique shop ID. Please try again.")
            );
          }
        }
      }
    } else if (part == 2) {
      if (pincode == "") {
        dispatch(setPinCodeError("Kindly, enter your 6 digit pincode"));
      } else if (flat == "") {
        dispatch(setFlatError("Kindly enter your flat or house number"));
      } else if (area == "") {
        dispatch(setAreaError("Kindly enter your area or street name"));
      } else if (city == "") {
        dispatch(setCityError("Kindly enter the city or town name"));
      } else if (state == "") {
        dispatch(setStateError("Kindly select your state"));
      } else {
        incrementPart();
      }
    } else if (part == 3) {
      if (logo == "") {
        alert("Kindly upload the shop logo");
      } else if (banner == "") {
        alert("Kindly upload the shop banner");
      } else {
        incrementPart();
      }
    }
  };

  const createShop = async () => {
    if (contactNumber == "" || !isValidPhoneNumber(contactNumber)) {
      dispatch(
        setContactNumberError("Kindly enter your 10 digit contact number")
      );
    } else if (emailID == "" || !isValidEmail(emailID)) {
      dispatch(setEmailIDError("Kindly enter your business email correctly"));
    } else {
      //Create shop
      const shopData = {
        name: shopName,
        description: shopDescription,
        shop_tags: shopTags,
        unique_id: shopId,
        pincode: pincode,
        flat: flat,
        area: area,
        landmark: landmark,
        city: city,
        state: state,
        contact_number: contactNumber,
        business_email: emailID,
        social_media_link: socialMediaLink,
        shop_logo_url: logo,
        shop_banner_url: banner,
        owner_email: emailID,
        owner_id : JSON.parse(localStorage.getItem("user")).id
      };

      try {
        const accessToken = localStorage.getItem("access_token");
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/shop/create`,
          shopData,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.status === 201) {
          console.log("Shop created successfully");
          const {shop_id} = response.data;
          localStorage.setItem("shop_id",shop_id);
          //Redirect to shop dashboard
          //for now regirecting to home page
          navigate('/');
          // Optionally handle success response
        } else {
          console.error("Failed to create shop");
          // Optionally handle failure response
        }
      } catch (error) {
        console.error("Error creating shop:", error);
        // Optionally handle error
      }
    }
  };

  useEffect(() => {
    dispatch(setShopNameError(""));
    dispatch(setShopDescriptionError(""));
    dispatch(setShopTagsError(""));
    dispatch(setPinCodeError(""));
    dispatch(setFlatError(""));
    dispatch(setAreaError(""));
    dispatch(setCityError(""));
    dispatch(setStateError(""));
    dispatch(setContactNumberError(""));
    dispatch(setEmailIDError(""));
  }, [
    shopName,
    shopDescription,
    shopTags,
    pincode,
    flat,
    area,
    city,
    state,
    contactNumber,
    emailID,
  ]);

  return (
    <>
      <section className="min-h-screen flex flex-col bg-blue-50 items-center">
        <NavBar />
        <div className="flex-1 flex flex-col w-fit pt-20 px-6 md:px-8 py-10 md:py-20 items-center">
          <div className="flex-1"></div>
          <HelpTitle partNo={part} />
          <ProgressBar partNo={part} />
          <BasicDetails partNo={part} />
          <LocationDetails partNo={part} />
          <InfoGraphics partNo={part} />
          <ContactInfo partNo={part} />
          <div className="flex w-60  md:w-72 mt-5 text-sm lg:w-96  justify-between">
            <button
              onClick={() => decrementPart()}
              disabled={part == 1}
              className={`bg-blue-700 px-4  py-2 h-fit rounded-xl disabled:bg-gray-400 ${
                part == 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              Previous
            </button>
            <button
              onClick={() => nextPart()}
              hidden={part == 4}
              className={`bg-blue-700 px-4 py-2 h-fit rounded-xl disabled:bg-gray-400`}
            >
              Next
            </button>
            <button
              onClick={() => createShop()}
              disabled={part <= 3}
              hidden={part <= 3}
              className="bg-blue-700 px-4  py-2 h-fit rounded-xl disabled:bg-gray-400"
            >
              Create Shop
            </button>
          </div>
          <div className="flex-1"></div>
          <div className="flex-1"></div>
        </div>
      </section>
    </>
  );
};

export default ShopCreate;
