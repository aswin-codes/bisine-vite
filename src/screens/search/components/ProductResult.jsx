import React from "react";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ProductResult = () => {
  const navigate = useNavigate();
  const product = {
    type: "product",
    product_id: 7,
    product_name: "Coconut Oil",
    product_description:
      "Pure Bliss Coconut Oil: Experience the tropical essence of paradise in every jar. Extracted from the finest coconuts, our oil nourishes your skin and hair, leaving behind a radiant glow. Embrace the natural luxury of coconut for a truly indulgent beauty routine.",
    product_tags: ["Coconut Oil"],
    product_image_urls: [
      "https://res.cloudinary.com/ddkpclbs2/image/upload/v1713614863/gonp0h487ni7p4ufj4su.jpg",
      "https://res.cloudinary.com/ddkpclbs2/image/upload/v1713614864/htwbt69yesqlqipucogb.jpg",
      "https://res.cloudinary.com/ddkpclbs2/image/upload/v1713614865/lgvzu26gwk6sp0w79kl7.jpg",
    ],
    variants: [
      {
        name: "150 ml",
        price: "100",
        weight: "20",
        weightUnit: "g",
        quantityInStock: "10",
      },
      {
        name: "300 ml",
        price: "250",
        weight: "150",
        weightUnit: "g",
        quantityInStock: "20",
      },
    ],
    shop_id: "essence",
    shop_logo_url:
      "https://i.pinimg.com/736x/ce/56/99/ce5699233cbc0f142250b520d967dff7.jpg",
    shop_name: "Aswin Clothing",
    rating: 4.5,
    no_of_reviews: 40,
  };

  const handleShopClick = () => {
    navigate(`/${product.shop_id}`);
  };

  const handleProductClick = () => {
    navigate(`/product/${product.product_id}`);
  };

  return (
    <>
      <div
       
        className="flex cursor-pointer md:gap-6 gap-2"
      >
        <div  onClick={handleProductClick}>
          <img
            src={product.product_image_urls[0]}
            className="h-44 w-72 object-cover rounded-lg"
            alt="Product Image"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1  onClick={handleProductClick} className="text-2xl font-semibold">{product.product_name}</h1>
          <div  onClick={handleProductClick} className="flex gap-2 text-xs">
            <StarRatings
              rating={product.rating}
              starRatedColor="blue"
              starDimension="14"
              starSpacing="2"
            />
            <p>( {product.no_of_reviews} reviews )</p>
          </div>
          <div
            onClick={handleShopClick}
            className="flex gap-2 items-center cursor-pointer"
          >
            <div>
              <img
                alt="shop logo"
                src={product.shop_logo_url}
                className="h-8 w-8 rounded-full"
              />
            </div>
            <p>{product.shop_name}</p>
          </div>
          <p  onClick={handleProductClick}>{product.product_description.substring(0, 60)}...</p>
          <p onClick={handleProductClick} className="font-medium text-xl">₹ {product.variants[0].price}</p>
          <div className="flex-1"  onClick={handleProductClick}></div>
        </div>
      </div>
      <hr className="my-2 sm:my-4" />
    </>
  );
};

export default ProductResult;