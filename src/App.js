import { Routes, } from "react-router-dom";
import './App.css';
import Banner from "./component/Banner";
import Header from './component/Header'
import Footer from "./share/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
          
      </Routes>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

export default App;
