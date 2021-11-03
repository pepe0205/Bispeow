import React, { useState } from "react";

import '../../css/home/slider.css'
import Slider from './slider.js'
import img1 from '../../public/image/Logo.png'
class AboutDrink extends React.Component {

    render() {
        return (
            <div className="main-drink">
             
                <div className="store-inner">
                    <div className="col-drink-left">
                        <h1>Thức uống</h1>
                         <p>An toàn, vệ sinh và ngon miệng. Việc sử dụng các nguyên liệu an toàn, tự nhiên và vệ sinh là ưu tiên hàng đầu của Bispeow. Hương vị tuyệt hảo của các món thức uống là mục đích quan trọng tiếp theo mà chúng tôi muốn hướng đến.</p>
                         <img src={img1}></img>
                    </div>
                    <div className="col-about-right">
                        <Slider/>
                    </div>
                </div>
            </div>


        );

    }
}

export default AboutDrink;

