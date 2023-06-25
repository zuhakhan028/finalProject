import React, { useState } from "react";
import { requestOptions } from "../../../module/todayContentModule";
import "./allReviews.css"
import { useParams } from "react-router-dom";
function AllReviews():any{

const [allReviews,setAllReviews]:any=useState()
const {moviename,moovieId,id}=useParams()
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
myHeaders.append("accept", "application/json");

var requestOptions:requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1&key=858e15de9492d5090a05cffb61809d40`, requestOptions)
  .then(response => response.json())
  .then(result => setAllReviews(result))
  .catch(error => error);

  if(allReviews){
    if(allReviews?.results){
        return(
            <div>
                {
                    
                    allReviews?.results.map((abc:any)=>{
                        return(
                            <div className="each-div-review">{abc.content}</div>
                        )
                    })
                }
            </div>
        )
      }
      else{
        return(
            <div></div>
        ) 
    
    }
 
  }
  else{
    return(
        <div></div>
    )
  }
 

  

}
export default AllReviews