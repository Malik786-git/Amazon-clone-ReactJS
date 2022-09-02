import React from "react";
import slider0 from '../assets/img/slider0.jpg'
import slider1 from '../assets/img/slider1.jpg'
import slider2 from '../assets/img/slider2.jpg'



const ImageCarousel = () => {
  return (
    <>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider0} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={slider1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={slider2} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};

export default ImageCarousel;
