import { useState } from "react";
import "./Movies.css";
import movies from "../../db/movies.json";
import MoviesWrapper from "./MoviesWrapper";
import MoviesMain from "./MoviesMain";
import Card from "./Card";

function Movies() {
  const [moviesList, setMoviesList] = useState(movies);
  const [fadeIn, setFadeIn] = useState(true);
  const changeVisibility = (toShow) => {
    setFadeIn(false);
    setTimeout(() => {
      setFadeIn(true);
      setMoviesList(toShow);
    }, 500);
  };

  const filterComedy = () => {
    let comedyMovies = movies.filter((movie) => {
      return movie.genre.includes("Comedy");
    });
    changeVisibility(comedyMovies);
  };
  const filterDrama = () => {
    let dramaMovies = movies.filter((movie) => {
      return movie.genre.includes("Drama");
    });
    changeVisibility(dramaMovies);
  };
  const noFilter = () => {
    changeVisibility(movies);
  };

  return (
    <MoviesMain>
      <div className="actions">
        <button onClick={noFilter}>All</button>
        <button onClick={filterComedy}>Comedy</button>
        <button onClick={filterDrama}>Drama</button>
      </div>
      <MoviesWrapper>
        {moviesList.map((movie) => (
          <Card key={movie.id} movie={movie} fadeIn={fadeIn} />
        ))}
      </MoviesWrapper>
    </MoviesMain>
  );
}
export default Movies;
