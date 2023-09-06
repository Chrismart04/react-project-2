export function MovieCard({movie}) {
  const imageUrl ="https://image.tmdb.org/t/p/w500"+movie.poster_path;
  
  return (
    <li>
      <img width={230} height={345} src={imageUrl} alt={movie.title}/>
    </li>
  );
}
