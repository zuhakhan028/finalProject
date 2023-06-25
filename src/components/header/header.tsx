import React from "react";
import LeftContent from "./leftcontent/leftContent";
import { useState } from "react";
import "./header.css"
import RightContent from "./rightcontent/rightContent";


function Header() {
    const [scroll,setScroll]:any=useState()
   
      let oldScroll=window.scrollY;
      window.onscroll=(e)=>{
        if(oldScroll<window.scrollY){
          setScroll(true)
        }else{
          setScroll(false)
        }
        oldScroll=window.scrollY
      }
 

    return (
        <header className={`${scroll?"hideheader":"header"}`} >
            <div>
                <LeftContent />
            </div>
            <div>
            <RightContent/>
            </div>
        </header>
    )
}
export default Header