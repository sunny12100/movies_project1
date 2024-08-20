import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSearchList = ({ ft, movieTitle }) => {
  const { movieResults, movieNames } = useSelector((store) => store.movies);
  if (!movieNames) return null;
  return (
    <div className=" absolute mt-32 w-screen bg-black text-white bg-opacity-50">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            titleNew={movieName}
            movieList={movieResults[index]}
            ft={ft}
            movieTitle={movieTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSearchList;
