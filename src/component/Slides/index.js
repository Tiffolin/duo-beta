import React from "react";
import "../style.css";
// import slide1 from "./slides/1.png";
// import slide2 from "./slides/2.png";
// import slide3 from "./slides/3.png";
// import slide4 from "./slides/4.png";
// import slide5 from "./slides/5.png";
// import slide6 from "./slides/6.png";
// import slide8 from "./slides/8.png";
// import slide9 from "./slides/9.png";
import slide1 from "./slides/1.png";
import slide2 from "./slides/2.png";
import slide3 from "./slides/3.png";
import slide4 from "./slides/4.png";


function Slides() {
    return (
                    // <div id="slideShow" className="carousel slide slidebox" data-ride="carousel">
                    //         <div className="carousel-inner slidebox">
                    //             <div className="carousel-item active ">
                    //                 <img className="img-fluid slideImg" src={slide1} alt="First slide"></img>
                    //             </div>
                    //             <div className="carousel-item ">
                    //                 <img className=" img-fluid slideImg" src={slide2} alt="Second slide"></img>
                    //             </div>
                    //             <div className="carousel-item ">
                    //                 <img className="img-fluid slideImg" src={slide3} alt="Third slide"></img>
                    //             </div>
                    //             <div className="carousel-item ">
                    //                 <img className="img-fluid slideImg" src={slide4} alt="forth slide"></img>
                    //             </div>
                    //             <div className="carousel-item ">
                    //                 <img className="img-fluid slideImg" src={slide5} alt="fifth slide"></img>
                    //             </div>
                    //             <div className="carousel-item ">
                    //                 <img className="img-fluid slideImg" src={slide6} alt="sixth slide"></img>
                    //             </div>
                    //             <div className="carousel-item ">
                    //                 <img className="img-fluid slideImg" src={slide8} alt="seventh slide"></img>
                    //             </div>
                    //             <div className="carousel-item ">
                    //                 <img className="img-fluid slideImg" src={slide9} alt="seventh slide"></img>
                    //             </div>

                    //         </div>
                    // </div>




  <div className="container">
    <div id="magicCarousel" className="carousel slide my-5" data-ride="carousel">
      
{/* <!--    Carousel Indicators    --> */}
      <ol className="carousel-indicators">
        <li data-target="#magicCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#magicCarousel" data-slide-to="1"></li>
        <li data-target="#magicCarousel" data-slide-to="2"></li>
        <li data-target="#magicCarousel" data-slide-to="3"></li>
      </ol>
      
{/* <!--    Carousel Slider    --> */}
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="slide1"></img>
          <div className="carousel-caption">
            <h3>Slide 01</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat dolore obcaecati perspiciatis neque in, iusto, quia aut molestias minus ipsam modi dolorem odit eos.</p>
          </div> 
        </div>
        
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="slide3"></img>
          <div className="carousel-caption">
            <h3>Slide 02</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vel in placeat corrupti. Velit quidem eos, accusantium vitae nostrum reiciendis ratione libero? Aperiam, recusandae culpa.</p>
          </div> 
        </div>
        
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="slide3"></img>
          <div className="carousel-caption">
            <h3>Slide 03</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, ut beatae porro ullam quidem officia dignissimos facilis? Blanditiis nesciunt labore pariatur quaerat exercitationem quibusdam modi!</p>
          </div> 
        </div>
        
        <div className="carousel-item">
          <img src={slide4} className="d-block w-100" alt="slide3"></img>
          <div className="carousel-caption">
            <h3>Slide 04</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis soluta accusamus sequi eos consectetur! Animi minima modi ad at similique velit quibusdam veritatis sequi placeat?</p>
          </div> 
        </div>
        
{/* <!--     Carousel Controls     --> */}
        <a href="#magicCarousel" className="carousel-control-prev" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a href="#magicCarousel" className="carousel-control-next" role="button" data-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="sr-only">Next</span>
        </a>
        
      </div>
    </div>
  </div>
  
  

       
    )
}

export default Slides;