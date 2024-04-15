import React, { useState, useEffect } from "react";
import ProductPlaceholderImage from "../assests/placeholder-product.svg";
import ShopPlaceholderImage from "../assests/placeholder-shop.svg";
import StarRatings from "react-star-ratings";
import toast from "react-hot-toast";
import axiosInstance from "../../../Helper/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductIdVarList } from "../../../redux/features/checkout";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantity = () => {
    const variant = product.variants.find(
      (e) => e.name == selectedVariant.name
    );
    if (variant.quantityInStock == 0) {
      toast.error("Out of Stock");
      return true;
    } else {
      return false;
    }
  };

  const handleBuyNow = () => {
    if (handleQuantity()) {
    } else {
      dispatch(
        setProductIdVarList([
          { productId: product.product_id, variantName: selectedVariant },
        ])
      );
      navigate("/checkout");
    }
  };

  const handleAddToCart = async () => {
    if (handleQuantity()) {
      
    } else {
      if (localStorage.getItem("user")) {
        const request_data = {
          user_id: JSON.parse(localStorage.getItem("user")).id,
          product_id: product.product_id,
          shop_id: product.shop_id,
          variant_name: selectedVariant.name,
        };
        axiosInstance
          .post("/cart/add", request_data)
          .then((response) => {
            if (response.status === 201) {
              toast.success(response.data.message);
              navigate("/user/cart");
            } else if (response.status === 400) {
              toast.error("Item Already added");
            }
          })
          .catch((error) => {
            toast.error(error.response.data.message);
            navigate("/user/cart");
            // Handle the error here (e.g., display an error message)
          });
      } else {
        toast.error("Kindly login to add cart");
      }
    }
  };

  const {
    shop_name,
    shop_logo_url: shopImage,
    product_name: productName,
    product_description: productDesc,
    product_tags,
    variants: product_variants,
    product_image_urls: product_images,
    average_rating,
  } = product;

  const colors = ["blue", "green", "purple", "rose", "indigo", "pink"];

  const [mainImage, setMainImage] = useState(
    product_images[0] ? product_images[0] : ProductPlaceholderImage
  );
  const [smallImages, setSmallImages] = useState([]);

  useEffect(() => {
    if (product_images && product_images.length > 0) {
      const main = { url: product_images[0], isMain: true };
      const remaining = product_images
        .slice(1, 4)
        .map((img) => ({ url: img, isMain: false }));
      setSmallImages([main, ...remaining]);
    }
  }, [product_images]);

  const handleImageClick = (url, index) => {
    const newImages = [...smallImages];
    const tempMainImage = newImages[0];
    newImages[0] = { url, isMain: true };
    newImages[index] = tempMainImage;
    setMainImage(url);
    setSmallImages(newImages);
  };

  const [selectedVariant, setSelectedVariant] = useState(product_variants[0]);

  const handleVariantChange = (event) => {
    const selectedOption = event.target.value;
    const variant = product_variants.find((v) => v.name === selectedOption);
    setSelectedVariant(variant || defaultVariant);
  };

  const ShopImageSource = shopImage || ShopPlaceholderImage;

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6 pt-20">
      <div className="relative w-full aspect-[1/1]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            alt={`Product Image - ${productName}`}
            className="w-full h-full object-cover rounded-lg"
            height={500}
            src={mainImage}
            style={{ aspectRatio: "1000/500", objectFit: "cover" }}
            width={1000}
          />
        </div>
        <div className="absolute bottom-0 left-0 flex items-center gap-2 p-4">
          {smallImages.map((image, index) => (
            <img
              key={index}
              alt={`Product Image - ${productName}`}
              className="w-16 h-16 object-cover rounded-lg cursor-pointer"
              height={100}
              src={image.url}
              style={{ aspectRatio: "100/100", objectFit: "cover" }}
              width={100}
              onClick={() => handleImageClick(image.url, index)}
            />
          ))}
        </div>
      </div>
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm"
        data-v0-t="card"
      >
        <div className="p-4">
          <h1 className="font-bold text-3xl lg:text-4xl mb-2">
            {productName ? productName : "Product Name"}
          </h1>
          <p className="text-xl font-semibold text-green-500 mb-6">
            ${parseInt(selectedVariant.price)}
          </p>
          <div onClick={() => navigate(`/${product.shop_id}`)} className="flex items-center gap-2 mb-2 cursor-pointer">
            <img
              src={ShopImageSource}
              alt="Shop Logo"
              className="w-8 h-8 rounded-full"
              width={50}
              height={50}
              style={{ aspectRatio: "50/50", objectFit: "cover" }}
            />
            <span className="text-lg font-semibold">{shop_name}</span>
          </div>
          <p className="text-gray-500 mb-6">
            {productDesc
              ? productDesc
              : "This is the product description. It contains details about the product, its specifications, and its features."}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 mb-4">
            {product_tags
              ? product_tags.map((tag, idx) => (
                  <div
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-${colors[idx]}-100 text-${colors[idx]}-500`}
                    key={idx}
                  >
                    {tag ? tag : `tag-${idx}`}
                  </div>
                ))
              : null}
          </div>

          <div className="flex items-center gap-2 mb-6">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-green-500 text-white">
              {average_rating}
            </div>
            <div className="flex items-center gap-0.5">
              <StarRatings
                starDimension="20"
                starRatedColor="blue"
                starSpacing="2"
                rating={average_rating}
              />
            </div>
            <a className="text-blue-500 text-sm" href="#" rel="ugc">
              ({product.reviews.length} reviews)
            </a>
          </div>
          <div className="relative inline-flex">
            <select
              className="block appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500 cursor-pointer"
              onChange={handleVariantChange}
              value={selectedVariant.name}
            >
              {product_variants ? (
                product_variants.map((variant, index) => (
                  <option key={index} value={variant.name}>
                    {variant.name}
                  </option>
                ))
              ) : (
                <option value={defaultVariant.name}>
                  {defaultVariant.name}
                </option>
              )}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => handleAddToCart()}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white"
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleBuyNow()}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-black text-white"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
