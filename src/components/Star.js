import { FaStar } from "react-icons/fa";

export default function Star({ id, on, handleRating }) {
    return (
        <FaStar
            color={on ? "gold" : "gray"}
            size={84}
            onClick={() => handleRating(id)}
            style={{ cursor: "pointer", transition: "color 0.3s" }}
        />
    );
}