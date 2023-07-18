import { useState } from "react";
import "./Movies.css";
import movies from "../db/movies.json";

function Movies() {
  const [moviesList, setMoviesList] = useState(movies);

  const filterComedy = () => {
    let comedyMovies = movies.filter((movie) => {
      return movie.genre.includes("Comedy");
    });
    setMoviesList(comedyMovies);
  };
  const filterDrama = () => {
    let dramaMovies = movies.filter((movie) => {
      return movie.genre.includes("Drama");
    });
    setMoviesList(dramaMovies);
  };

  const noFilter = ()=>{
    setMoviesList(movies);

  }
  return (
    <div className="main">
       <div className="actions">
        <button onClick={noFilter}>All</button>
        <button onClick={filterComedy}>Comedy</button>
        <button onClick={filterDrama}>Drama</button>
      </div>
      <div className="movies-wrapper">
        {moviesList.map((movie) => (
          <div key={movie.id}className="card">
            <h2>{movie.title}</h2>
            <h3>{movie.genre}</h3>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Movies;
