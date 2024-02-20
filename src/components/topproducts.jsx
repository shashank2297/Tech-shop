import React, { useState } from 'react';
import productsData from "../Assets/productsData.js"
import "../css/external-css.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtocart } from '../actions.js';

function Topproducts() {

    let dispatch = useDispatch();

    let limitedprods = productsData.slice(0, 10)

    let [prods, setprods] = useState(limitedprods)
    let headphonesonly = productsData.filter(product => product.category === "Headphones")
    let earphonesonly = productsData.filter(product => product.category === "Earphones")
    let earbudsonly = productsData.filter(product => product.category === "Earbuds")
    let neckbandsonly = productsData.filter(product => product.category === "Neckbands")

    function togglehdphones() {
        setprods(headphonesonly)
    }

    function toggleearphones() {
        setprods(earphonesonly)
    }

    function toggleearbuds() {
        setprods(earbudsonly)
    }

    function toggleneckbands() {
        setprods(neckbandsonly)
    }

    function toggleall() {
        setprods(limitedprods)
    }

    function renderStars(rateCount) {
        const stars = [];
        for (let i = 0; i < rateCount; i++) {
            stars.push(<i key={i} className="bi bi-star-fill"></i>);
        }
        return stars;
    }


    function addproducttocart(product) {
       dispatch(addtocart(product))
    }

    return (
        <div className='topproducts'>
            <h2>Top Products</h2>
            <section className='topproducts-1'>
                <button onClick={toggleall}>All</button>
                <button onClick={togglehdphones}>Headphones</button>
                <button onClick={toggleearbuds}>Earbuds</button>
                <button onClick={toggleearphones}>Earphones</button>
                <button onClick={toggleneckbands}>Neckbands</button>
            </section>
            <div className='topproducts-2'>
                {prods.map(product => (
                    <div key={product.id}>
                        <div className='image-container'>
                            <img src={require(`${product.images[0]}`)} alt={product.title} />
                        </div>
                        <section>
                            <p>{renderStars(product.rateCount)}</p>
                            <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "white" }}><h6 style={{ fontSize: "20px" }}>{product.title}</h6></Link>
                            <p>{product.info}</p>
                            <hr />
                            <p>${product.finalPrice} <span>${product.originalPrice}</span></p>
                            <button onClick={() => addproducttocart(product)} >Add to Cart</button>
                        </section>
                    </div>
                ))
                }
                <div className='browse'>
                    <Link to="/products"><button>Browse All Products <i className="bi bi-arrow-right"></i></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Topproducts