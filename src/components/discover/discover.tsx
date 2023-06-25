import React, { useEffect } from "react";
import { useState } from "react";
import "./discover.css"
import Search from "./search/search";
import Title from "./title/title";
import { useLocation } from 'react-router-dom';
import { data } from "../../module/todayContentModule";
interface props {
    data: data|undefined
}


function Discover(props: props) {

    const [wrapperImg, setWrapperImage] = useState<string>(`https://image.tmdb.org/t/p/original/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg`);
    const [number, setNumber] = useState(0)

    useEffect(() => {
        if (props?.data) {
            let path = props.data?.results[number]?.backdrop_path;
            setWrapperImage(`https://image.tmdb.org/t/p/original${path}`)
        }
        setNumber(number + 1)
    }, [])

    return (
        <section className="discover-section" >

            <div className="discoverInnerDiv">
              <div className="discover-upper-div">
              <Title />
              </div>
               <div>
               <Search />
               </div>
              
            </div>


        </section>
    )
}
export default Discover