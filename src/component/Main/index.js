import React from 'react';
import {NavLink} from "react-router-dom";
import LocationHours from "../LocationHours";
import viennoiseries from "./pastry.png";
import drink from "./drinks.png";
import poundcake from "./rasp2.png";
import retail from "./retail.png";
import whole from "./whole.png";
import individual from "./individual.png";

function Main() {
    return (
        <div id="main" class="sections justify-content-center row">
  
        <p class="pageTitle col-12">MAIN MENU</p>

                <div className="menuLinks col-4">   
                    <NavLink to = "/Whole" className={"navlinks"}>
                    <img src={whole} class="menuImg img-fluid" alt="..."></img>
                    <span className="menuTitle col-12">WHOLE CAKES</span>
                    </NavLink>
                </div>
                   
                <div className="menuLinks col-4">       
                <NavLink to = "/Single" className={"navlinks"}>  
                    <img src={individual} class="menuImg" alt="..."></img>
                    <span className="menuTitle col-12">INDIVIDUAL</span>
                </NavLink>
                </div>
       
                <div className="menuLinks col-4">        
                <NavLink to = "/Viennoiseries" className={"navlinks"}>   
                    <img src={viennoiseries} class="menuImg" alt="..."></img>
                    <span className="menuTitle col-12">VIENNOISERIES</span>
                </NavLink>
                </div>

                <div className="menuLinks col-4">      
                <NavLink to = "/PoundCakes" className={"navlinks"}>         
                    <img src={poundcake} class="menuImg" alt="..."></img>
                    <span className="menuTitle col-12">TRAVEL CAKES</span>
                </NavLink>
                </div>

                <div className="menuLinks col-4">      
                <NavLink to = "/Drinks" className={"navlinks"}>         
                    <img src={drink} class="menuImg" alt="..."></img>
                    <span className="menuTitle col-12">DRINKS</span>
                </NavLink> 
                </div>

                <div className="menuLinks col-4">  
                <NavLink to = "/Drinks" className={"navlinks"}>         
                    <img src={retail} class="menuImg" alt="..."></img>
                    <span className="menuTitle col-12">RETAIL</span>
                </NavLink>     
                </div>

            <LocationHours/>

        </div>

    )
}

export default Main;