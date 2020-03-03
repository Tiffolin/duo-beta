import React from "react";
import {NavLink} from "react-router-dom";
import garden from "./wholeImage/garden.png";
import sicily from "./wholeImage/sicily.png";
import c4 from "./wholeImage/c4.png";
import blackforest from "./wholeImage/blackforest.png";
import cadaeu from "./wholeImage/cadaeu.png";
import yuco from "./wholeImage/yuco.png";
import mixberries from "./wholeImage/mixberries.png";
import soleil from "./wholeImage/soleil.png";
import supernova from "./wholeImage/supernova.png";
import mona from "./wholeImage/mona.png";
import pistache from "./wholeImage/pistache.png";
import fei from "./wholeImage/fei.png";
import dairy from "../Single/allergens/dairy.png";
import wheat from "../Single/allergens/wheat.png";
import egg from "../Single/allergens/egg.png";
import nuts from "../Single/allergens/nuts.png"


function Whole() {
    return (
        <div id="whole" className="row justify-content-md-center sections">
        <p className="pageTitle">WHOLE CAKES</p>
  
        <div className="cakeContainer">
                <img src={garden} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">GARDEN</p>
                    {/* <p className="allergy col-6">contains | *eggs *nuts *dairy *flour</p>    */}
                    <div className="cakeDescription col-6">
                        <p>Red berries</p>
                        <p>Vanilla cream</p>
                        <p>Strawberry bavarian cream</p>
                        <p>White sponge perfumed in raspberry & strawberry</p>
                    </div>
                    {/* <ul className="cakeDescription">
                        <li>Red berries</li>
                        <li>Vanilla cream</li>
                        <li>Strawberry bavarian cream</li>
                        <li>White sponge perfumed in raspberry & strawberry</li>
                    </ul> */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={blackforest} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">BLACK FOREST</p>
                    {/* <p className="allergy col-6">contains | *eggs *nuts *dairy *flour</p>    */}
                    <div className="cakeDescription col-6">
                        <p>Chocolate mouse</p>
                        <p>Chocolate sponge soaked in kirsch</p>
                        <p>Cherry compote</p>
                        <p>Kirsch chantilly</p>
                        <p>Chocolate sable</p>
                    </div>
                    {/* 
                     <ul className="cakeDescription">
                        <li>Chocolate mouse</li>
                        <li>Chocolate sponge soaked in kirsch</li>
                        <li>Cherry compote</li>
                        <li>Kirsch chantilly</li>
                        <li>Chocolate sable</li>           
                    </ul> */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={yuco} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">YUCO</p>
                    {/* <p className="allergy col-6">contains | *eggs *nuts *dairy *flour</p>    */}
                    <div className="cakeDescription col-6">
                        <p>Coconut nectar</p>
                        <p>Light yuzu cheesecake</p>
                        <p>Yuzu mango confit</p>
                        <p>Almond crispy crust</p>
                    </div>
                    {/*                     
                    <ul className="cakeDescription">
                        <li>Coconut nectar</li>
                        <li>Light yuzu cheesecake</li>
                        <li>Yuzu mango confit</li>
                        <li>Almond crispy crust</li>
                    </ul> */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={sicily} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">SICILY</p>
                    {/* <p className="allergy col-6">contains | *eggs *nuts *dairy *flour</p>    */}
                    <div className="cakeDescription col-6">
                        <p>Almond cream</p>
                        <p>Vanilla cream encrusted in pistachio</p>
                        <p>Elder flower gelee</p>
                        <p>Fresh figs and raspberry</p>
                    </div>
                    {/*           
                    <ul className="cakeDescription">
                        <li>Almond cream</li>
                        <li>Vanilla cream encrusted in pistachio</li>
                        <li>Elder flower gelee</li>
                        <li>Fresh figs and raspberry</li>
                    </ul> */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={mixberries} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">MIX BERRIES</p>
                    {/* <p className="allergy col-6">contains | *eggs *nuts *dairy *flour</p>    */}
                    <div className="cakeDescription col-6">
                        <p>Vanilla cream</p>
                        <p>Strawberry mamalade</p>
                        <p>Almond cream</p>
                        <p>Puff pastry</p>
                    </div>
                    {/*                     
                    <ul className="cakeDescription">
                        <li>Vanilla cream</li>
                        <li>Strawberry mamalade</li>
                        <li>Almond cream</li>
                        <li>Puff pastry</li>
                    </ul> */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={supernova} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">SUPERNOVA</p>
                    {/* <p className="allergy col-6">contains | *eggs *nuts *dairy *flour</p>    */}
                    <div className="cakeDescription col-6">
                        <p>Vanilla cream</p>
                        <p>Caraibe cremeux</p>
                        <p>Milk chocolate mousse</p>
                        <p>Pistachio mousseline</p>
                        <p>Hazelnut dacquoise</p>
                        <p>Chocolate sable</p>
                    </div>
                    {/* 
                    <ul className="cakeDescription">
                        <li>Vanilla cream</li>
                        <li>Caraibe cremeux</li>
                        <li>Milk chocolate mousse</li>
                        <li>Pistachio mousseline</li>
                        <li>Hazelnut dacquoise</li>
                        <li>Chocolate sable</li>
                    </ul> */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={fei} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">FEI</p>
                    {/* <p className="allergy col-6">contains | *eggs *nuts *dairy *flour</p>    */}
                    <div className="cakeDescription col-6">
                        <p>Raspberry cream</p>
                        <p>Lychee gelee</p>
                        <p>Lychee saoked in Soho</p>
                        <p>Light lychee cream</p>
                        <p>shortbread crust</p>
                    </div>
                    {/*                     
                    <ul className="cakeDescription">
                        <li>Fresh lime zest</li>
                        <li>Candied lemon</li>
                        <li>Basil infused lemon cream</li>
                        <li>Almond shortbread crust</li>
                    </ul> */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={mona} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">MONA</p>
                    {/* <p className="allergy col-6">contains | *eggs *nuts *dairy *flour</p>    */}
                    <div className="cakeDescription col-6">
                        <p>Dark chocolate mousse 66%</p>
                        <p>Orange yuzu marmalade</p>
                        <p>Mandarin Yuu creameux</p>
                        <p>Praline crispy</p>
                        <p>Almond sponge</p>
                    </div>
                    {/*               
                    <ul className="cakeDescription">
                        <li>Dark chocolate mousse 66%</li>
                        <li>Orange yuzu marmalade</li>
                        <li>Mandarin Yuu creameux</li>
                        <li>Praline crispy</li>
                        <li>Almond sponge</li>
                    </ul> */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={soleil} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">SOLEIL</p>
                    {/* <p className="allergy col-6">contains | *eggs *nuts *dairy *flour</p>    */}
                    <div className="cakeDescription col-6">
                        <p>Mango</p>
                        <p>Vanilla cream</p>
                        <p>Mango bavarian cream</p>
                        <p>White sponge perfumed in mango & grapefruit</p>
                    </div>
                    {/*                     
                    <ul className="cakeDescription">
                        <li>Mango</li>
                        <li>Vanilla cream</li>
                        <li>Mango bavarian cream</li>
                        <li>White sponge perfumed in mango & grapefruit</li>
                    </ul> */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={cadaeu} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">CADAUE</p>
                    {/* <p className="allergy col-6">contains | *eggs *nuts *dairy *flour</p>    */}
                    <div className="cakeDescription col-6">
                        <p>Toasted white chocolate</p>
                        <p>Expresso mousse</p>
                        <p>White chocolate supreme</p>
                        <p>Chocolate flourless biscuit</p>
                    </div>
                    {/*                     
                    <ul className="cakeDescription">
                        <li>Toasted white chocolate</li>
                        <li>Expresso mousse</li>
                        <li>White chocolate supreme</li>
                        <li>Chocolate flourless biscuit</li>
                    </ul> */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={c4} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">C4</p>
                    {/* <p className="allergy col-6">contains | *eggs *nuts *dairy *flour</p>    */}
                    <div className="cakeDescription col-6">
                        <p>Chocolate nougatine & mousse</p>
                        {/* <p>Chocolate mousse</p> */}
                        <p>Chocolate flourless biscuit</p>
                        <p>Nama Chocolate</p>
                        <p>Pecan praline</p>
                        <p>Chocolate sable</p>
                    </div>
                    {/*                     
                    <ul className="cakeDescription">
                        <li>Chocolate nougatine</li>
                        <li>Chocolate mousse</li>
                        <li>Chocolate flourless biscuit</li>
                        <li>Nama Chocolate</li>
                        <li>Pecan praline</li>
                        <li>Chocolate sable</li>
                    </ul> */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={pistache} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">PISTACHE</p>
                    {/* <p className="allergy col-6">contains | *eggs *nuts *dairy *flour</p>    */}
                    <div className="cakeDescription col-6">
                        <p>Chantilly cream</p>
                        <p>Raspberry jam</p>
                        <p>Chocolate cake</p>
                    </div>
                    {/*                     
                    <ul className="cakeDescription">
                        <li>Chantilly cream</li>
                        <li>Raspberry jam</li>
                        <li>Chocolate cake</li>
                    </ul> */}
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

export default Whole;