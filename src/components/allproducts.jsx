import { Link } from "react-router-dom";
import productsData from "../Assets/productsData";
import "../css/external-css.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../actions";
import Header from "./header";

function Allproducts() {

    let dispatch =useDispatch()

    function addtocartitem(product){
        dispatch(addtocart(product))
        const buttonId = `cart-style-${product.id}`;
        const button = document.getElementById(buttonId);
        if (button) {
            button.style.backgroundColor ="green";
            button.innerHTML = "Added";
        }
    }
    

    const [products, setProducts] = useState(productsData);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedcategory, setSelectedcategory] = useState([])
    const [minPrice, setMinPrice] = useState(449);
    const [maxPrice, setMaxPrice] = useState(19990);
    const [clear, setclear] = useState(false)

    const featuredprods = productsData.filter(product => product.tag);
    const latestprods = productsData;
    const topratedprods = productsData.filter(product => product.rateCount > 4);
    const pricelowest = productsData.slice().sort((a, b) => a.finalPrice - b.finalPrice);
    const pricehighest = productsData.slice().sort((a, b) => b.finalPrice - a.finalPrice);

    function toggleclear() {
        setProducts(latestprods);
        setSelectedBrands([]);
        setSelectedcategory([]);
        setMinPrice(449);
        setMaxPrice(19990);
        setclear(false);

        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
    }

    function toggleProducts(newProducts) {
        setProducts(newProducts);
        setclear(true)
    }

    const toggleBrandFilter = (brand) => {
        const updatedBrands = [...selectedBrands];
        const index = updatedBrands.indexOf(brand);
        if (index === -1) {
            updatedBrands.push(brand);
        } else {
            updatedBrands.splice(index, 1);
        }
        setSelectedBrands(updatedBrands);
        filterProducts(updatedBrands);
        setclear(true)
    }

    const filterProducts = (selectedBrands) => {
        let filteredProducts = productsData;
        if (selectedBrands.length > 0) {
            filteredProducts = productsData.filter(product => selectedBrands.includes(product.brand));
        }
        setProducts(filteredProducts);
    }

    const togglecategoryfilter = (category) => {
        const updatedcategory = [...selectedcategory];
        const index = updatedcategory.indexOf(category);
        if (index === -1) {
            updatedcategory.push(category);
        } else {
            updatedcategory.splice(index, 1);
        }
        setSelectedcategory(updatedcategory);
        filterProductscat(updatedcategory);
        setclear(true)
    }

    const filterProductscat = (selectedcat) => {
        let filteredProducts = productsData;
        if (selectedcat.length > 0) {
            filteredProducts = productsData.filter(product => selectedcat.includes(product.category));
        }
        setProducts(filteredProducts);
    }

    const filterByPriceRange = () => {
        const filteredProducts = productsData.filter(product => product.finalPrice >= minPrice && product.finalPrice <= maxPrice);
        setProducts(filteredProducts);
        setclear(true)
    }

    const handleMaxPriceChange = (e) => {
        setMaxPrice(parseInt(e.target.value));
    }

    function renderStars(rateCount) {
        const stars = [];
        for (let i = 0; i < rateCount; i++) {
            stars.push(<i key={i} className="bi bi-star-fill"></i>);
        }
        return stars;
    }

    return (
        <>
        <Header />
        <div className="products">
            <section className="products-1">
                <div>
                    {clear && <button className="clear" onClick={toggleclear}>Clear All</button>}
                    <br />
                    <br />
                    <h6>Sort By</h6>
                    <hr />
                    <ul>
                        <li onClick={() => toggleProducts(latestprods)} id="active">Latest</li>
                        <li onClick={() => toggleProducts(featuredprods)} id="active">Featured</li>
                        <li onClick={() => toggleProducts(topratedprods)} id="active">Top Rated</li>
                        <li onClick={() => toggleProducts(pricelowest)} id="active">Price (Lowest First)</li>
                        <li onClick={() => toggleProducts(pricehighest)} id="active">Price (Highest First)</li>
                    </ul>
                </div>
                <div className="filters">
                    <h6>Filter By</h6>
                    <hr />
                    <h6>Brands</h6>

                    <input type="checkbox" name="JBL" id="jbl" onClick={() => toggleBrandFilter('JBL')} />
                    <label htmlFor="jbl">&nbsp;JBL</label>
                    <br />

                    <input type="checkbox" name="boat" id="boat" onClick={() => toggleBrandFilter('boAt')} />
                    <label htmlFor="boat">&nbsp;Boat</label>
                    <br />

                    <input type="checkbox" name="sony" id="sony" onClick={() => toggleBrandFilter('Sony')} />
                    <label htmlFor="sony">&nbsp;Sony</label>
                    <br />
                    <br />
                    <h6>Category</h6>
                    <input type="checkbox" name="headphones" id="headphones" onClick={() => togglecategoryfilter("Headphones")} />
                    <label htmlFor="headphones"> &nbsp;Headphones</label>
                    <br />

                    <input type="checkbox" name="earbuds" id="earbuds" onClick={() => togglecategoryfilter("Earbuds")} />
                    <label htmlFor="earbuds"> &nbsp;Earbuds</label>
                    <br />
                    <input type="checkbox" name="earphones" id="earphones" onClick={() => togglecategoryfilter("Earphones")} />
                    <label htmlFor="earphones"> &nbsp;Earphones</label>
                    <br />

                    <input type="checkbox" name="neckbands" id="neckbands" onClick={() => togglecategoryfilter("Neckbands")} />
                    <label htmlFor="neckbands"> &nbsp;Neckbands</label>
                    <br />
                    <br />
                    <br />
                    <h6>Price</h6>
                    <label htmlFor="max-price">Max Price:${maxPrice}</label>
                    <input onMouseUp={filterByPriceRange} type="range" name="max-price" id="max-price" min="449" max="19990" value={maxPrice} onChange={handleMaxPriceChange} />
                </div>
            </section>
            <section className="products-2">
                {products.map(product => (
                    <div key={product.id}>
                        <div className='image-container'>
                            <img src={require(`${product.images[0]}`)} alt={product.title} />
                        </div>
                        <section>
                            <p>{renderStars(product.rateCount)}</p>
                            <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "white" }}>
                                <h6 style={{ fontSize: "20px" }}>{product.title}</h6>
                            </Link>
                            <p>{product.info}</p>
                            <hr />
                            <p>${product.finalPrice} <span>${product.originalPrice}</span></p>
                            <button onClick={()=> addtocartitem(product)} id= {`cart-style-${product.id}`} >Add to Cart</button>
                        </section>
                    </div>
                ))}
            </section>
        </div>
        </>
    )
    
}

export default Allproducts;
