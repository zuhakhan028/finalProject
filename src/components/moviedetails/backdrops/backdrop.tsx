import React from "react";
import { useState } from "react";
import { requestOptions } from "../../../module/todayContentModule";
import "./backdrop.css"
interface props{
    data:any
}
function BackDrops(props:props){
  
let count=0
    if(props.data){
 
       return(
        props.data?.map((backdrop:any)=>{
            count++
            if(count<7){
                return(
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500/${backdrop.file_path}`}></img>
                    </div>
                )
            }

        })
       )
    }

}
export default BackDrops