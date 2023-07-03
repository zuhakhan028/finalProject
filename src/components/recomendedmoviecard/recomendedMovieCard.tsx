import React from "react"
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../header/header";
import "./recomendedmoviecard.css"


import { Link } from "react-router-dom";
import rightImage from "../../assets/images/logos/iconmonstr-arrow-right-thin.svg"

import justnow from "../../assets/images/logos/justwatchlogo.svg"
import link from "../../assets/images/logos/211853_link_icon.svg"
import HeroSection from "../moviedetails/herosection/heroSection";
import ShortCutBar from "../moviedetails/shortcutbar/shortcutBar";
import { requestOptions } from "../../module/todayContentModule";

import Cast from "../moviedetails/cast/cast";
import Social from "../moviedetails/social/social";
import Footer from "../footer/footer";
import Recommendations from "../moviedetails/recommendations/recommendations";
import Collection from "../moviedetails/collections/collection";
import MostPopular from "../moviedetails/mostpopular/mostPopular";
import Media from "../moviedetails/media/media";
import KeyWords from "../moviedetails/keywords/keywords";
import Status from "../moviedetails/status/status";
function RecoMovieDetails() {

  const [choice, setChoice] = useState(0)

  const [collection,setCollection]=useState()

  const [movieDetails, setMovieDetails] = useState<any>()

  const [videoDetails, setVideoDetails] = useState()

  const [mostPopularSelected, setMostPopular] = useState(true);

  const [videoSelected, setVideo] = useState(false);

  const [backdropSelected, setbackdrop] = useState(false);

  const [posterSelected, setposter] = useState(false);

  const [mediaChild, setMediaChild] = useState(0)

  const location = useLocation();



  const {recomendedMovieName,recomendedMovieId}=useParams()

  const [reviewSelected, setReviewSelected] = useState(true)

  const [descriptionSelected, setDescriptionSelected] = useState(false)


  useEffect(() => {
    if (location.pathname.includes("/recomendations")) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
      myHeaders.append("accept", "application/json");

      var requestOptions: requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`https://api.themoviedb.org/3/movie/${recomendedMovieId}?language=en-US&key=858e15de9492d5090a05cffb61809d40`, requestOptions)
        .then(response => response.json())
        .then(result => setMovieDetails(result))
        .catch(error => console.log('error', error));


    }
  }, [])

  useEffect(() => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
    myHeaders.append("accept", "application/json");

    var requestOptions: requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://api.themoviedb.org/3/movie/${recomendedMovieId}/videos?language=en-US&=858e15de9492d5090a05cffb61809d40`, requestOptions)
      .then(response => response.json())
      .then(result => setVideoDetails(result))
      .catch(error => error);

  }, [])


  useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
    myHeaders.append("accept", "application/json");
    
    var requestOptions:requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://api.themoviedb.org/3/collection/573436?language=en-US&key=858e15de9492d5090a05cffb61809d40", requestOptions)
      .then(response => response.json())
      .then(result => setCollection(result))
      .catch(error => console.log('error', error));
  },[])
 

  let hasCollection=movieDetails?.belongs_to_collection

  if (movieDetails) {
    return (
      <div>
        <Header />
        <div className="movie-details-body">
          <ShortCutBar />
          <HeroSection data={movieDetails} />
          <div className="cast">
            <div>
              <div>
                <h3 className="top-billed-cast">Top Billed Cast</h3>
                <div className="cast-div">
                  <Cast data={recomendedMovieId} type={movieDetails.media_type}/>
                  <Link className="see-more" to={`/people/${movieDetails.id}`}>
                    <div className="view-more">view more <span className="right-arrow"><img className="right-arrow-img" src={rightImage}></img></span></div>
                  </Link>

                </div>
                <div className="full-cast">
                  Full Cast & Crew
                </div>
                <div className="social">
                  <h3 className="social-title">Social</h3>
                  <h5 className={reviewSelected ? "underline" : "reviews"} onClick={(e) => { return (setChoice(0), setDescriptionSelected(!descriptionSelected), setReviewSelected(!reviewSelected)); }}>   Reviews </h5>
                  <h5 className={descriptionSelected ? "underline" : "discussions"} onClick={(e) => { return (setChoice(1), setReviewSelected(!reviewSelected), setDescriptionSelected(!descriptionSelected)) }}> Discussions</h5>

                </div>
                <div>
                  <Social data={movieDetails.id} choice={choice} />
                </div>

                <div className="media-div">
                  <div className="media-inner-div">
                    <h3 className="social-title">Media</h3>
                    <div>
                      <div className="video-options">
                        <h5 className={mostPopularSelected ? "underline" : "reviews"} onClick={() => { return setMediaChild(0),setMostPopular(true),setposter(false) ,setVideo(false),setbackdrop(false)}}>Most Popular</h5>

                        <h5 className={videoSelected ? "underline" : "reviews"} onClick={() => { return setMediaChild(1) ,setMostPopular(false), setposter(false) ,setVideo(true),setbackdrop(false)}}>Videos</h5>

                        <h5 className={backdropSelected ? "underline" : "reviews"} onClick={() => { return setMediaChild(2) ,setMostPopular(false), setposter(false) ,setVideo(false),setbackdrop(true)}}>Backdrops</h5>

                        <h5 className={posterSelected ? "underline" : "reviews"} onClick={() => { return setMediaChild(3),setMostPopular(false), setposter(true) ,setVideo(false),setbackdrop(false)}}>Posters</h5>
                      </div>

                    </div>

                  </div>
                  <div className="media-scroller">
                  <Media renderChild={mediaChild} data={videoDetails} id={movieDetails.id} />

                  </div>
                  <div>
                   
                  </div>
                

                </div>
                <div>
                  {hasCollection &&   <Collection data={movieDetails.belongs_to_collection?.id}/> }
              
                </div>

                <div className="recomendations-div">
                  <h3  className="social-title">Recommendations</h3>
                  <div className="recomendations-inner-div">
                  <Recommendations data={recomendedMovieId}/>
                  </div>
                 
                </div>
               

              </div>

            </div>
            <div className="right-div">
              <div className="links-div">
                <div><img className="link-justnow" src={justnow}></img></div>
                <div className="link-movie" > <img className="link-movie-img" src={link}></img></div>
              </div>
              <div className="status">
                <Status numbers={movieDetails.status} title="Status" />
                <Status numbers={movieDetails.budget} title="Budget" />
                <Status numbers={movieDetails.original_language} title="Original Language" />
                <Status numbers={movieDetails.revenue} title="Revenue" />
                <div>
                  <h3 className="keyword-title">Keywords</h3>
                  <div className="keywords-block">
                    <KeyWords id={movieDetails.id} />
                  </div>
                </div>
                <div className="content-score-div">
                  <h3 className="keyword-title">
                    Content Score
                  </h3>
                  <div className="content-score">100</div>
                  <div className="score-opinion">Yes! its looking good!</div>

                </div>
                <div className="top-contributors-div">
                  <h3 className="contibutors-title">Top Contributors</h3>
                </div>
               
             
              
              </div>

             
            </div>
         
          </div>
      
        </div>
       <Footer/>
      </div>



    )
  }
  else {
    return (
      <div>
        loading
      </div>
    )
  }

}
export default RecoMovieDetails