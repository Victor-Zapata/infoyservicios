import React, { useEffect } from "react";
import { useMoviesStore } from "../store";
import MovieDetail from "./MovieDetail";

const Movies = () => {
  const getMovies = useMoviesStore((state) => state.getMovies);

  useEffect(() => {
    getMovies();
  }, []);

  const movies = useMoviesStore((state) => state.movies);
  console.log(movies);

  return (
    <ol style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
      {movies.map((item) => {
        return (
          <li key={item.id}>
            <MovieDetail item={item} />
          </li>
        );
      })}
    </ol>
  );
};

export default Movies;
