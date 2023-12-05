import { Link } from 'react-router-dom';
import './index.scss'
import React from 'react'

function ProductsCard({ data }) {
    console.log(data.title);
    return (
        <div className="home__card">
            <img src={data.imgPath} alt="model" />
            <div className="home__card-description">
                <p>{data.title}</p>
                <button>
                    <Link to={`/products/${data.id}`}>Comprar Look</Link>
                </button>
            </div>
        </div>
    )
}

export default ProductsCard