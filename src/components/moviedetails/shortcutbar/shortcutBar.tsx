import React from "react";
import"./shortcutbar.css"
function ShortCutBar(){
    return(
        <section className="shortcut-bar">
            <div className="shortcut-icon">Overview</div>
            <div className="shortcut-icon">Media</div>
            <div className="shortcut-icon">Fandom</div>
            <div className="shortcut-icon">Share</div>
        </section>
    )
}
export default ShortCutBar