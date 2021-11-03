import React, { useState } from "react";

import '../../css/AboutUs/module2.css'
import icon1 from '../../public/image/AboutUs/icon1.png'
import icon2 from '../../public/image/AboutUs/icon2.png'
import icon3 from '../../public/image/AboutUs/icon3.png'
class Module1 extends React.Component {

    render() {
        return (
            <div className="main-module2">
                <h1>GIÁ TRỊ CỐT LÕI</h1>
                <div className="module2-inner">
                    
                    <div class="module2-item">
                      <div className="circle-img icon1"></div>
                      <div className="item-content">
                          <h2>1. Chất lượng hàng đầu</h2>
                          <p>An toàn, vệ sinh và ngon miệng. Việc sử dụng các nguyên liệu an toàn, tự nhiên và vệ sinh là ưu tiên hàng đầu của Gong Cha. Hương vị tuyệt hảo của các món thức uống là mục đích quan trọng tiếp theo mà chúng tôi muốn hướng đến.</p>
                      </div>
                    </div>

                    <div className="module2-item">
                    <div className="circle-img icon2"></div>
                      <h2>2. Dịch vụ thân thiện & chuyên nghiệp</h2>
                      <p>Gong Cha mong muốn làm hài lòng khách hàng tốt nhất với tác phong phục vụ chuyên nghiệp và thân thiện, luôn lắng nghe những đóng góp của khách hàng. </p>
                    </div>

                    <div className="module2-item">
                       
                    <div className="circle-img icon3"></div>
                      <h2>3. Thương hiệu đáng tin cậy</h2>
                      <p>Dựa trên hai nền tảng cốt lõi là Chất Lượng và Dịch Vụ, Gong Cha luôn nỗ lực xây dựng và duy trì hình ảnh thương hiệu đáng tin cậy trong mắt khách hàng. </p>
                    </div>
                </div>
            </div>


        );

    }
}

export default Module1;

