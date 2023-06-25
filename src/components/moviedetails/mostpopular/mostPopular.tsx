import React from "react";
import "./mostpopular.css"
interface props{
    data:any
    backdropdata:any
    poster:any
}
function MostPopular(props:props){
    
let count_backdrop=-1
let count_poster=-1
if(props.data?.results){
    if(props.data.results.length>0){
        return(
            <div className="video-div">
                        <iframe width="533" height="300"src={props.data?.results[0].key?`https://www.youtube.com/embed/${props.data?.results[0].key}`:""}></iframe>
                        <div>
                            {
                                props?.backdropdata?.map((eachbackdrop:any)=>{
                                    count_backdrop++
                                    if(count_backdrop<1){
                                        return(
                                      
                                            <img className="most-popular-backdrop"src={`https://image.tmdb.org/t/p/w500/${eachbackdrop.file_path}`}></img>
                                        
    
                                    )
                                    }
                                   
                                })
                            }
                        </div>
                        <div>
                            {
                                props?.poster?.map((eachbackdrop:any)=>{
                                    count_poster++
                                    if( count_poster<1){
                                        return(
                                      
                                            <img className="most-popular-poster" src={`https://image.tmdb.org/t/p/w500/${eachbackdrop.file_path}`}></img>
                                        
    
                                    )
                                    }
                                   
                                })
                            }
                        </div>
    
                        {/* <img className="poster-img" src={`https://image.tmdb.org/t/p/w500/${props.backdropdata[0].file_path}`}></img> */}
                        {/* <img className="poster-img" src={`https://image.tmdb.org/t/p/w500/${props.poster[0].file_path}`}></img> */}
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
        <div>none</div>
    )
}
       
   
 
  
}
export default MostPopular