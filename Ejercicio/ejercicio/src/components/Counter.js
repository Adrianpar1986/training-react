import { useReducer } from "react";
import { initialState, counterReducer } from "../reducers/counterReducer";

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const buttonStyle = {
    backgroundColor: "dodgerblue",
    padding: ".5em 1em",
    margin: "3em",
    color: "white",
    borderRadius: ".25rem",
  };
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        style={buttonStyle}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        style={buttonStyle}
      >
        Decrement
      </button>
      <span style={{ ...buttonStyle, display: "block", width: "30%" }}>
        {state}
      </span>
    </div>
  );
}

export default Counter;
