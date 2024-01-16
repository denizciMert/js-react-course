import { useState } from "react";

const Increment = () => {
  const [number, setNumber] = useState(0);
  const increse = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h2>This is the number: {number}</h2>
      <button onClick={increse}>Increse Button</button>
      <button onClick={decrease}>Decrease Button</button>
    </div>
  );
};

export const DisplayIncrement = () => {
  const [showText, setShowText] = useState(false);
  const [isReaden, setReadState] = useState("whitesmoke");
  let buttonText = "Show";
  {
    showText === false ? (buttonText = "Show") : (buttonText = "Hide");
  }
  return (
    <div>
      <h2>Number Increment!</h2>
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
        <div style={{ color: isReaden }}>
          <Increment />
        </div>
      )}
    </div>
  );
};