import React from "react";
import Movie from "./Movie";
import "./MoviesList.scss";
import movies from "../../Data/data.js";

function MoviesList() {
  return (
    <div className="moviesList">
      {movies.map((movieInfo) => (
        <Movie
          key={movieInfo.title}
          title={movieInfo.title}
          year={movieInfo.year}
          director={movieInfo.director}
          duration={movieInfo.duration}
          genre={movieInfo.genre}
          rate={movieInfo.rate}
        />
      ))}
    </div>
  );
}

export default MoviesList;
