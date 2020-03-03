import React from "react";
import interior from "../Slides/slides/11.png";


function LocationHours() {
    return (
        <div>

        <div id="location" class="col-12 row justify-content-md-center sections">
                <p class="pageTitle col-12">LOCATION & HOURS</p>
                <img id="interior" src={interior} className = "col-10" alt="..."></img>
                <div id="locationsWrapper">
                        <p class="address"><b>Address</b></p>
                        <p class="address">230 Commerce Valley Dr E #4 Thornhill</p>
                        <p class="address">ON L3T 7Y3T</p>
                        <div id="hoursWrapper">
                            <p class="hours">MON   - closed</p>
                            <p class="hours">TUES  - 10am to 7pm</p>
                            <p class="hours">WED   - 10am to 7pm</p>
                            <p class="hours">THURS - 10am to 7pm</p>
                            <p class="hours">FRI   - 10am to 7pm</p>
                            <p class="hours">SAT   - 10am to 6pm </p>
                            <p class="hours">SUN   - 11am to 6pm</p>
                        </div>

                        {/* <a href="#"><span id="directions">Get Directions</span></a> */}
                </div>

        </div>
        </div>
    )
}

export default LocationHours;