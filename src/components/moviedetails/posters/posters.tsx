import React from "react";
import { useState } from "react";
import { requestOptions } from "../../../module/todayContentModule";
import "./posters.css"
interface props{
    data:any
}
function Posters(props:props){
  
    let count=0
    if(props.data){
    
       return(
        props.data?.map((backdrop:any)=>{
            count++
            if(count<8){
                return(
                    <div>
                        <img className="poster-img" src={`https://image.tmdb.org/t/p/w500/${backdrop.file_path}`}></img>
                    </div>
                )
            }

        })
       )
    }

}
export default Posters