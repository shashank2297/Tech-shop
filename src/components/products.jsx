import { Link } from "react-router-dom"
import productsData from "../Assets/productsData"
import "../css/external-css.css"

function Products() {
    return (
        <div className="products">
            <section className="products-1">
                <div>
                    <h6>Sort By</h6>
                    <hr />
                    <ul>
                        <li>Latest</li>
                        <li>Featured</li>
                        <li>Top Rated</li>
                        <li>Price(Lowest First)</li>
                        <li>Price:(Highest First)</li>
                    </ul>
                </div>
                <div className="filters">
                    <h6>Filter By</h6>
                    <hr />
                    <h6>Brands</h6>

                    <input type="checkbox" name="JBL" id="jbl" />
                    <label htmlFor="jbl"> &nbsp;JBL</label>
                    <br />

                    <input type="checkbox" name="boat" id="boat" />
                    <label htmlFor="boat"> &nbsp;Boat</label>
                    <br />

                    <input type="checkbox" name="sony" id="sony" />
                    <label htmlFor="sony"> &nbsp;Sony</label>
                    <br />
                    <br />
                    <h6>Category</h6>

                    <input type="checkbox" name="headphones" id="headphones" />
                    <label htmlFor="headphones"> &nbsp;Headphones</label>
                    <br />

                    <input type="checkbox" name="earbuds" id="earbuds" />
                    <label htmlFor="earbuds"> &nbsp;Earbuds</label>
                    <br />
                    <input type="checkbox" name="earphones" id="earphones" />
                    <label htmlFor="earphones"> &nbsp;Earphones</label>
                    <br />

                    <input type="checkbox" name="neckbands" id="neckbands" />
                    <label htmlFor="neckbands"> &nbsp;Neckbands</label>
                    <br />
                    <br />
                    <h6>Price</h6>
                    <p>$1990</p>
                    <input type="range" max={1990} min={0} />
                </div>
            </section>
            <section className="products-2">
                {productsData.map(product => (
                    <div key={product.id}>
                        <div className='image-container'>
                            <img src={require(`${product.images[0]}`)} alt={product.title} />
                        </div>
                        <section>
                            <p><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></p>
                            <Link to={`/products/${product.id}`} style={{textDecoration:"none", color: "white"}}>
                            <h6 style={{fontSize: "20px"}}>{product.title}</h6>
                            </Link>
                            <p>{product.info}</p>
                            <hr />
                            <p>${product.finalPrice} <span>${product.originalPrice}</span></p>
                            <button>Add to Cart</button>
                        </section>
                    </div>
                ))
                }
            </section>
        </div>
    )
}

export default Products