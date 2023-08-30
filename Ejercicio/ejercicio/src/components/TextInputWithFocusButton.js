import { useRef } from "react";

function TextInputWithFocusButton() {
  const inputElement = useRef(null);
  const clickHandle = () => {
    console.log(inputElement.current);
    console.log(inputElement.current.value);

    inputElement.current.focus();
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={{
        width: "100%",
        backgroundColor: "darkseagreen",
        padding: "1em 3em",
        textAlign: "center",
      }}
    >
      <input
        ref={inputElement}
        type="text"
        style={{
          width: "100%",
          padding: ".5em 1em",
          borderRadius: ".5rem",
          marginBottom: "1em",
        }}
      />
      <button
        onClick={clickHandle}
        style={{
          width: "100%",
          padding: ".5em .8em",
          borderRadius: ".5rem",
          backgroundColor: "dodgerblue",
        }}
      >
        Focus the input
      </button>
    </form>
  );
}

export default TextInputWithFocusButton;
