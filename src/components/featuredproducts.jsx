import React from 'react';
import Slider from "react-slick";
import productsData from '../Assets/productsData';
import "../css/external-css.css"

// Define custom arrow components
const PrevArrow = (props) => {
    const { onClick } = props;
    return <div className="custom-prev-arrow" onClick={onClick} />;
};

const NextArrow = (props) => {
    const { onClick } = props;
    return <div className="custom-next-arrow" onClick={onClick} />;
};

const FeaturedProducts = () => {

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "10px",
                },
            },
        ],
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    const featuredProduct = productsData.filter(product => product.tag).slice(0, 6)

    return (
        <div className='ftrproducts'>
            <h2 className='featured-products'>Featured Products</h2>
            <div className="slider-container-2">
                <Slider {...settings}>
                    {
                        featuredProduct.map(item => (
                            <div className="product-card" key={item.id}>
                                <h3 className="product-name">{item.title}</h3>
                                <img className="product-image" src={require(`${item.images[0]}`)} alt="" />
                                <p className="product-price">${item.finalPrice} <del>${item.originalPrice}</del></p>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default FeaturedProducts;