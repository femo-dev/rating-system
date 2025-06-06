import { FaTimes } from "react-icons/fa";

export default function Dialog({ onClose }) {
  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <button className="dialog-close" onClick={onClose}>
          <FaTimes size={24} />
        </button>
        <img
          src={process.env.PUBLIC_URL + "/images/about.png"}
          alt="About"
          className="dialog-image"
        />
        <p>Developed by</p>
        <h3>Fabian Mendoza</h3>
      </div>
    </div>
  );
}