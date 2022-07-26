import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./share/Footer/Footer";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import ResetPass from "./component/ResetPass";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SingleProductDetails from "./component/SingleProductDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-new-account" element={<Signup />} />
        <Route path="/reset-your-password" element={<ResetPass />} />
        <Route path="/book/:bookId" element={<SingleProductDetails />} />
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
