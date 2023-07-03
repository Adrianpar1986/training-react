import "./Person.css";

function Person(props) {
  return (
    <div>
      <ul>
        <li>DNI: <strong>{props.info.dni}</strong></li>
        <li>Name: <strong>{props.info.userName}</strong></li>
      </ul>
    </div>
  );
}

export default Person;
