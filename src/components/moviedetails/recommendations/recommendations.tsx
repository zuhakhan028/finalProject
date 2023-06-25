import React, { useState } from "react";
import "./recommendations.css"
import { requestOptions } from "../../../module/weeklyDataModel";
import posterUnavailable from "../../../assets/images/logos/posterUnavailable.svg"
import { Link, useParams } from "react-router-dom";
import MovieCard from "../../discover/moviecard/movieCard";
interface props{
    data:any
}
function Recommendations(props:props){
const [recomendations,setRecomedation]:any=useState()
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
myHeaders.append("accept", "application/json");

var requestOptions:requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.themoviedb.org/3/movie/${props.data}/recommendations?language=en-US&page=1`, requestOptions)
  .then(response => response.json())
  .then(result => setRecomedation(result))
  .catch(error => console.log('error', error));

  const {recomendation,movierecomendedId}=useParams()

  if(recomendations){

    return(
        recomendations?.results?.map((recomendedMovie:any)=>{
                 return(
                  <Link to={`/movies/:moviename/:movieId/recomendations/${recomendedMovie.title}/${recomendedMovie.id}`} className="recomended-movie">
                   <div className="recomended-movie">
                    <img className="recomended-movie-poster"src={recomendedMovie.backdrop_path?`https://image.tmdb.org/t/p/w500/${recomendedMovie.backdrop_path}`:posterUnavailable}></img>
                    <div className="recomended-movie-title"><div>{recomendedMovie.title.slice(0,28)}</div> <div>{`${recomendedMovie.vote_count}%`}</div></div>
                    </div>
                  </Link>
                  
                   
                 )
        })
        
    )
  }
  else{
    return(
        <div>

        </div>
    )
  }
 
}
export default Recommendations