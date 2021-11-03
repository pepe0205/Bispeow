
import '../App.css';
import Header from '../components/header.js'
import Footer from '../components/footer.js'
import MenuFirstModule from '../components/Menu/firstmodule';
import MenuModule1 from '../components/Menu/module1';
function Menu() {
  return (
    <div>
      <Header/>
      <MenuFirstModule/>
      <MenuModule1/>
      <Footer/>
      
      
    </div>
  );
}

export default Menu;
