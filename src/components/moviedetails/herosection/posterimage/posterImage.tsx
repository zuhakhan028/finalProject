import React from "react";
import "./posterImage.css"
interface props {
    data: any
}
function PosterImage(props: props):any {

        return (
           <>
           <img className="poster-card" src={`https://image.tmdb.org/t/p/w500${props.data}`}alt="" />
           </>
        )
    
    
}

export default PosterImage