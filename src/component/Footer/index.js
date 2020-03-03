import React from "react";
import footer2 from "./footer2.PNG";

function Footer() {
    return (
        <div id="footer" class="col-12 sections">
            <div id="contact"></div>
            <div id="payments"></div>
            <img id="footerImg" src={footer2} alt="..."></img>
            <div id="copyright">© 2019, Duo Patisserie & Cafe </div>
            <a ><div id="copyright">designed by TiffoLin</div></a>
        </div>
    )
}

export default Footer;