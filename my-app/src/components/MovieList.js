import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList = [], ft }) => {
  if (movieList)
    return (
      <div className=" px-6">
        <h1 className="text-white text-3xl py-4">{title}</h1>
        <div className="flex scrollable-hidden overflow-y-hidden ">
          <div className="flex flex-row">
            {movieList.map((movie) => (
              <MovieCard
                key={movie.id}
                poster={movie.poster_path}
                title1={movie.original_title}
                ft={ft}
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default MovieList;
