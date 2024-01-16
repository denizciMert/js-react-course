import { useState } from "react";

const TextExpression = () => {
  const [inputText, setInputText] = useState("");
  const handleInput = (event) => {
    setInputText(event.target.value);
  };
  return (
    <div>
      <h3>You are going to see your text on the screen!</h3>
      <input
        type="text"
        onChange={handleInput}
        placeholder="Write Here!"
      ></input>
      <h2>{inputText}</h2>
    </div>
  );
};

export const DisplayTextExpression = () => {
  const [showText, setShowText] = useState(false);
  const [isReaden, setReadState] = useState("whitesmoke");
  let buttonText = "Show";
  {
    showText === false ? (buttonText = "Show") : (buttonText = "Hide");
  }
  return (
    <div>
      <h2>useState on Input Text!</h2>
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
          <TextExpression />
        </div>
      )}
    </div>
  );
};