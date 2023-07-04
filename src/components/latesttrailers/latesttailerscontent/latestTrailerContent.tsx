import React from "react";

interface props{
    isSelected:number;
}
function LatestTrailerContent(props:props){
if(props.isSelected==0){
    return(
        <div>0</div>
    )
}
else if(props.isSelected==1){
    return(
        <div>1</div>
    )
}
else if(props.isSelected==2){
    return(
        <div>2</div>
    )
}else{
 
        return(
            <div>3</div>
        )
   
}
}

export default LatestTrailerContent