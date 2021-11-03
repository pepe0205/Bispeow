
import '../App.css';
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import About from '../components/home/about.js'
import Slider from '../components/home/aboutdrink.js';
import ProductList from '../components/home/product-list';
function Home() {
  return (
    <div>
      <Header/>
      <Slider/>
      <About/>
      <ProductList/>
      <Footer/>
      
      
    </div>
  );
}

export default Home;
