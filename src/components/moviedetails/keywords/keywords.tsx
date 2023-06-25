import React, { JSXElementConstructor } from "react";
import "./keywords.css"
import { useState } from "react";
import { requestOptions } from "../../../module/todayContentModule";

interface props{
id:any
}



function KeyWords(props:props){
    const[keywords,setKeywords]:any=useState()
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
myHeaders.append("accept", "application/json");

var requestOptions:requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.themoviedb.org/3/movie/${props.id}/keywords`, requestOptions)
  .then(response => response.json())
  .then(result => setKeywords(result))
  .catch(error => console.log('error', error));
{
    if(keywords){
        return(
           keywords.keywords?.map((eachkeyword:any)=>{
            return(
                <div className="keyword-block" key={eachkeyword.id}>{eachkeyword.name}</div>
            )
           })
        )
    }
    else{
        return(
            <div></div>
        )
    }
}
 
}

export default KeyWords