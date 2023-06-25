import React from "react";
import "./status.css"
interface props{
    title:any;
    numbers:any
}
function Status(props:props){
    return(
        <div className="each-status">
        <div className="status-title">
         {props.title}
        </div>
        <div className="status-info">
    {props.numbers==0?"-":`${props.numbers}`}
        </div>
        </div>
    )

}
export default Status