import { useDispatch } from "react-redux"
import Footer from "./footer"
import Header from "./header"
import { useSelector } from "react-redux"
import { deletecart } from "../actions"

function Cart() {

    let cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    const RemoveFromCart = (product) => {
        dispatch(deletecart(product));
    };

    return (
        <>
            <Header />
            { 
            cart.map(product => 
            <div className="cart" key={product.id}>
                <section className="cart-1">
                    <img src={require(`${product.images[0]}`)} alt="" />
                    <div>
                        <h3>{product.title}</h3>
                        <p>{product.finalPrice}<span>{product.originalPrice}</span></p>
                        <div class="counter">
                            <button class="minus">-</button>
                            <div class="value">0</div>
                            <button class="plus">+</button>
                        </div>
                    </div>
                    <button className="delete" onClick={()=>RemoveFromCart(product)}><i class="bi bi-trash3"></i></button>
                </section>
                <section className="cart-2">
                    <h3>Order Summary(1 Item)</h3>
                    <div className="cart-2-sum">
                        <section>
                            <p>Original Price</p>
                            <p>Discount</p>
                            <p>Delivery</p>
                        </section>
                        <section>
                            <p>{product.originalPrice}</p>
                            <p>Discount</p>
                            <p>{product.finalPrice}</p>
                        </section>
                    </div>
                    <hr />
                    <div className="cart-2-sum">
                        <section>
                            <p>Total Price</p>
                        </section>
                        <section>
                            <p>19999</p>
                        </section>
                    </div>
                    <button className="checkout">Checkout</button>
                </section>
            </div>
)}
            <Footer />
        </>
    )
}

export default Cart