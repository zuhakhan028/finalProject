import React from "react";
import "./search.css"
import SearchButton from "../searchbutton/searchButton";

function Search(){
    return(
        <div className="search-div" >
         <input type="text" className="search" placeholder="Search for a movie, tv show, person......."/>
         <SearchButton/>
        </div>
        
    )
}

export default Search