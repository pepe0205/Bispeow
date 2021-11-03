import React, { useState } from "react";
import {BrowserRouter as Route, Switch,Link,Router } from "react-router-dom";
import '../css/subnav.css'

class Sub_Nav extends React.Component {

    render() {
        return (
            <div className="sub-nav">
             
                <div className="subnav-inner">
                    <Link to="">MENU HIỆN TẠI</Link>
                    <Link to="">MÓN MỚI</Link>
                    <Link to="">MÓN ƯU ĐÃI</Link>
                </div>
            </div>


        );

    }
}

export default Sub_Nav;

