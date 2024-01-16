import { useState } from "react";

export const DisplayShowHide = () => {
  const [showText, setShowText] = useState(false);
  const [isReaden, setReadState] = useState("whitesmoke");
  let buttonText = "Show";
  {
    showText === false ? (buttonText = "Show") : (buttonText = "Hide");
  }
  return (
    <div>
      <h2>Context Header!</h2>
      <button onClick={() => setShowText(!showText)}>{buttonText}</button>
      <button
        style={{ color: isReaden }}
        onClick={() =>
          setReadState(isReaden === "whitesmoke" ? "green" : "whitesmoke")
        }
      >
        <i className="fa fa-check"></i>
      </button>
      {showText === true && (
        <h3 style={{ color: isReaden }}>This is the hidden text...</h3>
      )}
    </div>
  );
};