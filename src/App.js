
import './App.css';
/*import Header from './components/header.js'
import Footer from './components/footer.js'
import About from './components/about.js'
import Slider from './components/aboutdrink.js';*/

import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/home.js'
import AboutStore from './pages/about.js'
import Menu from './pages/menu.js'
import Detail from './pages/detail.js'
function App() {
  return (
    <Router>
    <div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about"  component={AboutStore}></Route>
          <Route path="/menu"  component={Menu}></Route>
          <Route path="/detail/:idParam"  component={Detail}></Route>
    </div>
    </Router>
  );
}

export default App;
/*     <Header/>
      <Slider/>
      <About/>
      <Footer/>*/