import React from "react";
import {NavLink} from "react-router-dom";
import blackforest from "./blackforest.png";
import wholeblackforest from "./wholeblackforest.png";

function Cakes() {
    return (
        
        <div id="cakes" className="row justify-content-md-center sections">
            <p className="pageTitle col-12">CAKES</p>

            <div className="menuLinks col-3">   
            <NavLink to = "/Whole" className={"navlinks"}>
                <img src={wholeblackforest} class=" menuImg" alt="..."></img>
                <span className=" col-12 menuTitleInverted">WHOLE CAKES</span>
            </NavLink>
            </div>

            <div className="col-1"></div>

            <div className="menuLinks col-3">   
            <NavLink to = "/Single" className={"navlinks"}>
                <img src={blackforest} class=" menuImg" alt="..."></img>
                <span className=" col-12 menuTitleInverted">INDIVIDUAL</span>
            </NavLink>
            </div>
            
        </div>
    )
}

export default Cakes;