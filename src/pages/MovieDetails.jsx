import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImage";
import "./MovieDetails.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, SetMovie] = useState([]);
  const [genres, SetGenres] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      SetMovie(data);
      SetGenres(data.genres[0]);
    });
  }, [movieId]);
  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="detailsContainer">
      <img className="col movieImage" src={imageUrl} alt={movie.title} />
      <div className="movieDetails">
        <p className="title">
          <strong>Title:</strong>
          {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>
          {genres.name}
        </p>

        <p>
          <strong>Description:</strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
