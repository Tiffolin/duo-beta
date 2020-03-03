import React from "react";
import {NavLink} from "react-router-dom";
import avery from "./singleImage/avery.png";
import baba from "./singleImage/baba.png";
import blackforest from "./singleImage/blackforest.png";
import c4 from "./singleImage/c4.png";
import creme from "./singleImage/cream.png";
import fei from "./singleImage/fei.png";
import hazel from "./singleImage/hazel.png";
import lemontart from "./singleImage/lemontart.png";
import montblanc from "./singleImage/mb.png";
import mixberries from "./singleImage/mixberries.png";
import nova from "./singleImage/nova.png";
import pearl from "./singleImage/pearl.png";
import pistache from "./singleImage/pistache.png";
import sthonore from "./singleImage/sthonore.png";
import tatin from "./singleImage/tatin.png";
import virgo from "./singleImage/virgo.png";
import yuco from "./singleImage/yuco.png";
import dairy from "./allergens/dairy.png";
import wheat from "./allergens/wheat.png";
import egg from "./allergens/egg.png";
import nuts from "./allergens/nuts.png"

function Single() {
    return (

        <div id="single" className="row justify-content-md-center sections">
            
            <p className="pageTitle col-12">INDIVIDUAL CAKES</p>

            <div className="cakeContainer">
                <img src={montblanc} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">MONT BLANC</p>
                    {/* <p className="allergy col-6">contains | *eggs *nuts *dairy *flour</p>    */}
                    <div className="cakeDescription col-6">
                        <p>Chestnut vermicele with rum</p>
                        <p>Vanilla Macepone</p>
                        <p>Chestnut soaked in aged rum</p>
                        <p>Almond cream</p>
                        <p>Shortbread crust</p>
                    </div>
                    {/* <ul className="cakeDescription">
                        <li>Chestnut vermicele with rum</li>
                        <li>Vanilla Macepone</li>
                        <li>Chestnut soaked in aged rum</li>
                        <li>Almond cream</li>
                        <li>Shortbread crust</li>
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
                <img src={avery} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">AVERY</p>
                    {/* <p className="allergy">contains | *eggs *nuts *dairy *flour</p>      */}
                    <div className="cakeDescription col-6">
                        <p>Rose cheesecake</p>
                        <p>Vanilla sponge perfumed w/t strawberry</p>
                        <p>Raspberry cream</p>
                        <p>Crispy crust</p>
                    </div>
                    {/* <ul className="cakeDescription">
                        <li>Rose cheesecake</li>
                        <li>Vanilla sponge perfumed w/t strawberry</li>
                        <li>Raspberry cream</li>
                        <li>Crispy crust</li>
                    </ul>                  */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div>
                </div>
            </div>
            <div className="cakeContainer">
                <img src={creme} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">CREME CARAMEL</p>
                    {/* <p className="allergy">contains | *eggs  *dairy </p>    */}
                    <div className="cakeDescription col-6">
                        <p>Caramel</p>
                        <p>Egg</p>
                    </div> 
                    {/* <ul className="cakeDescription">
                        <li>Caramel</li>
                        <li>Egg</li>       
                    </ul>        */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div>                 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={lemontart} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">LEMON TART</p>
                    {/* <p className="allergy"></p>
                    <p className="cakeSize"></p> */}
                    <div className="cakeDescription col-6">
                        <p>Fresh lime zest</p>
                        <p>Basil infused lemon cream</p>
                        <p>Almond shortbread crust</p>
                    </div>
                    {/* <ul className="cakeDescription">
                        <li>Fresh lime zest</li>
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
                <img src={c4} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">C4</p>
                    {/* <p className="allergy"></p> */}
                    {/* <p className="cakeSize">| Available as a Whole Cake : 4 serving |</p> */}
                    <div className="cakeDescription col-6">
                        <p>Chocolate nougatine</p>
                        <p>Chocolate mousse</p>
                        <p>Chocolate flourless biscuit</p>
                        <p>Nama Chocolate</p>
                        <p>Pecan praline</p>
                        <p>Chocolate sable</p>
                    </div>
                    {/* <ul className="cakeDescription">
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

                    {/* <NavLink to = "/Whole"><p className="cakeSize linktoWhole">| Available as a Whole Cake |</p></NavLink> */}
                </div>
            </div>
            <div className="cakeContainer">
                <img src={virgo} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">VIRGO</p>
                    {/* <p className="allergy"></p>
                    <p className="cakeSize"></p> */}
                    <div className="cakeDescription col-6">
                        <p>Honey marshmallow</p>
                        <p>Expresso mousse</p>
                        <p>White chocolate cream</p>
                        <p>Chocolate flourless biscuit</p>
                        <p>Coffee crème Brulee</p>
                        <p>Almond shortbread</p>
                    </div>
                    {/* <ul className="cakeDescription">
                        <li>Honey marshmallow</li>
                        <li>Expresso mousse</li>
                        <li>White chocolate cream</li>
                        <li>Chocolate flourless biscuit</li>
                        <li>Coffee crème Brulee</li>  
                        <li>Almond shortbread</li>  
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
                    {/* <p className="allergy"></p> */}
                    {/* <p className="cakeSize">| Available as a Whole Cake : 4 serving | 8 serving |</p> */}
                    <div className="cakeDescription col-6">
                        <p>Coconut nectar</p>
                        <p>Light yuzu cheesecake</p>
                        <p>Yuzu mango confit</p>
                        <p>Almond crispy crust</p>
                    </div>
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                    {/* <ul className="cakeDescription">
                        <li>Coconut nectar</li>
                        <li>Light yuzu cheesecake</li>
                        <li>Yuzu mango confit</li>
                        <li>Almond crispy crust</li>  
                    </ul> */}
                </div>
            </div>
            <div className="cakeContainer">
                <img src={baba} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">BABA</p>
                    {/* <p className="allergy"></p>
                    <p className="cakeSize"></p> */}
                    <div className="cakeDescription col-6">
                        <p>Congnac creme brulee</p>
                        <p>Pouched pear</p>
                        <p>Vanilla cream</p>
                        <p>Rhum Baba</p>
                        <p>Almond crumble</p>
                    </div>
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                    {/* <ul className="cakeDescription">
                        <li>Congnac creme brulee</li>
                        <li>Pouched pear</li>
                        <li>Vanilla cream</li>
                        <li>Rhum Baba</li>
                        <li>Almond crumble</li>    
                    </ul> */}
                </div>
            </div>
            <div className="cakeContainer">
                <img src={blackforest} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">BLACK FOREST</p>
                    {/* <p className="allergy"></p> */}
                    <div className="cakeDescription col-6">
                        <p>Chocolate mouse</p>
                        <p>Chocolate sponge soaked in kirsch</p>
                        <p>Cherry compote</p>
                        <p>Kirsch chantilly</p>
                        <p>Chocolate sable</p>
                    </div>
                    {/* <p className="cakeSize">| Available as a Whole Cake : 4 serving |</p>
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
                <img src={hazel} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">HAZEL</p>
                    {/* <p className="allergy"></p> */}
                    {/* <p className="cakeSize">| Available as a Whole Cake : 4 serving |</p> */}
                    <div className="cakeDescription col-6">
                        <p>Dark chocolate mousse 66%</p>
                        <p>Hazelnut praline crispy</p>
                        <p>Almond sponge enrobed with toasted sesame</p>
                    </div>
                    {/* <ul className="cakeDescription">
                        <li>Dark chocolate mousse 66%</li>
                        <li>Hazelnut praline crispy</li>
                        <li>Almond sponge enrobed with toasted sesame</li> 
                    </ul>     */}
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
                    {/* <p className="allergy"></p> */}
                    {/* <p className="cakeSize">| Available as a Whole Cake : 4 serving |</p> */}
                    <div className="cakeDescription col-6">
                        <p>Raspberry cream</p>
                        <p>Lychee gelee</p>
                        <p>Lychee saoked in Soho</p>
                        <p>Light lychee cream</p>
                        <p>shortbread crust</p>
                    </div>
                    {/* <ul className="cakeDescription">
                        <li>Raspberry cream</li>
                        <li>Lychee gelee</li>
                        <li>Lychee saoked in Soho</li>
                        <li>Light lychee cream</li>
                        <li>shortbread crust</li>    
                    </ul>   */}
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
                    {/* <p className="allergy"></p> */}
                    {/* <p className="cakeSize">| Available as a Whole Cake : 4 serving | 6 serving |</p> */}
                    <div className="cakeDescription col-6">
                        <p>Fresh raspberry filled with raspberry jam</p>
                        <p>Pistachio cream</p>
                        <p>Raspberry jelly</p>
                        <p>Almond shortbread crust</p>
                    </div>
                    {/* <ul className="cakeDescription">
                        <li>Fresh raspberry filled with raspberry jam</li>
                        <li>Pistachio cream</li>
                        <li>Raspberry jelly</li>
                        <li>Almond shortbread crust</li>  
                    </ul>  */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={pearl} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">PEARL</p>
                    {/* <p className="allergy"></p> */}
                    {/* <p className="cakeSize">| Available as a Whole Cake : 4 serving |</p> */}
                    <div className="cakeDescription col-6">
                        <p>Pate a choux</p>
                        <p>Mint cream</p>
                        <p>Fresh mango</p>
                        <p>Mango cremeux</p>
                    </div>
                    {/* <ul className="cakeDescription">
                        <li>Pate a choux</li>
                        <li>Mint cream</li>
                        <li>Fresh mango</li>
                        <li>Mango cremeux</li>
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
                <img src={nova} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">NOVA</p>
                    {/* <p className="allergy"></p>
                    <p className="cakeSize"></p> */}
                    <div className="cakeDescription col-6">
                        <p>Vanilla cream</p>
                        <p>Caraibe cremeux</p>
                        <p>Milk Chocolate mousse</p>
                        <p>Pistachio mousseline</p>
                        <p>Hazelnut dacquoise</p>
                        <p>Chocolate sable</p>
                    </div>
                    {/* <ul className="cakeDescription">
                        <li>Vanilla cream</li>
                        <li>Caraibe cremeux</li>
                        <li>Milk Chocolate mousse</li>
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
                <img src={mixberries} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">MIX BERRIES</p>
                    {/* <p className="allergy"></p> */}
                    {/* <p className="cakeSize">| Available as a Whole Cake : 4 serving |</p> */}
                    <div className="cakeDescription col-6">
                        <p>Vanilla cream</p>
                        <p>Strawberry mamalade</p>
                        <p>Almond cream</p>
                        <p>Puff pastry</p>
                    </div>
                    {/* <ul className="cakeDescription">
                        <li>Vanilla cream</li>
                        <li>Strawberry mamalade</li>
                        <li>Almond cream</li>
                        <li>Puff pastry</li>
                    </ul>                */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={sthonore} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6"> ST HONORE</p>
                    {/* <p className="allergy"></p> */}
                    {/* <p className="cakeSize">| Available as a Whole Cake : 6 serving |</p> */}
                    <div className="cakeDescription col-6">
                        <p>Hazelnut mousseline</p>
                        <p>Caranek ciated oate a choux</p>
                        <p>Homemade praline</p>
                        <p>Light lemon cream</p>
                        <p>Puff Pastry</p>
                    </div>
                    {/* <ul className="cakeDescription">
                        <li>Hazelnut mousseline</li>
                        <li>Caranek ciated oate a choux</li>
                        <li>Homemade praline</li>
                        <li>Light lemon cream</li>
                        <li>Puff Pastry</li>    
                    </ul>       */}
                    <div className="allergy col-6">
                        <span> <img className="allergents col-2" src={wheat} alt="wheat"></img></span>
                        <span> <img className="allergents col-2" src={dairy} alt="dairy"></img></span>
                        <span> <img className="allergents col-2" src={egg} alt="egg"></img></span>
                        <span> <img className="allergents col-2" src={nuts} alt="nuts"></img></span>
                    </div> 
                </div>
            </div>
            <div className="cakeContainer">
                <img src={tatin} className="cakeImg img-fluid" alt="..."></img>
                <div className="cakeHover row">
                    <p className="productName col-6">TATIN</p>
                    {/* <p className="allergy">contains | *eggs *nuts *dairy *flour</p>    */}
                    <div className="cakeDescription col-6">
                        <p>Salted caramel crumb</p>
                        <p>Caramelized apple</p>
                        <p>Yuzu cream</p>
                        <p>Pastry cream</p>
                        <p>Short crust</p>
                    </div>
                    {/* <ul className="cakeDescription">
                        <li>Salted caramel crumb</li>
                        <li>Caramelized apple</li>
                        <li>Yuzu cream</li>
                        <li>Pastry cream</li>
                        <li>Short crust</li>    
                    </ul>   */}
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

export default Single;