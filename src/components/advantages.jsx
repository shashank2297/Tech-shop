import "../css/App.css"

function Advantages(){
    return(
        <div className="advantages">
            <h2>Our Advantages</h2>
            <div className="advantages-1" id="advantage-1">
                <div>
                    <span><i className="bi bi-truck"></i></span>
                    <section>
                        <p>Express Delivery</p>
                        <p>Ships in 24 Hours</p>
                    </section>
                </div>
                <div>
                <span><i className="bi bi-shield"></i></span>
                    <section>
                        <p>Brand Warranty</p>
                        <p>100% Original Products</p>
                    </section>
                </div>
                <div>
                <span><i className="bi bi-cash-stack"></i></span>
                    <section>
                        <p>Exciting Deals</p>
                        <p>On all prepaid offers</p>
                    </section>
                </div>
                <div>
                <span><i className="bi bi-credit-card-fill"></i></span>
                    <section>
                        <p>Secure Payments</p>
                        <p>SSL/Secure Certificate</p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Advantages