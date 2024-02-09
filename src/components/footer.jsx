import '../css/App.css'

function Footer() {

    return (
        <div className='techftr'>
            <div>
                <h3>Tech Shop</h3>
                <p>Subscribe to our Email alerts to receive early discount offers and new products info</p>
                <input type="text" placeholder='Email address*' />
                <br />
                <button>Subscribe</button>
            </div>
            <div className='techftr-2'>
                <div>
                    <h4>Help</h4>
                    <ul>
                        <li>FAQ's</li>
                        <li>Track Order</li>
                        <li>Cancel Order</li>
                        <li>Return Order</li>
                        <li>Warranty Info</li>
                    </ul>
                </div>
                <div>
                    <h4>Policies</h4>
                    <ul>
                        <li>Return Policy</li>
                        <li>Security</li>
                        <li>Sitemap</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Service Centers</li>
                        <li>Careers</li>
                        <li>Affiliates</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer