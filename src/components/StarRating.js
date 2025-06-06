import { useState } from "react";
import Star from "./Star";

export default function StarRating() {
    const [rating, setRating] = useState(0);

    const ratings = [
        { id: 0, label: "Poor" },
        { id: 1, label: "Low" },
        { id: 2, label: "Good" },
        { id: 3, label: "Very good" },
        { id: 4, label: "Excellent" }
    ];

    const handleRating = (id, on) => {
        if (on) {
            id--;
        }

        setRating(id + 1);
    };

    return (
        <div className="rating-container">
            <div className="stars">
                {ratings.map(({ id }) => (
                    <Star
                        key={id}
                        id={id}
                        on={id < rating}
                        handleRating={handleRating}
                    />
                ))}
            </div>

            <h2 
                className="rating-text" 
                style={{ opacity: rating > 0 ? 1 : 0 }}
            >
                {rating > 0 ? ratings[rating - 1].label : " "}
            </h2>
        </div>
    );
}