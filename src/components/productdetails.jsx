import "../css/external-css.css"
import productsData from "../Assets/productsData"
import { useState } from "react";
import { useParams } from "react-router-dom";
import reviewsdata from "../Assets/reviewsData"

function Productdetails() {
    const { productId } = useParams();

    const product = productsData.find(product => product.id === parseInt(productId));

    const [specsdata, setspecsdata] = useState(true)
    const [overviewdata, setoverviewdata] = useState(false)
    const [reviews, setreviews] = useState(false)

    function togglespecs() {
        setspecsdata(true)
        setoverviewdata(false)
        setreviews(false)
    }

    function toggleoverview() {
        setoverviewdata(true)
        setspecsdata(false)
        setreviews(false)
    }

    function togglereviews() {
        setreviews(true)
        setspecsdata(false)
        setoverviewdata(false)
    }

    function renderStars(rateCount) {
        const stars = [];
        for (let i = 0; i < rateCount; i++) {
            stars.push(<i key={i} className="bi bi-star-fill"></i>);
        }
        return stars;
    }

    return (
        <div className="prddetails">
            <section className="details">
                <p onClick={togglespecs}>Specifications</p>
                <p onClick={toggleoverview}>Overview</p>
                <p onClick={togglereviews}>Reviews</p>
            </section>
            {specsdata && (
                <section className="specs">
                    <div>
                        <p>Brand</p>
                        <p>Model</p>
                        <p>Generic Name</p>
                        <p>Headphone Type</p>
                        <p>Connectivity</p>
                        <p>Microphone</p>
                    </div>
                    <div>
                        <p>{product.brand}</p>
                        <p>{product.title}</p>
                        <p>{product.category}</p>
                        <p>{product.type}</p>
                        <p>{product.connectivity}</p>
                        <p>Yes</p>
                    </div>
                </section>
            )
            }
            {
                overviewdata && (
                    <div style={{ padding: "20px" }}>
                        <p>The <span style={{ color: "red", fontSize: "18px" }}>{product.title} {product.info}</span> provides with a fabulous sound Quality</p>
                        <ul>
                            <li>Sound Tuned to Perfection</li>
                            <li>Comfortable to wear</li>
                            <li>Long hours Playback time</li>
                        </ul>
                        <p>The <span style={{ color: "red", fontSize: "18px" }}>{product.title} {product.info}</span> provides with a fabulous music experience by providing you with the awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing music quality and these Headphones giving you a truly immersive sound experience it blends with expectional sound quality and a range of smart features for an unrivaled listening experience</p>
                    </div>
                )
            }
            {
                reviews && (
                    reviewsdata.map(data => (
                        <div className="reviews" key={data.id}>
                            <section>
                                <p><i className="bi bi-person-circle"></i></p>
                                <div>
                                    <p>{data.name}</p>
                                    <p>{renderStars(data.rateCount)}  |  <span>{data.date}</span></p>
                                </div>
                            </section>
                            <p>{data.review}</p>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default Productdetails