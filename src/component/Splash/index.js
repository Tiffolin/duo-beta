import React from "react";
import {NavLink} from "react-router-dom";
import logo2 from "./logo2.png";
import slide1 from "../Slides/slides/1.png";
import slide2 from "../Slides/slides/2.png";
import slide3 from "../Slides/slides/3.png";
import slide4 from "../Slides/slides/4.png";
import "../style.css";

function Splash() {
    return (
        <div id="splashpage" class="justify-content-center">
            <NavLink to = "/">
                <div id="logo"><img id="logoimg" alt="logo" src={logo2} className="img-fluid"/></div>
            </NavLink>

            <div  id="magicCarousel" className="carousel slide my-5" data-ride="carousel">

            {/* <!--    Carousel Slider    --> */}
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src={slide3} className="slides" alt="slide1"></img>
                        <NavLink to = "/Main" >
                        <div className="carousel-caption captionInverted container-fluid">VIEW PRODUCTS </div>
                        </NavLink>     
                    </div>                   
                    <div className="carousel-item">
                        <img src={slide2} className="slides" alt="slide3"></img>
                        <NavLink to = "/Main" >
                        <div className="carousel-caption container-fluid">VIEW PRODUCTS </div>
                        </NavLink>
                    </div>                  
                    <div className="carousel-item">
                        <img src={slide4} className="slides" alt="slide3"></img>
                        <NavLink to = "/Main" >
                        <div className="carousel-caption captionInverted container-fluid">VIEW PRODUCTS </div>
                        </NavLink>
                    </div>                  
                    <div className="carousel-item">
                        <img src={slide1} className="slides" alt="slide3"></img>
                        <NavLink to = "/Main" >
                            <div className="carousel-caption captionInverted container-fluid">VIEW PRODUCTS </div>
                        </NavLink>
                    </div>
                    
            {/* <!--     Carousel Controls     --> */}
                    <a href="#magicCarousel" className="carousel-control-prev" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a href="#magicCarousel" className="carousel-control-next" role="button" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    
                </div>
            </div>

        </div>
    )
}

export default Splash;