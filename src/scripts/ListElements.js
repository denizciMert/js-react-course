import { useState } from "react";

const ListElementsFromList = () => {
  const list = [
    "Mert",
    "Zeynep",
    "Bora",
    "Hatice",
    "Şeyma",
    "Batuhan",
    "Burak",
  ];
  return (
    <div>
      {list.map((data, index) => {
        return <h3 key={index}> {data}</h3>;
      })}
    </div>
  );
};

export const DisplayListElementsFromList = () => {
  const [showText, setShowText] = useState(false);
  const [isReaden, setReadState] = useState("whitesmoke");
  let buttonText = "Show";
  {
    showText === false ? (buttonText = "Show") : (buttonText = "Hide");
  }
  return (
    <div>
      <h2>List Elements From Existing List!</h2>
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
          <ListElementsFromList />
        </div>
      )}
    </div>
  );
};