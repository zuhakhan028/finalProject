import React from "react";
import "./footer.css"
import footer_logo from "../../assets/images/logos/footerLogo.svg"
function Footer(){
return(
    <div className="footer">
        <div className="footer-nav">
            <div>
            <img className="footer-logo"src={footer_logo}></img>
            <div className="user-button">Hi ZuhaKhan!</div>
            </div>
            <div className="footer-lists">
                <div className="each-footer-list">
                <h3 className="footer-list-title">THE BASICS</h3 >
                <li className="footer-list-item">About TMDB</li>
                <li className="footer-list-item">Contact Us</li>
                <li className="footer-list-item">Support Forums</li>
                <li className="footer-list-item">API</li>
                <li className="footer-list-item">System Status</li>
                </div >
                <div className="each-footer-list">
                <h3   className="footer-list-title">GET INVOLVED</h3 >
                <li className="footer-list-item">Contribution Bible</li>
                <li className="footer-list-item">Add New Movie</li>
                <li className="footer-list-item">Add New TV Show</li>
                </div>
             <div className="each-footer-list">
             <h3   className="footer-list-title">COMMUNITY</h3 >
             <li className="footer-list-item">Guidelines</li>
                <li className="footer-list-item">Discussions</li>
                <li className="footer-list-item">Leaderboard</li>
                <li className="footer-list-item">Twitter</li>
             </div>
             <div className="each-footer-list">
             <h3   className="footer-list-title">LEGAL</h3 >
             <li className="footer-list-item">Terms of Use</li>
                <li className="footer-list-item">API Terms of Use</li>
                <li className="footer-list-item">Privacy Policy</li>
             </div>
        
              
            </div>
        </div>

    </div>
)
}

export default Footer