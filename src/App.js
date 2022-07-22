import { Routes, } from "react-router-dom";
import './App.css';
import AllProducts from "./component/AllProducts";
import DiscountBanner from "./component/DiscountBanner";
import AllTopProducts from "./component/AllTopProducts";
import Banner from "./component/Banner";
import Header from './component/Header'
import Subscribe from './component/Subscribe'
import Footer from "./share/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <AllProducts></AllProducts>
      <DiscountBanner></DiscountBanner>
      <Routes>

      </Routes>
      <AllTopProducts></AllTopProducts>
      <Routes></Routes>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
