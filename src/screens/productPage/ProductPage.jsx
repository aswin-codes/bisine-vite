import React, { useEffect, useLayoutEffect, useState } from 'react'
import Navbar from "../../CommonComponets/NavBar"
import AddReviewCard from './components/AddReviewCard'
import ProductCard from './components/ProductCard'
import { useSelector, useDispatch } from 'react-redux';
import ReviewCard from './components/ReviewCard'
import cloth1 from "../productPage/assests/URBANMONKEY06_11_231642.webp"
import cloth2 from "../productPage/assests/URBANMONKEY06_11_231679.webp"
import cloth3 from "../productPage/assests/URBANMONKEY07_11_231899.webp"
import { useParams } from 'react-router-dom';
import axiosInstance from '../../Helper/axiosInstance';

function ProductPage() {
    const dispatch = useDispatch();
    const params = useParams();
    const [productId, setProductId] = useState(0);
    const [product,setProduct] = useState(null)
    // const [data, setData] = useState();
    // const [loading, setLoading] = useState(true);
    const reviews = useSelector((state) => state.review.reviews ? state.review.reviews : []);

   useEffect(()=>{
    setProductId(params.product_id)
    fetchProductDetails(params.product_id)
   },[])

   const fetchProductDetails = async (pid) => {
    console.log(params.product_id)
    const response = await axiosInstance.get(`/product/${params.product_id}`)
    console.log(response.data)
    if (response.status == 200) {
        setProduct(response.data)
    }
   }

   


    return (
        <>
            <Navbar />  
            {product && <ProductCard product={product}/>}
            <div className="max-w-6xl px-4 mx-auto py-6">
                <h2 className="font-bold text-2xl md:text-3xl mb-6">Customer Reviews</h2>
                {product && product.reviews.map((review,index) => (
                    <ReviewCard
                        key={index}
                        id={review.id}
                        userImage={review.profile_url}
                        name={review.full_name}
                        date={review.date}
                        description={review.description}
                        rating={review.rating}
                    />
                ))}
                <AddReviewCard product_id={productId}  />
            </div>
        </>
    )
}

export default ProductPage