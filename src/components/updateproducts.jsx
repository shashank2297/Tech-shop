import '../css/App.css'
import React from 'react';
import productsData from "../assets/productsData.js"

function Updateproducts() {

    let brokenImage = "/src/assets"

    return (
        <div className='topproducts'>
            <h2>Top Products</h2>
            <section className='topproducts-1'>
                <button>All</button>
                <button>Headphones</button>
                <button>Earbuds</button>
                <button>Earphones</button>
                <button>Neckbands</button>
            </section>
            <div className='topproducts-2'>
                {productsData.map(product => ( 

                    <div key={product.id}>
                        <div className='image-container'>
                            <img src={brokenImage + product.images[0]} alt={product.title} />
                        </div>
                        <section>
                            <p><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></p>
                            <h6>{product.title}</h6>
                            <p>{product.info}</p>
                            <hr />
                            <p>{product.finalPrice} <span>{product.originalPrice}</span></p>
                            <button>Add to Cart</button>
                        </section>
                    </div>
                ))
                }
                <div className='browse'>
                    <button>Browse All Products <i className="bi bi-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Updateproducts