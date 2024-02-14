import { useState } from "react"
import "../css/external-css.css"

function Header() {

    const [searchbar, setsearchbar] = useState(false)
    const [login, setlogin] = useState(false)

    function togglesearch() {
        setsearchbar(!searchbar)
    }

    function togglelogin() {
        setlogin(!login)

    }

    return (
        <>
            <div className='techhdr'>
                <h1>Tech Shop</h1>
                <div>
                    <ul>
                        <li><i className="bi bi-search" onClick={togglesearch}></i></li>
                        <li><i className="bi bi-cart"></i></li>
                        <li><i className="bi bi-person" onClick={togglelogin}></i></li>
                    </ul>
                </div>
            </div>

            {
                searchbar && (
                    <div className="search">
                        <input type="text" placeholder="Search" />
                        <span onClick={togglesearch}>x</span>
                    </div>
                )
            }

            {
                login && (
                    <center className="center">
                        <button className="cross" onClick={togglelogin}>x</button>
                        <div className="loginpage">
                            <h2>Login</h2>
                            <p>New to tech shop? <span>Create an Account</span></p>

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
        </>
    )
}

export default Header