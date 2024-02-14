import { useParams } from "react-router-dom";
import productsdata from "../Assets/productsData";
import '../css/external-css.css';

function Productsinfo() {

    const { productId } = useParams();

    const product = productsdata.find(product => product.id === parseInt(productId));

    return (
        <>
                 <div className="productsinfo" key={product.id}>
                        <section className="productsinfo-1">
                            <img src={require(`${product.images[0]}`)} alt="" />
                            <img src={require(`${product.images[1]}`)} alt="" />
                            <img src={require(`${product.images[2]}`)} alt="" />
                            <img src={require(`${product.images[3]}`)} alt="" />
                        </section>
                        <section>
                            <img src={require(`${product.images[0]}`)} alt="" />
                        </section>
                        <section className="productsinfo-3">
                            <h6>{product.title}</h6>
                            <p>{product.info}</p>
                            <p>{product.rateCount} <span>{product.ratings}</span></p>
                            <hr />
                            <div>
                                <section>
                                    <h6>{product.finalPrice} <span>{product.originalPrice}</span></h6>
                                    <p>You save: discount</p>
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
        </>
    );
}

export default Productsinfo;
