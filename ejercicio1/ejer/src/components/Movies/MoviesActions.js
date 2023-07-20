import "./MoviesActions.css";

function MoviesActions(props) {
  return (
    <div className="actions">
      <button onClick={props.onNoFilter}>All</button>
      <button onClick={props.onFilterComedy}>Comedy</button>
      <button onClick={props.onFilterDrama}>Drama</button>
    </div>
  );
}

export default MoviesActions;
