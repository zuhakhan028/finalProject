import React from "react";
import Logo from "./logo/logo";
import "./leftcontent.css"
import Movies from "./dropdownmenu/movies";
import RightContent from "../rightcontent/rightContent";

function LeftContent() {
    return (
        <div className="header-left-outer-div">
            <div className="header-left-div">
                <a href="/"> <Logo /></a>
                <Movies />
            </div>

        </div>


    )
}
export default LeftContent