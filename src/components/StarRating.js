import { useState } from "react";
import Star from "./Star";

export default function StarRating() {
    const [rating, setRating] = useState(0);
    const ratingsIds = [0, 1, 2, 3, 4];
    const ratingTexts = ["Poor", "Low", "Good", "Very good", "Excellent"];

    const handleRating = (id) => {
        setRating(id + 1);
    };

    return (
        <div className="rating-container">
            <div className="stars">
                {
                    ratingsIds.map((id) => (
                        <Star
                            key={id}
                            id={id}
                            on={id < rating}
                            handleRating={handleRating}
                        />
                    ))
                }
            </div>

            <h2 
                className="rating-text" 
                style={{ opacity: rating > 0 ? 1 : 0 }}
            >
                {
                    rating > 0 ? ratingTexts[rating - 1] : " "
                }
            </h2>
        </div>
    );
}