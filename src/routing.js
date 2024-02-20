import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./components/homepage"
import Allproducts from "./components/allproducts"
import Productsinfo from "./components/productsinfo"
import Cart from "./components/cart"

function Routing() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Homepage />} />
                    <Route exact path="/products" element={<Allproducts />} />
                    <Route exact path="/products/:productId" element={<Productsinfo />} />
                    <Route exact path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routing