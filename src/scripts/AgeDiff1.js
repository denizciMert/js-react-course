import { useState } from "react";

const AgeDiff = (props) => {
  var text;
  if (props.age >= 18) {
    text = "OVER AGE";
  } else {
    text = "UNDER AGE";
  }

  return (
    <div>
      <h3>
        Given age is {props.age}. Your age is {text}.
      </h3>
    </div>
  );
};

export const DisplayAgeDiff = () => {
  const [showText, setShowText] = useState(false);
  const [isReaden, setReadState] = useState("whitesmoke");
  let buttonText = "Show";
  {
    showText === false ? (buttonText = "Show") : (buttonText = "Hide");
  }
  return (
    <div>
      <h2>Age Restriction With "props"!</h2>
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
          <AgeDiff age={18} />
          <AgeDiff age={5} />
        </div>
      )}
    </div>
  );
};