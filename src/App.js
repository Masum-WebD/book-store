import { Routes, } from "react-router-dom";
import './App.css';
import AllProducts from "./component/AllProducts";
import AllTopProducts from "./component/AllTopProducts";
import Header from './component/Header'
import Footer from "./share/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllProducts></AllProducts>
      <AllTopProducts></AllTopProducts>
      <Routes>
          
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
