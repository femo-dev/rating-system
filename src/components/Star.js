import { FaStar } from "react-icons/fa";

export default function Star(props) {
    return (
        <FaStar
            key={props.id}
            color={props.on ? 'gold' : 'gray'}
            size={84}
            onClick={() => props.handleRating(props.id, props.on)}
            style={{ cursor: 'pointer' }}
        /> 
    )
}
