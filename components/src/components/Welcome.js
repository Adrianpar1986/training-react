import "./Welcome.css";
import NewDate from "./NewDate";
import Person from "./Person";
function Welcome(props) {
  const data = {
    dni:
      Math.random().toString().substring(2, 10) +
      String.fromCharCode(Math.floor(Math.random() * 90 + 65)).toUpperCase(),
    userName: props.userName,
  };
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <NewDate today={props.today}></NewDate>
      <Person info={data}></Person>
    </div>
  );
}

export default Welcome;
