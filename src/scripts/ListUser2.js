import { useState } from "react";

const User = (props) => {
  return (
    <div>
      <h3>
        İsim: {props.name}, Yaş: {props.age}, Şirket: {props.company}, Email:{" "}
        {props.email}
      </h3>
    </div>
  );
};
const UserLister2 = () => {
  const users = [
    { name: "Mert Denizci", age: 34, email: "mert@test.com", company: "A123" },
    { name: "Ahmet Veli", age: 42, email: "ahmet@test.com", company: "B2345" },
    { name: "Şeyma Baş", age: 63, email: "seyma@test.com", company: "FA413" },
    {
      name: "Mahmut Bora",
      age: 18,
      email: "mahmut@test.com",
      company: "TDF1245",
    },
    {
      name: "Hatice Turhan",
      age: 29,
      email: "hatice@test.com",
      company: "OFG125",
    },
  ];
  return (
    <div>
      {users.map((data, index) => {
        return (
          <User
            key={index}
            name={data.name}
            age={data.age}
            company={data.company}
            email={data.email}
          />
        );
      })}
    </div>
  );
};

export const DisplayUserLister2 = () => {
  const [showText, setShowText] = useState(false);
  const [isReaden, setReadState] = useState("whitesmoke");
  let buttonText = "Show";
  {
    showText === false ? (buttonText = "Show") : (buttonText = "Hide");
  }
  return (
    <div>
      <h2>List Users From Existing User!</h2>
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
          <UserLister2 />
        </div>
      )}
    </div>
  );
};