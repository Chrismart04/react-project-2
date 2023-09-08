import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImage";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, SetMovie] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      SetMovie(data);
    });
  }, [movieId]);
  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div>
      <img src={imageUrl} alt={movie.title} />
    </div>
  );
}
