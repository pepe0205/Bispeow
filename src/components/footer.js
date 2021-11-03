import React, { useState } from "react";
import '../css/footer.css'
import logo from '../public/image/Logo.png'
import email from '../public/image/email.png'
import phone from '../public/image/phone.png'
import home from '../public/image/home.png'
import {BrowserRouter as Route, Switch,Link,Router } from "react-router-dom";





class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className="main-footer">
                    
                        <div className="col-left">
                            <img src={logo}></img>
                        </div>
                        <div className="col-right">
                            <ul>
                                <li><img src={phone}></img><span><Link to="">1234567890</Link></span></li>
                                <li><img src={home}></img><Link to="">abc Bờ Bao Tân Thắng Quận Tân Phú</Link></li>
                                <li><img src={email}></img><Link to="">info@gmail.com</Link></li>
                            </ul>

                        </div>

                </div>
            </footer>
        );

    }
}

export default Footer;

