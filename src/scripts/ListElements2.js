import { useState } from "react";

const ListElementsFromList2 = (props) => {
  return (
    <div>
      {props.list.map((data, index) => {
        return (
          <label key={index} style={{ fontSize: 25 }}>
            {data}{" "}
          </label>
        );
      })}
    </div>
  );
};

export const DisplayListElementsFromList2 = () => {
  const [showText, setShowText] = useState(false);
  const [isReaden, setReadState] = useState("whitesmoke");
  let buttonText = "Show";
  {
    showText === false ? (buttonText = "Show") : (buttonText = "Hide");
  }
  return (
    <div>
      <h2>List Elements From "props"!</h2>
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
          <ListElementsFromList2
            list={[
              "Mert",
              "Zeynep",
              "Bora",
              "Hatice",
              "Şeyma",
              "Batuhan",
              "Burak",
            ]}
          />
          <ListElementsFromList2
            list={[111, 222, 333, 444, 555, 666, 777, 888, 999]}
          />
        </div>
      )}
    </div>
  );
};