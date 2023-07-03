import React from "react";
import "./posterImage.css"
import { getMajorityColor } from "../../imagecolor";
interface props {
    data: any
}
function PosterImage(props: props):any {
    const imagePath =`https://image.tmdb.org/t/p/w500${props.data}`;
    getMajorityColor(imagePath)
      .then(majorityColor => {
        console.log("Majority RGBA color:", majorityColor);
      })
      .catch(error => {
        console.error(error);
      });
    
        return (
           <>
           <img className="poster-card" src={`https://image.tmdb.org/t/p/w500${props.data}`}alt="" />
           </>
        )
    
    
}

export default PosterImage