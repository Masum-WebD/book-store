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
import Dashboard from "./component/Dashboard/Dashboard";
import User from "./component/Dashboard/User";
import AddProducts from "./component/Dashboard/AddProducts";
import ManageAllOrder from "./component/Dashboard/ManageAllOrder";
import MyProfile from "./component/Dashboard/MyProfile";
import MyOrders from "./component/Dashboard/MyOrders";
import Payment from "./component/Dashboard/Payment";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MyProfile />}></Route>
          <Route path="user" element={<User></User>}></Route>
          <Route path="order" element={<MyOrders />}></Route>
          <Route path="manageOrders" element={<ManageAllOrder />}></Route>
          <Route path="addProduct" element={<AddProducts />}></Route>
          <Route path="payment" element={<Payment/>}></Route>
        </Route>
        <Route path="/create-new-account" element={<Signup />} />
        <Route path="/reset-your-password" element={<ResetPass />} />
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
