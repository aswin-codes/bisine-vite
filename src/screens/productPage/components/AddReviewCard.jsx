import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { useId } from "react";
import toast from "react-hot-toast";
import axiosInstance from "../../../Helper/axiosInstance";

function AddReviewCard({  product_id }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  const createReviewCard = async (e) => {
    e.preventDefault();
    if (review && rating && localStorage.getItem("user")) {
      const newReview = {
        user_id: JSON.parse(localStorage.getItem("user")).id,
        product_id: product_id,
        rating: parseFloat(rating),
        description: review,
        date: getCurrentDateFormatted(),
      };
      const response = await axiosInstance.post("/review/add", newReview);
      if (response.status == 201) {
        toast.success(response.data.msg)
      }
      setReview("");
      setRating(0);
    } else if (!localStorage.getItem("user")) {
      toast.error("Kindly login to give a review");
    } else {
      toast.error(
        "Kindly fill the review and give the star rating to add a review!"
      );
    }
  };

  function getCurrentDateFormatted() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return `${year}-${day}-${month}`;
  }

  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm"
      data-v0-t="card"
    >
      <div className="p-4 flex flex-col gap-4">
        <h2 className="font-bold text-xl md:text-2xl mb-6">Add Your Review</h2>
        <div className="flex flex-col gap-4">
          <textarea
            aria-label="Your Review"
            className="p-2 border rounded"
            placeholder="Your Review"
            rows={5}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />

          <div>
            <StarRatings
              rating={rating}
              starRatedColor="#ffa534"
              changeRating={changeRating}
              numberOfStars={5}
              starSelectingHoverColor="#ffe234"
              name="rating"
              starDimension="30px"
            />
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white"
            onClick={createReviewCard}
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddReviewCard;
