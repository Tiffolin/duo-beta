import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import logo2 from "./logo2.png";
import "../style.css";

class Navbar extends Component{    
    constructor() {
    super();
    this.state = {
        scrolled:false,
    };
}

componentDidMount(){
    window.addEventListener("scroll", ()=>{
        const isTop = window.scrollY<100;
        if(isTop !== true){
            this.setState({scrolled: true});
        }else{
            this.setState({scrolled: false});
        }
    });
}

componentWillUnmount() {
window.removeEventListener("scroll");
}

render() {
return(
    <div className={this.state.scrolled ? "nav scrolled" : "nav"}>
        <div className="nav_text">
            <NavLink to = "/"><img id="logo2" alt="logo2" src={logo2}></img></NavLink>
            <NavLink to = "/" className={"navlinks"}>About</NavLink>
            <NavLink to = "/Cakes" className={"navlinks"}>Cakes</NavLink>
            <NavLink to = "/Viennoiseries" className={"navlinks"}>Viennoiseries</NavLink>
            <NavLink to = "/Drinks" className={"navlinks"}>Drinks</NavLink>
            <NavLink to = "/LocationHours" className={"navlinks"}>Locations</NavLink>
        </div>
    </div>
    );
}
}

export default Navbar;