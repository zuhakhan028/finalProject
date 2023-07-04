import React from "react";
import "./heroSection.css"
import Genre from "../genre/genre";
import PosterImage from "./posterimage/posterImage";
import { time } from "../time/time";
import Action from "./actions/action";
import Credits from "./credits/credits";
import { requestOptions } from "../../../module/weeklyDataModel";
import { getMajorityColor } from "../imagecolor";

// var myHeaders = new Headers();
// myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
// myHeaders.append("accept", "application/json");

// var requestOptions:requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch(`https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US&=858e15de9492d5090a05cffb61809d40`, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

interface props {
    data: any
}
function HeroSection(props: props) {

    if (props.data) {
        return (

            // <div className="backdrop_image" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props.data.backdrop_path})`}}>
            
            <div className="backdrop_image"  style={{backgroundImage:`linear-gradient(to right, rgba(157.5, 178.5, 199.5, 1) calc((50vw - 170px) - 340px), rgba(157.5, 178.5, 199.5, 0.84) 50%, rgba(157.5, 178.5, 199.5, 0.84) 100%),url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props.data.backdrop_path})`}}>
                <div className="inner-hero-section">
                    <PosterImage data={props.data?.poster_path} />
                    <div className="right-section">
                        <div className="outer-movie-details-div">
                            <div className="movie-details">
                                <h1>{props.data.original_title}</h1>
                                    <div className="metrics">
                                    <div className="certification metric-data">{props.data.adult ? "A" : "UA"}</div>
                                    <div className="seperator">.</div>
                                    <div className="metric-data">{props.data.release_date}</div>
                                    <div className="seperator">.</div>
                                    <Genre data={props.data.genres} />
                                    <div className="seperator">.</div>
                                    <div className="metric-data">{time(props.data.runtime)}</div>
                                </div>
                                <Action data={props.data.id} vote={props.data}/>
                                <div>
                                    <i className="tagline">{props.data.tagline}</i>
                                    <div>Overview</div>
                                    <div>
                                        {props.data.overview}
                                    </div>
                                </div>
                                <div>
                                    <Credits data={props.data.id} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        )
    }
    else {
        return (
            <div>

            </div>
        )
    }

}

export default HeroSection