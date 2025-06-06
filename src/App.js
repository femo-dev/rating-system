import { useState } from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";

function App() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <div className="main-container">
        <StarRating />
        <button className="dialog-button" onClick={() => setShowDialog(true)}>
          About Developer
        </button>
        {showDialog && <Dialog onClose={() => setShowDialog(false)} />}
      </div>
    </>
  );
}

export default App;