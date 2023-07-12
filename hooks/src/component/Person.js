// import './Person.css';
import { useState } from "react";

function Person() {
  const [person, setPersonInfo] = useState({
    name: "John",
    age: 27,
    enemys: ["Skynet", "T-800", "T-1000", "T-x"],
    father: "unknown",
  });
  const updateFather = () => {
    setPersonInfo(previousState=>{
        return{
            ...previousState,father:"Kyle Reese"
        }
    })

  };
  return (
    <div>
      <h1>Character info</h1>
      <h2>name: {person.name}</h2>
      <h2>age:{person.age}</h2>
      <h2>enemys:{person.enemys}</h2>
      <h2>father:{person.father}</h2>
      <button type="button" onClick={updateFather}>Update</button>
    </div>
  );
}

export default Person;
