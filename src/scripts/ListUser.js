import { useState } from "react";

const user1 = {
  name: "Mert",
  age: "24",
  company: "Denizci",
  email: "mert@test.com",
};
const UserLister = (props) => {
  const user = {
    name: props.name,
    age: props.age,
    company: props.company,
    email: props.email,
  };
  return (
    <div key={user.name}>
      <h3>
        İsim: {user.name}, Yaş: {user.age}, Şirket: {user.company}, Email:{" "}
        {user.email}
      </h3>
    </div>
  );
};

export const DisplayUserLister = () => {
  const [showText, setShowText] = useState(false);
  const [isReaden, setReadState] = useState("whitesmoke");
  let buttonText = "Show";
  {
    showText === false ? (buttonText = "Show") : (buttonText = "Hide");
  }
  return (
    <div>
      <h2>List Users With "props" Demo!</h2>
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
          <UserLister
            name={user1.name}
            age={user1.age}
            email={user1.email}
            company={user1.company}
          />
        </div>
      )}
    </div>
  );
};