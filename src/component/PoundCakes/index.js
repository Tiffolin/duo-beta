import React from "react";
import {NavLink} from "react-router-dom";
import peacan2 from "./images/peacan2.png"
import citrus2 from "./images/citrus2.png"
import apple2 from "./images/apple2.png"
import matcha2 from "./images/matcha2.png"
import rasp2 from "./images/rasp2.png"
import choco2 from "./images/choco2.png"
import chestnut2 from "./images/chestnut2.png"
import fruit2 from "./images/fruit2.png"
import dairy from "../Single/allergens/dairy.png";
import wheat from "../Single/allergens/wheat.png";
import egg from "../Single/allergens/egg.png";
import nuts from "../Single/allergens/nuts.png"

function PoundCakes() {
    return (

        <div id="poundCakes" className="row justify-content-md-center sections">
            
        <p className="pageTitle col-12">TRAVEL CAKES</p>

        <div className="poundCakeContainer">
            <img src={peacan2} className="poundCakeImg img-fluid" alt="..."></img>
            <div className="poundCakeHover row">
                <p className="productName col-6">PEACAN</p>
                <div className="cakeDescription col-6">
                    <p>Peacan</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>  
                <div className="allergy col-6">
                    <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                    <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                    <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                    <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                </div>
            </div>
        </div>
        <div className="poundCakeContainer">
            <img src={citrus2} className="poundCakeImg img-fluid" alt="..."></img>
            <div className="poundCakeHover row">
                <p className="productName col-6">CITRUS</p>
                <div className="cakeDescription col-6">
                    <p>Peacan</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>  
                <div className="allergy col-6">
                    <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                    <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                    <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                    <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                </div>
            </div>
        </div>
        <div className="poundCakeContainer">
            <img src={apple2} className="poundCakeImg img-fluid" alt="..."></img>
            <div className="poundCakeHover row">
                <p className="productName col-6">MAPLE APPLE</p>
                <div className="cakeDescription col-6">
                    <p>Peacan</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>  
                <div className="allergy col-6">
                    <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                    <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                    <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                    <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                </div>
            </div>
        </div>
        <div className="poundCakeContainer">
            <img src={matcha2} className="poundCakeImg img-fluid" alt="..."></img>
            <div className="poundCakeHover row">
                <p className="productName col-6">MATCHA</p>
                <div className="cakeDescription col-6">
                    <p>Peacan</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>  
                <div className="allergy col-6">
                    <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                    <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                    <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                    <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                </div>
            </div>
        </div>
        <div className="poundCakeContainer">
            <img src={rasp2} className="poundCakeImg img-fluid" alt="..."></img>
            <div className="poundCakeHover row">
                <p className="productName col-6">RASPBERRY PISTACHIO</p>
                <div className="cakeDescription col-6">
                    <p>Peacan</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>  
                <div className="allergy col-6">
                    <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                    <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                    <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                    <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                </div>
            </div>
        </div>
        <div className="poundCakeContainer">
            <img src={choco2} className="poundCakeImg img-fluid" alt="..."></img>
            <div className="poundCakeHover row">
                <p className="productName col-6">CHOCOLATE</p>
                <div className="cakeDescription col-6">
                    <p>Peacan</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>  
                <div className="allergy col-6">
                    <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                    <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                    <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                    <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                </div>
            </div>
        </div>
        <div className="poundCakeContainer">
            <img src={chestnut2} className="poundCakeImg img-fluid" alt="..."></img>
            <div className="poundCakeHover row">
                <p className="productName col-6">CHESTNUT</p>
                <div className="cakeDescription col-6">
                    <p>Peacan</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>  
                <div className="allergy col-6">
                    <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                    <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                    <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                    <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                </div>
            </div>
        </div>
        <div className="poundCakeContainer">
            <img src={fruit2} className="poundCakeImg img-fluid" alt="..."></img>
            <div className="poundCakeHover row">
                <p className="productName col-6">FRUIT</p>
                <div className="cakeDescription col-6">
                    <p>Peacan</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>  
                <div className="allergy col-6">
                    <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                    <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                    <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                    <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                </div>
            </div>
        </div>
        <div className="col-12 row justify-content-md-center">
                        <NavLink to = "/Main">               
                                {/* <img src={back} className="backArrow" alt="..."></img>  */}
                                <p className="backPage">Main Menu</p>
                        </NavLink>
        </div>
    </div>
    )
}

export default PoundCakes;