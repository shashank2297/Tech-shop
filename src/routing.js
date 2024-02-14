import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./components/homepage"
import Products from "./components/products"
import Productsinfo from "./components/productsinfo"

function Routing(){
    return(
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route exact path="/products" element={<Products />}/>
        <Route exact path="/products/:productId" element={<Productsinfo />} />
    </Routes>
    </BrowserRouter>
    )
}

export default Routing