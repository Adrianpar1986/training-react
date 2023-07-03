import "./NewDate.css";

function NewDate(props) {
  return (
    <div>
      Today is: <span>{props.today}</span>
    </div>
  );
}

export default NewDate;
