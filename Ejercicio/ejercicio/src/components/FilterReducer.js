import classes from "./FilterReducer.module.css";
import { useReducer } from "react";

const lorem = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "ed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation",
  "ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
  "dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident",
  "sunt in culpa qui officia deserunt mollit anim id est laborum",
];

const initialState = [
  {
    id: 1,
    task: "Duis consequat dui nec misi volutpat eleifend. Donec ut dolor. Morbi vel",
    done: false,
  },
  {
    id: 2,
    task: "Aliguam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    done: false,
  },
  {
    id: 3,
    task: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    done: true,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];
    case "Remove":
      return state.filter((item) => item.id !== action.payload);
    case "Toggle":
      return state.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );

    default:
      return state;
  }
};

function FilterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNewTask = () => {
    let lastElementPosition = state.length - 1;
    let loremSize = lorem.length - 1;
    // let id = state[lastElementPosition].id + 1;
    let id = lastElementPosition >= 0 ? state[lastElementPosition].id + 1 : 0;

    let newTask =
      //state[Math.floor(Math.random() * (lastElementPosition + 1))].task;
      lorem[Math.floor(Math.random() * (loremSize + 1))];
    let done = Math.floor(Math.random() * 2) === 1 ? true : false;
    const finishedTask = {
      id,
      task: newTask,
      done,
    };

    dispatch({ type: "Add", payload: finishedTask });
  };
  return (
    <div className={classes["tasks-list"]}>
      <h1>To do app</h1>
      <ul>
        {state.map((item) => (
          <li key={item.id}>
            <span className={item.done ? classes.done : ""}>
              {item.task}, id:{item.id}
            </span>
            <div className={classes.actions}>
              <button
                onClick={() => dispatch({ type: "Toggle", payload: item.id })}
                className={classes.toggle}
              >
                Toggle
              </button>
              <button
                onClick={() => dispatch({ type: "Remove", payload: item.id })}
                className={classes.remove}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleNewTask} className={classes["new-task"]}>
        Add
      </button>
    </div>
  );
}

export default FilterReducer;
