import React from "react";
import "../style.css";
import slide8 from "../Slides/slides/8.png";

function About() {
    return (
        <div>        
        <div id="about" className="row justify-content-md-center sections">
            <div className=" col-6">
                <img alt="boss5" src={slide8} className="pictures2 img-fluid" ></img>
            </div>
            
            <div className="col-6">
                    <p className="pageTitle col-12">ABOUT US</p>
                    <p className="info col-12 aboutinfo">
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, qui
                    s nostrud exercitation ullamco laboris
                    nisi ut aliquipex ea commodo consequat.
                    Duis aute irure dolor inreprehenderit 
                    in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim 
                    id est laborum
                </p>
                
            </div>
        </div>
        </div>
    
    )
}

export default About;