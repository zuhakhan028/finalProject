import React from "react";
import "./rightconntent.css"
import search from "../../../assets/images/logos/search.svg"
import bell from "../../../assets/images/logos/bell.svg"
import add from "../../../assets/images/logos/plus.svg"
function RightContent(){
    return(
<div className="header-right-div">
<ul className="right-nav-ul">
    <li className="plus"><img src={add} className="plus"></img></li>
    <li className="language">EN</li>
    <li><img className="bell" src={bell}></img></li>
    <li><div className="profile">Z</div></li>
    <li><img className="search-logo" src={search}></img></li>

</ul>

        </div>
    )
}
export default RightContent