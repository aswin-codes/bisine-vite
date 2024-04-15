import React from 'react'
import userDefault from "../assests/userIcon.png"
import StarRatings from 'react-star-ratings';

function ReviewCard({userImage, name, date, description, rating, option}) {
    console.log(option);
    const userPhoto = userImage || userDefault

    return (
        <div
        className="rounded-lg border mb-4 bg-card text-card-foreground shadow-sm"
        data-v0-t="card"
        >
            <div className="p-4 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <img
                        className="relative flex shrink-0 overflow-hidden rounded-full w-12 h-12"
                        alt="User Avatar"
                        height={50}
                        width={50}
                        src={userPhoto}
                    />
                    <div>
                        <h3 className="font-bold text-lg">{name}</h3>
                        <span className="text-gray-500 block">{date}</span>
                        
                    </div>
                </div>

                <div>
                        <StarRatings
                            rating={rating}
                            starRatedColor="#ffa534"
                            isSelectable={false}
                            numberOfStars={5}
                            starDimension='20'
                            name='rating'
                        />
                </div>
                <p className="text-gray-500">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ReviewCard