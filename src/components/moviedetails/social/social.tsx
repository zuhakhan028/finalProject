import React from "react";
import Reviews from "../reviews/reviews";
import Discussion from "../discussions/discussion";
import { useState } from "react";
import { requestOptions } from "../../../module/todayContentModule";
interface Props{
    data:any
    choice:number
    
}
function Social(props:Props){
const [reviews,setReviews]=useState()

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
myHeaders.append("accept", "application/json");

var requestOptions:requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.themoviedb.org/3/movie/${props.data}/reviews?language=en-US&page=1&key=858e15de9492d5090a05cffb61809d40`, requestOptions)
  .then(response => response.json())
  .then(result => setReviews(result))
  .catch(error => console.log('error', error));

if(props.choice==0){
    return(
        <Reviews data={reviews}/>
    )
}
else{
    return(
        <Discussion/>
    )
}
}
export default Social