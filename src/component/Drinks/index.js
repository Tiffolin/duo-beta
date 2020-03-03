import React from "react";
import {NavLink} from "react-router-dom";
import latte from "./drinksImage/latte.png";
import mocha from "./drinksImage/mocha.png";
import matcha from "./drinksImage/matcha.png";
import bslatte from "./drinksImage/bslatte.png";
import dairy from "../Single/allergens/dairy.png";
import beans from "../Single/allergens/beans.PNG";
import sugarfree from "../Single/allergens/sugarfree.PNG";
import nuts from "../Single/allergens/nuts.png"

function Drinks() {
    return (
     <div id="drinks" className="row justify-content-md-center sections">
            
     <p className="pageTitle col-12">Drinks</p>

     <div className="poundCakeContainer">
         <img src={latte} className="poundCakeImg img-fluid" alt="..."></img>
         <div className="poundCakeHover row">
             <p className="productName col-6">LATTE</p>
             <div className="cakeDescription col-6">
                 <p>Espresso</p>
                 <p>Whole Milk</p>
                 <br></br>
                 <p>*alternative milk options:</p>
                 <p>Soy, Skim, Lactose-free</p>
             </div>  
             <div className="allergy col-6">
                 <span> <img className="allergents col-2" src={beans} alt="wheat"></img></span>
                 <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                 <span> <img className="allergents col-2" src={sugarfree} alt="dairy"></img></span>
             </div>
         </div>
     </div>
     <div className="poundCakeContainer">
         <img src={mocha} className="poundCakeImg img-fluid" alt="..."></img>
         <div className="poundCakeHover row">
             <p className="productName col-6">MOCHA</p>
             <div className="cakeDescription col-6">
                 <p>Espresso</p>
                 <p>Housemade Hot chocolate</p>
                 <br></br>

             </div>  
             <div className="allergy col-6">
                 <span> <img className="allergents col-2" src={beans} alt="wheat"></img></span>
                 <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
             </div>
         </div>
     </div>
     <div className="poundCakeContainer">
         <img src={matcha} className="poundCakeImg img-fluid" alt="..."></img>
         <div className="poundCakeHover row">
             <p className="productName col-6">MATCHA LATTE</p>
             <div className="cakeDescription col-6">
                 <p>Matcha</p>
                 <p>Whole Milk</p>
                 <p>1.5 pump Vanilla Syrup</p>
                 <br></br>
                 <p>*alternative milk options:</p>
                 <p>Soy, Skim, Lactose-free</p>
             </div>  
             <div className="allergy col-6">
                 <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
             </div>
         </div>
     </div>
     <div className="poundCakeContainer">
         <img src={bslatte} className="poundCakeImg img-fluid" alt="..."></img>
         <div className="poundCakeHover row">
             <p className="productName col-6">BLACK SESAME LATTE</p>
             <div className="cakeDescription col-6">
                 <p>Black Sesame Paste</p>
                 <p>Whole Milk</p>
                 <p>Condense Milk</p>
                 <br></br>
                 <p>*alternative milk options:</p>
                 <p>Soy, Skim, Lactose-free</p>
             </div>  
             <div className="allergy col-6">
                 <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                 <span> <img className="allergents col-2" src={nuts} alt="dairy"></img></span>
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

export default Drinks;