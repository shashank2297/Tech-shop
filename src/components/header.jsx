import '../css/App.css';

function Header() {
    return (
        <div className='techhdr'>
            <h1>Tech Shop</h1>
            <div>
                <ul>
                    <li><i className="bi bi-search"></i></li>
                    <li><i className="bi bi-cart"></i></li>
                    <li><i className="bi bi-person"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Header