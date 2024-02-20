import { useParams } from "react-router-dom";
import productsdata from "../Assets/productsData";
import '../css/external-css.css';
import Productdetails from "./productdetails"
import Advantages from "./advantages"
import Footer from "./footer"

function Productsinfo() {

    const { productId } = useParams();

    const product = productsdata.find(product => product.id === parseInt(productId));

    function renderStars(rateCount) {
        const stars = [];
        for (let i = 0; i < rateCount; i++) {
            stars.push(<i key={i} className="bi bi-star-fill"></i>);
        }
        return stars;
    }

    function discountcalc(finalpr, originalpr) {
        let discount = originalpr - finalpr
        let discountper = (discount / originalpr) * 100

        return discountper
    }

    function renderimages(index) {
        document.getElementById('mainimg').src = require(`${product.images[index]}`);
    }

    return (
        <>
            <div className="productsinfo" key={product.id}>
                <section className="productsinfo-1">
                    <img onClick={() => renderimages(0)} src={require(`${product.images[0]}`)} alt="" />
                    <img onClick={() => renderimages(1)} src={require(`${product.images[1]}`)} alt="" />
                    <img onClick={() => renderimages(2)} src={require(`${product.images[2]}`)} alt="" />
                    <img onClick={() => renderimages(3)} src={require(`${product.images[3]}`)} alt="" />
                </section>
                <section>
                    <img style={{ padding: "10px" }} id="mainimg" src={require(`${product.images[0]}`)} alt="" />
                </section>
                <section className="productsinfo-3">
                    <h6>{product.title}</h6>
                    <p>{product.info}</p>
                    <p>{renderStars(product.rateCount)} <span>{product.ratings} Ratings</span></p>
                    <hr />
                    <div>
                        <section>
                            <h6>${product.finalPrice} <span style={{ textDecoration: "line-through" }}>${product.originalPrice}</span></h6>
                            <p style={{ color: "green" }}>You save: {discountcalc(product.finalPrice, product.originalPrice).toFixed(2)}%</p>
                            <p>(Inclusive of all Taxes)</p>
                        </section>
                        <section>
                            <button>In: Stock</button>
                        </section>
                    </div>
                    <hr />
                    <p>Offers and Discounts</p>
                    <div>
                        <p className="border">No Cost EMI on credit card</p>
                        <p className="border">Pay Later and Avail Cashback</p>
                    </div>
                    <hr />
                    <button id="cart">Add to Cart</button>
                </section>
            </div>
            <Productdetails></Productdetails>
            <Advantages></Advantages>
            <Footer></Footer>
        </>
    );
}

export default Productsinfo;
