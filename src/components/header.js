import React, { useState } from "react";
import '../css/header.css'
import logo from '../public/image/logo2.png'
import facebook from '../public/image/facebook.png'
import instagram from '../public/image/instagram.png'
import search from '../public/image/search.png'
import Sub_Nav from "./subnav";
import {BrowserRouter as Route, Switch,Link,Router } from "react-router-dom";
const top= {backgroundColor:"transparent"};
const scrolled = { 
  backgroundColor:"white",
  opacity:"0.9"
};

class Header extends React.Component {
    constructor() {
        super();
        this.state = { style: top };
    
        this.handleScroll = this.handleScroll.bind(this);
      }
      
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = e => {
        if (window.scrollY < 200) {
          this.setState({ style: top });
         
        } else if (window.scrollY > 200) {
          this.setState({ style: scrolled });
          
        }
      }
    render(){
        return (
            
            <header>
            <nav>
               
                <input type="checkbox" id="check"></input>
                <label for="check">
                    <i class="fa fa-bars checkbtn"></i>
                </label>
                
                <div className="row-logo">
                    <img className="img-logo"src={logo} alt=""></img>
                </div>

                <div className="row-header">
                    
                        <div className="container-nav">
                            <ul>
                                <li><Link to="/">Trang chủ</Link></li>
                                
                                  <li className="thucdon"><Link to="/menu">Thực Đơn</Link>
                                  <Sub_Nav className="sub-nav"/>
                                  </li>
                                  
                                
                                <li><Link to="">Tin Tức & Ưu Đãi</Link></li>
                                <li><Link to="/about">Về chúng tôi</Link></li>
                            </ul>
                        </div>
                        <div className="social-media">
                            <div className="container-social-media">
                                <Link to="" className="sc fb"><img src={facebook} alt=""></img></Link>
                                <Link to="" className="sc ins"><img src={instagram} alt=""></img></Link>
                            </div>  
                        </div>
                        <div className="searching-bar">
                        
                            <div className="container-searching-bar">
                                <input type="text" placeholder="Trà sữa..."></input>
                                <span><img className="search-icon"src={search} alt=""></img></span>
                            
                            </div>
                            
                            
                        </div>
                    
                </div>
            </nav>
        </header>
        
        );
    }
}

export default Header;

