import React from "react";
import { useState } from "react";
import "./trending.css"
import TrendingContent from "./trendingcontent/trendingContent";
import { weeklyContent } from "../../module/weeklyDataModel";
import { todayContent } from "../../module/todayContentModule";
import trendingBackGroundImage from "../../assets/images/logos/backImage.svg"


interface props {
    weeklydata: weeklyContent | undefined
    todayContent: todayContent | undefined

}

function Trending(props: props) {
    const [selected, setSelected] = useState<number>(0)

    const [isActiveA, setIsActiveA] = useState(true);
    const [isActiveB, setIsActiveB] = useState(false);



    return (
        <section className="trending-section" style={{ backgroundImage: `url(${trendingBackGroundImage})` }}>
            <div className="trending">
                <div className="trending-column">
                    <div className="trending-title">
                        <h2>Trending</h2>
                        <div className="selector">
                        <div className={isActiveA ? "clicked" : "not-clicked"} onClick={(e) => { setSelected(0); setIsActiveA(!isActiveA); setIsActiveB(!isActiveB); }} >Today</div>
                        <div className={isActiveB ? "clicked" : "not-clicked"} onClick={(e) => { setSelected(1); setIsActiveB(!isActiveB); setIsActiveA(!isActiveA) }}>This Week</div>
                    </div>
                        </div>
                    
                </div>
                <div className="trending-scroller">
                          <div >
                              <TrendingContent weeklyData={props.weeklydata} selected={selected} todayContent={props.todayContent} />
                          </div>
                  
                </div>

            </div>
        </section>
    )



}

export default Trending