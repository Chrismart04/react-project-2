import { useState, useEffect } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";
import "./ContexmovieCard.css"

export function ContexMovieCard() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      SetMovies(data.results);
    });
  }, []);

//return movie in ul, the li items is in the movie card component
  return (
    <ul className="container">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </ul>
  );
}

