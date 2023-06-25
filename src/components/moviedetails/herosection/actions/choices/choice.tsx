import React from "react";
import "./choice.css"
interface props{
    data:string
}
function Choice(props:props){
    return(
        <div className="choice">
            
           <img className="choice-icons"src={props.data}></img> 
        </div>
    )
}
export default Choice