import React from "react";
import {NavLink} from "react-router-dom";
import almondcroissant from "./viennoiseriesImage/almondcroissant.png";
import applecroissant from "./viennoiseriesImage/applecroissant.png";
import banane from "./viennoiseriesImage/banane.png";
import bichon from "./viennoiseriesImage/bichon.png";
import blacksesamebrioche from "./viennoiseriesImage/blacksesamebrioche.png";
import briocheloaf from "./viennoiseriesImage/briocheloaf.png";
import briochetete from "./viennoiseriesImage/briochetete.png";
import canele from "./viennoiseriesImage/canele.png";
import cheddargreyure from "./viennoiseriesImage/cheddargreyure.png";
import chestnut from "./viennoiseriesImage/chestnut.png";
import chocoalmond from "./viennoiseriesImage/chocoalmond.png";
import chocobook from "./viennoiseriesImage/chocobook.png";
import cinnamonrasonbrioche from "./viennoiseriesImage/cinnamonrasonbrioche.png";
import citrusbrioche from "./viennoiseriesImage/citrusbrioche.png";
import frangipane from "./viennoiseriesImage/frangipane.png";
import gb from "./viennoiseriesImage/gb.png";
import hamandcheese from "./viennoiseriesImage/hamandcheese.png";
import honeytwist from "./viennoiseriesImage/honeytwist.png";
import matchabook from "./viennoiseriesImage/matchabook.png";
import panauchocolat from "./viennoiseriesImage/panauchocolat.png";
import pistachiobrioche from "./viennoiseriesImage/pistachiobrioche.png";
import plaincroissant from "./viennoiseriesImage/plaincroissant.png";
import polonaise from "./viennoiseriesImage/polonaise.png";
import quiche from "./viennoiseriesImage/quiche.png";
import raspberryrose from "./viennoiseriesImage/raspberryrose.png";
import roastbeef from "./viennoiseriesImage/roastbeef.png";
import salamiandcheese from "./viennoiseriesImage/salamiandcheese.png";
import tropezienne from "./viennoiseriesImage/tropezienne.png";
import vanillacustard from "./viennoiseriesImage/vanilla.png";

function Viennoiseries() {
    return (
        <div id="viennoiseries" className="sections  row justify-content-center">
        <p class="pageTitle col-12">VIENNOISERIES</p>


            <div className="pastryContainer">
                <img src={plaincroissant} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6"></span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={panauchocolat} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Pan Au Chocolat</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={almondcroissant} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Almond Croissant</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={chocoalmond} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Almond Chocolate Croissant</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={roastbeef} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Roast Beef Croissant</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={hamandcheese} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-8">Ham & Cheese Croissant</span>
                     <span className="pastryDescription col-4"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={salamiandcheese} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-9">Salami & Cheese Croissant</span>
                     <span className="pastryDescription col-3"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={polonaise} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Polonaise</span>
                     <span className="pastryDescription col-5">Double baked croissant with hazelnuts and Rum</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={vanillacustard} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">8</span>
                     <span className="pastryDescription col-5">Vanilla Custard</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={raspberryrose} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Raspberry Rose</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={honeytwist} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Honey Twist</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={applecroissant} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Apple Croissant</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={citrusbrioche} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Citrus Brioche</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={cinnamonrasonbrioche} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Cinnamon & Raison Brioche</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={blacksesamebrioche} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Black Sesame Brioche</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={pistachiobrioche} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Pistachio Brioche</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={cheddargreyure} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Gruyere & Cheddar Brioche</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={briochetete} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Brioche A Tete</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={briocheloaf} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Brioche Loaf</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={canele} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover">
                     <span className="productName col-12">Canele</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={chestnut} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Chestnut</span>
                     <span className="pastryDescription col-5"></span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={banane} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Banane</span>
                     <span className="pastryDescription col-5">Banana compote & Puff Pastry</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={bichon} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Bichon</span>
                     <span className="pastryDescription col-5">Caramelized puff pastry & Lemon pastry cream</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={frangipane} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Frangipane</span>
                     <span className="pastryDescription col-5">Almond cream & casis jam Apple compote</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={gb} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Gateau Basque</span>
                     <span className="pastryDescription col-5">Matcha with Raspberry</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={chocobook} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Book</span>
                     <span className="pastryDescription col-5">Chocolate cream filled</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={matchabook} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Book</span>
                     <span className="pastryDescription col-5">Matcha cream filled</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={tropezienne} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Tropezienne</span>
                     <span className="pastryDescription col-5">Brioche filled with vanilla custard cream</span>
                </div>
            </div>
            <div className="pastryContainer">
                <img src={quiche} className="pastryImg img-fluid" alt="..."></img>
                <div className="pastryHover row">
                     <span className="productName col-6">Daily Quiche</span>
                     <span className="pastryDescription col-5">Different flavour every day</span>
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

export default Viennoiseries;