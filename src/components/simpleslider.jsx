import React from "react";
import Slider from "react-slick";
import "../css/external-css.css"
import productsData from "../Assets/productsData";
import { Link } from "react-router-dom";

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

  let sonyprod = productsData.find(product => product.id === 7);
  let boatprod = productsData.find(product => product.id === 3)
  let jblprod = productsData.find(product => product.id === 1)

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <p className="over-ear">Over Ear</p>
          <section>
            <div>
              <p>{sonyprod.title}</p>
              <h3>Give your favourite music a Boost</h3>
              <p>${sonyprod.finalPrice} <span>${sonyprod.originalPrice}</span></p>
              <Link to={`/products/${sonyprod.id}`}><button>Shop Now</button></Link>
            </div>
            <img src={require(`${sonyprod.heroImage}`)} alt="" />
          </section>
        </div>
        <div>
          <p className="over-ear">Over Ear</p>
          <section>
            <div>
              <p>{jblprod.title}</p>
              <h3>Keep the Noise Out, or In. You Choose</h3>
              <p>${jblprod.finalPrice} <span>${jblprod.originalPrice}</span></p>
              <Link to={`/products/${jblprod.id}`}><button>Shop Now</button></Link>
            </div>
            <img src={require(`${jblprod.heroImage}`)} alt="" />
          </section>
        </div>
        <div>
          <p className="over-ear">In Ear</p>
          <section>
            <div>
              <p>{boatprod.title}</p>
              <h3>Feather Weight for Comfort All-Day.</h3>
              <p>${boatprod.finalPrice} <span>${boatprod.originalPrice}</span></p>
              <Link to={`/products/${boatprod.id}`}><button>Shop Now</button></Link>
            </div>
            <img src={require(`${boatprod.heroImage}`)} alt="" />
          </section>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
