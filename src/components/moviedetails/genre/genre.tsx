import React from "react";
import "./genre.css"
interface props{
data:any
}
function Genre(props:props){

    if(props.data){
        return(
            <span className="genre">
                {props.data.map((genre:any,index:any)=>{
                   if(index<props.data.length-1){
                    return(
                        
                        <span key={genre.id}>{`${genre.name}, `}</span>
                    )
                   }
                   else{
                    return(
                        <span key={genre.id}>{`${genre.name} `}</span> 
                    )
                   }
                    
                })}
        
            </span>
        )
    }
    else{
        return(
            <div>

            </div>
        )
    }

}

export default Genre