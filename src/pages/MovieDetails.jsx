import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { get } from "../data/httpClient";


export function MovieDetails() {
  const { movieId } = useParams;
  const [movie, SetMovie] = useState (null);
  useEffect(() =>{
    get("/movie/"+movieId).then((data) => {
        SetMovie(data)
    })
  },[movieId])
   
return(
    <div></div>
)
}

