import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../css/home/product.css'

import productCard from "../../public/data.json"
function ProList() {
    
    const ListItems = productCard.map((items) =>
        <div className="card" key={items.id}>
            <div className="card-img">
                <img src={items.thumb}></img>
                <Link to={`/detail/${items.id}`}><button>Xem</button></Link>
            </div>
            <div className="card-content">
                <h2>{items.product_name}</h2>
            </div>
        </div>
    )
    return (
        <div className="product-list">
            {ListItems}
        </div>
    )
}
class ProductList extends React.Component {

    render() {
        return (
            <div className="main-product">

                <div className="product-inner">
                    <h1> sản phẩm đặc trưng</h1>
                    <ProList/>

                </div>
            </div>


        );

    }
}

export default ProductList;

