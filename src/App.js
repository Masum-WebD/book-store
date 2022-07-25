import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./share/Footer/Footer";
import Home from "./component/Home";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard/Dashboard";
import MyProfile from "./component/Dashboard/MyProfile";
import MyOrders from "./component/Dashboard/MyOrders";
import User from "./component/Dashboard/User";
import AddProducts from "./component/Dashboard/AddProducts";
import ManageAllOrder from "./component/Dashboard/ManageAllOrder";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="order" element={<MyOrders></MyOrders>}></Route>

          <Route path="user" element={<User></User>}></Route>
          <Route path="user" element={<User></User>}></Route>
          <Route
            path="manageOrders"
            element={<ManageAllOrder></ManageAllOrder>}
          ></Route>
          <Route
            path="addProduct"
            element={<AddProducts></AddProducts>}
          ></Route>
        </Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
