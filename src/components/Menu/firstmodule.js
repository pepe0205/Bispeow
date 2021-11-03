import React, { useState } from "react";

import '../../css/Menu/firstmodule.css'


class MenuFirstModule extends React.Component {

    render() {
        return (
            <div className="main-fistmodule">
                <div className="firstmodule-inner">
                    <img src="http://gongcha.com.vn/wp-content/uploads/2018/01/bg-qua-trinh-phat-trien.jpg" className="bg-img"></img>
                    <div className="first-module-inner-content">
                        <h1>THỰC ĐƠN</h1>
                        <p>Giới thiệu thức uống hấp dẫn và đa dạng từ Bispeow</p>
                    </div>
                </div>
            </div>


        );

    }
}

export default MenuFirstModule;

