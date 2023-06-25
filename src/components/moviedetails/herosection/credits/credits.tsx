import React, { useState } from "react";
import "./credits.css"
import { requestOptions } from "../../../../module/weeklyDataModel";

interface props{
    data:any
}
function Credits(props:props){

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
   
      
        {if(crewData){
         
            return(
                <div>

                </div>

            )
        }else{
            return(
                <div>
                    ELLO
                </div>
            )
        }}
  
}
export default Credits