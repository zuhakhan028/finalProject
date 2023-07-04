import React, { useState } from "react";
import "./latesttarilers.css"
import LatestTrailerContent from "./latesttailerscontent/latestTrailerContent";

interface Props{
    data:any
}
function LatestTrailers(props:Props){
let [isSelected,setSelected]=useState(0)
let [isActiveA,setIsActiveA]=useState(true);
let [isActiveB,setIsActiveB]=useState(false);
let [isActiveC,setIsActiveC]=useState(false);
let [isActiveD,setIsActiveD]=useState(false);

return(
    <section className="latestTrailers-section" style={{ backgroundImage: `linear-gradient(to right, rgba(3,37,65,1) 0%, rgba(3,37,65,0.5) 100%)` }}>
            <div className="latestTrailers">
                <div className="latestTrailers-column">
                    <div className="latestTrailers-title">
                        <h2 className="latest-trailer-title">Latest Trailers</h2>
                        <div className="trailor-selector">
                        <div className={isActiveA ? "trailer-clicked" : "trailer-not-clicked"} onClick={(e) => { setSelected(0); setIsActiveA(true); setIsActiveB(false); setIsActiveC(false); setIsActiveD(false); }} ><h3 className="trailer-heading">Streaming</h3></div>
                        <div className={isActiveB ? "trailer-clicked" : "trailer-not-clicked"} onClick={(e) => { setSelected(1); setIsActiveA(false); setIsActiveB(true); setIsActiveC(false); setIsActiveD(false);}}><h3 className="trailer-heading">On TV</h3></div>
                        <div className={isActiveC ? "trailer-clicked" : "trailer-not-clicked"} onClick={(e) => { setSelected(2); setIsActiveA(false); setIsActiveB(false); setIsActiveC(true); setIsActiveD(false);}} ><h3 className="trailer-heading">For Rent</h3></div>
                        <div className={isActiveD ? "trailer-clicked" : "trailer-not-clicked"} onClick={(e) => { setSelected(3);setIsActiveA(false); setIsActiveB(false); setIsActiveC(false); setIsActiveD(true); }}><h3 className="trailer-heading">In Theatres</h3></div>
                    </div>
                        </div>
                    
                </div>
                <div className="latestTrailers-scroller">
                          <div >
                             <LatestTrailerContent isSelected={isSelected}/>
                          </div>
                  
                </div>

            </div>
        </section>
)
}
export default LatestTrailers