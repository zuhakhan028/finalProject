import React, { useLayoutEffect, useRef } from "react";
import "./movies.css"
import { useState } from "react";
import Menu from "./menu";
function Movies(){


    return(
        <div>
            <ul className="header-list">  
        <li  className="movies">Movies</li>
        <li  className="movies">TV Shows</li>
        <li  className="movies">People</li>
        <li  className="movies">More</li>
       
      
        </ul>
        </div>
        
       
    )
}
export default Movies