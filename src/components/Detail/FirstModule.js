import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams} from "react-router-dom";
import '../../css/Detail/detail-module.css'


import {stock} from "./data.js"

function ProList() {
    const { idParam } = useParams();
    

    
    const ListItems = stock.filter(stock => stock.id == idParam).map((items) =>{
           
            return(
                
            <div className="card-detail" key={items.id}>
                <h2>{items.product_name}</h2>
                
                <div className="card-contain">
                    <div className="card-thumb">
                        <img src={items.thumb}></img>
                    </div>
                    <div className="card-right">
                        <div className="drink-des">{items.des}</div>
                        <button className="btnOrder">ĐẶT MUA NGAY</button>
                        <div className="drink-sugar">
                            <p>Đường: </p>
                            <button>50%</button>
                            <button>100%</button>
                        </div>
                        <div className="price">Giá : <span>{items.price}</span></div>
                    </div>
                </div>
            </div>
            )
           
            
        
        }
       
    )
    return (
        <div className="product-list">
            {ListItems}
        </div>
    )
}
class DetailFistModule extends React.Component {
    render() {

        return (
            <div className="main-fistmodule">
                <div className="firstmodule-inner">
                    <ProList/>
                </div>
            </div>


        );

    }
}

export default DetailFistModule;

