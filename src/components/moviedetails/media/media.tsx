import React from "react";
import"./media.css"
import { useState } from "react";
import MostPopular from "../mostpopular/mostPopular";
import { requestOptions } from "../../../module/todayContentModule";
import Posters from "../posters/posters";
import BackDrops from "../backdrops/backdrop";
interface Props{
    renderChild:any
    data:any
    id:any
}
function Media(props:Props){
    const[poster,setPoster]:any=useState();

    var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
myHeaders.append("accept", "application/json");

var requestOptions:requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


fetch(`https://api.themoviedb.org/3/movie/${props.id}/images?key=858e15de9492d5090a05cffb61809d40`, requestOptions)
  .then(response => response.json())
  .then(result => setPoster(result))
  .catch(error => console.log('error', error));
  




    if(props.renderChild==0){

        return(<MostPopular data={props.data} backdropdata={poster?.backdrops} poster={poster?.posters}/>)
       }
       else if(props.renderChild==1){
        return(<div></div>)
       }
       else if(props.renderChild==2){
        return(<BackDrops data={poster?.backdrops} />)
       }
       else if(props.renderChild==3){
        return(<Posters data={poster?.posters} />)
       }
       else{
        return(
            <div></div>
        )
       }

   
}
export default Media