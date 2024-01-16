import { useState } from "react";

const MakeGreen = (props) => {
  return (
    <div>
      <h2 style={{ color: props.isGreen ? "green" : "red" }}>
        This Text is Colored!
      </h2>
      {props.isGreen && <button>This is The Button for Green</button>}
    </div>
  );
};

export const DisplayMakeGreen = () => {
  const [showText, setShowText] = useState(false);
  const [isReaden, setReadState] = useState("whitesmoke");
  let buttonText = "Show";
  {
    showText === false ? (buttonText = "Show") : (buttonText = "Hide");
  }
  return (
    <div>
      <h2>Color Changer Demo!</h2>
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
          <MakeGreen />
          <MakeGreen isGreen />
        </div>
      )}
    </div>
  );
};