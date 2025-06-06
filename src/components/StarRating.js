import { useState } from "react";
import Star from "./Star";

export default function StarRating() {
    const initialStars = [
        { id: 0, on: false },
        { id: 1, on: false },
        { id: 2, on: false },
        { id: 3, on: false },
        { id: 4, on: false }
    ];

    const [stars, setStars] = useState(initialStars);
    const handleRating = (id, on) => {
        const updatedStars = stars.map(star =>
            star.id === id ? { ...star, on: !on } : star
        );
        
        setStars(updatedStars);
    };

    return (
        <div>
            {stars.map(star => (
                <Star 
                    id={star.id}
                    on={star.on}
                    handleRating={handleRating}
                />
            ))}        
        </div>             
    );
}