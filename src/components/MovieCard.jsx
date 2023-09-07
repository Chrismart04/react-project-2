import "./MovieCard.css"

export function MovieCard({movie}) {
  const imageUrl ="https://image.tmdb.org/t/p/w500"+movie.poster_path;
  
  return (
    <li className="movieCard">
      <img className="movieImage" width={230} height={345} src={imageUrl} alt={movie.title}/>
    </li>
  );
}
