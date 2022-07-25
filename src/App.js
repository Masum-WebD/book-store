import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./share/Footer/Footer";
import Home from "./component/Home";
import Login from "./component/Login";
import SingleProductDetails from "./component/SingleProductDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<SingleProductDetails />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
