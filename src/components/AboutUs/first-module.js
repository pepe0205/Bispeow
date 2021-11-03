import React, { useState } from "react";

import '../../css/AboutUs/first-module.css'


class FirstModule extends React.Component {

    render() {
        return (
            <div className="main-fistmodule">
                <div className="firstmodule-inner">
                    <img src="http://gongcha.com.vn/wp-content/uploads/2018/01/bg-qua-trinh-phat-trien.jpg" className="bg-img"></img>
                    <div className="first-module-inner-content">
                        <h1>GIỚI THIỆU</h1>
                        <p>Good Tea - Great Taste</p>
                    </div>
                </div>
            </div>


        );

    }
}

export default FirstModule;

