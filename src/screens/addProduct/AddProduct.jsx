import React, { useEffect, useState } from "react";
import NavBar from "../../CommonComponets/NavBar";
import TagInput from "../shopCreate/components/InputTag";
import {
  setDescription,
  setImages,
  setName,
  setProductTags,
  setProductVariants,
  setQuantity,
  setUnit,
  setWeight,
} from "../../redux/features/product";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const ProductAdditionScreen = () => {
  const [showDescriptionTooltip, setDescriptionShowTooltip] = useState(false);
  const [showTagToolTip, setShowTagToolTip] = useState(false);
  // State for input values
  const productName = useSelector((e) => e.product.name);
  const productDescription = useSelector((e) => e.product.description);
  const productTags = useSelector((e) => e.product.productTags);
  const productImages = useSelector((e) => e.product.images);
  const productVariants = useSelector((e) => e.product.variants);
  const weight = useSelector((e) => e.product.weight);
  const weightUnit = useSelector((e) => e.product.unit);
  const quantityInStock = useSelector((e) => e.product.quantity);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [tempImages, setTempImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle image uploads
  const handleImageUpload = (e) => {
    const files = e.target.files;
    const updatedImages = [...tempImages];
    for (let i = 0; i < files.length; i++) {
      console.log("Hi");
      if (updatedImages.length >= 3) {
        break;
      }
      updatedImages.push({
        id: Date.now() + i, // You can use a better unique identifier
        file: files[i],
      });
    }
    setTempImages(updatedImages);
  };
  const removeImage = (id) => {
    const updatedImages = tempImages.filter((image) => image.id !== id);
    setTempImages(updatedImages);
  };

  // Function to handle changes in variants
  // const handleVariantChange = (index, field, value) => {
  //   const updatedVariants = [...productVariants];
  //   updatedVariants[index][field] = value;
  //   dispatch(setProductVariants(updatedVariants));
  // };
  const handleVariantChange = (variantIndex, field, value) => {
    const updatedVariants = [...productVariants];
    updatedVariants[variantIndex] = {
      ...updatedVariants[variantIndex],
      [field]: value,
    };
    dispatch(setProductVariants(updatedVariants));
  };

  // Function to add a new variant
  const addVariant = () => {
    dispatch(
      setProductVariants([
        ...productVariants,
        {
          name: "",
          price: "",
          quantityInStock: "",
          weight: "",
          weightUnit: "kg",
        },
      ])
    );
  };

  // Function to remove a variant
  const removeVariant = (variantIndex) => {
    const updatedVariants = [...productVariants];
    updatedVariants.splice(variantIndex, 1);
    dispatch(setProductVariants(updatedVariants));
  };

  //Function to upload images in Cloudinary
  const uploadImage = async (file) => {
    // Secret keys for Cloudinary
    const preset_key = "bisineimages";
    const cloudname = "ddkpclbs2";

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`,
        formData
      );
      console.log(response.data.secure_url)
      return response.data.secure_url || null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const submitProductData = async () => {
    setIsLoading(true)
    var imageUrls = [];
    for (var i = 0; i < tempImages.length; i++) {
      const res_url = await uploadImage(tempImages[i].file)
      imageUrls.push(res_url);
    }
    const shop_id = JSON.parse(localStorage.getItem("shop")).shopId;

    const request_data = {
      product_name: productName,
      product_description: productDescription,
      product_tags: productTags,
      product_image_urls: imageUrls,
      variants: productVariants,
      shop_id: shop_id
    }

    try{
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/product/create`,request_data);
      if (response.status == 201) {
        //Product is sucessfully added, need to naviaate to Inventory
        toast.success("Product successfully added")
        navigate("/");
      }
    } catch (error) {
      alert("Sorry, something went wrong, please try later...")
      console.log(error);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="bg-blue-50 min-h-screen ">
      <NavBar />
      <div className="py-16  px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Add a New Product
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-4 h-fit">
              {/* Title, Description, and Tags */}
              <div className="mb-4">
                <label className="text-black font-medium">Product Name:</label>
                <input
                  type="text"
                  placeholder="Product Title"
                  className="w-full border-2 border-gray-500 bg-white rounded-md px-3 py-2 mb-3 focus:outline-none"
                  value={productName}
                  onChange={(e) => dispatch(setName(e.target.value))}
                />
              </div>
              <div className="mb-4 relative">
                <label className="text-black font-medium flex items-center">
                  Product Description:
                  <div
                    className="cursor-pointer ml-2"
                    onClick={() => setDescriptionShowTooltip((prev) => !prev)}
                    onMouseEnter={() => setDescriptionShowTooltip(true)}
                    onMouseLeave={() => setDescriptionShowTooltip(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </div>
                </label>
                {showDescriptionTooltip && (
                  <div className="absolute text-xs top-8 left-16 p-3 bg-blue-200 border text-black border-gray-300 rounded-lg shadow-md z-10 w-48">
                    <p className="whitespace-pre-line">
                      This is your product description. You can provide details
                      about the product here. The details you provide here will
                      be shown to the user when they visit this product.
                    </p>
                  </div>
                )}
                <textarea
                  rows={5}
                  placeholder="Product Description"
                  className="w-full border-2 text-black border-gray-500 bg-white rounded-md px-3 py-2 mb-3 focus:outline-none"
                  value={productDescription}
                  onChange={(e) => dispatch(setDescription(e.target.value))}
                />
              </div>
              <div className="text-black relative">
                <label className="text-black font-medium flex items-center">
                  Product Tags
                  <div
                    className="cursor-pointer ml-2"
                    onClick={() => setShowTagToolTip((prev) => !prev)}
                    onMouseEnter={() => setShowTagToolTip(true)}
                    onMouseLeave={() => setShowTagToolTip(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </div>
                </label>
                {showTagToolTip && (
                  <div className="absolute text-xs top-8 left-16 p-3 bg-blue-200 border text-black border-gray-300 rounded-lg shadow-md z-10 w-48">
                    <p className="whitespace-pre-line">
                      When adding tags to your product, use relevant keywords or
                      phrases. Tags help users find your product easily. For
                      example, if you're selling a camera, tags like
                      'photography,' 'digital,' and 'DSLR' can be useful for
                      potential buyers to discover your product.
                    </p>
                  </div>
                )}
                <TagInput setData={setProductTags} bgWhite={true} />
              </div>
              <h1 className="text-black mt-3 font-medium">Product Images:</h1>
              <div className="bg-gray-300 rounded h-28 flex p-2">
                {tempImages.map((image) => (
                  <div key={image.id} className="relative mr-2">
                    <img
                      src={URL.createObjectURL(new Blob([image.file]))}
                      alt="Product Preview"
                      className="h-20 w-20 rounded-md object-cover"
                    />
                    <button
                      onClick={() => removeImage(image.id)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 cursor-pointer"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <input
                  type="file"
                  multiple
                  disabled={tempImages.length == 3}
                  accept="image/*"
                  className="hidden"
                  id="image-upload"
                  onChange={handleImageUpload}
                />
                <label
                  htmlFor="image-upload"
                  className={`cursor-pointer ${
                    tempImages.length == 3 ? "bg-gray-500" : "bg-blue-500"
                  } text-white rounded-md px-4 py-2 `}
                >
                  Upload Images
                </label>
              </div>
            </div>
            <div className="">
              <div className="bg-white rounded-lg text-black shadow-md p-4">
                {/* Variants and Prices */}
                <label className="text-black font-medium mb-2">
                  Variants and Prices:
                </label>
                {productVariants.map((variant, index) => (
                  <div
                    key={index}
                    className=" items-center mb-3 p-2 bg-gray-200 rounded gap-2 sm:gap-0 "
                  >
                    <div className="flex gap-2">
                      <div>
                        <div className="mb-0">
                          <label className="text-gray-700 pl-2 text-sm font-medium">
                            {" "}
                            Product Name{" "}
                          </label>
                        </div>
                        <input
                          type="text"
                          placeholder={`Variant ${index + 1}`}
                          className="w-full border-2 border-gray-500 bg-white rounded-md px-3 py-2 mr-2"
                          value={variant.name}
                          onChange={(e) =>
                            handleVariantChange(index, "name", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <div className="mb-0">
                          <label className="text-gray-700 pl-2 text-sm font-medium">
                            {" "}
                            Product Prize{" "}
                          </label>
                        </div>
                        <div className="flex w-full overflow-hidden items-center flex-1 border-2 border-gray-500 mr-2 bg-white rounded-md">
                          <div className="mr-2 h-full py-2 px-2 bg-gray-300">
                            ₹
                          </div>
                          <input
                            type="number"
                            placeholder="Price"
                            className="border-none focus:outline-none active:border-none px-3 py-2 w-full"
                            value={variant.price}
                            onChange={(e) =>
                              handleVariantChange(
                                index,
                                "price",
                                e.target.value
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-0">
                        <label className="text-gray-700 pl-2 text-sm font-medium">
                          Quantity in stock
                        </label>
                      </div>
                      <input
                        type="number"
                        placeholder="Quantity in Stock"
                        className="w-full border-2 border-gray-500 bg-white rounded-md px-3 py-2"
                        value={variant.quantityInStock}
                        onChange={(e) =>
                          handleVariantChange(
                            index,
                            "quantityInStock",
                            e.target.value
                          )
                        }
                      />
                    </div>
                    <div className="flex gap-2 w-full">
                      <div className="w-full">
                        <div className="mb-0">
                          <label className="text-gray-700 pl-2 text-sm font-medium">
                            Weight of the package
                          </label>
                        </div>
                        <input
                          type="number"
                          placeholder="Weight"
                          className="w-full border-2 border-gray-500 bg-white rounded-md px-3 py-2"
                          value={variant.weight}
                          onChange={(e) =>
                            handleVariantChange(index, "weight", e.target.value)
                          }
                        />
                      </div>
                      <div className="w-full">
                        <div className="mb-0">
                          <label className="text-gray-700 pl-2 text-sm font-medium">
                            Weight Unit
                          </label>
                        </div>
                        <select
                          className="border-2 border-gray-500 bg-white rounded-md px-3 py-2"
                          value={variant.weightUnit}
                          onChange={(e) =>
                            handleVariantChange(
                              index,
                              "weightUnit",
                              e.target.value
                            )
                          }
                        >
                          <option value="kg">kg</option>
                          <option value="g">g</option>
                        </select>
                      </div>
                    </div>
                    <button
                      onClick={() => removeVariant(index)}
                      className="bg-red-500 text-white rounded-md w-full px-3 py-1  mt-2"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  onClick={addVariant}
                  className="bg-blue-500 text-white rounded-md px-3 py-1"
                >
                  Add Variant
                </button>
              </div>
              <div className="mt-2 bg-white rounded-lg text-black shadow-md p-4">
                <h1 className="font-bold">Submit Products</h1>
                <button
                  disabled={isLoading}
                  onClick={() => submitProductData()}
                  className="bg-blue-500 mt-2 hover:bg-blue-700 text-white rounded-md px-4 py-2  w-full disabled:bg-gray-500 disabled:cursor-not-allowed transition-all ease-in-out duration-150  "
                >
                  {isLoading ? "Loading..." : "Submit"}
                </button>
                <button
                  onClick={() => navigate(-1)}
                  className="bg-red-500 mt-2 text-white rounded-md px-4 py-2  w-full   "
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdditionScreen;
