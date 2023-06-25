import React, { useEffect } from "react";
import { useState } from "react";
import { requestOptions } from "../../../module/todayContentModule";
import "./cast.css"
import noProfile from "../../../assets/images/logos/no-profile-picture-icon.svg"

interface props{
    data:any
}


function Cast(props:props){
    const[crewData,setCrewData]:any=useState()
    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
myHeaders.append("accept", "application/json");

var requestOptions:requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api.themoviedb.org/3/movie/${props.data}/credits?language=en-US&key=858e15de9492d5090a05cffb61809d40`, requestOptions)
  .then(response => response.json())
  .then(result => setCrewData(result))
  .catch(error => console.log('error', error));


if(crewData){
    let count=0
    return(
       
        crewData.cast?.map((names:any)=>{
            count++  
          if(count<10){
           
            return(
              
                <figure className="polaroid-img" key={names.id}>
                      <img className="profile-img" src={names.profile_path?`https://image.tmdb.org/t/p/w500${names.profile_path}`:noProfile}/>
                        <figcaption ><div className="fig-caption-name">{names.name}</div>
                        <div className="fig-caption-character">{names.character}</div>
                        </figcaption>
                    
                </figure>
                       
                      
                 
                )
             
          }
               
        
          
        })
    )
}
}
export default Cast