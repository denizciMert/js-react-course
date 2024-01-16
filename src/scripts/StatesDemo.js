import { useState } from "react";

const UseStateDemo = () => {
  const [number, numberState] = useState(0);
  return (
    <div>
      <h2>This is "The Number": {number}</h2>
      <button onClick={() => numberState(number + 1)}>Increase</button>
      <button onClick={() => numberState(number - 1)}>Decrease</button>
      <button onClick={() => numberState(0)}>Reset</button>
    </div>
  );
};

export const DisplayUseStateDemo = () => {
  const [showText, setShowText] = useState(false);
  const [isReaden, setReadState] = useState("whitesmoke");
  let buttonText = "Show";
  {showText === false? buttonText="Show" : buttonText="Hide"}
  return (
    <div>
      <h2>Usage of "useState" Demo!</h2>
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
        <div style={{ color: isReaden }}><UseStateDemo /></div>
        
      )}
    </div>
  );
};