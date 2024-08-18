import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSearchList = () => {
  const { movieResults, movieNames } = useSelector((store) => store.movies);
  if (!movieNames) return null;
  return (
    <div className=" absolute mt-32 w-screen bg-black text-white bg-opacity-50">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movieList={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSearchList;
