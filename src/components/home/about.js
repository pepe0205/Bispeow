import React, { useState } from "react";

import '../../css/home/about.css'
import img1 from '../../public/image/Logo.png'






class About extends React.Component {

    render() {
        return (
            <div className="main-about">
               
                <div className="about-inner">
                    <div className="col-about-left">
                        <div className="col-left-img"></div>
                    </div>
                    <div className="col-about-right">
                        <h1>Về cửa hàng</h1>
                         <p>Trà sữa với tâm hồn và tinh thần Việt tạo nên phong cách giới trẻ Việt. – Đó chính là nhiệm vụ mà Bispeow luôn muốn hoàn thành và nhất định phải thành công với con đường đã chọn.</p>
                         <img src={img1}></img>
                    </div>
                </div>
            </div>


        );

    }
}

export default About;

