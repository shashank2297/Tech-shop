import { useDispatch } from "react-redux"
import Footer from "./footer"
import Header from "./header"
import { useSelector } from "react-redux"
import { deletecart } from "../actions"
import { increaseQuantity, decreaseQuantity } from "../actions"
import { useEffect } from "react"

function Cart() {

    const dispatch = useDispatch();

    let cart = useSelector(state => state.cart)

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            dispatch({ type: "SET_CART", payload: JSON.parse(storedCart) });
        }
    }, [dispatch]);

    const RemoveFromCart = (product) => {
        dispatch(deletecart(product));
    };

    const increaseItemCount = (product) => {
        dispatch(increaseQuantity(product));
    };

    const decreaseItemCount = (product) => {
        dispatch(decreaseQuantity(product));
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const calculateItemfinalPrice = (product) => {
        return product.finalPrice * product.quantity;
    };

    const calculateItemorPrice = (product) => {
        return product.originalPrice * product.quantity;
    };

    const discountprice = (product) => {
        let discount = (product.originalPrice * product.quantity) - (product.finalPrice * product.quantity);
        return discount
    }

    return (
        <>
            <Header />
            {cart.length === 0 ? (
                <div className="cartempty">Cart is empty</div>
            ) : (
                <div className="cart">
                    {cart.map(product => (
                        <div>
                            <section className="cart-1" key={product.id}>
                                <img src={require(`${product.images[0]}`)} alt="" />
                                <div>
                                    <h3>{product.title}</h3>
                                    <p>${calculateItemfinalPrice(product)} <span style={{ textDecoration: "line-through" }}>${calculateItemorPrice(product)}</span></p>
                                    <div className="counter">
                                        <button className="minus" onClick={() => decreaseItemCount(product)}>-</button>
                                        <div className="value">{product.quantity}</div>
                                        <button className="plus" onClick={() => increaseItemCount(product)}>+</button>
                                    </div>
                                    <br />
                                    <br />
                                    <div>
                                        <p>Original Price: ${calculateItemorPrice(product)}</p>
                                        <p>Discount: ${discountprice(product)}</p>
                                        <hr />
                                        <p>Final Price: ${calculateItemfinalPrice(product)}</p>
                                    </div>
                                </div>
                                <button className="delete" onClick={() => RemoveFromCart(product)}><i className="bi bi-trash3"></i></button>
                            </section>
                        </div>
                    ))}
                    <section className="cart-2">
                        <h3>Order Summary ({cart.reduce((total, product) => total + product.quantity, 0)} Item)</h3>
                        <div className="cart-2-sum">
                            <section>
                                <p>Original Price</p>
                                <p>Discount</p>
                                <p>Delivery</p>
                            </section>
                            <section>
                                <p>${cart.reduce((total, product) => total + calculateItemorPrice(product), 0)}</p>
                                <p style={{ color: "green" }}>${cart.reduce((total, product) => total + discountprice(product), 0)}</p>
                                <p style={{ color: "green" }}>Free</p>
                            </section>
                        </div>
                        <hr />
                        <div className="cart-2-sum">
                            <section>
                                <p>Total Price</p>
                            </section>
                            <section>
                                <p>${cart.reduce((total, product) => total + calculateItemfinalPrice(product), 0)}</p>
                            </section>
                        </div>
                        <button className="checkout">Checkout</button>
                    </section>
                </div>
            )}
            <Footer />
        </>
    );
}

export default Cart;
