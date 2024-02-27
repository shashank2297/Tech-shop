import { useState } from "react"
import "../css/external-css.css"
import { Link } from "react-router-dom"
import productsData from "../Assets/productsData"
import { useSelector } from "react-redux"

function Header() {

    const cartcount = useSelector( state => state.cartcount )

    const [searchbar, setsearchbar] = useState(false)
    const [login, setlogin] = useState(false)
    const [signup, setsignup] = useState(false)

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length === 0) {
            setSearchQuery("")
            setSearchResults([]);
        } else {
            setSearchQuery(query);
            const results = productsData.filter(product =>
                product.title.toLowerCase().includes(query)
            );
            setSearchResults(results);
        }
    }

    function togglesearch() {
        setsearchbar(true)
        setSearchResults([])
        setlogin(false)
        setsignup(false)
    }

    function togglelogin() {
        setlogin(true)
        setsearchbar(false)
        setSearchResults([])
        setsignup(false)
    }

    function togglesignup() {
        setlogin(false)
        setsearchbar(false)
        setSearchResults([])
        setsignup(true)
    }

    function togglecross() {
        setlogin(false)
        setsearchbar(false)
        setSearchResults([])
        setsignup(false)
    }

    return (
        <div className="hdr">
            <div className='techhdr'>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}><h1>Tech Shop</h1></Link>
                <div>
                    <ul>
                        <li><i className="bi bi-search" onClick={togglesearch}></i></li>
                        <Link to="/cart" style={{ color: "white" }}><li><i className="bi bi-cart" ></i><sub>{cartcount}</sub></li></Link>
                        <li><i className="bi bi-person" onClick={togglelogin}></i></li>
                    </ul>
                </div>
            </div>

            {
                searchbar && (
                    <div className="search">
                        <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearch} />
                        <span onClick={togglecross}>x</span>
                    </div>
                )
            }

            {searchResults.length > 0 && (
                <center>
                    <div className="search-results">
                        <ul style={{ listStyle: "none" }}>
                            {searchResults.map(product => (
                                <li key={product.id}>
                                    <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "white" }}>{product.title}</Link>
                                    <hr />
                                </li>
                            ))}
                        </ul>
                        <br />
                    </div>
                </center>
            )}

            {
                login && (
                    <center className="center">
                        <button className="cross" onClick={togglecross}>x</button>
                        <div className="loginpage">
                            <h2>Login</h2>
                            <p>New to tech shop? <span style= {{textDecoration: "underline"}} onClick={togglesignup}>Create an Account</span></p>
                            <input type="email" placeholder="email" />
                            <br />
                            <input type="password" placeholder="password" />
                            <br />

                            <button>Login</button>

                            <p>-------  or Login with  ---------</p>

                            <div>
                                <button>Facebook</button>
                                <button>Google</button>
                                <button>Twitter</button>
                            </div>
                        </div>
                    </center>
                )
            }
            {
                signup && (
                    <center className="center">
                        <button className="cross" onClick={togglecross}>x</button>
                        <div className="loginpage">
                            <h2>Sign Up</h2>
                            <p>Already have an Account? <span style= {{textDecoration: "underline"}} onClick={togglelogin}>Login</span></p>
                            <input type="text" placeholder="Username" />
                            <br />
                            <input type="email" placeholder="Email" />
                            <br />
                            <input type="password" placeholder="Password" />
                            <br />
                            <input type="password" placeholder="Confirm Password" />
                            <br />

                            <button>Sign Up</button>

                            <p>-------  or Sign Up with  ---------</p>

                            <div>
                                <button>Facebook</button>
                                <button>Google</button>
                                <button>Twitter</button>
                            </div>
                        </div>
                    </center>
                )
            }
        </div>
    )
}

export default Header