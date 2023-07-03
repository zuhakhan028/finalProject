import React from "react";
// import "./seriescard.css"
import { useEffect,useState } from "react";
import { requestOptions } from "../../../module/todayContentModule";
import { useParams } from "react-router-dom";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import ShortCutBar from "../../moviedetails/shortcutbar/shortcutBar";
import HeroSection from "../../moviedetails/herosection/heroSection";
import { useLocation } from "react-router-dom";
import Recommendations from "../../moviedetails/recommendations/recommendations";
import Cast from "../../moviedetails/cast/cast";
import { Link } from "react-router-dom";
import Social from "../../moviedetails/social/social";
import Media from "../../moviedetails/media/media";
import Status from "../../moviedetails/status/status";
import Collection from "../../moviedetails/collections/collection";
import KeyWords from "../../moviedetails/keywords/keywords";



function SeriesDetails(){
   
  const [choice, setChoice] = useState(0)

  const [collection,setCollection]=useState()


  const [videoDetails, setVideoDetails] = useState()

  const [mostPopularSelected, setMostPopular] = useState(true);

  const [videoSelected, setVideo] = useState(false);

  const [backdropSelected, setbackdrop] = useState(false);

  const [posterSelected, setposter] = useState(false);

  const [mediaChild, setMediaChild] = useState(0)

  const location = useLocation();



  const [reviewSelected, setReviewSelected] = useState(true)

  const [descriptionSelected, setDescriptionSelected] = useState(false)


    const [seriesDetails,setseriesDetails]:any=useState()

    const {seriesname,seriesId} =useParams()
    useEffect(()=>{ //series details
        var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
    myHeaders.append("accept", "application/json");
    
    var requestOptions:requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(`https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`, requestOptions)
      .then(response => response.json())
      .then(result => setseriesDetails(result))
      .catch(error => console.log('error', error));
      },[])

    useEffect(()=>{ //cast
        var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
myHeaders.append("accept", "application/json");

var requestOptions:requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.themoviedb.org/3/tv/${seriesId}/aggregate_credits?language=en-US&key=858e15de9492d5090a05cffb61809d40`, requestOptions)
  .then(response => response.json())
  .then(result => (result))
  .catch(error => console.log('error', error));
    },[])

useEffect(()=>{ //recomendations
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
    myHeaders.append("accept", "application/json");
    
    var requestOptions:requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch(`https://api.themoviedb.org/3/tv/${seriesId}/recommendations?language=en-US&page=1`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
},[])


let hasCollection=seriesDetails?.belongs_to_collection
if(seriesDetails){
    return (
        <div>
          <Header />
          <div className="movie-details-body">
            <ShortCutBar />
            <HeroSection data={seriesDetails} />
            <div className="cast">
              <div>
                <div>
                  <h3 className="top-billed-cast">Top Billed Cast</h3>
                  <div className="cast-div">
                    <Cast data={seriesId} type={seriesDetails.media_type}/>
                    <Link className="see-more" to={`/people/${seriesDetails.id}`}>
                      <div className="view-more">view more <span className="right-arrow"><img className="right-arrow-img" src=""></img></span></div>
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
                    <Social data={seriesDetails.id} choice={choice}/>
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
                    <Media renderChild={mediaChild} data={videoDetails} id={seriesDetails.id} />
  
                    </div>
                    <div>
                     
                    </div>
                  
  
                  </div>
                  <div>
                    {hasCollection &&   <Collection data={seriesDetails.belongs_to_collection?.id}/> }
                
                  </div>
  
                  <div className="recomendations-div">
                    <h3  className="social-title">Recommendations</h3>
                    <div className="recomendations-inner-div">
                    <Recommendations data={seriesId}/>
                    </div>
                   
                  </div>
                 
  
                </div>
  
              </div>
              <div className="right-div">
                <div className="links-div">
                  <div><img className="link-justnow" src=""></img></div>
                  <div className="link-movie" > <img className="link-movie-img" src=""></img></div>
                </div>
                <div className="status">
                  <Status numbers={seriesDetails.status} title="Status" />
                  <Status numbers={seriesDetails.budget} title="Budget" />
                  <Status numbers={seriesDetails.original_language} title="Original Language" />
                  <Status numbers={seriesDetails.revenue} title="Revenue" />
                  <div>
                    <h3 className="keyword-title">Keywords</h3>
                    <div className="keywords-block">
                      <KeyWords id={seriesDetails.id} />
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
else{
    return(
        <div>
            Loading
        </div>
    )
}
}
export default SeriesDetails