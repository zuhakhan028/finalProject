import React, { useEffect } from "react";
import "./trailer.css"
interface props{
    data:any
}

function Trailer(props:props){
let key;

props.data.results.map((eachmovie:any)=>{
if(eachmovie.name=="Official Trailer" || eachmovie.type=="Trailer" ||eachmovie.official){
   
       return(
        key=eachmovie.key
       )
    
}
})




    return (
       <div className="trailer-frame">
        <div className="trailer-title">Play Trailer</div>
        <iframe width="1080" height="620"src={`https://www.youtube.com/embed/${key}`}></iframe>
       </div>
        
    )
 
}
export default Trailer