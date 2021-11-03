import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../css/Menu/module1.css'
import product_Card from "../../public/data.json";
function ProList() {
    const ListItems = product_Card.map((items) =>
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



class MenuModule1 extends React.Component {

    render() {
        return (
            <div className="main-module1">
                <div className="module1-inner">
                    <h1>THỰC ĐƠN HIỆN TẠI</h1>
                    <ProList />

                </div>
            </div>


        );

    }
}

export default MenuModule1;

