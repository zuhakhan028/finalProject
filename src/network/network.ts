
import { useEffect } from "react";
import { useState } from "react";
import { todayContent } from "../module/todayContentModule";
import { requestOptions } from "../module/todayContentModule";


export function WeeklyContent(){
    let [trending, setTrending]= useState()
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
    myHeaders.append("accept", "application/json");    
    var requestOptions: requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    useEffect(() => {
      fetch("https://api.themoviedb.org/3/trending/all/week?language=en-US&api_key=858e15de9492d5090a05cffb61809d40", requestOptions)
        .then(response => response.json())
        .then(result => { setTrending(result) })
        .catch(error => console.log('error', error));
    }, []);
return trending;
}

export function TodayContent(){
let [todayContent, setTodayContent] = useState<todayContent>()
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
myHeaders.append("accept", "application/json");

var requestOptions:requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=858e15de9492d5090a05cffb61809d40", requestOptions)
  .then(response => response.json())
  .then(result => setTodayContent(result))
  .catch(error => console.log('error', error));
return todayContent

}

export function MovieDetails(movieId:any){

let [movieDetails,setMovieDetails]=useState()
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
myHeaders.append("accept", "application/json");

var requestOptions :requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&key=858e15de9492d5090a05cffb61809d40`, requestOptions)
  .then(response => response.json())
  .then(result => setMovieDetails(result))
  .catch(error => console.log('error', error));
  return console.log(movieDetails)
}

export function Keywords(id:any){
  const[keywords,setKeywords]=useState()
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
myHeaders.append("accept", "application/json");

var requestOptions:requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.themoviedb.org/3/movie/${id}/keywords`, requestOptions)
  .then(response => response.json())
  .then(result => setKeywords(result))
  .catch(error => console.log('error', error));

  return keywords
}