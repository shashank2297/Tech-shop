import React from "react";
import Slider from "react-slick";
import sonyXb910n from "./images/products/sonyXb910n-1.png"
import jbl660nc from "./images/products/jbl660nc-1.png"
import boat131 from "./images/products/boat131-1.png"
import "../css/external-css.css"

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <p className="over-ear">Over Ear</p>
          <section>
            <div>
              <p>Sony XB910N</p>
              <h3>Give your favourite music a Boost</h3>
              <p>$13,489 <span>$19,990</span></p>
              <button>Shop Now</button>
            </div>
            <img src={sonyXb910n} alt="" />
          </section>
        </div>
        <div>
          <p className="over-ear">Over Ear</p>
          <section>
            <div>
              <p>JBL Live 660NC</p>
              <h3>Keep the Noise Out, or In. You Choose</h3>
              <p>$9,999 <span>$14,999</span></p>
              <button>Shop Now</button>
            </div>
            <img src={jbl660nc} alt="" />
          </section>
        </div>
        <div>
          <p className="over-ear">In Ear</p>
          <section>
            <div>
              <p>Boat Airdopes 131</p>
              <h3>Feather Weight for Comfort All-Day.</h3>
              <p>$1099 <span>$2990</span></p>
              <button>Shop Now</button>
            </div>
            <img src={boat131} alt="" />
          </section>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
