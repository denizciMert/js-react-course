import { useState } from "react";

const AgeDiff2 = (props) => {
  return (
    <div>
      <h3>
        Given age is {props.age}. Your age is{" "}
        {props.age >= 18 ? "OVER AGE" : "UNDER AGE"}.
      </h3>
    </div>
  );
};

export const DisplayAgeDiff2 = () => {
  const [showText, setShowText] = useState(false);
  const [isReaden, setReadState] = useState("whitesmoke");
  let buttonText = "Show";
  {
    showText === false ? (buttonText = "Show") : (buttonText = "Hide");
  }
  return (
    <div>
      <h2>Age Restriction With Less Code!</h2>
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
          <AgeDiff2 age={15} />
          <AgeDiff2 age={29} />
        </div>
      )}
    </div>
  );
};