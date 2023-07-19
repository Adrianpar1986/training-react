import "./MoviesWrapper.css";

function MoviesWrapper(props) {
  return <div className="movies-wrapper">{props.children}</div>;
}

export default MoviesWrapper;
