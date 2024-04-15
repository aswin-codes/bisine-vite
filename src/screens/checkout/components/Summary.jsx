import React, { useEffect } from "react";
import { Button, Tooltip } from "@nextui-org/react";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../../axios";
import { setProductList, setTotalPrice } from "../../../redux/features/checkout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Summary = ({ setIndex }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product_list = useSelector((e) => e.checkout.productList);
  const totalPrice = useSelector((e) => e.checkout.totalPrice);
  const product_id_list = useSelector(e => e.checkout.productIdVarList)
  const deliveryAddress = useSelector((e) => e.checkout.deliveryAddress);

  

  const decrementQuantity = (index) => {

    // Check if the index is valid
    if (index < 0 || index >= product_list.length) {
      console.error("Invalid index");
      return;
    }
    // Create a copy of the product list
    const updatedProductList = [...product_list];
    // Create a copy of the product object at the specified index
    const updatedProduct = { ...updatedProductList[index] };
    // Check if the quantity is already 0
    if (updatedProduct.quantity === 1) {
      toast.error("Quantity cannot be less than 1");
      return;
    }
    // Decrement the quantity of the product
    updatedProduct.quantity -= 1;
    // Update the product object in the copied product list
    updatedProductList[index] = updatedProduct;
    // Dispatch an action to update the product list in the Redux store
    let tempCost = 0;
    product_list.forEach(e => {
      tempCost += (e.quantity-1)*e.price
    })
    console.log(tempCost)
    dispatch(setTotalPrice(tempCost))

    dispatch(setProductList(updatedProductList));
  };

  const incrementQuantity = (index) => {
    // Check if the index is valid
    if (index < 0 || index >= product_list.length) {
      console.error("Invalid index");
      return;
    }
    // Create a copy of the product list
    const updatedProductList = [...product_list];
    // Create a copy of the product object at the specified index
    const updatedProduct = { ...updatedProductList[index] };
    // Increment the quantity of the product
    updatedProduct.quantity += 1;
    // Update the product object in the copied product list
    updatedProductList[index] = updatedProduct;
    let tempCost = 0;
    product_list.forEach(e => {
      tempCost += (e.quantity+1)*e.price
    })
    console.log(tempCost)
    dispatch(setTotalPrice(tempCost))
    // Dispatch an action to update the product list in the Redux store
    dispatch(setProductList(updatedProductList));
  };

  const fetchProductDetails = async () => {
    // console.log(product_data)
    let tempList = [];
    let totalCost = 0;
    console.log(tempList);
    for (let productIdVar of product_id_list) {
      const { productId, variantName } = productIdVar;
      const response = await axiosInstance.get(`/product/${productId}`);
      const v = response.data.variants.find((e) => e.name == variantName);
      const product_data = {
        delivery_price: 0,
        variant_name: variantName,
        product_id: productId,
        imageUrl: response.data.product_image_urls[0],
        productName: response.data.product_name,
        shopName: response.data.shop_name,
        rating:
          response.data.reviews.length > 0
            ? response.data.reviews[0].rating
            : 0,
        price: v.price,
        quantity: 1,
      };
      totalCost += parseFloat(v.price);
      tempList.push(product_data);
    }
    console.log(tempList);
    dispatch(setProductList(tempList));
    dispatch(setTotalPrice(totalCost))
    console.log(product_list, "prod");
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const cus_data = {
    name: "Aswin Raaj P S",
    phone_no: "9566875400",
    address: {
      id: 1,
      house: "S-1/1, Second Floor, Vembu Flats",
      area: "24 th cross, Sowmya Nagar, Medavakkam",
      city: "Chennai",
      state: "Tamil Nadu",
      pincode: 600100,
    },
  };

  const contentPrice =
    "Delivery charge will be charged, after the shop owners places the orders for delivery";

  return (
    <div className=" py-2">
      <div className="bg-white shadow p-2 relative">
        <h1 className="font-semibold text-lg">Deliver to : </h1>
        <p className="font-semibold">{cus_data.name}</p>

        <p>{cus_data.phone_no}</p>
        <div className="text-sm">
          <p>{deliveryAddress.flat}</p>
          <p>{deliveryAddress.area}</p>
          <p>
            {deliveryAddress.city},{deliveryAddress.state},
            {deliveryAddress.pincode}
          </p>
          <Button
            onClick={() => setIndex(1)}
            variant="bordered"
            color="primary"
            className="rounded-sm p-1 absolute right-2 top-2"
          >
            Change
          </Button>
        </div>
      </div>
      {product_list.map((product_data, index) => (
        <div className="my-2 flex p-4 bg-white shadow gap-3">
          <div className=" w-28 flex flex-col gap-2 rounded overflow-hidden">
            <img
              src={product_data.imageUrl}
              alt="image"
              className="object-cover h-28 w-28"
            />
            <div className="flex justify-around">
              <button
                onClick={() => incrementQuantity(index)}
                className="rounded-full h-6 w-6 bg-blue-300 flex justify-center items-center"
              >
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
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
              <p>{product_data.quantity}</p>
              <button
                onClick={() => decrementQuantity(index)}
                className="rounded-full h-6 w-6 bg-blue-300 flex justify-center items-center"
              >
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
                    d="M5 12h14"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg">
              {product_data.productName}
            </h1>
            <p className="text-sm text-slate-400">{product_data.shopName}</p>
            <div className="flex items-center gap-2">
              <StarRatings
                starSpacing={"1px"}
                starDimension="15px"
                rating={product_data.rating}
                starRatedColor="blue"
                numberOfStars={5}
              />
              <p>{product_data.rating}</p>
            </div>
            <div className="flex-1"></div>
            <div className="font-semibold text-lg">
              ₹ {product_data.price * product_data.quantity}
            </div>
          </div>
        </div>
      ))}
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
      <div className="flex flex-col md:flex-row-reverse gap-2">
        <Button onClick={() => setIndex(3)} color="primary" className="w-full font-semibold">
          Continue
        </Button>
        <Button
          onClick={() => navigate("/")}
          color="danger"
          className="w-full font-semibold"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Summary;
