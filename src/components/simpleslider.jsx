import React from "react";
import Slider from "react-slick";
import "../css/App.css"; 
import SonyXb910N from '../assets/images/products/sonyXb910n-1.png'

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slider-content">
           <div>
            <p>Sony Xb910N</p>
            <h3>Give your favourite music a Boost</h3>
            <p>$13489 <span>$19990</span></p>
            <button>Shop Now</button>
           </div>
              <img src={SonyXb910N} alt="SonyXb910N" />
          </div>
          <div className="slider-content">
          <div>
            <p>Sony Xb910N</p>
            <h3>Give your favourite music a Boost</h3>
            <p>$13489 <span>$19990</span></p>
            <button>Shop Now</button>
           </div>
              <img src={SonyXb910N} alt="SonyXb910N" />
          </div>
          <div className="slider-content">
          <div>
            <p>Sony Xb910N</p>
            <h3>Give your favourite music a Boost</h3>
            <p>$13489 <span>$19990</span></p>
            <button>Shop Now</button>
           </div>
              <img src={SonyXb910N} alt="SonyXb910N" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;

