import React from "react";
import { requestOptions } from "../../../module/weeklyDataModel";
import { useState } from "react";

import "./collection.css"
interface props{
    data:any;
}

function Collection(props:props){

    const [collection,setCollection]:any=useState()
   

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NThlMTVkZTk0OTJkNTA5MGEwNWNmZmI2MTgwOWQ0MCIsInN1YiI6IjY0NzhjNTI4Y2Y0YjhiMDBlMmQ0OTMwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0Yp4enRmfYAeybZdH7lXZmmo1TmznTnoAV4PLrN_ZL8");
        myHeaders.append("accept", "application/json");
        
        var requestOptions:requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch(`https://api.themoviedb.org/3/collection/${props.data}?language=en-US&key=858e15de9492d5090a05cffb61809d40`, requestOptions)
          .then(response => response.json())
          .then(result => setCollection(result))
    


    if(collection){
        return(
    <div  className="collection"> 
    <div className="collection-inner-div" style={{backgroundImage:`linear-gradient(to right, rgba(var(--tmdbDarkBlue),1) 0%, rgba(var(--tmdbDarkBlue),0.6) 100%),url(https://image.tmdb.org/t/p/w500/${collection?.backdrop_path})`}}>
  <h2 className="collection-title">Part of the {collection.name}</h2>
<div className="other-collections">
    Includes
    {
        collection?.parts?.map((collection_name:any)=>{
            return(
               
                    ` ${ collection_name.title}, `
               
            )
        })
    }
</div>
<div className="view-other-collections">VIEW THE COLLECTION</div>
    
    </div>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }

    
}

export default Collection