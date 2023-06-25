import React from "react";
import { todayContent } from "../../../module/todayContentModule";
import { weeklyContent } from "../../../module/weeklyDataModel";
import { Link } from "react-router-dom"
import "./moviecard.css"
interface props {
    data: any
}
function MovieCard(props: props) {
  // if(props.data?.weeklyContent?.media_type=="movie"){
    
  // }
  // console.log(props.data)
    return (<div className="weekly-content" key="weekly-content">

        {props.data?.results.map((movie: any) => {
      
          if(movie.title && movie.media_type=="movie") {
            return (
                <div className="each-card" key={movie.id}>
                  <Link className="link" to={`movies/${movie.title}/${movie.id}`}>
                  <div className="card" >
                      <img loading="lazy" className="image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>

                    </div>
                    <h2 className="movie-title"><div className="title-anchor" >{movie.title ? movie.title : movie.name}</div></h2>
                    <div className="release-date">{movie.release_date}</div>
                  </Link>
                </div>
            )
          }else if(movie.name  && movie.media_type=="movie"){
            return (
                <div className="each-card" key={movie.id}>
                  <Link className="link" to={`movies/${movie.name}/${movie.id}`}>
                  <div className="card" >
                      
                        <img className="image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>

                    </div>
                    <h2 className="movie-title"><div className="title-anchor" >{movie.title ? movie.title : movie.name}</div></h2>
                    <div className="release-date">{movie.first_air_date}</div>
                  </Link>
                </div>
            )
          }
          else if(movie.name && movie.media_type=="tv"){
            
return(
  <div className="each-card" key={movie.id}>
                  <Link className="link" to={`movies/${movie.name}/${movie.id}`}>
                  <div className="card" >
                      
                        <img className="image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>

                    </div>
                    <h2 className="movie-title"><div className="title-anchor" >{movie.title ? movie.title : movie.name}</div></h2>
                    <div className="release-date">{movie.first_air_date}</div>
                  </Link>
                </div>
)
          }
          else if(movie.title && movie.media_type=="tv"){
return(
  <div className="each-card" key={movie.id}>
                  <Link className="link" to={`movies/${movie.name}/${movie.id}`}>
                  <div className="card" >
                        <div className="more">...</div>
                        <img className="image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>

                    </div>
                    <h2 className="movie-title"><div className="title-anchor" >{movie.title ? movie.title : movie.name}</div></h2>
                    <div className="release-date">{movie.first_air_date}</div>
                  </Link>
                </div>
)
          }
            



        })}

    </div>)


}
export default MovieCard