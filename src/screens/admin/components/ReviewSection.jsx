import React, { useEffect, useState } from "react";
import axiosInstance from "../../../Helper/axiosInstance";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const fetchAllReviews = async () => {
    const response = await axiosInstance.get(
      `/admin/reviews/${JSON.parse(localStorage.getItem("shop")).shopId}`
    );
    if (response.status == 200) {
      setReviews(response.data);
    }
  };

  useEffect(() => {
    fetchAllReviews();
  }, []);
  return (
    <div>
      <h1 className="text-xl font-semibold">Reviews ({reviews.length})</h1>
      <div className="mt-5">
        {reviews &&
          reviews.map((e) => {
            return (
                <div className="p-2 my-2 bg-white rounded shadow flex flex-col md:flex-row items-start">
                <img
                  className="h-32 w-full md:w-32 object-cover rounded mb-4 md:mb-0 md:mr-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3zC2ZV9o7xJBiOGZPpz9WPc8KkMPiiVwCA&s"
                  alt="Review Image"
                />
                <div className="flex-1">
                  <h1 className="text-xl font-semibold mb-2">{e.reviewer_name} on {e.product_name}</h1>
                  <p className="max-w-lg mb-4 flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <span>{e.review_rating}</span>
                  </p>
                  <div className="flex gap-2">{e.review_description}</div>
                </div>
              </div>
              
            );
          })}
      </div>
    </div>
  );
};

export default ReviewSection;
