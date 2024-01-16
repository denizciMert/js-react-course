import { useState } from "react";

const ListPlanets = () => {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
    { name: "Merkur", isGasPlanet: false },
    { name: "Saturn", isGasPlanet: true },
  ];
  return (
    <div key="func">
      <h2>These Are Gas Planets!</h2>
      {planets.map((data, index) => {
        return data.isGasPlanet && <h3 key={index}>{data.name}</h3>;
      })}
      <br />
      <h2>These Are Not Gas Planets!</h2>
      {planets.map((data, index) => {
        return !data.isGasPlanet && <h3 key={index}>{data.name}</h3>;
      })}
    </div>
  );
};

export const DisplayListPlanets = () => {
  const [showText, setShowText] = useState(false);
  const [isReaden, setReadState] = useState("whitesmoke");
  let buttonText = "Show";
  {
    showText === false ? (buttonText = "Show") : (buttonText = "Hide");
  }
  return (
    <div>
      <h2>List Planets Demo!</h2>
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
          <ListPlanets />
        </div>
      )}
    </div>
  );
};