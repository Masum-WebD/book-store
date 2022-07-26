import { Route, Routes, } from "react-router-dom";
import './App.css';
import Header from './component/Header'
import Footer from "./share/Footer/Footer";
import Home from "./component/Home";
import Login from "./component/Login";
import Contact from "./component/Contact/Contact";
import Signup from "./component/Signup";
import ResetPass from "./component/ResetPass";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import About from "./component/Contact/About/About";
import TermPolicy from "./component/Contact/TermCondition/TermPolicy";


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/term" element={<TermPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-new-account" element={<Signup />} />
        <Route path="/reset-your-password" element={<ResetPass />} />
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
