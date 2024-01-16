import { useState } from "react";

const Jobs = (props) => {
  return (
    <div>
      <h3>
        Position: {props.position} Salary: {props.salary} Company:{" "}
        {props.company}
      </h3>
    </div>
  );
};

export const DisplayJobs = () => {
  const [showText, setShowText] = useState(false);
  const [isReaden, setReadState] = useState("whitesmoke");
  let buttonText = "Show";
  {
    showText === false ? (buttonText = "Show") : (buttonText = "Hide");
  }
  return (
    <div>
      <h2>First React Codes!</h2>
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
          <Jobs salary={90000} position="Senior SDE" company="Amazon" />
          <Jobs salary={12000} position="Junior SDE" company="Google" />
          <Jobs salary={10000} position="Project Manager" company="Netflix" />
        </div>
      )}
    </div>
  );
};