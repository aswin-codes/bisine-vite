import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import {
  setArea,
  setBanner,
  setCity,
  setEmailID,
  setFlat,
  setLandmark,
  setLogo,
  setPinCode,
  setProducts,
  setShopDescription,
  setShopId,
  setShopName,
  setShopTags,
  setSocialMediaLink,
  setState,
} from "../../redux/features/shop";
import { setPhoneNumber } from "../../redux/features/user";
import { useEffect, useState } from "react";
import Product from "../../CommonComponets/Product";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function ShopScreen() {
  //For getting shop id from the url
  const params = useParams();
  //State for handling UI
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);


  //State variables for storing details of shop
  const shopName = useSelector((e) => e.shop.shopName);
  const shopDescription = useSelector((e) => e.shop.shopDescription);
  const shopTags = useSelector((e) => e.shop.shopTags);
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
  const products = useSelector(e => e.shop.products);
  const shopId = useSelector(e => e.shop.shopId)
  const navigate = useNavigate();

  //dispatch
  const dispatch = useDispatch();

  const getShopDetails = async (shop_id) => {
    try {
      // Retrieve authorization token from localStorage
      const token = localStorage.getItem("access_token");

      // Configure Axios request headers with authorization token
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Axios GET request with authorization token
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/shop/${shop_id}`, {
        headers: headers,
      });
      const data = response.data;

      // Update Redux store with fetched shop details
      dispatch(setShopName(data.name));
      dispatch(setShopId(data.unique_id))
      dispatch(setShopDescription(data.description));
      dispatch(setShopTags(data.shop_tags.join(", "))); // Assuming shop_tags is an array
      dispatch(setPinCode(data.pincode));
      dispatch(setFlat(data.flat));
      dispatch(setArea(data.area));
      dispatch(setLandmark(data.landmark));
      dispatch(setCity(data.city));
      dispatch(setState(data.state));
      dispatch(setPhoneNumber(data.contact_number));
      dispatch(setEmailID(data.business_email));
      dispatch(setSocialMediaLink(data.social_media_link));
      dispatch(setLogo(data.shop_logo_url));
      dispatch(setBanner(data.shop_banner_url));
      dispatch(setProducts(data.products));
      console.log(data)
    } catch (error) {
      console.error("Error fetching shop details:", error);
      if (error.response && error.response.status === 401) {
        // Unauthorized error, alert the user and redirect to login page
        alert("Authentication token failed. Please log in again.");
        navigate("/user/login");
      }
    }
  };

  //Function to toggle show less and show more in shop description
  const toggleShopDescriptionExpansion = () => {
    setIsDescriptionExpanded((p) => !p);
  };

  //Function to handle phone call
  const handlePhoneCall = () => {
    const phoneLink = `tel:${contactNumber}`;
    window.location.href = phoneLink;
  };

  //Function to redirect to social media of the shop
  const handleSocialMedia = () => {
    window.open(socialMediaLink, "_blank");
  };

  useEffect(() => {
    console.log("Fetching Data");
    getShopDetails(params.shop_id);
  }, []);

  return (
    <div
      key="1"
      className="lg:grid flex flex-col min-h-screen  w-full lg:grid-cols-[320px_1fr] bg-blue-50 gap-0"
    >
      <div className="flex w-fit  flex-col items-start p-4 bg-light-blue-200 lg:block bg-blue-200 overflow-hidden">
        <div className="flex items-center">
          <img
            alt="shop banner"
            className="w-full h-32 object-cover rounded-lg"
            height="100"
            src={banner}
            style={{
              aspectRatio: "800/100",
              objectFit: "cover",
            }}
            width="800"
          />
        </div>
        <div className="flex h-20 items-center w-full gap-2">
          <img
            alt="shop logo"
            className="w-16 h-16 rounded-full"
            height="50"
            src={logo}
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width="50"
          />
          <div>
            <h2 className="font-bold text-xl text-light-blue-700">
              {shopName}
            </h2>
          </div>
        </div>
        <div>
          <p>
            {isDescriptionExpanded
              ? shopDescription
              : shopDescription.substring(0, 50) + "..."}
          </p>{" "}
          <span
            onClick={() => toggleShopDescriptionExpansion()}
            className="text-gray-600 text-xs"
          >
            {isDescriptionExpanded ? "Show Less" : "Show More"}
          </span>
        </div>
        <hr className="border-2 my-2 rounded border-gray-500 w-full" />
        <div className="flex text-gray-700 gap-2">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              dataSlot="icon"
              className="w-6 h-6 "
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p>
              {flat},{area}
            </p>
            <p>
              {landmark},{city}
            </p>
            <p>
              {state},{pincode}
            </p>
          </div>
        </div>
        <div className="flex w-full gap-2 mt-4">
          <Button
            onClick={() => handlePhoneCall()}
            className=" text-black"
            variant="outline"
          >
            <PhoneIcon className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => handleSocialMedia()}
            className="text-black"
            variant="outline"
          >
            <FacebookIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center mt-4">
          <h1 className="font-semibold text-lg md:text-2xl text-light-blue-700">
            Products
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            products.map((product) => (<Product product={product} shopLogo={logo} shopName={shopName} shopId={shopId} />))
          }
        </div>
      </main>
    </div>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
