import "./Welcome.css";
import NewDate from "./NewDate";
import Person from "./Person";
import Wrapper from "./Wrapper";


function Welcome(props) {
  const data = {
    dni:
      Math.random().toString().substring(2, 10) +
      String.fromCharCode(Math.floor(Math.random() * 90 + 65)).toUpperCase(),
    userName: props.userName,
  };
  return (
    <Wrapper>
      <h1>Hello, {props.userName}</h1>
      <NewDate today={props.today}></NewDate>
      <Person info={data}></Person>
    </Wrapper>
  );
}

export default Welcome;
