import { Button, CircularProgress } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Helper/axiosInstance";
import { useDispatch } from "react-redux";
import {
  setDescription,
  setImages,
  setName,
  setProductTags,
  setProductVariants,
} from "../../../redux/features/product";
import { useNavigate } from "react-router-dom";
import { setEditProductId } from "../../../redux/features/admin";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAllProducts = async () => {
    setIsLoading(true);
    const response = await axiosInstance.get(
      `/shop/${JSON.parse(localStorage.getItem("shop")).shopId}`
    );
    setIsLoading(false);
    //console.log(response.data);
    setProductList(response.data.products);
  };

  const handleEditInfo = (product) => {
    dispatch(setEditProductId(product.product_id));
    dispatch(setName(product.product_name));
    dispatch(setDescription(product.product_description));
    dispatch(setProductTags(product.product_tags));
    dispatch(setImages(product.product_image_urls));
    dispatch(setProductVariants(product.variants));
    navigate("/admin/product/edit");
  };

  const handleDeleteProduct = async (productId) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      setIsLoading(true);
      try {
        await axiosInstance.delete(`/product/delete/${productId}`);
        setProductList(productList.filter((product) => product.product_id !== productId));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleNewProduct = () => {
    dispatch(setName(""));
    dispatch(setDescription(""));
    dispatch(setProductTags([]));
    dispatch(
      setProductVariants([
        {
          name: "",
          price: "",
          quantityInStock: null,
          weight: null,
          weightUnit: "kg",
        },
      ])
    );
    navigate("/product/add");
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Product List</h1>
        <Button color="primary" onClick={() => handleNewProduct()}>
          Add Product
        </Button>
      </div>
      {isLoading ? (
        <>
        <div className="h-48 w-full flex justify-center items-center">
          <CircularProgress />
        </div>
        </>
      ) : (
        <div className="mt-5">
          {productList &&
            productList.map((e) => {
              return (
                <div key={e.product_id} className="p-4 my-2 bg-white rounded shadow flex flex-col md:flex-row">
                  <img
                    className="h-32 w-full md:w-32 object-cover rounded mb-4 md:mb-0 md:mr-4"
                    src={e.product_image_urls[0]}
                    alt="Product Image"
                  />
                  <div className="flex-1">
                    <h1 className="text-xl font-semibold mb-2">
                      {e.product_name}
                    </h1>
                    <p className="max-w-lg mb-4">
                      {e.product_description.substring(0, 75)}
                    </p>
                    <div className="flex gap-2">
                      {e.variants.map((variant, idx) => (
                        <p key={idx} className="py-1 px-2 bg-blue-400 rounded">
                          {variant.name} : {variant.quantityInStock}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center mt-4 md:mt-0">
                    <Button
                      onClick={() => handleEditInfo(e)}
                      className="w-full mr-2"
                    >
                      Edit
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => handleDeleteProduct(e.product_id)}
                      className="w-full "
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
